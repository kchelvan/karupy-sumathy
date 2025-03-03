import { fetchById, UseFetchByIdPostResponse } from '@/utils/helpers';
import styles from './story.module.scss';
import { Fragment } from 'react';

export default async function StoryPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	const story: UseFetchByIdPostResponse = await fetchById({
		tableName: 'shortStory',
		id,
	});

	return (
		<article className={styles.container}>
			<div className={styles.contentWrapper}>
				<h1 className={styles.storyTitle}>{story?.tableData?.title}</h1>
				<p className={styles.storyText}>
					{story?.tableData?.content?.split('\\n').map((item, key) => (
						<Fragment key={key}>
							{item}
							<br />
						</Fragment>
					))}
				</p>
			</div>
		</article>
	);
}
