import { ReaderHeader } from "@/components/header/reader-header";
import { AzamachReader } from "@/components/reader/azmach-reader";
import { dummyLric } from "@/utils/constants/lyric";
import { dummysongs } from "@/utils/constants/song";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import { useEffect, useState } from "react";

export const ReaderPage = () => {
  const [azmachs, setAzmach] = useState<string[]>([]);

  const sliceLyricToAzmach = () => {
    const breakenslyrics = dummyLric?.lyric.split("#azmach");
    setAzmach(breakenslyrics);
  };

  useEffect(() => {
    sliceLyricToAzmach();
  }, [dummyLric?.songId]);
  return (
    <main className=" text-center relative  h-[84%] sm:h-[91% ">
      <ReaderHeader songId={dummysongs[0].id} songTitle={dummysongs[0].title} />
      <ScrollArea className="px-4 sm:px-8 lg:px-32 py-2 sm:py-4 md:py-8 overflow-auto h-[90%] ">
        {azmachs && azmachs.length > 0 ? (
          azmachs.map((azmach: string, index: number) => (
            <AzamachReader azmach={azmach} key={index} />
          ))
        ) : (
          <div className="reader_error"> unable to load music lyric </div>
        )}
      </ScrollArea>
    </main>
  );
};

export default ReaderPage;
