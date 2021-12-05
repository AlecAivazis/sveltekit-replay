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

  const {
    character: { image, name },
  } = $data
</script>

<section>
  <img src={image} alt={name} />
  <h2>{name}</h2>
</section>

<style>
</style>
