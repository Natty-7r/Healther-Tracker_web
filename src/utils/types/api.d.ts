interface Song {
  id: string;
  title: string;
  categories: string[];
  artistName: string;
  favorite: Favorite;
}

type Token = {
  accessToken?: string;
  refreshToken?: string;
};

type UserStore = {
  id: ?string;
  first_name?: string;
  last_name?: string;
  email?: string;
  role?: string;
  token: Token;

  login: (user: any) => any;
  logout: () => any;
};

// types.ts
export interface CreateDoctorData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface APiResponse {
  status: string;
  data?: any;
  message: string;
}

export interface VerifyOtpData {
  email: string;
  otp: string;
}

export interface doctorSigninDto {
  email: string;
  password: string;
}
export interface userSigninDto {
  controller_id: string;
}
