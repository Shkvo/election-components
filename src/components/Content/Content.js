import React from 'react';
import { Router } from "@reach/router"
import { cn } from '@bem-react/classname';

import Main from '../Main';
import Candidates from '../Candidates';

import './Content.scss';

const cnContent = cn('Content');

const Content = () => (
  <Router className={cnContent()}>
    <Main path="/" />
    <Candidates path="/candidates" />
  </Router>
);

export default Content;
