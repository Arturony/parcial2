import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import * as d3 from "d3";
import "./Pie.scss";
import {FormattedMessage} from 'react-intl';


class Card extends Component
{
  state = this.props.data;

   createGraph()
    {
        d3.select("#canvas").selectAll("svg").remove();
        // set the dimensions and margins of the graph
        var width = 450
        let height = 450
        let margin = 40

        // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
        var radius = Math.min(width, height) / 2 - margin
        var innerRadius = 0;

        var arc = d3.arc()
        .innerRadius(innerRadius)
        .outerRadius(radius);

        // append the svg object to the div called 'my_dataviz'
        var svg = d3.select("#canvas")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

        // set the color scale
        var colors = ["#21094e", "#511281", "#4ca1a3", "#a5e1ad"];

        // Compute the position of each group on the pie:
        
        var pie = d3.pie()
        .value(function(d) {return d.powerUsage.value; });
        var data_ready = pie(this.state)

        // Set up groups
        var arcs = svg.selectAll("g.arc")
        .data(data_ready)
        .enter()
        .append("g")
        .attr("class", "arc")
        .attr("transform", "translate(" + radius + "," + radius + ")")
        .on("mouseover", function (event, d) {
        d3.select("#tooltip")
            .style("left", event.pageX + "px")
            .style("top", event.pageY + "px")
            .style("opacity", 1)
            .select("#value")
            .text(d.data.name + " : " + d.value+"KwH");
        })
        .on("mouseout", function () {
        // Hide the tooltip
        d3.select("#tooltip")
            .style("opacity", 0);;
        });

        // Draw arc paths
        arcs.append("path")
        .attr('fill', function(d, i) 
        { 
            return colors[i]; 
          })
        .attr("d", arc);

        // Labels
        arcs.append("text")
        .attr("transform", function (d) {
        return "translate(" + arc.centroid(d) + ")";
        })
        .attr("text-anchor", "middle")
        .text(/*function (d) {
        return d.value + " " + d.data.name;
        }*/);
    };

  render ()
  {
    return (
        <div>
            <div id="canvas" className="row">
                <div id="tooltip" class="hidden" className="tooltip">
                        <FormattedMessage id="energy"
                            defaultMessage="Energy Consumption"/>
                        <p><span id="value">100</span></p>
                </div>
                    
                {this.createGraph()}
            </div>
        </div>
    );
  } 
}

export default Card;