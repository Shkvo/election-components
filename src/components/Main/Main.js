import React from 'react';
import Paper from '@material-ui/core/Paper';
import { cn } from '@bem-react/classname';
import { connect } from 'react-redux';
import './Main.scss';

const cnMain = cn('Main');

const Main = () => {

  return (
    <div className={cnMain()}>
      <Paper className={cnMain('overall')}></Paper>
      <Paper className={cnMain('regions')}></Paper>
      <Paper className={cnMain('vote')}></Paper>
      <Paper className={cnMain('region')}></Paper>
    </div>
  );
};

export default connect()(Main);