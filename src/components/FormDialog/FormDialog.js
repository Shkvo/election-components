import React, { useCallback } from 'react';
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
  fields,
  onChange,
  isEditing,
  handleClose,
  onChangeDate,
  handleConfirm
}) => {
  const createTextField = useCallback(field => (
    <TextField
      key={field.value}
      label={field.label}
      value={data[field.value]}
      onChange={onChange(field.value)}
      margin="normal"
      variant="outlined"
    />
  ));

  const createDateField = useCallback(field => (
    <MuiPickersUtilsProvider key={field.value} utils={DayJsUtils}>
      <DatePicker
        inputVariant="outlined"
        margin="normal"
        label={field.label}
        value={data[field.value]}
        onChange={onChangeDate}
      />
    </MuiPickersUtilsProvider>
  ));

  return (
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
        <form className={cnFormDialog('form')} autoComplete="off">
          {fields.map(field =>
            field.isDate ? createDateField(field) : createTextField(field)
          )}
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
          className={cnFormDialog('confirm')}
        >
          Confirm
        </Fab>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
