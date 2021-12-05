<script>
  import { graphql, query } from '$houdini'

  const { data } = query(graphql`
    query AllCharacters {
      characters {
        results {
          name
          id
          image
        }
      }
    }
  `)
</script>

<h1>The World of Rick and Morty</h1>
<main>
  {#each $data.characters.results as character}
    <section>
      <a href={`/character/${character.id}`}>
        <img src={character.image} alt={character.name} />
        <h2>{character.name}</h2>
      </a>
    </section>
  {/each}
</main>

<style>
  main {
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
