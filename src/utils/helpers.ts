import { FilmType } from '@/utils/types';
import prisma from '@/lib/prisma/client';

export interface UseFetchFilmResponse {
	films: FilmType[];
}

export const fetchFilms = async ({ tableName }: { tableName: string }) => {
	const prismaClient = prisma as any;
	const response = await prismaClient[tableName].findMany({});
	return { films: response || [] };
};
