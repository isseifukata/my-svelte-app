import type { PageLoad } from './$types';
import type { Post } from '$lib/types/Post';
import type { User } from '$lib/types/User';

export const load: PageLoad = async ({ fetch, params }) => {
	const postRes = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
	const post: Post = await postRes.json();

	const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`);
	const user: User = await userRes.json();

	return { post, user };
};
