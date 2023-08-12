import type { PageLoad } from './$types';
import type { Post } from '$lib/types/Post';
import convertPageCountToArray from '$lib/utilities/convertPageCountToArray';

export const load: PageLoad = async ({ fetch, params }) => {
	// ページ番号を取得
	const currentPage = Number(params.slug);

	// 1ページあたりの表示件数
	const postsPerPage = 10;

	// 全件を取得
	const allPostsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
	const allPosts: Post[] = await allPostsRes.json();

	// 表示する記事
	const posts = allPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

	// 総ページ数
	const pageCount = Math.ceil(allPosts.length / postsPerPage);

	// ページ数を配列に変換
	const pagesArr = convertPageCountToArray(allPosts.length, postsPerPage);

	return { posts, pageCount, pagesArr, currentPage };
};
