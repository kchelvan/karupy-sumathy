import ProjectList from '@/components/complex/project-list';
import { useFetchFilm, UseFetchFilmResponse } from '@/hooks/use-fetch-film';
import React from 'react';

const FeatureFilmListPage = async () => {
	const { films }: UseFetchFilmResponse = await useFetchFilm({
		route: 'feature-film',
	});

	return <ProjectList title='Feature Films' projects={films} />;
};

export default FeatureFilmListPage;
