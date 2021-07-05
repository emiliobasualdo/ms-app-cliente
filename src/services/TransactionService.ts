import api from '@config/api';

export const getTransactions = () => {
  return api.get('/me/transactions');
};

export const getHomeData = () => {
  return api.get('/me');
};
