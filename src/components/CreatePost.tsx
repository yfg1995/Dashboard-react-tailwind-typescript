import { useMutation, useQueryClient } from "@tanstack/react-query";
import { FC, FormEvent, useRef } from "react";
// import { createPost } from "../api/posts";

export interface ICreatePost {}

export const CreatePost: FC<ICreatePost> = () => {
  const titleRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    // mutationFn: createPost,
    onSuccess: (newPost) => {
      // queryClient.setQueryData(["posts", newPost.id], newPost);
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // mutate({
    //   title: titleRef.current!.value,
    //   body: bodyRef.current!.value,
    // });

    titleRef.current!.value = "";
    bodyRef.current!.value = "";
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-10 items-center [&>*]:border-gray-500
"
    >
      <input className="border p-2" id="title" ref={titleRef} />
      <input className="border p-2" id="body" ref={bodyRef} />
      <button className="border-2 py-1 px-2">Create Post</button>
    </form>
  );
};
