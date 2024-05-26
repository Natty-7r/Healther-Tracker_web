import { Heart, HeartOff } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SongCard = ({ title, artistName, favorite }: SongCardProps) => {
  const [fav, setFav] = useState<Favorite>(favorite);
  const navigate = useNavigate();
  const toggleFavValue = (e: any) => {
    e.stopPropagation();
    if (fav == "fav") setFav("nofav");
    if (fav == "nofav") setFav("fav");
  };

  const handleSongSelection = () => {
    navigate("/lyrics");
  };
  return (
    <div
      className="px-4  flex items-center justify-between  py-1 sm:py-2 lg:py-3 border-b"
      onClick={handleSongSelection}
    >
      <div className="">
        <p className="font-bold text-lg ">{title}</p>
        <p className="text-muted-foreground capitalize">{artistName}</p>
      </div>

      {fav == "fav" ? (
        <Heart
          className="text-primary"
          strokeWidth={3}
          onClick={toggleFavValue}
        />
      ) : (
        <HeartOff
          className="text-muted-foreground/70 hover:text-primary/80"
          onClick={toggleFavValue}
        />
      )}
    </div>
  );
};

export { SongCard };
