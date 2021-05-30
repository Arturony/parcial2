import React from "react";
import { Component } from "react";
import { Link } from "react-router-dom";
import "./CardRoom.scss";
import { getHomes, setDevices } from "../../services/utils";

class CardRoom extends Component
{
  state = this.props.room;

  replaces(string)
  {
      var newStr = string.replace(/ /g, "_");
      return newStr;
  }

  render ()
  {
    return (
      <div className="card card-room">
          <div className="card-room-body">
          <div className="card-home-body-description">
            <h5 className="card-home-title">{this.state.name}</h5>
          </div>
        </div>
        <Link className="card-room-img-link" onClick={setDevices.bind(this, this.state.name)} to={`/homes/${this.state.homeId}/${this.replaces(this.state.name)}`}>
          {this.state.type === "kitcken" ? (
            <img src="/kitchen.png" className="card-home-img-top" alt="Icon kitchen" />
          ) : (
            <img
              src="/living-room.png"
              className="card-home-img-top living-room"
              alt="Icon living room"
            />
          )}
        </Link> 
      </div>
    );
  } 
}



export default CardRoom;
