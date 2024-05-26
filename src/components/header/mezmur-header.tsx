import { Undo } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SongsHeader = ({
  title,
  hasBack,
}: {
  title: string;
  hasBack?: boolean;
}) => {
  const navigate = useNavigate();
  return (
    <h1 className="sm:px-8  lg:px-32 w-full bg-secondary mx-auto flex items-center justify-center uppercase tracking-wide  text-center  mb-4 sticky top-0 sticky  h-[9%] sm:text-xl font-bold relative">
      {hasBack && (
        <Undo
          className="text-secondary-foreground hover:text-primary absolute left-[5%] sm:left-[15%]"
          onClick={() => {
            navigate(-1);
          }}
        />
      )}
      {title}
    </h1>
  );
};

export { SongsHeader };
