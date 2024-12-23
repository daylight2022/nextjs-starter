'use client';
import FooterLinks from './FooterLinks';
import FooterProducts from './FooterProducts';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
	const [currentYear, setCurrentYear] = useState<string>('');

	useEffect(() => {
		setCurrentYear(new Date().getFullYear().toString());
	}, []);

	const { authors } = siteConfig;
	return (
		<footer className="mt-auto space-y-2 pt-6 pb-4 flex flex-col items-center border-t dark:border-gray-800 border-gray-200 dark:bg-background bg-gray-50 text-sm dark:text-gray-400 text-gray-600">
			<div>
				<FooterLinks></FooterLinks>
				<FooterProducts></FooterProducts>
				<div className="flex space-x-2">
					{currentYear && `© ${currentYear}`}
					<Link
						href={authors[0].twitter || authors[0].url}
						target="_blank"
						className="hover:text-gray-900 dark:hover:text-gray-300 transition-colors">
						{authors[0].name}&nbsp;
					</Link>
					<div>All rights reserved.</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
