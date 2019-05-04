import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import * as votesActions from '../../redux/actions/votes';
import * as regionsActions from '../../redux/actions/regions';
import Header from '../Header';
import Content from '../Content';
import './App.scss';

const cnApp = cn('App');

const App = (props) => {
  useEffect(() => {
    props.fetchVotes();
    props.fetchRegions()
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
  fetchRegions: regionsActions.fetchRegions
};

export default connect(
  null,
  mapDispatchToProps
)(App);
