import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const DeleteDialog = ({ open, handleClose, handleAgree, entity }) => (
  <Dialog
    open={open}
    onClose={handleClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{`Delete ${entity}`}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {`Do you really want to delete the ${entity}?`}
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Cancel
      </Button>
      <Button onClick={handleAgree} color="primary" autoFocus>
        Yes
      </Button>
    </DialogActions>
  </Dialog>
);

export default DeleteDialog;