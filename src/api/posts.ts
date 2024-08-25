export type TPost = {
  id: number;
  title: string;
};

export const getPosts = async (): Promise<TPost[]> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};

export const createPost = async (newPost: TPost): Promise<TPost> => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  return response.json();
};
