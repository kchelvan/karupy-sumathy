import VideoDescription from './components/video-description';
import VideoIframe from './components/video-iframe';
import styles from './video-banner.module.scss';

const VideoBanner = () => {
	return (
		<div className={styles.container}>
			<div className={styles.bannerVideo}>
				<VideoIframe />
				<VideoDescription />
			</div>
		</div>
	);
};

export default VideoBanner;
