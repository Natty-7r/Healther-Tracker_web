import { PropsWithChildren } from "react";
import Header from "../header/header";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-screen flex flex-col  relative  ">
      <Header />
      {children}
    </main>
  );
};

export { MainLayout };
