import type { User } from '$lib/types/User';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users');
	const users: User[] = await res.json();
	return { users };
}) satisfies PageLoad;
