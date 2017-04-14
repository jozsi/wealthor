import { combineReducers } from 'redux';
import hydrated from './hydrated';
import user from './user';
import simulation from './simulation';
import transaction from './transaction';
import wallet from './wallet';

const reducers = combineReducers({
  user,
  hydrated,
  simulation,
  transaction,
  wallet,
});

export default reducers;
