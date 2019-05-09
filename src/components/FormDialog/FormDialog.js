import React from 'react';
import Fab from '@material-ui/core/Fab';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import DayJsUtils from '@date-io/dayjs';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import { cn } from '@bem-react/classname';

import './FormDialog.scss';

const cnFormDialog = cn('FormDialog');

const FormDialog = ({
  open,
  data,
  entity,
  onChange,
  isEditing,
  handleClose,
  onChangeDate,
  handleConfirm
}) => (
  <Dialog
    open={open}
    onClose={handleClose}
    className={cnFormDialog()}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">
      {`${isEditing ? 'Edit' : 'Create'} ${entity}`}
    </DialogTitle>
    <DialogContent>
      <form className={cnFormDialog('form')} noValidate autoComplete="off">
        <TextField
          label="First name"
          value={data.firstName}
          onChange={onChange('firstName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Last name"
          value={data.lastName}
          onChange={onChange('lastName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Third name"
          value={data.thirdName}
          onChange={onChange('thirdName')}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Description"
          value={data.description}
          onChange={onChange('description')}
          margin="normal"
          variant="outlined"
        />
        <MuiPickersUtilsProvider utils={DayJsUtils}>
          <DatePicker
            inputVariant="outlined"
            margin="normal"
            label="Date of birth"
            value={data.birthDate}
            onChange={onChangeDate}
          />
        </MuiPickersUtilsProvider>
      </form>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Fab
        size="medium"
        color="primary"
        variant="extended"
        onClick={handleConfirm}
        className={cnFormDialog('create')}
      >
        Confirm
      </Fab>
    </DialogActions>
  </Dialog>
);

export default FormDialog;
