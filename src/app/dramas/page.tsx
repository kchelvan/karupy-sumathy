import ProjectList from '@/components/complex/project-list';
import { fetchAllTable, UseFetchFilmResponse } from '@/utils/helpers';
import React from 'react';

const DramaListPage = async () => {
	const { tableData }: UseFetchFilmResponse = await fetchAllTable({
		tableName: 'drama',
	});

	return <ProjectList title='Dramas' projects={tableData} />;
};

export default DramaListPage;
