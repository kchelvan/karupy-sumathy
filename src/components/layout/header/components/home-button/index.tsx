import React from 'react';
import styles from './home-button.module.scss';
import Link from 'next/link';
import Image from 'next/image';

const HomeButton = () => {
	return (
		<Link className={styles.homeButton} href='/'>
			<div className={styles.homeButtonTextWrapper}>
				<Image
					className={styles.homeButtonIcon}
					src={'/video-camera.svg'}
					alt='video-camera'
					width={24}
					height={24}
				/>
				<p className={styles.homeButtonText}>Karupy Sumathy</p>
			</div>
			<p className={styles.homeButtonSubText}>Filmmaker, Storyteller</p>
		</Link>
	);
};

export default HomeButton;
