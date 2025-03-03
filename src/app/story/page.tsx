import StoryList from '@/components/complex/story-list';
import { fetchAllTable } from '@/utils/helpers';
import { UseFetchPostResponse } from '@/utils/types';
import React from 'react';

const ShortStoryListPage = async () => {
	const { tableData }: UseFetchPostResponse = await fetchAllTable({
		tableName: 'shortStory',
	});

	return <StoryList title='Short Stories' projects={tableData} type='story' />;
};

export default ShortStoryListPage;
