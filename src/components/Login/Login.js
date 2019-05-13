import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Link } from '@reach/router';
import * as userActions from '../../redux/actions/user';
import { defaultLoginUser } from '../../helpers/constants';

import './Login.scss';

const cnLogin = cn('Login');

const Login = props => {
  const [userData, setUserData] = useState(defaultLoginUser);

  const handleSetUserData = useCallback(field => event =>
    setUserData({
      ...userData,
      [field]: event.target.value
    })
  );

  const handleConfirm = () => {
    props.login(userData);
  };

  if (props.user.id) {
    window.location.href = '/';
  }

  return (
    <Paper className={cnLogin()}>
      <Typography variant="h4">Login</Typography>
      <div className={cnLogin('content')}>
        <TextField
          label="Identification Number"
          value={userData.uid}
          onChange={handleSetUserData('uid')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Password"
          value={userData.encryptedPassword}
          onChange={handleSetUserData('encryptedPassword')}
          type="password"
          margin="normal"
          variant="outlined"
        />
      </div>
      <Typography>
        Don't have an account? <Link className={cnLogin('link')} to="/register">Register</Link>
      </Typography>
      <div className={cnLogin('actions')}>
        <Fab
          size="large"
          color="primary"
          variant="extended"
          onClick={handleConfirm}
          className={cnLogin('confirm')}
        >
          Login
        </Fab>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = {
  login: userActions.login
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
