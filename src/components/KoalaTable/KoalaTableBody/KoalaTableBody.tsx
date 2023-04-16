import { FC } from 'react';

import { MainRecordI } from '@/global/types';
import BodyParent from './BodyParent';

interface KoalaTableBodyProps {
    recordsData: Array<MainRecordI>;
}

const KoalaTableBody: FC<KoalaTableBodyProps> = ({ recordsData }): JSX.Element => {
    return (
        <tbody className="text-center w-screen bg-koalaDarkGrey">
            {recordsData?.map(({ data, children }, i: number) => (
                <BodyParent key={data.ID} parentData={data} childrenData={children} index={i} />
            ))}
        </tbody>
    );
};

export default KoalaTableBody;
