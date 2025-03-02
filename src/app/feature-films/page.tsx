import ProjectList from '@/components/complex/project-list';
import { fetchFilms, UseFetchFilmResponse } from '@/utils/helpers';
import React from 'react';

const FeatureFilmListPage = async () => {
	const { films }: UseFetchFilmResponse = await fetchFilms({
		route: 'feature-film',
	});

	return <ProjectList title='Feature Films' projects={films} />;
};

export default FeatureFilmListPage;
