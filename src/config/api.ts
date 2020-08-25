/* eslint-disable @typescript-eslint/no-unused-vars */
import { create, NETWORK_ERROR } from 'apisauce';
import { CamelcaseSerializer, SnakecaseSerializer } from 'cerealizr';
import Config from 'react-native-config';
import Reactotron from 'reactotron-react-native';
import { Dispatch } from 'react';

const snakeCaseSerializer = new SnakecaseSerializer();
const camelCaseSerializer = new CamelcaseSerializer();

const baseURL = 'https://wwxu0e1u2e.execute-api.us-east-1.amazonaws.com/dev';

const api = create({
  baseURL,
  timeout: 5000
});

api.addMonitor(((Reactotron as unknown) as { apisauce: any }).apisauce);

export const apiSetup = (dispatch: Dispatch<any>) => {
  api.addResponseTransform(response => {
    if (response.data) response.data = camelCaseSerializer.serialize(response.data);
  });
  api.addRequestTransform(request => {
    if (request.data) request.data = snakeCaseSerializer.serialize(request.data);
    if (request.params) request.params = snakeCaseSerializer.serialize(request.params);
  });
  api.addMonitor(response => {
    if (response.status === 401) {
      // dispatch(actions.sessionExpired());
      console.warn('Unhandled session expiration');
    }
  });
  api.addMonitor(response => {
    if (response.problem === NETWORK_ERROR) {
      // dispatch(actions.noInternetConnection());
      console.warn('Unhandled request without connection');
    }
  });
};

export default api;
