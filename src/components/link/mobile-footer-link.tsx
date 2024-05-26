import { cn } from "@/lib/utils";
import { useLocation } from "react-router";
const MobileFooterLink = ({ Icon, link, linkText }: MobileFooterLinkProps) => {
  const location = useLocation();
  return (
    <a
      href={link}
      className={cn(
        " py-1 gap-1 flex flex-col items-center ",
        location.pathname == link ? "" : "text-muted-foreground"
      )}
    >
      <Icon className="w-6" />
      <p className="capitalize text-xs">{linkText}</p>
    </a>
  );
};

export { MobileFooterLink };
