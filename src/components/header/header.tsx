import { HeaderLink } from "../link/header-link";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Menu, Moon, SunMoon } from "lucide-react";
import { useTheme } from "@/utils/providers/theme-provider";
import { useNavigate } from "react-router-dom";
import { LogoHeader } from "./logo-header";

export const Header = () => {
  const [auth, _] = useState(false);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();

  return (
    <header className="bg-card border-b flex justify-between items-center  px-4 sm:px-8 xl:px-32 sticky top-0 py-2 h-[9%] sm:auto ">
      <div className="flex items-center gap-2">
        <LogoHeader />
        <p className="uppercase font-bold text-xs lg:text-sm">health tracker</p>
      </div>
      <div className="hidden md:flex gap-16 items-center">
        <div className="flex gap-8">
          {headerLinks.map((link, index) => (
            <HeaderLink link={link.link} linkText={link.linkText} key={index} />
          ))}
          <div className="btn btn_header" onClick={() => {}}></div>
        </div>
        {auth ? (
          <Avatar>
            <AvatarImage src="/image/user.png" alt="@shadcn" sizes="4" />
            <AvatarFallback>NF</AvatarFallback>
          </Avatar>
        ) : (
          <div className="flex gap-4">
            <Button
              size={"sm"}
              variant={"outline"}
              className="capitalize"
              onClick={() => navigate("/auth/signin")}
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
      <a href="/" className="block md:hidden">
        <Menu />
      </a>
    </header>
  );
};

const headerLinks: HeaderLinkProps[] = [
  { link: "/", linkText: "home" },
  { link: "/all-songs", linkText: "all songs" },
  { link: "/favorite", linkText: "favorite" },
  { link: "/category", linkText: "categories" },
  { link: "/add-lyric", linkText: "add lyrics" },
  { link: "/", linkText: "" },
];

export default Header;