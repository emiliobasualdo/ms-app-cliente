export interface CurrentUser {
  token: string;
}

export interface AuthData {
  phoneNumber: string;
  code: string;
}

export interface SignUpData {
  name: string;
  surname: string;
  birthDate: string;
  sex: string;
  email: string;
  password: string;
  phoneNumber?: string;
}
