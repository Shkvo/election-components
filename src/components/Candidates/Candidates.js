import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import * as candidatesActions from '../../redux/actions/candidates';
import DeleteDialog from '../DeleteDialog';
import FormDialog from '../FormDialog';
import Table from '../Table';
import {
  candidateHeaderFields,
  candidateBodyFields,
  candidateFormFields,
  defaultCandidate
} from '../../helpers/constants';

import './Candidates.scss';

const cnCandidates = cn('Candidates');

const Candidates = props => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [candidateData, setCandidateData] = useState(defaultCandidate);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

  const handleChangeBirthDate = useCallback(birthDate =>
    setCandidateData({
      ...candidateData,
      birthDate
    })
  );

  const handleSetCandidateData = useCallback(field => event =>
    setCandidateData({
      ...candidateData,
      [field]: event.target.value
    })
  );

  const handleConfirmDeleteDialog = useCallback(() => {
    setIsDeleteDialogOpen(false);
    props.deleteCandidate(currentRow);
  });

  const handleConfirmFormDialog = useCallback(() => {
    setIsFormDialogOpen(false);
    if (isEditing) {
      props.updateCandidate(candidateData);
    } else {
      props.createCandidate(candidateData);
    }
    setCandidateData(defaultCandidate);
  });

  const handleOpenDeleteDialog = useCallback(id => e => {
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
    setCurrentRow(id);
  });

  const handleEditCandidate = useCallback(candidate => e => {
    setIsEditing(true);
    setCandidateData(candidate);
    setIsFormDialogOpen(true);
  });

  const handleOpenFormDialog = useCallback(() => setIsFormDialogOpen(true));

  const handleCloseDeleteDialog = useCallback(() =>
    setIsDeleteDialogOpen(false)
  );

  const handleCloseFormDialog = useCallback(() => {
    setIsFormDialogOpen(false);
    setCandidateData(defaultCandidate);
    setIsEditing(false);
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
        fields={candidateFormFields}
        isEditing={isEditing}
        open={isFormDialogOpen}
        entity="candidate"
        data={candidateData}
        onChange={handleSetCandidateData}
        onChangeDate={handleChangeBirthDate}
        handleClose={handleCloseFormDialog}
        handleConfirm={handleConfirmFormDialog}
      />
      <Table
        data={props.candidates}
        entity="candidate"
        bodyFields={candidateBodyFields}
        handleEdit={handleEditCandidate}
        handleDelete={handleOpenDeleteDialog}
        headerFields={candidateHeaderFields}
        handleOpenDialog={handleOpenFormDialog}
      />
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
