export interface FilmType {
	id: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	link?: string;
	videoURL?: string;
	startTime?: number;
	description?: string;
}

export interface PostType {
	id: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	image: string;
	shortDescription?: string;
	content: string;
}
