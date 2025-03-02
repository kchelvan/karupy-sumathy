import { FilmType } from '@/utils/types';

export interface UseFetchFilmResponse {
	films: FilmType[];
}

export const fetchFilms = async ({ route }: { route: string }) => {
	const res = await fetch(`${process.env.VERCEL_URL}/api/${route}`);
	const { data } = await res.json();

	return { films: data };
};
