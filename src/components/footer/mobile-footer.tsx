import { Heart, Home, Layers3, Music3, Plus } from "lucide-react";
import { MobileFooterLink } from "../link/mobile-footer-link";

const MobileFooter = () => {
  return (
    <footer className="flex sm:hidden justify-between bg-accent px-2 sm:px-4 py-2 fixed  bottom-0 w-full h-[9%] sm:h-auto">
      {footerLinks.map((footerLink, index: number) => (
        <MobileFooterLink
          key={index}
          link={footerLink.link}
          linkText={footerLink.linkText}
          Icon={footerLink.Icon}
        />
      ))}
    </footer>
  );
};

export default MobileFooter;

const footerLinks: MobileFooterLinkProps[] = [
  { link: "/", linkText: "home", Icon: Home },
  { link: "/lyrics", linkText: "all songs", Icon: Music3 },
  { link: "/favorite", linkText: "favorite", Icon: Heart },
  { link: "/category", linkText: "categories", Icon: Layers3 },
  { link: "/add-lyric", linkText: "add lyrics", Icon: Plus },
];
