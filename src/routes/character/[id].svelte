<script context="module">
  export const CharacterQueryVariables = ({ page: { params } }) => {
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
        }
      }
    `
  )
</script>

<section>
  <img src={$data.character.image} alt={$data.character.name} />
  <h2>{$data.character.name}</h2>
</section>

<style>
</style>
