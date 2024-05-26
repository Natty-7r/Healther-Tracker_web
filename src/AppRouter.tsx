import { MainLayout } from "./components/layout/main-layout";
import {
  AllSongsPage,
  AddLyricPage,
  CategoriesPage,
  CategorySongsPage,
  FavoriteSongsPage,
  ReaderPage,
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  HomePage,
  VerifyResetOTPPage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import UpdatePasswordPage from "./pages/auth/update-passoword";

const pages: PageData[] = [
  { path: "/", Page: HomePage },
  { path: "/all-songs", Page: AllSongsPage },
  { path: "/lyrics", Page: ReaderPage },
  { path: "/category", Page: CategoriesPage },
  { path: "/category-songs", Page: CategorySongsPage },
  { path: "/favorite", Page: FavoriteSongsPage },
  { path: "/add-lyric", Page: AddLyricPage },
  { path: "/auth/signin", Page: SignInPage },
  { path: "/auth/signup", Page: SignUpPage },
  { path: "/auth/forgot-password", Page: ForgotPasswordPage },
  { path: "/auth/verify-otp", Page: VerifyResetOTPPage },
  { path: "/auth/update-password", Page: UpdatePasswordPage },
];

function AppRouter() {
  return (
    <Routes>
      {pages.map(({ Page, path }: PageData, index: number) => (
        <Route
          key={index}
          path={path}
          element={
            <MainLayout>
              <Page />
            </MainLayout>
          }
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
