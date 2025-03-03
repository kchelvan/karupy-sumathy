import React from 'react';
import styles from './video-iframe.module.scss';
import { fetchAllTable } from '@/utils/helpers';
import { UseFetchVideoBannerResponse } from '@/utils/types';

const VideoIframe = async () => {
	const { tableData }: UseFetchVideoBannerResponse = await fetchAllTable({
		tableName: 'videoBanner',
	});

	const videoData = tableData?.[0];

	return (
		<iframe
			className={styles.iframe}
			src={`https://www.youtube-nocookie.com/embed/${videoData?.videoID}?si=O2SjY0XAFQSkDzmi&amp;autoplay=1&mute=1&controls=false&loop=1&playlist=${videoData?.videoID}&rel=0`}
			title={videoData?.title || ''}
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
		/>
	);
};

export default VideoIframe;
