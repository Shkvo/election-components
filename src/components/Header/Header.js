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
import { connect } from 'react-redux';

import './Header.scss';

const cnHeader = cn('Header');

const Header = ({ user }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget);
  });

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  });

  const handleLogout = useCallback(() => {
    localStorage.clear();
    window.location.href = '/';
  });

  const rightElement = user.id ? (
    <div>
      <Typography variant="b" color="inherit">
        {`${user.lastName} ${user.firstName}`}
      </Typography>
      <Typography
        variant="b"
        color="inherit"
        onClick={handleLogout}
        className={cnHeader('logout')}
      >
        Logout
      </Typography>
    </div>
  ) : (
      <Link to="/login">
        <Button color="inherit">Sign in</Button>
      </Link>
    );

  const menuBtn = (
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
  );

  return (
    <div className={cnHeader()}>
      <AppBar position="static">
        <Toolbar>
          <div className={cnHeader('rightSide')}>
            {(user.role === 0) ? menuBtn : null}
            <Menu
              id="menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <Link to="/">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </Link>
              <Link to="/candidates">
                <MenuItem onClick={handleClose}>Candidates</MenuItem>
              </Link>
              <Link to="/regions">
                <MenuItem onClick={handleClose}>Regions</MenuItem>
              </Link>
              <Link to="/votes">
                <MenuItem onClick={handleClose}>Votes</MenuItem>
              </Link>
            </Menu>
            <Link to="/">
              <Typography variant="h6" color="inherit">
                Elections
            </Typography>
            </Link>
          </div>
          {rightElement}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user
});

export default connect(mapStateToProps)(Header);
