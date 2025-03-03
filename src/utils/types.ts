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

export interface VideoBannerType {
	id: string;
	createdAt: string;
	updatedAt: string;
	title: string;
	videoID: string;
	fullVideoID?: string;
	active: boolean;
}

export interface UseFetchFilmResponse {
	tableData: FilmType[];
}

export interface UseFetchPostResponse {
	tableData: PostType[];
}

export interface UseFetchByIdPostResponse {
	tableData: PostType;
}

export interface UseFetchVideoBannerResponse {
	tableData: VideoBannerType[];
}
