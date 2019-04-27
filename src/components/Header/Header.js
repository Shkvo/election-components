import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { cn } from '@bem-react/classname';

import './Header.scss';

const cnHeader = cn('Header');

const Header = ({ title }) => (
  <div className={cnHeader()}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={cnHeader('button')}
          color="inherit"
          aria-label="Menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          color="inherit"
          className={cnHeader('title')}
        >
          {title}
        </Typography>
        <Button color="inherit">Sign in</Button>
      </Toolbar>
    </AppBar>
  </div>
);

export default Header;
