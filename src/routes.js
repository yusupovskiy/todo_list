import React from 'react';
import { Route, Switch } from 'react-router-dom';
import * as routes from './config/routes';

export class Routes extends React.Component {
  render() {
    return (
        <Switch>
          <Route {...routes.tasks} />
          <Route {...routes.users} />
        </Switch>
    );
  }
}

export default Routes;