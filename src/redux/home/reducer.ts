import { createReducer, completeReducer, completeState } from 'redux-recompose';
import Immutable from 'seamless-immutable';

import { actions } from './actions';

const reducerDescription = {
  primaryActions: [actions.GET_TRANSACTIONS, actions.GET_DATA]
};

const stateDescription = {
  transactions: null
};

export const initialState = completeState(stateDescription);
export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
