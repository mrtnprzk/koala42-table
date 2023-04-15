import Image from 'next/image';
import { FC } from 'react';

const Loader: FC = (): JSX.Element => {
    return (
        <div className="w-screen pt-[15%] flex justify-center items-center">
            <Image
                src="/koala-logo.svg"
                alt="KOALA42 Logo"
                className="w-20 h-auto animate-spin lg:w-24"
                width={50}
                height={50}
                priority
            />
        </div>
    );
};

export default Loader;
