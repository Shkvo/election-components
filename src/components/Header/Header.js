import React, { useState, useCallback } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from '@reach/router';
import { cn } from '@bem-react/classname';

import './Header.scss';

const cnHeader = cn('Header');

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget);
  });

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  });

  return (
    <div className={cnHeader()}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-owns={anchorEl ? 'menu' : undefined}
            className={cnHeader('button')}
            color="inherit"
            aria-label="Menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Link to='/'>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to='/candidates'>
                Candidates
              </Link>
            </MenuItem>
          </Menu>
          <Typography
            variant="h6"
            color="inherit"
            className={cnHeader('title')}
          >
            Elections
          </Typography>
          <Button color="inherit">Sign in</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default Header;
