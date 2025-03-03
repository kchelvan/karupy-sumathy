'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import styles from './hamburger-menu.module.scss';
import { NAVIGATION_LINKS } from '@/components/layout/header/utils/const';

const HamburgerMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className={!isOpen ? styles.noScroll : styles.container}>
			<div className={styles.iconContainer} onClick={() => setIsOpen(!isOpen)}>
				<div className={styles.iconLineA} />
				<div className={styles.iconLineB} />
				<div className={styles.iconLineC} />
			</div>
			{isOpen ? <div className={styles.backdrop} /> : null}
			<div
				className={
					isOpen ? styles.navigationSlider : styles.navigationHiddenSlider
				}
			>
				{NAVIGATION_LINKS.map((link) => {
					return (
						<Link key={link.label} className={styles.link} href={link.link}>
							{link?.label}
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default HamburgerMenu;
