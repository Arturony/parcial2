import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { FormattedMessage } from "react-intl";
import {onChangeLanguage} from "../../services/utils";

export const Navbar = ({ setLanguage }) => 
{

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <FormattedMessage id="smart" 
          defaultMessage="Smart House"/>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <div className="navbar-nav-links">
              <Link className="nav-link active" aria-current="page" to="/homes">
                <FormattedMessage id="spaces"
                defaultMessage="My Spaces" />
              </Link>
            </div>
            <div className="navbar-nav-controls">
             {/** here lang selector */  }
             <div>
              <button onClick={() => onChangeLanguage('es')}><FormattedMessage id="spanish"
              defaultMessage="Spanish"/></button>
              <button onClick={() => onChangeLanguage('en')}><FormattedMessage id="english"
              defaultMessage="English"/></button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
