import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Users from './user/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigtion';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>

        <Route path="/" exact>
          <Users />
        </Route>

          <Route path="/:userId/places" exact>
            <UserPlaces />
          </Route>

        <Route path="/places/new" exact>
          <NewPlace />
        </Route>

        <Redirect to="/" />

      </Switch>
      </main> 
    </Router> //1. react routing based on the url we enter
  );
};

export default App;
