import React from 'react';
import { Router } from "@reach/router"
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';

import Main from '../Main';
import Votes from '../Votes';
import Regions from '../Regions';
import Candidates from '../Candidates';
import Register from '../Register';
import Login from '../Login';

import './Content.scss';

const cnContent = cn('Content');

const routes = [
  {
    path: '/votes',
    Route: Votes,
    alowedRoles: [0, 1]
  },
  {
    path: '/regions',
    Route: Regions,
    alowedRoles: [0]
  },
  {
    path: '/candidates',
    Route: Candidates,
    alowedRoles: [0]
  }
];

const Content = ({ user }) => (
  <Router className={cnContent()}>
    <Main path="/" />
    <Login path="/login"/>
    <Register path="/register"/>
    {routes.map(({ path, Route, alowedRoles }) => {
      if (alowedRoles.indexOf(user.role) !== -1) {
        return <Route path={path} />
      }
      return null;
    })}
  </Router>
);

const mapStateToProps = state => ({
  user: state.user
});

export default connect(
  mapStateToProps
)(Content);
