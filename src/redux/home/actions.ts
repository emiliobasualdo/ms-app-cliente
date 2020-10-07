import { createTypes, completeTypes } from 'redux-recompose';
import * as TransactionService from '@services/TransactionService';

export const actions = createTypes(completeTypes(['GET_TRANSACTIONS', 'GET_DATA']), '@@HOME');

export const actionCreators = {
  getTransactions: () => ({
    type: actions.GET_TRANSACTIONS,
    service: TransactionService.getTransactions,
    target: 'transactions'
  }),
  getHomeData: () => ({
    type: actions.GET_DATA,
    service: TransactionService.getHomeData,
    target: 'homeData'
  })
};
