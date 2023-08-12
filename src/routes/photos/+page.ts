import type { Photo } from '$lib/types/Photo';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	const res = await fetch('https://jsonplaceholder.typicode.com/photos?_limit=20');
	const photos: Photo[] = await res.json();
	return { photos };
};
