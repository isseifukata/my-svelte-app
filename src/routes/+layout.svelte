<script lang="ts">
	import '$lib/app.css';
	import Header from '$lib/components/Header.svelte';
</script>

<svelte:head>
	<title>My SvelteKit App</title>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div>
	<Header />

	<div class="container px-6 py-10 mx-auto">
		<slot />
	</div>
</div>
