import React from 'react';
import styles from './navigation-list.module.scss';
import { NAVIGATION_LINKS } from '../../utils/const';
import NavigationLink from '../navigation-link';
import { NavigationItem } from '../../utils/types';

const NavigationList = () => {
	return (
		<ul className={styles.navigationLinks}>
			{NAVIGATION_LINKS.map((link: NavigationItem) => {
				return <NavigationLink key={link?.label} {...link} />;
			})}
		</ul>
	);
};

export default NavigationList;
