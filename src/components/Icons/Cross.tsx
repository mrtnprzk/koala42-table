import { FC } from 'react';

import { cx } from '@/lib/classnames';

interface CrossProps {
    className?: string;
    onClick?: () => void;
}

const Cross: FC<CrossProps> = ({ className, onClick }): JSX.Element => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className={cx('w-6 h-6 text-red-600', onClick && 'cursor-pointer', className)}
            onClick={onClick}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
    );
};

export default Cross;
