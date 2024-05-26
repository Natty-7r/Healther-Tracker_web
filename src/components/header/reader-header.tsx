import { Heart, HeartOff, Share2, Undo } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ReaderHeader = ({ songTitle }: ReaderHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full   justify-between items-center py-5 bg-secondary px-4 sm:px-8 lg:px-32 sticky top-0 z-[1] h-[10%]">
      <Undo
        className="text-secondary-foreground hover:text-primary"
        onClick={() => {
          navigate(-1);
        }}
      />
      <p className="capitalize  font-bold text-lg md:text-xl ls:text-3xl">
        {songTitle}{" "}
      </p>

      <div className="flex items-center gap-6">
        {true ? (
          <Heart className="text-primary " onClick={() => {}} />
        ) : (
          <HeartOff
            className="text-secondary-foreground  hover:text-primary"
            onClick={() => {}}
          />
        )}
        <Share2 className="text-secondary-foreground hover:text-primary" />
      </div>
    </div>
  );
};

export { ReaderHeader };
