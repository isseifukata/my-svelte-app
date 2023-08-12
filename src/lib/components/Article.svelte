<script lang="ts">
	import type { Post } from '$lib/types/Post';

	export let post: Post;
</script>

<article class="relative p-6 transition bg-white rounded-lg shadow hover:bg-slate-100">
	<h2 class="mb-2 text-xl font-semibold">{post.title}</h2>
	<p>{post.body}</p>
	<a class="stretched-link" href={`/blog/post/${post.id}`}>Read more</a>
</article>
