import { FilmType } from '@/utils/types';

export interface UseFetchFilmResponse {
	films: FilmType[];
}

export const fetchFilms = async ({ route }: { route: string }) => {
	const res = await fetch(`${process.env.API_URL}${route}`);
	const respData = await res.json();

	return { films: respData?.data || [] };
};
