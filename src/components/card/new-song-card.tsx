import { BadgePlus, Clock, Heart, HeartOff, Trash } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
import ConfirmDialog from "../dialog/confirm-dailog";

const NewSongCard = ({ title, artistName, favorite }: SongCardProps) => {
  const navigate = useNavigate();
  const [modalSate, setModalState] = useState(false);

  const handleSongSelection = (action: string | null) => {
    console.log("ddddddddddddddd");
    if (action == "see") navigate("/lyrics");
  };
  return (
    <div
      className="px-4  flex items-start sm:items-center justify-between border-b border-b-border/30  py-1 sm:py-2 lg:py-3   hover:bg-muted/50 group"
      onClick={(_) => handleSongSelection("see")}
    >
      <div className="flex gap-4 w-1/2  ">
        <BadgePlus className="text-destructive/50 my-1" />
        <div className="">
          <p className="font-bold text-sm  lg:text-lg ">{title}</p>
          <p className="text-muted-foreground capitalize text-xs lg:text-sm">
            {artistName}
          </p>
        </div>
      </div>
      <div className="flex gap-2 sm:items-center">
        <div className="">
          <p className="capitalize mb-2 text-sm ">natty fekadu</p>
          <div className="flex gap-2 text-xs items-center">
            <Clock className="h-3 w-3" /> two days ago
          </div>
        </div>
        <Trash
          className="self-start w-4 lg:w-5 text-destructive translate-x-[1000px]  group-hover:translate-x-[0px] duration-200 group-hover:opacity-1 group/trash"
          onClick={(e) => {
            e.stopPropagation();
            setModalState(true);
          }}
        />
        <ConfirmDialog
          children={<Trash />}
          openState={modalSate}
          setModalState={setModalState}
          onConfrim={() => {}}
          title="Clear The Song"
          description={`are you sure you want to clear the song ${title}`}
        />
      </div>
    </div>
  );
};

export default NewSongCard;
