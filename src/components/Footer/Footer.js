import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { cn } from '@bem-react/classname';

import './Footer.scss';

const cnFooter = cn('Footer');

const Footer = () => (
  <div className={cnFooter()}>
    <AppBar position="static">
      Shkvo ©	All rights reserved.
    </AppBar>
  </div>
);

export default Footer;
