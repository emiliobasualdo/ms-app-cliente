import { ApiResponse } from 'apisauce';
import AsyncStorage from '@react-native-community/async-storage';
import api from '@config/api';
import { CurrentUser, AuthData, SignUpData } from '@interfaces/authInterfaces';
import { getOnBoardingAccess } from '@services/OnBoardingService';

const CURRENT_USER_KEY = '@Auth:currentUser';
const AUTH_EP = '/auth';
const SESISON_TOKEN =
  'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2NfaWQiOiI5ZWQyMmUzNS00MTgxLTQyMTAtYjQ1Yy1hMzIzMzIwMTNhOGMtMDAzNTE5NjcwNzg1OTQiLCJleHAiOjE2Mjk3MzIxMzQsIm9yaWdfaWF0IjoxNTk4MTk2MTM0fQ.Lv6gpdkTI8DFh_JnnYzKm6l47hB2AB816zaPOsI9MwXzOYVAOEHFyqYEI9r3kahYQuY4gnJ4AZ1mWzEZt7zN82vK8OE5q6VtaO4zYSRbb9AHspIVir9eQsYCN4fvFEHQ5x-LXE6vLkg7wXtfrlLTTDuYGh2PKMmrwyd_1JXKZXw_fTAq7aFfyPIF9QVIwA5nkk7zIRI2_SpBzNZLw9IC-1n_5KlzrDuYyUEeMjIXXOyRWNnqTZSHEAeiH-qFlzq-Kllqsht8i6S3WJoqn7-i-d5UptKdiIeECJ_e3bgaof9GnzSLQfOviUX0Xp0FMnhLb59w7VF_NjrJNz-7LxfJxA';

// TODO: Adapt returned object to:
//   sessionToken: usually currentUser.access_token
//   Also don't forget to add any relevant user data needed for your app.
const formatUser = (currentUser: CurrentUser) => currentUser;

export const setCurrentUser = (currentUser: CurrentUser) => {
  api.setHeader('Authorization', `Bearer ${currentUser.sessionToken}`);
  return AsyncStorage.setItem(CURRENT_USER_KEY, JSON.stringify(formatUser(currentUser)));
};
export const getCurrentUser = () =>
  AsyncStorage.getItem(CURRENT_USER_KEY).then(value => JSON.parse(`${value}`));
export const removeCurrentUser = () => AsyncStorage.removeItem(CURRENT_USER_KEY);

export const authSetup = async () => {
  const currentUser = await getCurrentUser();
  if (currentUser) {
    // api.setHeader('Authorization', `Bearer ${currentUser.sessionToken}`);
    api.setHeader('Authorization', `Bearer ${SESISON_TOKEN}`);
  }
  const hasAccess = await getOnBoardingAccess();
  return { currentUser, hasAccess };
};

export const login = ({ code, phoneNumber }: AuthData) => api.post(`${AUTH_EP}/login`, { code, phoneNumber });

// export const login = (_: AuthData) => {
//   // TODO: Implement call to authentication API here
//   // TODO: If you want to test the error
//   // return Promise.resolve({
//   //   ok: false,
//   //   problem: 'CLIENT_ERROR',
//   //   originalError: {}
//   // });
//   return Promise.resolve({
//     ok: true,
//     problem: null,
//     originalError: null,
//     data: { sessionToken: 'token' }
//   });
// };

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
