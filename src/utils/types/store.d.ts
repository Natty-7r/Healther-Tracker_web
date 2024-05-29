type Token = {
  accessToken?: string;
  refreshToken?: string;
};

type UserStore = {
  id: ?string;
  firstName?: string;
  lastName?: string;
  email?: string;
  token: Token;

  login: (user: any) => any;
  logout: () => any;
};

type EmailStore = {
  email: string;
  setEmail: (email: string) => any;
  clearEmail: () => any;
};
