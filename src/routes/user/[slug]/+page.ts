import type { Post } from '$lib/types/Post';
import type { User } from '$lib/types/User';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
	const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${params.slug}`);
	const user: User = await userRes.json();

	const postsRes = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
	const posts: Post[] = await postsRes.json();

	return { user, posts };
};
