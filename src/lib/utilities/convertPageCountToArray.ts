export default function convertPageCountToArray(allPosts: number, postsPerPage: number) {
	return Array.from({ length: Math.ceil(allPosts / postsPerPage) }, (_, i) => i + 1);
}
