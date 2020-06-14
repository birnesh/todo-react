import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/pages/Login';
import Todo from './components/pages/todo';

const App = () => {
  return (
    <h1>hello</h1>
    // <Router>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/" exact component={Login} />
    //       <Route path="/todo" component={Todo} />
    //     </Switch>
    //   </div>
    // </Router>
  );
};

export default App;
