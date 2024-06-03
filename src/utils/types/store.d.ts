type Token = {
  accessToken?: string;
  refreshToken?: string;
};

type UserStore = {
  isAuth: boolean;
  id: ?string;
  firstName?: string;
  lastName?: string;
  email?: string;
  token: Token;
  role: "USER" | "DOCTOR";

  login: (user: any) => any;
  logout: () => any;
};

type EmailStore = {
  email: string;
  setEmail: (email: string) => any;
  clearEmail: () => any;
};
type DoctorStore = {
  user: any;
  setUser: (user: any) => any;
  clearUser: () => any;
};
