<script lang="ts">
	import { fade } from 'svelte/transition';
	let show = false;
</script>

<div class="prose">
	<h1>Home</h1>
	<div><a href="/blog">Blog</a></div>
	<div><a href="/user">User</a></div>
	<div><a href="/photos">Photos</a></div>

	{#if show}
		<p transition:fade>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea explicabo deleniti repudiandae
			exercitationem similique. Veritatis temporibus dolore nostrum voluptates error. Commodi
			quisquam quae beatae dignissimos numquam amet delectus sapiente optio.
		</p>
	{/if}

	<button on:click={() => (show = !show)}>Show</button>
</div>
