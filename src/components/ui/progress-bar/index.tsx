'use client';
import React, { useEffect, useState } from 'react';

const ProgressBar = () => {
	const totalHeight =
		document.documentElement.scrollHeight -
		document.documentElement.clientHeight;
	const [scrollPosition, setScrollPosition] = useState(0);

	const handleScroll = () => {
		setScrollPosition(document.documentElement.scrollTop);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div>
			<div
				style={{
					position: 'fixed',
					height: '4px',
					width: `${parseInt(`${(scrollPosition / totalHeight) * 100}`)}%`,
					top: '0',
					left: '0',
					zIndex: '100',
					backgroundColor: 'white',
				}}
			/>
		</div>
	);
};

export default ProgressBar;
