import React from 'react';
import styles from './utils/navigation-bar.module.scss';
import HomeButton from './components/home-button';
import NavigationList from './components/navigation-list';
import HamburgerMenu from '@/components/ui/hamburger-menu';

const Header = () => {
	return (
		<div className={styles.container}>
			<HomeButton />
			<div className={styles.navigationList}>
				<NavigationList />
			</div>
			<div className={styles.hamburgerMenu}>
				<HamburgerMenu />
			</div>
		</div>
	);
};

export default Header;
