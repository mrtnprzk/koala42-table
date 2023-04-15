import { FC } from 'react';

import { MainRecord } from '@/global/types';
import BodyParent from './BodyParent';

interface KoalaTableBodyProps {
    data: MainRecord[] | [];
}

const KoalaTableBody: FC<KoalaTableBodyProps> = ({ data }): JSX.Element => {
    return (
        <tbody className="text-center w-screen bg-koalaDarkGrey">
            {data?.map(({ data, children }, i: number) => (
                <BodyParent key={data.ID} parentData={data} childrenData={children} index={i} />
            ))}
        </tbody>
    );
};

export default KoalaTableBody;
