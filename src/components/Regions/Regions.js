import React, { useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';
import { cn } from '@bem-react/classname';
import * as regionsActions from '../../redux/actions/regions';
import DeleteDialog from '../DeleteDialog';
import FormDialog from '../FormDialog';
import Table from '../Table';
import {
  regionHeaderFields,
  regionBodyFields,
  regionFormFields,
  defaultRegion
} from '../../helpers/constants';

import './Regions.scss';

const cnRegions = cn('Regions');

const Regions = props => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [regionData, setRegionData] = useState(defaultRegion);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isFormDialogOpen, setIsFormDialogOpen] = useState(false);

  const handleSetRegionData = useCallback(field => event =>
    setRegionData({
      ...regionData,
      [field]: event.target.value
    })
  );

  const handleConfirmDeleteDialog = useCallback(() => {
    setIsDeleteDialogOpen(false);
    props.deleteRegion(currentRow);
  });

  const handleConfirmFormDialog = useCallback(() => {
    setIsFormDialogOpen(false);
    if (isEditing) {
      props.updateRegion(regionData);
    } else {
      props.createRegion(regionData);
    }
    setRegionData(defaultRegion);
  });

  const handleOpenDeleteDialog = useCallback(id => e => {
    e.stopPropagation();
    setIsDeleteDialogOpen(true);
    setCurrentRow(id);
  });

  const handleEditRegion = useCallback(region => e => {
    setIsEditing(true);
    setRegionData(region);
    setIsFormDialogOpen(true);
  });

  const handleOpenFormDialog = useCallback(() => setIsFormDialogOpen(true));

  const handleCloseDeleteDialog = useCallback(() =>
    setIsDeleteDialogOpen(false)
  );

  const handleCloseFormDialog = useCallback(() => {
    setIsFormDialogOpen(false);
    setRegionData(defaultRegion);
    setIsEditing(false);
  });

  useEffect(() => {
    props.fetchRegions();
  }, []);

  return (
    <div className={cnRegions()}>
      <DeleteDialog
        open={isDeleteDialogOpen}
        entity="region"
        handleClose={handleCloseDeleteDialog}
        handleConfirm={handleConfirmDeleteDialog}
      />
      <FormDialog
        fields={regionFormFields}
        isEditing={isEditing}
        open={isFormDialogOpen}
        entity="region"
        data={regionData}
        onChange={handleSetRegionData}
        handleClose={handleCloseFormDialog}
        handleConfirm={handleConfirmFormDialog}
      />
      <Table
        data={props.regions}
        entity="region"
        bodyFields={regionBodyFields}
        handleEdit={handleEditRegion}
        handleDelete={handleOpenDeleteDialog}
        headerFields={regionHeaderFields}
        handleOpenDialog={handleOpenFormDialog}
      />
    </div>
  );
};

const mapStateToProps = state => ({
  regions: state.regions.list
});

const mapDispatchToProps = {
  fetchRegions: regionsActions.fetchRegions,
  deleteRegion: regionsActions.deleteRegion,
  createRegion: regionsActions.createRegion,
  updateRegion: regionsActions.updateRegion
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Regions);
