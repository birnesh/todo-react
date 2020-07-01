import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/pages/Login';
import Todo from './components/pages/todo';
import PrivateRoute from './components/wrappers/PrivateRoute';

const App = () => {
  return (
    // <h1>hello</h1>
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <PrivateRoute exact path="/todo">
            <Todo />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
