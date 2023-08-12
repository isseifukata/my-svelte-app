<script lang="ts">
	import Article from '$lib/components/Article.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.user.name} | My SvelteKit App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<article class="prose">
	<h1>{data.user.name}</h1>
	<p class="text-slate-500">{data.user.username}</p>
	<div>
		<h2>このライターが書いた記事</h2>
		<div class="grid grid-cols-2 gap-6">
			{#each data.posts as post}
				<Article {post} />
			{/each}
		</div>
	</div>
</article>
<div><a href="/blog/">Back to Blog</a></div>
