import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	/* config options here */
	devIndicators: false,
	env: {
		VERCEL_URL: process.env.VERCEL_URL,
	},
};

export default nextConfig;
