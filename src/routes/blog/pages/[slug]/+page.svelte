<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Blog(page: {data.currentPage}/{data.pageCount} ) | My SvelteKit App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<h1 class="mb-2 text-2xl font-semibold">Posts</h1>
<p class="text-slate-500">page: {data.currentPage} / {data.pageCount}</p>
<div class="mt-6 space-y-6">
	{#each data.posts as post}
		<Article {post} />
	{/each}
	<nav class="flex justify-center gap-2">
		{#each data.pagesArr as page}
			<a
				class={page === data.currentPage
					? 'px-4 py-2 text-sm font-semibold rounded-lg text-slate-700 bg-slate-200 pointer-events-none'
					: 'px-4 py-2 text-sm font-semibold rounded-lg text-slate-700 bg-slate-100 transition hover:bg-slate-200'}
				href={`/blog/pages/${page}`}
			>
				{page}
			</a>
		{/each}
	</nav>
</div>
