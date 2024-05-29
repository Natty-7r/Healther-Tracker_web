import { SongCard } from "@/components/card/song-card";
import { SongsHeader } from "@/components/header/mezmur-header";
import { dummysongs } from "@/utils/constants/song";

const FavoriteSongsPage = () => {
  return (
    <main className="   h-[84%] sm:h-[91%]   ">
      <SongsHeader title="Favorite Songs" />
      <section className="px-4 sm:px-8 lg:px-32 h-[90%]  overflow-auto py-2 sm:py-4 hideable_thin_scrollbar">
        {dummysongs.map((song, index: number) => (
          <SongCard
            key={index}
            title={song.title}
            songId={song.id}
            favorite={song.favorite}
            artistName={song.artistId}
          />
        ))}
      </section>
    </main>
  );
};

export default FavoriteSongsPage;
