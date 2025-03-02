import { FilmType } from '@/utils/types';

export interface UseFetchFilmResponse {
	films: FilmType[];
}

export const fetchFilms = async ({ route }: { route: string }) => {
	const respData = await fetch(`${process.env.API_URL}${route}`)
		.then((res) => {
			// eslint-disable-next-line no-console
			console.log('debug: res', res);
			return res.json();
		})
		.catch((err) => {
			// eslint-disable-next-line no-console
			console.log('err', err);
			throw err;
		});
	// eslint-disable-next-line no-console
	console.log('debug error: res', respData, `${process.env.API_URL}${route}`);
	return { films: respData?.data || [] };
};
