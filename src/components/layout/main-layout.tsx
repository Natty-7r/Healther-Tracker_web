import { PropsWithChildren } from "react";
import Header from "../header/header";
import MobileFooter from "../footer/mobile-footer";

const MainLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className="h-screen flex flex-col  relative  ">
      <Header />
      {children}
      <MobileFooter />
    </main>
  );
};

export { MainLayout };
