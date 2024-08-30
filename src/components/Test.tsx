import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../api/posts";
import { CreatePost } from "./CreatePost";

export const Test = () => {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <>
      <CreatePost />

      <ul className="max-w-[1000px] w-full">
        {posts?.map((post) => (
          <li key={post.id} className="my-4">
            <div className="flex flex-col">
              <div>
                <span className="font-bold">Title:</span> {post.title}
              </div>
              <div>
                <span className="font-bold">Description:</span> {post.body}
              </div>
            </div>

            <button className="border-2 py-1 px-2">Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
