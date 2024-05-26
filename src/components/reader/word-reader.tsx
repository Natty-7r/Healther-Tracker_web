import { cn } from "@/lib/utils";

const highlightWords = ["በኢየሱስ", "ክርስቶስ", "እግዚአብሔር", "ስላሴ", "ሥላሴ", "ማርያም"];
const isHighlghted = (text: string) => {
  return highlightWords.some((highlightWord: string) => {
    return text.includes(highlightWord);
  });
};
const WordReader = (props: { word: string }) => {
  const { word } = props;
  const isWordHighlghted = isHighlghted(word);
  return (
    <span className={cn("lg:text-xl", isWordHighlghted && "text-primary")}>
      {word}{" "}
    </span>
  );
};

export { WordReader };
