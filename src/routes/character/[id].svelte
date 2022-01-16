<script context="module">
  export const CharacterQueryVariables = ({ params }) => {
    const { id } = params
    return {
      id,
    }
  }
</script>

<script>
  import { graphql, query } from '$houdini'

  const { data } = query(
    graphql`
      query CharacterQuery($id: ID!) {
        character(id: $id) {
          name
          image
          status
          species
          location {
            name
            type
          }
          episode {
            name
          }
        }
      }
    `
  )

  const {
    character: { image, name, status, species, location, episode },
  } = $data
</script>

<section>
  <img src={image} alt={name} />
  <h2>{name}</h2>
  <p>{status}</p>
  <p>{species}</p>
  <p>
    <span>{location.name}</span> - <span>{location.type}</span>
  </p>
  Appeared in :
  <ul>
    {#each episode as ep}
      <li>{ep.name}</li>
    {/each}
  </ul>
</section>

<style>
</style>
