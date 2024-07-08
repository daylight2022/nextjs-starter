import HeaderLinks from './HeaderLinks';
import Image from 'next/image';
import Link from 'next/link';
import { ThemeButton } from '@/components/ThemeButton';

const Header = () => {
	return (
		<header className="py-10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<nav className="relative z-50 flex justify-between">
					<div className="flex items-center md:gap-x-12">
						<Link href="/" className="flex items-center space-x-1 font-bold">
							<Image alt="" src="/logo.svg" className="w-8 h-8" width={32} height={32}></Image>
							<span className="text-blue-600">Next.js</span>
							<span className="text-gray-950 dark:text-gray-300">Starter</span>
						</Link>
						<div className="hidden md:flex md:gap-x-6">
							<></>
						</div>
					</div>
					<div className="flex items-center gap-x-5">
						<HeaderLinks></HeaderLinks>
						<ThemeButton></ThemeButton>
					</div>
				</nav>
			</div>
		</header>
	);
};

export default Header;
