import { FilmType } from '@/utils/types';

export interface UseFetchFilmResponse {
	films: FilmType[];
}

export const useFetchFilm = async ({ route }: { route: string }) => {
	const res = await fetch(`${process.env.BASE_URL}/api/${route}`);
	const { data } = await res.json();

	return { films: data };
};
