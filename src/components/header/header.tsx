import { HeaderLink } from "../link/header-link";

import { useState } from "react";
import { Button } from "../ui/button";
import { Menu, Moon, SunMoon } from "lucide-react";
import { useTheme } from "@/utils/providers/theme-provider";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "./logo-header";

export const Header = () => {
  const { isAuth, role, logout } = useUserStore();
  const [openMobileNav, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const navigate = useNavigate();
  const headerLinks =
    role == "DOCTOR"
      ? doctorheaderLinks
      : role == "USER"
      ? userheaderLinks
      : [];
  return (
    <header className="bg-card border-b flex justify-between items-center  px-4 sm:px-8 xl:px-32 sticky top-0 py-2 h-[9%] sm:auto ">
      <div className="flex items-center gap-2">
        <LogoHeader />
        <p className="uppercase font-bold text-xs lg:text-sm">health tracker</p>
      </div>
      <div className="hidden md:flex gap-16 items-center">
        <div className="flex gap-8">
          {isAuth &&
            headerLinks?.map((link, index) => (
              <HeaderLink
                link={link.link}
                linkText={link.linkText}
                key={index}
              />
            ))}
          <div className="btn btn_header" onClick={() => {}}></div>
        </div>
        {isAuth ? (
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
              onClick={() => navigate("/auth/signin-user")}
            >
              log in
            </Button>
            <Button
              size={"sm"}
              className="capitalize"
              onClick={() => navigate("/auth/signup")}
            >
              sign up
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

const doctorheaderLinks: HeaderLinkProps[] = [
  { link: "/", linkText: "home" },
  { link: "/users", linkText: "users" },
  { link: "/create-user", linkText: "add user" },
];
const userheaderLinks: HeaderLinkProps[] = [
  { link: "/", linkText: "home" },
  { link: "/user-detail", linkText: "user data" },
];

export default Header;

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useUserStore } from "@/utils/store/user";

export function MobileNav({
  openMobileNav,
  setOpen,
}: {
  openMobileNav: boolean;
  setOpen: any;
}) {
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const { isAuth, role, logout } = useUserStore();

  const headerLinks =
    role == "DOCTOR"
      ? doctorheaderLinks
      : role == "USER"
      ? userheaderLinks
      : [];
  return (
    <Sheet onOpenChange={setOpen} open={openMobileNav}>
      <SheetTrigger asChild className=" sm:hidden">
        <Menu />
      </SheetTrigger>
      <SheetContent className="flex flex-col  sm:hidden ">
        <div className="flex flex-col gap-8 ">
          <div className="flex flex-col gap-6 w-fit  items-center mx-auto mt-8">
            {isAuth &&
              headerLinks?.map((link, index) => (
                <HeaderLink
                  link={link.link}
                  linkText={link.linkText}
                  key={index}
                />
              ))}
            <div className="btn btn_header" onClick={() => {}}></div>
          </div>
          {isAuth ? (
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
                className="capitalize"
                onClick={() => {
                  setOpen(false);
                  navigate("/auth/signup");
                }}
              >
                sign up
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
