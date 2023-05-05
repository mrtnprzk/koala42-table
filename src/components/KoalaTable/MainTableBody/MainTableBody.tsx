import { FC } from 'react';

import { MainRecord as MainRecordT } from '@/global/types';
import MainRecord from './MainRecord';

interface MainTableBodyProps {
    recordsData: Array<MainRecordT>;
}

const MainTableBody: FC<MainTableBodyProps> = ({ recordsData }): JSX.Element => {
    return (
        <tbody className="text-center w-screen bg-koalaDarkGrey">
            {recordsData?.map(({ data, children }, i: number) => (
                <MainRecord key={data.ID} parentData={data} childrenData={children} index={i} />
            ))}
        </tbody>
    );
};

export default MainTableBody;
