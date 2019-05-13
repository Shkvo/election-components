import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import { isLoggedIn } from '../../helpers/auth';
import * as votesActions from '../../redux/actions/votes';
import * as regionsActions from '../../redux/actions/regions';
import * as usersActions from '../../redux/actions/users';
import * as userActions from '../../redux/actions/user';
import Header from '../Header';
import Content from '../Content';
import './App.scss';

const cnApp = cn('App');

const App = (props) => {
  useEffect(() => {
    if (isLoggedIn()) {
      const id = localStorage.getItem('userId');
      props.fetchUser(id);
    }
  });

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
  fetchUser: userActions.fetchUser,
  fetchVotes: votesActions.fetchVotes,
  fetchTotalUsers: usersActions.fetchTotalUsers,
  fetchRegions: regionsActions.fetchRegions
};

export default connect(
  null,
  mapDispatchToProps
)(App);
