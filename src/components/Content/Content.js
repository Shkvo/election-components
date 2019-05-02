import React from 'react';
import Paper from '@material-ui/core/Paper';
import { cn } from '@bem-react/classname';

import './Content.scss';

const cnContent = cn('Content');

const Content = () => (
  <div className={cnContent()}>
    <Paper elevation={1}></Paper>
    <Paper elevation={1}></Paper>
  </div>
);

export default Content;
