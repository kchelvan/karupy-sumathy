const useFetchFilm = async ({ route }: { route: string }) => {
	const filmResp = await fetch(`${process.env.BASE_URL}/api/${route}`);
	const films = await filmResp.json();

	return { films };
};

export default useFetchFilm;
