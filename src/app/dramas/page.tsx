import ProjectList from '@/components/complex/project-list';
import { fetchAllTable } from '@/utils/helpers';
import { UseFetchFilmResponse } from '@/utils/types';
import React from 'react';

const DramaListPage = async () => {
	const { tableData }: UseFetchFilmResponse = await fetchAllTable({
		tableName: 'drama',
	});

	return <ProjectList title='Dramas' projects={tableData} />;
};

export default DramaListPage;
