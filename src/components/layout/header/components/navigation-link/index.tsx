import React from 'react';
import styles from './navigation-link.module.scss';
import { NavigationItem } from '../../utils/types';

const NavigationLink = ({ label, link }: NavigationItem) => {
	return (
		<a key={label} className={styles.navigationLink} href={link}>
			{label}
		</a>
	);
};

export default NavigationLink;
