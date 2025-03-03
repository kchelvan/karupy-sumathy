import ProjectList from '@/components/complex/project-list';
import { fetchAllTable } from '@/utils/helpers';
import { UseFetchFilmResponse } from '@/utils/types';
import React from 'react';

const ShortFilmListPage = async () => {
	const { tableData }: UseFetchFilmResponse = await fetchAllTable({
		tableName: 'shortFilm',
	});

	return <ProjectList title='Short Films' projects={tableData} />;
};

export default ShortFilmListPage;
