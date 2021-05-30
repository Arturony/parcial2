import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import "./RoomsList.scss";
import CardRoom from "../../components/card/CardRoom.js";
import TableCell from "../../components/TableCell/TableCell.js";
import PieGraph from "../../components/Graph/PieGraph";
import { getHomeById, getDevices} from "../../services/utils";
import {FormattedMessage} from 'react-intl';

export const RoomsList = () => 
{
    const {id} = useParams();
    var z = 0;
    const [rooms, setRooms] = useState([]);

    function setOnline()
  {
    if(!navigator.onLine)
    {
      return " offline";
    }
    else
    {
      return " online";
    }
  }

  useEffect(() => { 
    if(!navigator.onLine)
        {
          if(localStorage.getItem("rooms" + id) === null) 
          {
            setRooms("Loading...")
          } 
          else 
          {
            setRooms(JSON.parse(localStorage.getItem("rooms" + id)));
          }

        } 
        else 
        {
          getHomeById(id).then((data) => 
          {
              setRooms(data);
              localStorage.setItem("rooms" + id, JSON.stringify(data));
          });

        } 
  }, []);  

  return (
    <div className="container home">

      <div className="online-tooltip">
        <FormattedMessage id="online"
                    defaultMessage="You are "/>
                    {setOnline()}
      </div>

      <h1>
      <FormattedMessage id="room"
      defaultMessage="My Rooms"/>
      </h1>
      
      <div className="row">
            <div className="col-md-6">
                <div className="row">
                    {rooms.rooms && rooms.rooms.map((room)=> 
                    (<CardRoom room={room}/>)
                    )}
                </div>      
            </div>  
            <div className="col-md-6">
                <table class="table">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID</th>
                        <th scope="col"><FormattedMessage id="device"
                        defaultMessage="Device"/></th>
                        <th scope="col"><FormattedMessage id="value"
                        defaultMessage="Value"/></th>
                        </tr>
                    </thead>
                    <tbody>
                    {rooms.rooms && rooms.rooms.map((room)=> room.devices.map((device) => 
                    ( room.name ===  getDevices() ?
                        (<TableCell device={device} z={z++}/>): (null)))
                    )}
                    </tbody>
                </table>
            </div>
      </div>

      <h2> <FormattedMessage id="room"
                    defaultMessage="Power Usage (KwH) - Today"/> </h2>
      <div id="canvas">   
        {rooms.rooms && <PieGraph data={rooms.rooms}/>}
      </div>


      
    </div>
  );
};
