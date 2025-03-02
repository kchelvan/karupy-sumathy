import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/client';

export async function GET() {
	const response = await prisma.shortFilm.findMany({});
	return NextResponse.json({ data: response }, { status: 200 });
}
