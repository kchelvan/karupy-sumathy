import ProfileBanner from '@/components/ui/profile-banner';
import VideoBanner from '@/components/ui/video-banner';
import styles from './home.module.scss';

export default function Home() {
	return (
		<div className={styles.wrapper}>
			<VideoBanner />
			<ProfileBanner />
		</div>
	);
}
