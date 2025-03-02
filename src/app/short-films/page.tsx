import ProjectList from '@/components/complex/project-list';
import { useFetchFilm, UseFetchFilmResponse } from '@/hooks/use-fetch-film';
import React from 'react';

const ShortFilmListPage = async () => {
	const { films }: UseFetchFilmResponse = await useFetchFilm({
		route: 'short-film',
	});

	return <ProjectList title='Short Films' projects={films} />;
};

export default ShortFilmListPage;
