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
    ...defaultState,
    data: [],
    labels: [],
  },
  regions: {
    ...defaultState
  },
  candidates: {
    ...defaultState
  }
};