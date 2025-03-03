import React from 'react';
import styles from './story-list.module.scss';
import Image from 'next/image';
import { PostType } from '@/utils/types';

type StoryListProps = {
	title: string;
	projects: PostType[];
};

const StoryList = ({ title, projects }: StoryListProps) => {
	console.log('debug: projects', projects);
	return (
		<div className={styles.wrapper}>
			<p className={styles.sectionText}>{title}</p>
			<div className={styles.container}>
				{projects?.length > 0 ? (
					projects.map(({ id, title, shortDescription, image }: PostType) => {
						return (
							<div key={id} className={styles.projectWrapper}>
								<Image
									src={image}
									alt={title}
									width={1000}
									height={1000}
									className={styles.coverImage}
								/>
								<div key={title} className={styles.projectContainer}>
									<div className={styles.infoContainer}>
										<p className={styles.headerText}>{title}</p>
										<div className={styles.descriptionContainer}>
											<p className={styles.headerSubText}>{shortDescription}</p>
											<a href={'/'}>
												<p className={styles.viewMoreButton}> Read More</p>
											</a>
										</div>
									</div>
								</div>
							</div>
						);
					})
				) : (
					<p className={styles.headerText}>Coming Soon...</p>
				)}
			</div>
		</div>
	);
};

export default StoryList;
