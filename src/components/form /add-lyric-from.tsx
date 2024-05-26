"use client";

import { Button } from "@/components/ui/button";
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
import { CheckCheck, Eye } from "lucide-react";

export function AddLyricForm({
  form,
  onPreview,
  onSubmit,
}: {
  form: any;
  onSubmit: any;
  onPreview: any;
}) {
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 mb-8 py-6 sm:w-3/5 mx-auto"
      >
        <h1 className="font-bold uppercase mb-4 lg:mb-18 text-lg">
          add new mezmur
        </h1>

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mezmure Title *</FormLabel>
              <FormControl>
                <Input placeholder="eg. ባለዉለታዪ" {...field} className="py-6" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="singerName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Singer Name *</FormLabel>
              <FormControl>
                <Input
                  placeholder="eg. ሊቀ መዘምራን ቴዎድሮስ"
                  {...field}
                  className="py-6"
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
            <FormItem>
              <FormLabel>Category * </FormLabel>
              <FormControl>
                <Input
                  placeholder="eg. የጌታ ,መስቀል"
                  {...field}
                  className="py-6"
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
              <FormLabel>Mezmur lyric</FormLabel>
              <FormControl>
                <Textarea
                  placeholder={lyricExample}
                  {...field}
                  className="h-[47vh] lg:h-[35vh]  max-h-[50vh]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <Button
            onClick={form.handleSubmit(onPreview)}
            type="button"
            variant={"outline"}
            className="block capitalize lg:px-8 lg:text-lg flex gap-2 "
          >
            {" "}
            <Eye className="" />
            preview
          </Button>
          <Button
            type="submit"
            className="block capitalize lg:px-8 lg:text-lg flex gap-2 "
          >
            {" "}
            <CheckCheck className="" />
            add lyric
          </Button>
        </div>
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
