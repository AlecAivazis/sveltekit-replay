import type { CharacterQueryVariables as V } from './$houdini';

export const CharacterQueryVariables: V = async (event) => {
	return {
		id: event.params.id
	};
};
