// import axios from 'axios';

const APP_NAME = 'react_todo';

const jwt = () => {
  if (window.localStorage.getItem(`${APP_NAME}.token`))
    return window.localStorage.getItem(`${APP_NAME}.token`);
  // eslint-disable-next-line no-else-return
  else return null;
};

const user = () => {
  if (window.localStorage.getItem(`$(APP_NAME).user`))
    return JSON.parse(window.localStorage.getItem(`$(APP_NAME).user`));
  // eslint-disable-next-line no-else-return
  else return '';
};

const refreshAuthLogic = () => {
  window.localStorage.removeItem(`${APP_NAME}.token`);
  return Promise.resolve();
};

export { APP_NAME, jwt, user, refreshAuthLogic };
