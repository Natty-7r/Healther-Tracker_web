import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./components/layout/main-layout";
import { SignInPage, TasksPage } from "./pages";

const pages: PageData[] = [
  { path: "/", Page: TasksPage },
  { path: "auth/sign-in", Page: SignInPage },
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
