import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import Fab from '@material-ui/core/Fab';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/DeleteOutlined';
import AddIcon from '@material-ui/icons/Add';
import DeleteDialog from '../DeleteDialog';
import * as candidatesActions from '../../redux/actions/candidates';

import './Candidates.scss';

const cnCandidates = cn('Candidates');

const Candidates = (props) => {
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);

  const handleAgree = useCallback(() => {
    setIsDeleteDialogOpen(false)
    props.deleteCandidate(currentRow)
  });

  const handleOpen = useCallback(id => {
    setIsDeleteDialogOpen(true);
    setCurrentRow(id);
  });

  const handleClose = useCallback(() => setIsDeleteDialogOpen(false));

  useEffect(() => {
    props.fetchCandidates();
  }, []);

  return (
    <div className={cnCandidates()}>
      <DeleteDialog
        open={isDeleteDialogOpen}
        entity="candidate"
        handleClose={handleClose}
        handleAgree={handleAgree}
      />
      <Paper className={cnCandidates('table')}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell align="left">First Name</TableCell>
              <TableCell align="left">Last Name</TableCell>
              <TableCell align="left">Third Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="right">
                <Fab
                  size="medium"
                  color="primary"
                  variant="extended"
                  className={cnCandidates('add')}
                >
                  <AddIcon />
                  Add candidate
                </Fab>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.candidates.map((row, index) => (
              <TableRow key={row.id}>
                <TableCell scope="row">{index}</TableCell>
                <TableCell align="left">{row.firstName}</TableCell>
                <TableCell align="left">{row.lastName}</TableCell>
                <TableCell align="left">{row.thirdName}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    color="primary"
                    onClick={() => handleOpen(row.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  candidates: state.candidates.list
});

const mapDispatchToProps = {
  fetchCandidates: candidatesActions.fetchCandidates,
  deleteCandidate: candidatesActions.deleteCandidate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidates);
