import StoryList from '@/components/complex/story-list';
import { fetchAllTable, UseFetchPostResponse } from '@/utils/helpers';
import React from 'react';

const ShortStoryListPage = async () => {
	const { tableData }: UseFetchPostResponse = await fetchAllTable({
		tableName: 'shortStory',
	});

	return <StoryList title='Short Stories' projects={tableData} />;
};

export default ShortStoryListPage;
