import { CALL_API } from 'redux-api-middleware';
import {
  TRANSACTION_READ_REQUEST,
  TRANSACTION_READ_SUCCESS,
  TRANSACTION_READ_FAILURE,
  TRANSACTION_CREATE_REQUEST,
  TRANSACTION_CREATE_SUCCESS,
  TRANSACTION_CREATE_FAILURE,
} from '../actions';

export const read = walletId => ({
  [CALL_API]: {
    endpoint: `/transaction/${walletId}`,
    method: 'GET',
    headers: state => ({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.user.token}`,
    }),
    types: [{
      type: TRANSACTION_READ_REQUEST,
      payload: walletId,
    }, TRANSACTION_READ_SUCCESS, TRANSACTION_READ_FAILURE],
  },
});

export const create = transaction => ({
  [CALL_API]: {
    endpoint: '/transaction',
    method: 'POST',
    headers: state => ({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${state.user.token}`,
    }),
    body: JSON.stringify(transaction),
    types: [TRANSACTION_CREATE_REQUEST, TRANSACTION_CREATE_SUCCESS, TRANSACTION_CREATE_FAILURE],
  },
});
