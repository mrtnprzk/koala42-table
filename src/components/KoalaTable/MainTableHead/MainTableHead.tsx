import { MainRecordI } from '@/global/types';
import { FC } from 'react';

interface MainTableHeadProps {
    recordsData: Array<MainRecordI>;
}

const MainTableHead: FC<MainTableHeadProps> = ({ recordsData }): JSX.Element => {
    return (
        <thead className="bg-koalaGreen sticky top-0 z-10">
            <tr>
                <th />
                {!!recordsData?.length && Object.keys(recordsData[0]?.data).map((key) => <th key={key}>{key}</th>)}
                <th>delete</th>
            </tr>
        </thead>
    );
};

export default MainTableHead;
