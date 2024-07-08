import type { Metadata } from 'next';
import { Inter as FontSans } from 'next/font/google';
import Footer from '@/components/footer/Footer';
import Header from '@/components/header/Header';
import { TailwindIndicator } from '@/components/TailwindIndicator';
import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/config/site';

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
				<ThemeProvider attribute="class" defaultTheme={siteConfig.defaultNextTheme} enableSystem>
					<Header />
					<main className="flex flex-col items-center py-6">{children}</main>
					<Footer />
					<TailwindIndicator />
				</ThemeProvider>
				{process.env.NODE_ENV === 'development' ? (
					<></>
				) : (
					<>
						<div></div>
					</>
				)}
			</body>
		</html>
	);
}
