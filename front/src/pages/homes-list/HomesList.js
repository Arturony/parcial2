import React, { useEffect, useState } from "react";
import "./HomesList.scss";
import Card from "../../components/card/Card.js";
import { getHomes } from "../../services/utils";
import {FormattedMessage} from 'react-intl';

export const HomesList = () => {
  const [homes, setHomes] = useState([]);

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

  useEffect(() => 
  {
    if(!navigator.onLine){
      if(localStorage.getItem("homes") === null) 
      {
          setHomes("Loading...")
      } 
      else 
      {
          setHomes(JSON.parse(localStorage.getItem("homes")));
      }
      
    } 
    else 
    {
      getHomes().then((data) => 
      {
        setHomes(data);
        localStorage.setItem("homes", JSON.stringify(data));
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
      <FormattedMessage id="spaces"
      defaultMessage="My Spaces"/>
      </h1>

      <div className="row">
        {homes && homes.map((home)=> 
          (home.isActive===true ? (<Card home={home}/>) : (<p/>)))
        }
      </div>  

    </div>
  );
};
