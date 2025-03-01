type HeaderLinkProps = { linkText: string; link: string };
type MobileFooterLinkProps = {
  linkText: string;
  link: string;
  Icon: React.ComponentType<React.ComponentProps<any>>;
};

// line
// type ReaderSong = {
//     azmachas:
// };

type Word = string;

type Line = Word[];

type Azmach = Line[];

type ReaderLyric = Azmach[];

type Song = {
  id: string;
  title: string;
  categories: string[];
  artistId: string;
  favorite: Favorite;
};

type Lyric = {
  songId: string;
  lyric: ReaderLyric;
};

type PreviewHeaderProps = {
  songId: string;
  // songTitle: string;
  editing: boolean;
  setEditing: Function;
  onSubmit: any;
  field: any;
  handleGoBack: Function;
};

type ReaderHeaderProps = {
  songId: string;
  songTitle: string;
  categories: string[];
};

type Favorite = "fav" | "nofav";

type SongCardProps = {
  title: string;
  artistName: string;
  songId: string;
  favorite: Favorite;
};

type PageData = {
  path: string;
  Page: React.ComponentType<React.ComponentProps<any>>;
};

type NewMezmur = {
  title: string;
  singerName: string;
  category: string;
  lyric: string;
};
type LyricPreviewFormProps = {
  onSubmit: any;
  setPreview: any;
  form: any;
};

interface UserData {
  id: string;
  first_name: string;
  last_name: string;
  controller_id: string;
  created_at: string;
  doctor_id: string;
}

type TaskPaginationProps = {
  page: number;
  totalPages: number;
  nextPage: number | null;
  previousPage: number | null;
  onPaginate: (page: number) => void;
};
