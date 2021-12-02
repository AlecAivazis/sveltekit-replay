<script context="module">
  import { setEnvironment } from '$houdini'
  import environment from '../environment'

  setEnvironment(environment)
</script>

<slot />
