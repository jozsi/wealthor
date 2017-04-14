import { CALL_API } from 'redux-api-middleware';
import {
  SIMULATION_CREATE_REQUEST,
  SIMULATION_CREATE_SUCCESS,
  SIMULATION_CREATE_FAILURE,
} from '../actions';

export const simulate = simulation => ({
  [CALL_API]: {
    endpoint: '/simulation',
    method: 'POST',
    headers: state => ({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.user.token}`,
    }),
    body: JSON.stringify(simulation),
    types: [SIMULATION_CREATE_REQUEST, SIMULATION_CREATE_SUCCESS, SIMULATION_CREATE_FAILURE],
  },
});
