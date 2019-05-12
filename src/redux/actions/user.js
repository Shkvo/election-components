import { CREATE_USER } from '../types';

export const createUser = user => ({
  type: CREATE_USER,
  data: { user }
});
