import {
  FETCH_REGIONS,
  DELETE_REGION,
  CREATE_REGION,
  UPDATE_REGION
} from '../types';

export const fetchRegions = () => ({
  type: FETCH_REGIONS
});

export const deleteRegion = id => ({
  type: DELETE_REGION,
  data: { id }
});

export const createRegion = region => ({
  type: CREATE_REGION,
  data: { region }
});

export const updateRegion = region => ({
  type: UPDATE_REGION,
  data: { region }
});
