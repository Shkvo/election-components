import React from 'react';
import { Router } from "@reach/router"
import { cn } from '@bem-react/classname';

import Main from '../Main';

import './Content.scss';

const cnContent = cn('Content');

const Another = () => <h1>Another content</h1>;

const Content = () => (
  <Router className={cnContent()}>
    <Main path="/" />
    <Another path="/another" />
  </Router>
);

export default Content;
