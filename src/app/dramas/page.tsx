import ProjectList from '@/components/complex/project-list';
import { fetchFilms, UseFetchFilmResponse } from '@/utils/helpers';
import React from 'react';

const DramaListPage = async () => {
	const { films }: UseFetchFilmResponse = await fetchFilms({
		tableName: 'drama',
	});

	return <ProjectList title='Short Films' projects={films} />;
};

export default DramaListPage;
