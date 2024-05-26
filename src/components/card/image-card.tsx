import { cn } from "@/lib/utils";

const ImageCard = ({
  className,
  imgClassName,
  src,
  alt = "image",
}: {
  className: string;
  imgClassName?: string;
  src: string;
  alt: string;
}) => {
  return (
    <div className={cn(className, "relative")}>
      <img
        src={src}
        className={cn(
          imgClassName,
          "absolute top-0 left-0  w-full h-full object-fill"
        )}
        alt={alt}
      />
    </div>
  );
};

export default ImageCard;
