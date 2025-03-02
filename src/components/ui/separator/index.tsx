import React from 'react';
import styles from './separator.module.scss';

const Separator = () => {
	return (
		<div className={styles.container}>
			<div className={styles.smallSeparator} />
			<div className={styles.separator} />
			<div className={styles.smallSeparator} />
		</div>
	);
};

export default Separator;
