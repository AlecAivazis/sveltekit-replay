import { load_AllCharacters } from '$houdini';
import type { LayoutLoad } from './$types';

export const load: LayoutLoad = async (event) => {
	return {
		...(await load_AllCharacters({ event }))
	};
};
