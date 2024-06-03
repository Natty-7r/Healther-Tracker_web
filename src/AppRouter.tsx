import { MainLayout } from "./components/layout/main-layout";
import {
  SignInDoctorPage,
  SignInUserPage,
  SignUpPage,
  ForgotPasswordPage,
  HomePage,
  UsersPage,
  VerifyResetOTPPage,
  UserDetailPage,
  CreateUserpage,
} from "./pages";
import { Route, Routes } from "react-router-dom";
import UpdatePasswordPage from "./pages/auth/update-passoword";

const pages: PageData[] = [
  { path: "/", Page: HomePage },
  { path: "/users", Page: UsersPage },
  { path: "/create-user", Page: CreateUserpage },
  { path: "/user-detail", Page: UserDetailPage },
  { path: "/auth/signin-doctor", Page: SignInDoctorPage },
  { path: "/auth/signin-user", Page: SignInUserPage },
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
