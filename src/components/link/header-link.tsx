// import { ReactElement } from "react";

import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
const HeaderLink = ({ link, linkText }: { linkText: string; link: string }) => {
  const location = useLocation();
  return (
    <a
      href={link}
      className={cn(
        "capitalize text-link text-sm  ",
        location.pathname == link
          ? " text-foreground"
          : "text-muted-foreground   hover:text-foreground/80"
      )}
    >
      {linkText}
    </a>
  );
};

const HeaderLinkMobile = ({
  Icon,
  link,
  linkText,
}: {
  Icon: React.ComponentType<React.ComponentProps<any>>;
  linkText: string;
  link: string;
}) => {
  return (
    <a href={link}>
      <Icon className="" />
      <p className="">{linkText}</p>
    </a>
  );
};

export { HeaderLinkMobile, HeaderLink };
