import { AddLyricForm } from "@/components/form /add-lyric-from";
import { LyricPreviewForm } from "@/components/form /lyric-preview-from";
import { useToast } from "@/components/ui/use-toast";
import { formatLyricFromForm } from "@/utils/constants/lyric";
import { AddLyricSchema } from "@/utils/schemas/add-lyric-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AddLyricPage = () => {
  const [preview, setPreview] = useState<boolean>(false);
  const form = useForm<z.infer<typeof AddLyricSchema>>({
    resolver: zodResolver(AddLyricSchema),
  });
  const { toast } = useToast();
  const onSubmit = (values: z.infer<typeof AddLyricSchema>) => {
    values.lyric = formatLyricFromForm(values.lyric);

    toast({
      title: " Mezmur Added ",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
    setPreview(false);
    form.reset({ singerName: "", title: "", category: "", lyric: "" });
  };
  const onPreview = (_: z.infer<typeof AddLyricSchema>) => {
    setPreview(true);
  };
  return (
    <section className="px-4 sm:px-8 lg:px-32 h-[90%]  overflow-auto py-2 sm:py-4 hideable_thin_scrollbar">
      {preview ? (
        <LyricPreviewForm
          setPreview={setPreview}
          onSubmit={onSubmit}
          form={form}
        />
      ) : (
        <AddLyricForm form={form} onPreview={onPreview} onSubmit={onSubmit} />
      )}
    </section>
  );
};

export default AddLyricPage;
