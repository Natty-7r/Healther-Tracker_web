"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { PreviewHeader } from "../header/preview-header";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function LyricPreviewForm({
  form,
  onSubmit,
  setPreview,
}: LyricPreviewFormProps) {
  const [editing, setEditing] = useState<boolean>(false);

  const handleGoBack = () => {
    setPreview(false);
    // navigate(-1);
  };

  return (
    <Form {...form}>
      <form className="space-y-2 mb-8  sm:w-3/5 mx-auto">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <PreviewHeader
                  editing={editing}
                  setEditing={setEditing}
                  songId="123"
                  field={field}
                  onSubmit={form.handleSubmit(onSubmit)}
                  handleGoBack={handleGoBack}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem className="flex gap-4 items-baseline">
              <FormLabel className="text-nowrap text-base font-bold text">
                Categories
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="eg. ሊቀ መዘምራን ቴዎድሮስ"
                  {...field}
                  className={cn(
                    "capitalize  text-base md:text-lg lg:text-xl ",
                    !editing &&
                      "border-none outline-none background-transparent"
                  )}
                  // defaultValue={category}
                  disabled={!editing}
                  variant={"visible"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="singerName"
          render={({ field }) => (
            <FormItem className="flex gap-4 items-baseline">
              <FormLabel className="text-nowrap text-base font-bold">
                Singer Name
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="eg. ሊቀ መዘምራን ቴዎድሮስ"
                  {...field}
                  className={cn(
                    "capitalize  text-base md:text-lg lg:text-xl ",
                    !editing &&
                      "border-none outline-none background-transparent"
                  )}
                  // defaultValue={singerName}
                  disabled={!editing}
                  variant={"visible"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lyric"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  placeholder={lyricExample}
                  {...field}
                  className={cn(
                    "capitalize  text-base md:text-lg lg:text-xl py-6 ",
                    "h-[60vh] lg:h-[60vh]  max-h-[55vh] ",
                    !editing &&
                      "border-none outline-none background-transparent text-center"
                  )}
                  // defaultValue={lyric}
                  disabled={!editing}
                  variant={"visible"}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

const lyricExample = ` Eg.
\nለማርያም ለማርያም\nእንዘምራለን ለዘላለም (2)

የተዘጋች ደጅ ለዘላለም
ህዝቅኤል ብሏል ለዘላለም
ንጽህት ናት በእውነት
በፍጹም ድንግል ለዘላለም
አብነት አድርገን ለዘላለም
እኛም እርሱን ለዘላለም
በፍጹም ፍቅር እንዘምራለን (2)
          
የዋሂት ርግብ ለዘላለም ለዘላለም
ሰላም አብሳሪ ለዘላለም
ጨለማ ህይወቴን ለዘላለም
ብርሃንን አብሪ ለዘላለም
እማጸንሻለሁ ለዘላለም
ድንግል ለነብሴ ለዘላለም
አደራ ድንግል አንቺ ነሽ ዋሴ (2)
`;
