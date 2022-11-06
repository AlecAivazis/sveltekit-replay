<script>
	export let data;
	$: ({ character, characters } = data);
</script>

<h1>character</h1>
{JSON.stringify(character, null, 4)}

<h1>characters</h1>
{JSON.stringify(characters, null, 4)}
