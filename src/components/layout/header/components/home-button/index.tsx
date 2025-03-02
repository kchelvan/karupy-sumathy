import React from 'react';
import styles from './home-button.module.scss';

const HomeButton = () => {
	return (
		<a className={styles.homeButton} href='/'>
			<p className={styles.homeButtonText}>Karupy Sumathy</p>
			<p className={styles.homeButtonSubText}>Filmmaker, Storyteller</p>
		</a>
	);
};

export default HomeButton;
