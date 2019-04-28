import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import * as votesActions from '../../redux/actions/votes';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';
import './App.scss';

const cnApp = cn('App');

const App = (props) => {
  useEffect(() => {
    props.fetchVotes();
  }, []);

  return (
    <div className={cnApp()}>
      <Header title="Elections" />
      <Content />
      <Footer />
    </div>
  );
};

const mapStateToProps = state => ({
  votes: state.votes.list
});

const mapDispatchToProps = {
  fetchVotes: votesActions.fetchVotes
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
