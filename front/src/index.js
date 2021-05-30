import React from "react";
import ReactDOM from "react-dom";
import "./styles/custom.scss";
import "./index.css";
import App from "./App";
import {IntlProvider} from 'react-intl';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from "./reportWebVitals";
import {getI18Config} from "./services/utils";
import localeEsMessagesES from "./locales/es.json";
import localeEsMessagesEN from "./locales/en.json";

var i18nConfig = 
{
    locale: 'es',
    messages: localeEsMessagesES
  };

ReactDOM.render(<IntlProvider locale="es" messages= {localeEsMessagesES}>
        <App />
        <script src="https://d3js.org/d3.v4.js"></script>
    </IntlProvider> , document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

serviceWorkerRegistration.register();

