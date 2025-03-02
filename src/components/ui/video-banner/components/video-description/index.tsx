import Image from 'next/image';
import React from 'react';
import styles from './video-description.module.scss';

const VideoDescription = () => {
	return (
		<div className={styles.descriptionContainer}>
			<p className={styles.videoText}>Niyoga</p>
			<div className={styles.chevronContainer}>
				<Image
					src={'/chevron-down.svg'}
					alt='chevron-down'
					width={24}
					height={24}
				/>
			</div>
		</div>
	);
};

export default VideoDescription;
