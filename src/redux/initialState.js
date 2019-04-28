const defaultState = {
  list: [],
  message: ''
};

export default {
  user: {},
  users: {
    ...defaultState,
  },
  votes: {
    ...defaultState
  },
  regions: {
    ...defaultState
  },
  candidates: {
    ...defaultState
  }
};