import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, Redirect } from '@reach/router';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import DayJsUtils from '@date-io/dayjs';
import * as regionsActions from '../../redux/actions/regions';
import * as userActions from '../../redux/actions/user';
import { defaultUser } from '../../helpers/constants';

import './Register.scss';

const cnRegister = cn('Register');

const Register = props => {
  const [userData, setUserData] = useState(defaultUser);

  const handleSetUserData = useCallback(field => event =>
    setUserData({
      ...userData,
      [field]: event.target.value
    })
  );

  const handleChangeBirthDate = useCallback(birthDate =>
    setUserData({
      ...userData,
      birthDate
    })
  );

  const handleConfirm = () => {
    props.createUser(userData);
  };

  useEffect(() => {
    props.fetchRegions();
  }, []);

  if (props.user.id) {
    return <Redirect to="/login" />
  }

  return (
    <Paper className={cnRegister()}>
      <Typography variant="h4">Register</Typography>
      <div className={cnRegister('content')}>
        <div className={cnRegister('row')}>
          <TextField
            label="First Name"
            value={userData.firstName}
            onChange={handleSetUserData('firstName')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Last Name"
            value={userData.lastName}
            onChange={handleSetUserData('lastName')}
            margin="normal"
            variant="outlined"
          />
        </div>
        <TextField
          label="Third Name"
          value={userData.thirdName}
          onChange={handleSetUserData('thirdName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Region"
          value={userData.regionId}
          select
          onChange={handleSetUserData('regionId')}
          margin="normal"
          variant="outlined"
        >
          {props.regions.map(region => (
            <MenuItem key={region.caption} value={region.id}>
              {region.caption}
            </MenuItem>
          ))}
        </TextField>
        <MuiPickersUtilsProvider utils={DayJsUtils}>
          <DatePicker
            inputVariant="outlined"
            margin="normal"
            label="Date Of Birth"
            value={userData.birthDate}
            onChange={handleChangeBirthDate}
          />
        </MuiPickersUtilsProvider>
        <div className={cnRegister('row')}>
          <TextField
            label="Identification Number"
            value={userData.uid}
            onChange={handleSetUserData('uid')}
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Passport Serial"
            value={userData.passportSerial}
            onChange={handleSetUserData('passportSerial')}
            margin="normal"
            variant="outlined"
          />
        </div>
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
        Already have an account? <Link className={cnRegister('link')} to="/login">Login</Link>
      </Typography>
      <div className={cnRegister('actions')}>
        <Fab
          size="large"
          color="primary"
          variant="extended"
          onClick={handleConfirm}
          className={cnRegister('confirm')}
        >
          Register
        </Fab>
      </div>
    </Paper>
  );
};

const mapStateToProps = state => ({
  user: state.user,
  regions: state.regions.list
});

const mapDispatchToProps = {
  fetchRegions: regionsActions.fetchRegions,
  createUser: userActions.createUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
