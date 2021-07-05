import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'react';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import * as AuthService from '@services/AuthService';
import { CurrentUser, AuthData } from '@interfaces/authInterfaces';
import { Action } from '@interfaces/reduxInterfaces';

export const actions = createTypes(
  completeTypes(
    ['LOGIN', 'LOGOUT'],
    [
      'AUTH_INIT',
      'HAS_ACCESS',
      'SET_USER_NAME',
      'SET_USER_SURNAME',
      'SET_USER_DNI',
      'SET_USER_DATE_OF_BIRTH',
      'SEND_SMS'
    ]
  ),
  '@@AUTH'
);

const TARGETS = {
  ONBOARDING: 'hasAccessOnBoarding',
  CURRENT_USER: 'currentUser',
  USER_NAME: 'userName',
  USER_SURNAME: 'userSurname',
  USER_DNI: 'userDNI',
  USER_DATE_OF_BIRTH: 'userDateOfBirth',
  LOGIN: 'loginProcess'
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
      withPostSuccess(async () => {
        await AuthService.removeCurrentUser();
      })
    ]
  }),
  setUserName: (name: string) => ({
    type: actions.SET_USER_NAME,
    target: TARGETS.USER_NAME,
    payload: name
  }),
  setUserSurname: (surname: string) => ({
    type: actions.SET_USER_SURNAME,
    target: TARGETS.USER_SURNAME,
    payload: surname
  }),
  setUserDateOfBrith: (date: string) => ({
    type: actions.SET_USER_DATE_OF_BIRTH,
    target: TARGETS.USER_DATE_OF_BIRTH,
    payload: date
  }),
  setUserDNI: (DNI: string) => ({
    type: actions.SET_USER_DNI,
    target: TARGETS.USER_DNI,
    payload: DNI
  }),
  sendSMS: (phoneNumber: string) => ({
    type: actions.SEND_SMS,
    service: AuthService.sendSMS,
    target: TARGETS.USER_DNI,
    payload: phoneNumber
  })
};
