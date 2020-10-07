import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import Reactotron from 'reactotron-react-native';
import thunk from 'redux-thunk';
import { fetchMiddleware, configureMergeState } from 'redux-recompose';
import { ImmutableObject } from 'seamless-immutable';
import { State } from '@interfaces/reduxInterfaces';

import auth from './auth/reducer';
import home from './home/reducer';

configureMergeState((state: ImmutableObject<State>, diff: State) => state.merge(diff));

const reducers = combineReducers({
  auth,
  home
});

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Redux-Recompose Middleware ------------- */
middlewares.push(fetchMiddleware);

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));

if (__DEV__ && Reactotron.createEnhancer) enhancers.push(Reactotron.createEnhancer(true));

// In DEV mode, we'll create the store through Reactotron
const store = createStore(reducers, compose(...enhancers));

if (__DEV__ && Reactotron.setReduxStore) Reactotron.setReduxStore(store);

export default store;
