import {
	addLineBreaks,
	fetchById,
	UseFetchByIdPostResponse,
} from '@/utils/helpers';
import styles from './poem.module.scss';
import { Fragment } from 'react';

export default async function PoemPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const id = (await params).id;
	const story: UseFetchByIdPostResponse = await fetchById({
		tableName: 'poem',
		id,
	});

	return (
		<article className={styles.container}>
			<div className={styles.contentWrapper}>
				<h1 className={styles.storyTitle}>{story?.tableData?.title}</h1>
				<p className={styles.storyText}>
					{addLineBreaks(story?.tableData?.content)}
				</p>
			</div>
		</article>
	);
}
