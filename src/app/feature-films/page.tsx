import ProjectList from '@/components/complex/project-list';
import { fetchAllTable, UseFetchFilmResponse } from '@/utils/helpers';
import React from 'react';

const FeatureFilmListPage = async () => {
	const { tableData }: UseFetchFilmResponse = await fetchAllTable({
		tableName: 'featureFilm',
	});

	return <ProjectList title='Feature Films' projects={tableData} />;
};

export default FeatureFilmListPage;
