import { useTheme } from "@/utils/providers/theme-provider";
import { Menu, Moon, SunMoon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import { LogoHeader } from "./logo-header";

export const Header = () => {
  const { user, accessToken, logout } = useAuthStore();
  const [openMobileNav, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname !== "/auth/sign-in") {
      if (!(accessToken && user)) navigate("/auth/sign-in");
    }
  }, [user, accessToken, pathname]);

  return (
    <header className="bg-card border-b flex justify-between items-center  px-4 sm:px-8 xl:px-32 sticky top-0 py-2 h-[9%] sm:auto ">
      <div className="flex items-center gap-2">
        <LogoHeader />
        <p className="uppercase font-bold text-xs lg:text-sm">Job scheduler</p>
      </div>
      <div className="hidden md:flex gap-16 items-center">
        <div className="flex gap-8">
          <div className="btn btn_header" onClick={() => {}}></div>
        </div>
        {user && accessToken ? (
          <Button
            size={"sm"}
            variant={"outline"}
            className="capitalize w-full"
            onClick={() => {
              setOpen(false);
              logout();
              navigate("/");
            }}
          >
            log out
          </Button>
        ) : (
          <div className="flex gap-4">
            <Button
              size={"sm"}
              variant={"outline"}
              className="capitalize"
              onClick={() => navigate("/auth/sign-in")}
            >
              log in
            </Button>

            <Button
              size={"sm"}
              onClick={() => {
                if (theme == "light") setTheme("dark");
                if (theme == "dark") setTheme("light");
              }}
              variant={"outline"}
            >
              {theme == "light" ? <Moon /> : <SunMoon />}
            </Button>
          </div>
        )}
      </div>
      <MobileNav setOpen={setOpen} openMobileNav={openMobileNav} />
    </header>
  );
};

export default Header;

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuthStore } from "@/utils/store/auth";

export function MobileNav({
  openMobileNav,
  setOpen,
}: {
  openMobileNav: boolean;
  setOpen: any;
}) {
  const { theme, setTheme } = useTheme();
  const { user, accessToken, logout } = useAuthStore();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname !== "/auth/sign-in") {
      if (!(accessToken && user)) navigate("/auth/sign-in");
    }
  }, [user, accessToken, pathname]);

  eaderLinks: [];
  return (
    <Sheet onOpenChange={setOpen} open={openMobileNav}>
      <SheetTrigger asChild className=" sm:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col  sm:hidden ">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-6 w-fit  items-center mx-auto mt-8">
            <div className="btn btn_header" onClick={() => {}}></div>
          </div>
          {user && accessToken ? (
            <Button
              size={"sm"}
              variant={"outline"}
              className="capitalize w-full"
              onClick={() => {
                setOpen(false);
                logout();
                navigate("/");
              }}
            >
              log out
            </Button>
          ) : (
            <div className="flex flex-col   gap-4  ">
              <Button
                size={"sm"}
                variant={"outline"}
                className="capitalize w-full"
                onClick={() => {
                  setOpen(false);
                  navigate("/auth/signin-user");
                }}
              >
                log in
              </Button>

              <Button
                size={"sm"}
                onClick={() => {
                  if (theme == "light") setTheme("dark");
                  if (theme == "dark") setTheme("light");
                }}
                variant={"outline"}
                className="w-fit mx-auto"
              >
                {theme == "light" ? <Moon /> : <SunMoon />}
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
