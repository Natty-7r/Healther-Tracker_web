import { cn } from "@/lib/utils";
import ImageCard from "../card/image-card";

const LogoHeader = ({
  className,
  auth,
}: {
  className?: string;
  auth?: boolean;
}) => {
  return (
    <ImageCard
      className={cn(
        className,
        " aspect-square h-12 lg:h-20 rounded-full ",
        auth && "h-28 lg:h-32 "
      )}
      imgClassName=""
      src={"/images/logo.png"}
      alt="logo image"
    />
  );
};

export { LogoHeader };
