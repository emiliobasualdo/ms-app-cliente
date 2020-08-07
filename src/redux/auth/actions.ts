import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import * as AuthService from '@services/AuthService';
import { CurrentUser, AuthData } from '@interfaces/authInterfaces';
import { Action } from '@interfaces/reduxInterfaces';
import { setOnBoardingAccess } from '@services/OnBoardingService';

export const actions = createTypes(completeTypes(['LOGIN', 'LOGOUT'], ['AUTH_INIT', 'HAS_ACCESS']), '@@AUTH');

const TARGETS = {
  ONBOARDING: 'hasAccessOnBoarding',
  CURRENT_USER: 'currentUser'
};

export const actionCreators = {
  init: () => async (dispatch: Dispatch<Action>) => {
    const { currentUser, hasAccess } = await AuthService.authSetup();
    dispatch({
      type: actions.AUTH_INIT,
      target: TARGETS.CURRENT_USER,
      hasAccessOnBoarding: hasAccess,
      payload: currentUser
    });
  },
  login: (authData: AuthData) => ({
    type: actions.LOGIN,
    target: TARGETS.CURRENT_USER,
    service: AuthService.login,
    payload: authData,
    injections: [
      withPostSuccess((_: any, response: ApiOkResponse<CurrentUser>) => {
        AuthService.setCurrentUser(response.data!);
      })
    ]
  }),
  logout: () => ({
    type: actions.LOGOUT,
    target: TARGETS.CURRENT_USER,
    service: AuthService.logout,
    injections: [
      withPostSuccess(async (dispatch: Dispatch<any>) => {
        await AuthService.removeCurrentUser();
        dispatch(actionCreators.setHasAccessOnBoarding(false));
      })
    ]
  }),
  setHasAccessOnBoarding: (value: boolean) => async (dispatch: Dispatch<any>) => {
    await setOnBoardingAccess(value);
    dispatch({
      type: actions.HAS_ACCESS,
      target: TARGETS.ONBOARDING,
      payload: value
    });
  }
};
