import ProjectList from '@/components/complex/project-list';
import { useFetchFilm, UseFetchFilmResponse } from '@/hooks/use-fetch-film';
import React from 'react';

const DramaListPage = async () => {
	const { films }: UseFetchFilmResponse = await useFetchFilm({
		route: 'drama',
	});

	return <ProjectList title='Short Films' projects={films} />;
};

export default DramaListPage;
