export const FIELDS = {
  prefix: 'prefix',
  name: 'name',
  surname: 'surname',
  birthDate: 'birthDate',
  phoneNumber: 'phoneNumber',
  dni: 'dni'
};

export const LOGIN_INITIAL_VALUES = {
  [FIELDS.prefix]: '+54',
  [FIELDS.phoneNumber]: ''
};

export const SIGNUP_INITIAL_VALUES_STEP_ONE = {
  [FIELDS.name]: '',
  [FIELDS.surname]: ''
};

export const SIGNUP_INITIAL_VALUES_STEP_TWO = {
  [FIELDS.dni]: '',
  [FIELDS.birthDate]: ''
};
