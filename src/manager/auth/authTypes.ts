export type TLogin = {
  username: string;
  password: string;
};

export type TRegister = {
  username: string;
  password: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type TAuth = {
  refresh: string;
  access: string;
};

export type CTX = {
  auth: TAuth | undefined;
  setAuth: (auth: TAuth | undefined) => unknown;
};
