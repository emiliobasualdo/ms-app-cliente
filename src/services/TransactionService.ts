// eslint-disable-next-line require-await
export const getTransactions = async () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ok: true,
        problem: null,
        originalError: null,
        data: [
          {
            amount: 2580,
            type: 'OUT',
            date: 'May 20, 2020',
            extra: '+ $56 ahorro',
            commerce: 'Comercio Quilmes',
            link: 'http://www.google.com',
            statusText: 'Transacción confirmada'
          },
          {
            amount: 750,
            type: 'IN',
            date: 'Ene 05, 2020',
            extra: '+ $56 ahorro',
            commerce: 'Carga de tarjeta',
            statusText: 'Transacción confirmada'
          }
        ]
      });
    }, 0);
  });
