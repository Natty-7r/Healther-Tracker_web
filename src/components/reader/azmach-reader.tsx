import { useMemo } from "react";
import { LineReader } from "./lin-reader";
import { breakAzmach } from "@/utils/constants/lyric";

const AzamachReader = ({ azmach }: { azmach: string }) => {
  const lines = useMemo(() => {
    return breakAzmach(azmach);
  }, [azmach]);

  return (
    <div className="my-6">
      {lines.length > 0 &&
        lines.map((line: string, index: number) => (
          <LineReader line={line} key={index} />
        ))}
    </div>
  );
};

export { AzamachReader };
