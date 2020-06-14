import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import axios from 'axios';
import TextBox from '../atoms/textBox';
// import Buttons from '../atoms/button';

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
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
          props.history.push('/todo');
        }
      });
  };
  return (
    <div>
      <h1>Please enter the credentials to log in </h1>
      <TextBox
        label="username"
        credentials={credentials}
        setCredentials={setCredentials}
      />
      <TextBox
        label="password"
        credentials={credentials}
        setCredentials={setCredentials}
        type="password"
      />
      <Button variant="contained" color="primary" onClick={onLogin}>
        login
      </Button>
    </div>
  );
};

export default Login;
