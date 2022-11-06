export async function load(event) {

	const url = 'https://rickandmortyapi.com/graphql/';
    
	const res = await event.fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `query AllCharacters {
                characters {
                    results {
                        id
                        name
                        image
                    }
                }
            }`
		})
	});
	const characters =  (await res.json()).data;

	const res2 = await event.fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			query: `query CharacterQuery($id: ID!) {
                            character(id: $id) {
                                id
                                name
                }
            }`,
			variables: { id: 2 }
		})
	});
	const character =  (await res2.json()).data;

	console.log('character', character)
	console.log('characters', characters)

    return {
		character,
		characters
	}

}
