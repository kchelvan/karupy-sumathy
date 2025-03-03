import ProjectList from '@/components/complex/project-list';
import { fetchAllTable } from '@/utils/helpers';
import { UseFetchFilmResponse } from '@/utils/types';
import React from 'react';

const FeatureFilmListPage = async () => {
	const { tableData }: UseFetchFilmResponse = await fetchAllTable({
		tableName: 'featureFilm',
	});

	return <ProjectList title='Feature Films' projects={tableData} />;
};

export default FeatureFilmListPage;
