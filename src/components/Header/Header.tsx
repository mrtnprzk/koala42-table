import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const Header: FC = () => {
    return (
        <header className="bg-black fixed left-0 right-0 shadow-xl px-2 py-3">
            <div className="container flex justify-between items-center mx-auto">
                <Link href={'https://koala42.com/'}>
                    <Image
                        src="/koala-logo.svg"
                        alt="KOALA42 Logo"
                        className="w-10 lg:w-14 h-auto"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>

                <Link href={'https://github.com/mrtnprzk/koala42-table'}>
                    <Image
                        src="/github-logo.svg"
                        alt="Github Logo"
                        className="w-10 lg:w-14 h-auto"
                        width={50}
                        height={50}
                        priority
                    />
                </Link>
            </div>
        </header>
    );
};

export default Header;
