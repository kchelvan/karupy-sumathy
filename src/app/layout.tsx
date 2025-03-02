import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import styles from './home.module.scss';

const nunitoFont = Nunito({
	subsets: ['latin'],
	display: 'swap',
});

export const metadata: Metadata = {
	title: 'Karupy Sumathy',
	description: 'Filmmaker, Storyteller',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${nunitoFont.className}`} style={{ margin: 0 }}>
				<Header />
				<div className={styles.container}>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
