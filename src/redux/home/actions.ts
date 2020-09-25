import { createTypes, completeTypes } from 'redux-recompose';
import * as TransactionService from '@services/TransactionService';

export const actions = createTypes(completeTypes(['GET_TRANSACTIONS']), '@@HOME');

export const actionCreators = {
  getTransactions: () => ({
    type: actions.GET_TRANSACTIONS,
    service: TransactionService.getTransactions,
    target: 'transactions'
  })
};
