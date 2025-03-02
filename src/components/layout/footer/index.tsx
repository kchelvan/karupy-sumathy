import React from 'react';
import styles from './footer.module.scss';

const Footer = () => {
	return (
		<div className={styles.container}>
			<div
				className={styles.copyrightText}
			>{`© Karupy Sumathy ${new Date().getFullYear()}`}</div>
		</div>
	);
};

export default Footer;
