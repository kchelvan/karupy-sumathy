import Image from 'next/image';
import styles from './profile-image.module.scss';
import React from 'react';

const ProfileImage = () => {
	return (
		<Image
			className={styles.profileImage}
			alt='Karupy Sumathy'
			src={'/sumathy-profile.png'}
			width={500}
			height={525}
		/>
	);
};

export default ProfileImage;
