interface Song {
  id: string;
  title: string;
  categories: string[];
  artistName: string;
  favorite: Favorite;
}

interface CreateTaskDto {
  name: string;
}

interface APiResponse {
  status: string;
  data?: any;
  message: string;
}

interface VerifyOtpData {
  email: string;
  otp: string;
}

interface signInDto {
  emailOrUsername: string;
  password: string;
}
interface userSigninDto {
  controller_id: string;
}

interface QueryDto {
  page: number;
  itemsPerPage: number;
}

type PaginationPayload = {
  page: number;
  itemsPerPage: number;
} & Pagination;

type Pagination = {
  total: number;
  nextPage: number | null;
  previousPage: number | null;
  totalPages: number;
};
