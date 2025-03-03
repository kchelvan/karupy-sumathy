import Image from 'next/image';
import React from 'react';
import styles from './video-description.module.scss';
import Link from 'next/link';
import { UseFetchVideoBannerResponse } from '@/utils/types';
import { fetchAllTable } from '@/utils/helpers';

const VideoDescription = async () => {
	const { tableData }: UseFetchVideoBannerResponse = await fetchAllTable({
		tableName: 'videoBanner',
	});

	const videoURL = tableData?.[0]?.fullVideoID;

	return (
		<Link
			className={styles.descriptionContainer}
			href={videoURL ? `https://www.youtube.com/watch?v=${videoURL}` : '/'}
		>
			<p className={styles.videoText}>Niyoga</p>
			<div className={styles.chevronContainer}>
				<Image
					src={'/chevron-down.svg'}
					alt='chevron-down'
					width={24}
					height={24}
				/>
			</div>
		</Link>
	);
};

export default VideoDescription;
