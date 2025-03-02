import ProjectList from '@/components/complex/project-list';
import { fetchFilms, UseFetchFilmResponse } from '@/utils/helpers';
import React from 'react';

const ShortFilmListPage = async () => {
	const { films }: UseFetchFilmResponse = await fetchFilms({
		tableName: 'shortFilm',
	});

	return <ProjectList title='Short Films' projects={films} />;
};

export default ShortFilmListPage;
