import React from 'react';
import styles from './home-button.module.scss';
import Link from 'next/link';

const HomeButton = () => {
	return (
		<Link className={styles.homeButton} href='/'>
			<p className={styles.homeButtonText}>Karupy Sumathy</p>
			<p className={styles.homeButtonSubText}>Filmmaker, Storyteller</p>
		</Link>
	);
};

export default HomeButton;
