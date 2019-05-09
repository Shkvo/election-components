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
import FormDialog from '../FormDialog';
import * as candidatesActions from '../../redux/actions/candidates';

import './Candidates.scss';

const cnCandidates = cn('Candidates');

const Candidates = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [candidateData, setCandidateData] = useState({});
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);

  const handleChangeBirthDate = useCallback(birthDate => setCandidateData({
    ...candidateData,
    birthDate
  }));

  const handleSetCandidateData = useCallback(field => event => setCandidateData({
    ...candidateData,
    [field]: event.target.value
  }));

  const handleConfirmDeleteDialog = useCallback(() => {
    setIsDeleteDialogOpen(false)
    props.deleteCandidate(currentRow)
  });

  const handleConfirmCreateDialog = useCallback(() => {
    setIsCreateDialogOpen(false)
    if (isEditing) {
      props.updateCandidate(candidateData);
      setIsEditing(false);
    } else {
      props.createCandidate(candidateData);
    }
    setCandidateData({});
  });

  const handleOpenDeleteDialog = useCallback(id => e => {
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
    setCurrentRow(id);
  });

  const handleEditCandidate = useCallback(candidate => e => {
    setIsEditing(true);
    setIsCreateDialogOpen(true);
    setCandidateData(candidate);
  });

  const handleOpenCreateDialog = useCallback(() => setIsCreateDialogOpen(true));

  const handleCloseDeleteDialog = useCallback(() => setIsDeleteDialogOpen(false));

  const handleCloseCreateDialog = useCallback(() => {
    setIsEditing(false);
    setCandidateData({});
    setIsCreateDialogOpen(false)
  });

  useEffect(() => {
    props.fetchCandidates();
  }, []);

  return (
    <div className={cnCandidates()}>
      <DeleteDialog
        open={isDeleteDialogOpen}
        entity="candidate"
        handleClose={handleCloseDeleteDialog}
        handleConfirm={handleConfirmDeleteDialog}
      />
      <FormDialog
        isEditing={isEditing}
        open={isCreateDialogOpen}
        entity="candidate"
        data={candidateData}
        onChange={handleSetCandidateData}
        onChangeDate={handleChangeBirthDate}
        handleClose={handleCloseCreateDialog}
        handleConfirm={handleConfirmCreateDialog}
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
                  onClick={handleOpenCreateDialog}
                  className={cnCandidates('add')}
                >
                  <AddIcon />
                  Add candidate
                </Fab>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.candidates.map((candidate, index) => (
              <TableRow onClick={handleEditCandidate(candidate)} key={candidate.id}>
                <TableCell scope="row">{index}</TableCell>
                <TableCell align="left">{candidate.firstName}</TableCell>
                <TableCell align="left">{candidate.lastName}</TableCell>
                <TableCell align="left">{candidate.thirdName}</TableCell>
                <TableCell align="left">{candidate.description}</TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    color="primary"
                    onClick={handleOpenDeleteDialog(candidate.id)}
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
  deleteCandidate: candidatesActions.deleteCandidate,
  createCandidate: candidatesActions.createCandidate,
  updateCandidate: candidatesActions.updateCandidate
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Candidates);
