import React from 'react';
import styles from './profile-description.module.scss';
import { PROFILE_DESCRIPTION } from '../../utils/const';

const ProfileDescription = () => {
	return (
		<div className={styles.profileDescription}>
			<p className={styles.profileTitle}>About me.</p>
			<p>{PROFILE_DESCRIPTION}</p>
		</div>
	);
};

export default ProfileDescription;
