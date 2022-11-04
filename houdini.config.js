/** @type {import('houdini').ConfigFile} */
const config = {
	apiUrl: 'https://rickandmortyapi.com/graphql/',
	plugins: {
		'houdini-svelte': {
			client: './src/client'
		}
	}
};

export default config;
