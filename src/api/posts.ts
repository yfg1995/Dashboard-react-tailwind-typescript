import { generateRandomUniqueIdNum } from "../helpers/helpers";

export type TPost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// GET
export const getPosts = async (): Promise<TPost[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const responseJson = response.json();

  return responseJson;
};

// POST
// export const createPost = async ({
//   title,
//   body,
// }: {
//   title: string;
//   body: string;
// }): Promise<TPost> => {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userId: 1,
//       id: generateRandomUniqueIdNum(),
//       title,
//       body,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("Network response was not ok");
//   }

//   return response.json();
// };

// DELETE
export const deletePost = async (postId: number): Promise<void> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      method: "DELETE",
    }
  );

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
};
