import StoryList from '@/components/complex/story-list';
import { fetchAllTable } from '@/utils/helpers';
import { UseFetchPostResponse } from '@/utils/types';
import React from 'react';

const PoemListPage = async () => {
	const { tableData }: UseFetchPostResponse = await fetchAllTable({
		tableName: 'poem',
	});

	return <StoryList title='Poems' projects={tableData} type='poem' />;
};

export default PoemListPage;
