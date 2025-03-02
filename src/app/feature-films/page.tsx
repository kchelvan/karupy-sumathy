import useFetchFilm from '@/hooks/use-fetch-film';
import { FilmType } from '@/utils/types';
import React from 'react';

const FeatureFilmListPage = async () => {
	const { films } = await useFetchFilm({ route: 'feature-film' });

	return (
		<div>
			{films?.data?.map((film: FilmType) => (
				<div key={film?.id}>{film?.title}</div>
			))}
		</div>
	);
};

export default FeatureFilmListPage;
