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
