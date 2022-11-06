<script lang="ts">
	import type { PageData } from './$houdini';

	export let data: PageData;

	$: ({ AllCharacters } = data);
	$: ({ results } = $AllCharacters?.data?.characters);
</script>

<h1>The World of Rick and Morty</h1>

<main class="wrapper">
	{#each results as character}
		<section>
			<a data-sveltekit-prefetch href={`/character2/${character.id}`}>
				<img src={character.image} alt={character.name} />
				<h2>{character.name}</h2>
			</a>
		</section>
	{/each}
</main>

<style>
	h1 {
		font-size: 3em;
		text-align: center;
	}
	.wrapper {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	section {
		width: 200px;
		margin: 0 10px;
	}
	img {
		width: 100%;
	}
	h2 {
		margin: 0;
	}
</style>
