<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>{data.post.title} | My SvelteKit App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<article class="prose">
	<h1>{data.post.title}</h1>
	<div>{@html data.post.body}</div>
	<div>
		<p class="space-x-2">
			<a href={`/user/${data.user.id}`}
				><span>{data.user.name}</span><span class="text-sm text-slate-500"
					>@{data.user.username}</span
				></a
			>
		</p>
	</div>
</article>
<div><a href="/blog/">Back to Blog</a></div>
