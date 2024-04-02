import { UserType, type PostType } from "./types";

async function getPosts(token: string): Promise<PostType[]> {
  const url = "http://localhost:4000/posts?_sort=id&_order=desc";
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const posts = await response.json();

  return posts;
}

async function createPost(
  token: string,
  body: { message: string }
): Promise<void> {
  const url = "http://localhost:4000/posts";

  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
}

async function removePost(token: string, id: number): Promise<void> {
  const url = `http://localhost:4000/posts/${id}`;

  await fetch(url, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

async function getUser(token: string): Promise<UserType> {
  const url = "http://localhost:4000/user";

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return await response.json();
}

export { getPosts, createPost, removePost, getUser };
