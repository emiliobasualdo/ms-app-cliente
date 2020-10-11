import { ApiResponse } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import api from '@config/api';
import { AuthData, CurrentUser, SignUpData } from '@interfaces/authInterfaces';
import { getOnBoardingAccess } from '@services/OnBoardingService';

const CURRENT_USER_KEY = '@Auth:currentUser';

// TODO: Adapt returned object to:
//   sessionToken: usually currentUser.access_token
//   Also don't forget to add any relevant user data needed for your app.
const formatUser = (currentUser: CurrentUser) => currentUser;

export const setCurrentUser = (currentUser: CurrentUser) => {
  api.setHeader('Authorization', `Bearer ${currentUser.token}`);
  return AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(formatUser(currentUser)));
};
export const getCurrentUser = () =>
  AsyncStorage.getItem(CURRENT_USER_KEY).then(value => JSON.parse(`${value}`));
export const removeCurrentUser = () => AsyncStorage.removeItem(CURRENT_USER_KEY);

export const authSetup = async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    api.setHeader('Authorization', `Bearer ${currentUser.token}`);
  }
  const hasAccess = await getOnBoardingAccess();
  return { currentUser, hasAccess };
};

export const sendSMS = (phoneNumber: string) => {
  return api.post('/auth/sms-code', { phoneNumber });
};

export const login = ({ code, phoneNumber }: AuthData) => api.post(`/auth/login`, { phoneNumber, code });

export const logout = () => {
  // TODO: Implement call to authentication API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {}
  // });
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: null
  });
};

export const signup = (_: SignUpData) => {
  // TODO: Implement call to registration API here
  // TODO: If you want to test the error
  // return Promise.resolve({
  //   ok: false,
  //   problem: 'CLIENT_ERROR',
  //   originalError: {},
  //   data: 'Error en el signup!'
  // }) as Promise<ApiResponse<any, any>>;
  return Promise.resolve({
    ok: true,
    problem: null,
    originalError: null,
    data: {}
  }) as Promise<ApiResponse<any, any>>;
};
