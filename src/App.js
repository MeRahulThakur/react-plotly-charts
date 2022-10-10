import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from './Dashboard';
import TodoContainer from './TodoContainer';
import IncDecContainer  from './IncDecContainer';

const App = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/todo" component={TodoContainer} />
          <Route exact path="/inc" component={IncDecContainer} />
          <Route path="*" component={Dashboard} />
        </Switch>
      </>
    </Router>
  );
}

export default App