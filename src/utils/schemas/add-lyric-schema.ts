import { z } from "zod";

export const AddLyricSchema = z.object({
  title: z.string().min(5, {
    message: "mezmure title  must be at least 5 characters.",
  }),
  singerName: z.string().min(5, {
    message: "singer  name  must be at least 5 characters.",
  }),
  category: z.string().min(4, {
    message: "mezmure catetory must be at least 5 characters.",
  }),
  lyric: z.string().min(30, {
    message: "lyic   must be at least 30 characters.",
  }),
});
