export const FIELDS = {
  prefix: 'prefix',
  name: 'name',
  surname: 'surname',
  birthDate: 'birthDate',
  sex: 'sex',
  email: 'email',
  password: 'password',
  phoneNumber: 'phoneNumber'
};

export const LOGIN_INITIAL_VALUES = {
  [FIELDS.prefix]: '+54',
  [FIELDS.phoneNumber]: ''
};

export const SIGNUP_INITIAL_VALUES = {
  [FIELDS.name]: '',
  [FIELDS.surname]: '',
  [FIELDS.birthDate]: '',
  [FIELDS.sex]: '',
  [FIELDS.email]: '',
  [FIELDS.password]: '',
  [FIELDS.phoneNumber]: ''
};
