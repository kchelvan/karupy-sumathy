import { FilmType, PostType } from '@/utils/types';
import prisma from '@/lib/prisma/client';

export interface UseFetchFilmResponse {
	tableData: FilmType[];
}

export interface UseFetchPostResponse {
	tableData: PostType[];
}

export const fetchAllTable = async ({ tableName }: { tableName: string }) => {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const prismaClient = prisma as any;
	const response = await prismaClient[tableName].findMany({});
	return { tableData: response || [] };
};
