import { SIMULATION_CREATE_REQUEST, SIMULATION_CREATE_SUCCESS, SIMULATION_CREATE_FAILURE } from '../actions';

const initialState = [];

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIMULATION_CREATE_SUCCESS: {
      return payload;
    }
    default:
      return state;
  }
};

export default reducer;
