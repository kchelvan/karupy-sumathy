import React from 'react';

const FeatureFilmListPage = async () => {
	await fetch(`${process.env.BASE_URL}/api/feature-film`).then((res) =>
		res.json()
	);

	return <div>FeatureFilmListPage</div>;
};

export default FeatureFilmListPage;
