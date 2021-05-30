import {I18nProvider, LOCALES} from "../i18n/index";

const HOME_API = "/api/homes";

var room = "";

const getHomes = async () => {
  return fetch(HOME_API).then(getJSON);
};

const getHomeById = async (id) => {
  return fetch(`${HOME_API}/${id}`).then(getJSON);
};

function setDevices(foo)
{
  room = foo;
}

function getDevices()
{
  return room;
}

let locale = LOCALES.ENGLISH;

function onChangeLanguage(lang) 
{
  locale = lang;
}

function getI18Config()
{
  return locale;
}

const getJSON = (response) => response.json();

export { getHomes, getHomeById, setDevices, getDevices, onChangeLanguage,  getI18Config};
