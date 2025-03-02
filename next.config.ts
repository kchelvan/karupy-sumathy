import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: false,
	env: {
		BASE_URL: process.env.BASE_URL,
		BASE_ENV: process.env.BASE_ENV,
		API_URL: `${process.env.BASE_ENV != 'development' ? 'https' : 'http'}://${
			process.env.BASE_ENV != 'development'
				? process.env.VERCEL_URL
				: 'localhost:3001'
		}/api/`,
	},
};

export default nextConfig;
