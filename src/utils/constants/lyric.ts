/* ***
 Function format the lyric for readery


*/

export const breakLyric = (lyric: string): string[] => {
  return lyric.split("#azmach");
};

export const breakAzmach = (azmach: string): string[] => {
  return azmach.split("#line");
};

export const breakLine = (line: string): string[] => {
  return line.split(" ");
};

/* ***
 Function to get the lyic from the form 


*/
const joinLinesToAzmachFromForm = (lines: string[]): string => {
  const trmimedLines = lines.map((line) => line.trim());
  return trmimedLines.join("#line");
};
const joinAzmachsToLyricFromForm = (azmachs: string[]): string => {
  const azmachsStrings = azmachs.map((azmach: string) => {
    const lines = azmach.split("\n");
    return joinLinesToAzmachFromForm(lines);
  });
  return azmachsStrings.join("#azmach");
};

export const formatLyricFromForm = (lyric: string) => {
  const azmachs = lyric.split("\n\n");
  return joinAzmachsToLyricFromForm(azmachs);
};

export const dummyLric = {
  songId: "lamesgenehYeneGeta",
  lyric: `  እንደ እግዚአብሔር ያለ ማንም የለምና #line
  እልል በሉ ቁሙ ለምስጋና /2/ #azmach
  ባሕር ተከፈለ እስኪታይ መሬቱ#line
  ፈርዖን ወደቀ አልሰራም ትምክህቱ#line
  ደካሞቹም ጸንተው ተራመዱ#line
  ኃይለኞቹም ይኸው ተዋረዱ
  #azmach
  የኢያሪኮ ቅጥር የማይደፈረው#line
  ይኸው ፈራርሶ የሰው እጅ ሳይነካው#line
  ኃይለኞቹም ቢበረታቱብን#line
  እንጸናለን በእርሱ ተደግፈን
    #azmach
  የተወረወረው የጠላታችን ጦር#line
  ሜዳ ላይ ወደቀ ጋሻ ሆኖ እግዚአብሔር#line
  ለሥላሴ ይድረስ ምስጋናችን #line
  ተሸነፈ አዳኝ ጠላታችን
   #azmach
  ባሕር ላይ ሲራመድ ሞገስ አለው እርሱ#line
  በግርማው ሲነሳ ጸጥ ይላል ነፋሱ#line
  የድንግል ልጅ እኛ የምናመልከው#line
  ከሀሊ ነው የለም የሚሳነው#line`,
};

// እንደ እግዚአብሔር ያለ ማንም የለምና
// እልል በሉ ቁሙ ለምስጋና /2/
// ባሕር ተከፈለ እስኪታይ መሬቱ
// ፈርዖን ወደቀ አልሰራም ትምክህቱ
// ደካሞቹም ጸንተው ተራመዱ
// ኃይለኞቹም ይኸው ተዋረዱ

// የኢያሪኮ ቅጥር የማይደፈረው
// ይኸው ፈራርሶ የሰው እጅ ሳይነካው
// ኃይለኞቹም ቢበረታቱብን
// እንጸናለን በእርሱ ተደግፈን

// የተወረወረው የጠላታችን ጦር
// ሜዳ ላይ ወደቀ ጋሻ ሆኖ እግዚአብሔር
// ለሥላሴ ይድረስ ምስጋናችን
// ተሸነፈ አዳኝ ጠላታችን

// ባሕር ላይ ሲራመድ ሞገስ አለው እርሱ
// በግርማው ሲነሳ ጸጥ ይላል ነፋሱ
// የድንግል ልጅ እኛ የምናመልከው
// ከሀሊ ነው የለም የሚሳነው
