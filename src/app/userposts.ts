import { Post } from './post';

export interface UserPosts {
    id: number;
    name: string;
    posts: Post[];
}