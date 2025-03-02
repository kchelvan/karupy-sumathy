import React from 'react';
import styles from './utils/navigation-bar.module.scss';
import HomeButton from './components/home-button';
import NavigationList from './components/navigation-list';

const Header = () => {
	return (
		<div className={styles.container}>
			<HomeButton />
			<NavigationList />
		</div>
	);
};

export default Header;
