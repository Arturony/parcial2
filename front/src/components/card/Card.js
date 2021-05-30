import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.scss";

class Card extends Component
{
  state = this.props.home;
  render ()
  {
    return (
      <div className="card card-home">
        <Link className="card-home-img-link" to={`/homes/${this.state.id}`}>
          {this.state.type === "house" ? (
            <img src="/home.png" className="card-home-img-top" alt="Icon Home" />
          ) : (
            <img
              src="/loft.png"
              className="card-home-img-top loft"
              alt="Icon Loft"
            />
          )}
        </Link>
        <div className="card-home-body">
          <div className="card-home-body-description">
            <h5 className="card-home-title">{this.state.name}</h5>
            <p className="card-home-text">{this.state.address}</p>
          </div>
        </div>
      </div>
    );
  } 
}

export default Card;


