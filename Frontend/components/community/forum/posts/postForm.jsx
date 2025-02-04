"use client";

import { useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
} from "../../../ui/form";
import FileUploader from "./fileUploader";
import { useForm } from "react-hook-form";
import { Button } from "../../../ui/button";
import { Input } from "../../../ui/input";
import { Textarea } from "../../../ui/textarea";
import { useUploadThing } from "@/lib/uploadthing/uploadthing";
import { createPost } from "@/lib/actions/posts.actions";
import { cn } from "@/lib/utils";
import { useToast } from "../../../ui/use-toast";

const formSchema = z.object({
  title: z
    .string()
    .min(10, {
      message: "Title must be at least 10 characters long",
    })
    .max(255, {
      message: "Title must be at most 255 characters long",
    }),
  body: z
    .string()
    .min(20, {
      message: "Body must be at least 20 characters long",
    })
    .max(2000, {
      message: "Body must be at most 2000 characters long",
    }),
  media: z.string().optional(),
  tags: z.string().optional(),
});

const PostForm = ({ userId, type, setLoading, loading }) => {
  const [files, setFiles] = useState([]);
  const { startUpload } = useUploadThing("imageUploader");
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      body: "",
      tags: "",
    },
  });
  const { toast } = useToast();

  const onSubmit = async (data) => {
    setLoading(true);
    let uploadedMediaUrl = data.media;
    if (files.length) {
      const uploadedMedia = await startUpload(files);
      if (!uploadedMedia) return;
      uploadedMediaUrl = uploadedMedia[0].url;
    }
    if (type === "Create") {
      try {
        const newPost = await createPost({
          post: {
            author: userId,
            title: data.title,
            body: data.body,
            media: uploadedMediaUrl,
            tags: data.tags.split(",").map((tag) => tag.trim()),
          },
          path: "/profile/[...id]/page",
        });
        if (newPost) {
          form.reset();
          setLoading(false);
          toast("Post created successfully");
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Oops! Something went wrong",
          description: "Failed to create post. Please try again.",
        });
      }
    }
    setLoading(false);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4 flex items-start justify-start flex-col md:flex-row-reverse md:space-x-8 w-full mx-auto px-4 sm:px-0"
      >
        <FormField
          control={form.control}
          name="media"
          render={({ field }) => (
            <FormItem className="w-full md:w-1/2 md:ml-8">
              <FormControl>
                <FileUploader
                  onFieldChange={field.onChange}
                  mediaUrl={field.value}
                  setFiles={setFiles}
                />
              </FormControl>
              <FormDescription>
                {form.formState.errors.media &&
                  form.formState.errors.media?.message}
              </FormDescription>
            </FormItem>
          )}
        />
        <div className="flex flex-col space-y-8 w-full md:w-1/2">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <Input placeholder="Title" className="input" {...field} />
                    <span
                      className={cn(
                        "text-sm",
                        "text-muted-foreground text-right w-full -mt-2 block",
                        field.value.length > 255 ? "text-red-500" : ""
                      )}
                    >
                      {field.value.length > 0
                        ? `${field.value.length}/255`
                        : ""}
                    </span>
                  </>
                </FormControl>
                <FormDescription>
                  {form.formState.errors.title &&
                    form.formState.errors.title?.message}
                </FormDescription>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="body"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <>
                    <Textarea
                      rows={10}
                      placeholder="Body"
                      className="input md:min-h-[200px]"
                      {...field}
                    />
                    <span
                      className={cn(
                        "text-sm",
                        "text-muted-foreground text-right w-full -mt-2 block",
                        field.value.length > 2000 ? "text-red-500" : ""
                      )}
                    >
                      {field.value.length > 0
                        ? `${field.value.length}/2000`
                        : ""}
                    </span>
                  </>
                </FormControl>
                <FormDescription>
                  {form.formState.errors.body &&
                    form.formState.errors.body?.message}
                </FormDescription>
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:min-w-[256px] sm:max-w-[300px] primary-btn self-start disabled:cursor-progress disabled:opacity-50 transition-all duration-500 ease-linear"
          >
            Post
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
