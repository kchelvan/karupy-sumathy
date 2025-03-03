import ProjectList from '@/components/complex/project-list';
import { fetchAllTable, UseFetchFilmResponse } from '@/utils/helpers';
import React from 'react';

const ShortFilmListPage = async () => {
	const { tableData }: UseFetchFilmResponse = await fetchAllTable({
		tableName: 'shortFilm',
	});

	return <ProjectList title='Short Films' projects={tableData} />;
};

export default ShortFilmListPage;
