/* eslint-disable @typescript-eslint/no-unused-vars */
import { create, NETWORK_ERROR } from 'apisauce';
import { CamelcaseSerializer } from 'cerealizr';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';
import { Dispatch } from 'react';

const camelCaseSerializer = new CamelcaseSerializer();

const baseURL = Config.API_BASE_URL || 'https://wwxu0e1u2e.execute-api.us-east-1.amazonaws.com/dev';

const api = create({
  baseURL,
  timeout: 5000
});

api.addMonitor(((Reactotron as unknown) as { apisauce: any }).apisauce);

export const apiSetup = (dispatch: Dispatch<any>) => {
  api.addResponseTransform(response => {
    if (response.data) response.data = camelCaseSerializer.serialize(response.data);
  });
  api.addMonitor(response => {
    if (response.status === 401) {
      // dispatch(actions.sessionExpired());
      // eslint-disable-next-line no-console
      console.warn('Unhandled session expiration');
    }
  });
  api.addMonitor(response => {
    if (response.problem === NETWORK_ERROR) {
      // dispatch(actions.noInternetConnection());
      // eslint-disable-next-line no-console
      console.warn('Unhandled request without connection');
    }
  });
};

export default api;
