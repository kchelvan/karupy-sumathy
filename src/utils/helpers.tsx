import prisma from '@/lib/prisma/client';
import { Fragment } from 'react';

export const fetchAllTable = async ({ tableName }: { tableName: string }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const prismaClient = prisma as any;
	const response = await prismaClient[tableName].findMany({});
	return { tableData: response || [] };
};

export const fetchById = async ({
	tableName,
	id,
}: {
	tableName: string;
	id: string;
}) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const prismaClient = prisma as any;
	const response = await prismaClient[tableName].findUnique({
		where: {
			id: id,
		},
	});
	return { tableData: response || [] };
};

export const addLineBreaks = (text: string) => {
	return text?.split('\\n').map((item, key) => (
		<Fragment key={key}>
			{item}
			<br />
		</Fragment>
	));
};
