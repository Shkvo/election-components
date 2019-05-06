import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import * as votesActions from '../../redux/actions/votes';
import * as regionsActions from '../../redux/actions/regions';
import * as usersActions from '../../redux/actions/users';
import Header from '../Header';
import Content from '../Content';
import './App.scss';

const cnApp = cn('App');

const App = (props) => {
  useEffect(() => {
    props.fetchVotes();
    props.fetchRegions();
    props.fetchTotalUsers();
  }, []);

  return (
    <div className={cnApp()}>
      <Header />
      <Content />
    </div>
  );
};

const mapDispatchToProps = {
  fetchVotes: votesActions.fetchVotes,
  fetchTotalUsers: usersActions.fetchTotalUsers,
  fetchRegions: regionsActions.fetchRegions
};

export default connect(
  null,
  mapDispatchToProps
)(App);
