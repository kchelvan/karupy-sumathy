import StoryList from '@/components/complex/story-list';
import { fetchAllTable, UseFetchPostResponse } from '@/utils/helpers';
import React from 'react';

const PoemListPage = async () => {
	const { tableData }: UseFetchPostResponse = await fetchAllTable({
		tableName: 'poem',
	});

	return <StoryList title='Poems' projects={tableData} type='poem' />;
};

export default PoemListPage;
