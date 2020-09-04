import { createReducer, completeReducer, completeState, onReadValue } from 'redux-recompose';
import Immutable, { ImmutableObject } from 'seamless-immutable';
import { CurrentUser } from '@interfaces/authInterfaces';
import { Nullable } from '@interfaces/globalInterfaces';
import { Action, AuthState } from '@interfaces/reduxInterfaces';

import { actions } from './actions';

const stateDescription = {
  currentUser: null,
  hasAccessOnBoarding: false,
  initialLoading: true,
  userName: null,
  userSurname: null,
  userDNI: null,
  userDateOfBirth: null
};

export const initialState = completeState(stateDescription, ['initialLoading', 'hasAccessOnBoarding']);

const reducerDescription = {
  primaryActions: [actions.LOGIN, actions.LOGOUT],
  override: {
    [actions.SET_USER_DNI]: onReadValue(),
    [actions.SET_USER_NAME]: onReadValue(),
    [actions.SET_USER_SURNAME]: onReadValue(),
    [actions.SET_USER_DATE_OF_BIRTH]: onReadValue(),
    [actions.HAS_ACCESS]: onReadValue(),
    [actions.AUTH_INIT]: (state: ImmutableObject<AuthState>, action: Action<Nullable<CurrentUser>>) =>
      state.merge({
        initialLoading: false,
        [action.target as string]: action.payload,
        hasAccessOnBoarding: action.hasAccessOnBoarding
      })
  }
};

export default createReducer(Immutable(initialState), completeReducer(reducerDescription));
