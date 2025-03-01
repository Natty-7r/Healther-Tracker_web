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
