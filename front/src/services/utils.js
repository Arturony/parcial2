import localeEsMessagesES from "../locales/es.json";
import localeEsMessagesEN from "../locales/en.json";

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

let i18nConfig = {
  locale: 'es',
  messages: localeEsMessagesES
};

function onChangeLanguage(lang) 
{
  switch (lang) {
      case 'es': i18nConfig.messages = localeEsMessagesES; break;
      case 'en': i18nConfig.messages = localeEsMessagesEN; break;
      default: i18nConfig.messages = localeEsMessagesEN; break;
  }
  i18nConfig.locale = lang;
}

function getI18Config()
{
  return i18nConfig;
}

const getJSON = (response) => response.json();

export { getHomes, getHomeById, setDevices, getDevices, onChangeLanguage,  getI18Config};
