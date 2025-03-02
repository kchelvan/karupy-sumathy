import { FilmType } from '@/utils/types';

export interface UseFetchFilmResponse {
	films: FilmType[];
}

export const fetchFilms = async ({ route }: { route: string }) => {
	const res = await fetch(`${process.env.API_URL}${route}`);
	// eslint-disable-next-line no-console
	console.log('debug error: res', res, `${process.env.API_URL}${route}`);
	const respData = await res.json();
	// eslint-disable-next-line no-console
	console.log(
		'debug error: respData',
		respData,
		`${process.env.API_URL}${route}`
	);
	return { films: respData?.data || [] };
};
