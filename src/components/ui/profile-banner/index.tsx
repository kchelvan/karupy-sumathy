import React from 'react';
import styles from './profile-banner.module.scss';
import ProfileImage from './components/profile-image';
import ProfileDescription from './components/profile-description';

const ProfileBanner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.profileContainer}>
				<ProfileImage />
				<ProfileDescription />
			</div>
		</div>
	);
};

export default ProfileBanner;
