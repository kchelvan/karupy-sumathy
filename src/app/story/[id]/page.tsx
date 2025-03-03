import { addLineBreaks, fetchById } from '@/utils/helpers';
import styles from './story.module.scss';
import { UseFetchByIdPostResponse } from '@/utils/types';
import ProgressBar from '@/components/ui/progress-bar';

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
			<ProgressBar />
			<div className={styles.contentWrapper}>
				<h1 className={styles.storyTitle}>{story?.tableData?.title}</h1>
				<p className={styles.storyText}>
					{addLineBreaks(story?.tableData?.content)}
				</p>
			</div>
		</article>
	);
}
