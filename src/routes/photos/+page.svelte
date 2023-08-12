<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<svelte:head>
	<title>Photos | My SvelteKit App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<h1 class="mb-2 text-2xl font-semibold">Photos</h1>

<div class="grid grid-cols-8">
	{#each data.photos as photo}
		<img class="w-full" src={photo.thumbnailUrl} alt={photo.title} width="150" height="150" />
	{/each}
</div>
