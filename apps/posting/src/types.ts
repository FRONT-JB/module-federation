import { type User } from "@auth0/auth0-spa-js";

interface Author {
  email: string;
  name: string;
  picture: string;
}

interface PostType {
  id: number;
  message: string;
  createAt: string;
  author: Author;
}

interface UserType extends User {
  view_count: number;
  update_count: number;
}

export type { Author, PostType, UserType };
