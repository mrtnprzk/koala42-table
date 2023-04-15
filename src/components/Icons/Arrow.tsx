import { FC } from 'react';

import { cx } from '@/lib/classnames';

interface ArrowProps {
    className?: string;
    onClick?: () => void;
}

const Arrow: FC<ArrowProps> = ({ className, onClick }): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={cx('w-6 h-6 fill-white duration-500', onClick && 'cursor-pointer', className)}
            onClick={onClick}
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
            />
        </svg>
    );
};

export default Arrow;
