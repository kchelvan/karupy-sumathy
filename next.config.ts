import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: false,
	env: {
		BASE_URL: process.env.BASE_URL,
	},
};

export default nextConfig;
