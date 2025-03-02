import { FilmType } from '@/utils/types';

export interface UseFetchFilmResponse {
	films: FilmType[];
}

export const fetchFilms = async ({ route }: { route: string }) => {
	try {
		const res = await fetch(`${process.env.API_URL}${route}`);
		const respData = await res.json();

		return { films: respData?.data || [] };
	} catch (error) {
		console.error(error);
		return { films: [], error: error };
	}
};
