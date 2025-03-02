import React from 'react';
import styles from './video-iframe.module.scss';

const VideoIframe = () => {
	return (
		<iframe
			className={styles.iframe}
			src='https://www.youtube-nocookie.com/embed/d9MxCQM9IX4?si=O2SjY0XAFQSkDzmi&amp;autoplay=1&mute=1&controls=false&loop=1&playlist=d9MxCQM9IX4&rel=0'
			title='YouTube video player'
			allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
		/>
	);
};

export default VideoIframe;
