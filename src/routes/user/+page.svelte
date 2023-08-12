<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>User | My SvelteKit App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<h1 class="mb-2 text-2xl font-semibold">Users</h1>
{#each data.users as user}
	<article class="relative p-6 mb-6 transition bg-white rounded-lg shadow hover:bg-slate-100">
		<h2 class="mb-2 text-xl font-semibold">{user.name}</h2>
		<p class="text-slate-500">{user.username}</p>
		<a class="stretched-link" href={`/user/${user.id}`}>Read more</a>
	</article>
{/each}
