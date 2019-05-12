import React from 'react';
import { Router } from "@reach/router"
import { cn } from '@bem-react/classname';

import Main from '../Main';
import Votes from '../Votes';
import Regions from '../Regions';
import Candidates from '../Candidates';
import Register from '../Register';

import './Content.scss';

const cnContent = cn('Content');

const Content = () => (
  <Router className={cnContent()}>
    <Main path="/" />
    <Votes path="/votes" />
    <Regions path="/regions" />
    <Candidates path="/candidates" />

    <Register path="/register"/>
  </Router>
);

export default Content;
