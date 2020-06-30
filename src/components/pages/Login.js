import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import TextBox from '../atoms/textBox';
import { APP_NAME } from '../../common/auth-helper';
// import Buttons from '../atoms/button';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: 'admin',
    password: 'AlphaMale711*',
  });
  const onLogin = () => {
    // const params = { username: 'admin', password: 'AlphaMale*' };
    axios
      .get('https://birnesh-todo.herokuapp.com/login', {
        auth: {
          username: credentials.username,
          password: credentials.password,
        },
      })
      .then((res) => {
        console.log(res.status);
        if (res.status === 200) {
          console.log(res);
          window.localStorage.setItem(`${APP_NAME}.token`, res.data.token);
          axios.defaults.headers.common['x-access-token'] = res.data.token;
          props.history.push('/todo');
        }
      });
  };
  return (
    <div>
      <h1>Please enter the credentials to log in </h1>
      <TextBox
        label="username"
        onChange={(e) => {
          setCredentials({ ...credentials, username: e.target.value });
        }}
        value={credentials.username}
      />
      <TextBox
        label="password"
        onChange={(e) => {
          setCredentials({ ...credentials, password: e.target.value });
        }}
        value={credentials.password}
        type="password"
      />
      <Button variant="contained" color="primary" onClick={onLogin}>
        login
      </Button>
    </div>
  );
};

export default Login;
