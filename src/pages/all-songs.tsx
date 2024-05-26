import { SongCard } from "@/components/card/song-card";
import { Input } from "@/components/ui/input";
import { dummysongs } from "@/utils/constants/song";

const AllSongsPage = () => {
  return (
    <main className=" sm:px-8 lg:px-32   h-[84%] sm:h-[91%]   ">
      <Input
        className="w-[95%] sm:w-full mx-auto py-6 rounded-full block mb-4 my-2 sticky top-0 sticky top-0 h-[8%]"
        placeholder=" Search by artist name  or song title "
      ></Input>
      <section className="h-[89%]  overflow-auto py-2 sm:py-4 hideable_thin_scrollbar">
        {dummysongs.map((song, index: number) => (
          <SongCard
            key={index}
            title={song.title}
            songId={song.id}
            favorite={song.favorite}
            artistName={song.artistName}
          />
        ))}
      </section>
    </main>
  );
};

export default AllSongsPage;
