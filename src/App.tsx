import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Root from './routes/Root';
import TimeLine from './routes/Timeline';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path={'/timeline'} component={TimeLine} />
        <Route path="/" component={Root} />
      </Switch>
    </Router>
  );
}
