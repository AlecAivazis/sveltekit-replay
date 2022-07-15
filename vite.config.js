import { sveltekit } from '@sveltejs/kit/vite'
import { resolve } from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  resolve: {
    alias: {
      $houdini: resolve('.', '$houdini'),
    },
  },
  server: {
    fs: {
      // Allow serving files from one level up to the project root
      // posts, copy
      allow: ['..'],
    },
  },
}

export default config
