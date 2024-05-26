import { useMemo } from "react";
import { WordReader } from "./word-reader";
import { breakLine } from "@/utils/constants/lyric";

const LineReader = (props: { line: string }) => {
  const { line } = props;
  const words = useMemo(() => {
    return breakLine(line);
  }, [line]);
  return (
    <p className="py-1">
      {words.length > 0 &&
        words.map((word: string, index: number) => (
          <WordReader word={word} key={index} />
        ))}
    </p>
  );
};

export { LineReader };
