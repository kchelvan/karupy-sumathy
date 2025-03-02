import React from 'react';
import styles from './project-list.module.scss';
import { FilmType } from '@/utils/types';
import Link from 'next/link';

type ProjectListProps = {
	title: string;
	projects: FilmType[];
};

const ProjectList = ({ title, projects }: ProjectListProps) => {
	return (
		<div className={styles.wrapper}>
			<p className={styles.sectionText}>{title}</p>
			<div className={styles.container}>
				{projects?.length > 0 ? (
					projects.map(({ title, description, videoURL }: FilmType) => {
						return (
							<div key={title} className={styles.projectContainer}>
								<iframe
									className={styles.iframe}
									src={`https://www.youtube.com/embed/${videoURL}`}
									title={title}
								/>
								<div className={styles.videoInfoContainer}>
									<p className={styles.headerText}>{title}</p>
									<div className={styles.descriptionContainer}>
										<p className={styles.headerSubText}>{description}</p>
										<Link
											className={styles.readMoreLink}
											href={`https://www.youtube.com/watch?v=${videoURL}`}
										>
											<p className={styles.viewMoreButton}> View Here</p>
										</Link>
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

export default ProjectList;
