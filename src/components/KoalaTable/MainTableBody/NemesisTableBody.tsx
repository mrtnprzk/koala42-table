import { FC } from 'react';

import { NemesisRecordI } from '@/global/types';
import NemesisRecord from './NemesisRecord';

interface NemesisTableBodyProps {
    childrenData: Array<NemesisRecordI>;
    bgColor: string;
}

const NemesisTableBody: FC<NemesisTableBodyProps> = ({ childrenData, bgColor }): JSX.Element => {
    return (
        <>
            <tr className={bgColor}>
                <th />
                <th className={'bg-koalaGreen'} />
                <th className={'bg-koalaGreen'}>ID</th>
                <th className={'bg-koalaGreen'}>Character ID</th>
                <th className={'bg-koalaGreen'}>Is alive?</th>
                <th className={'bg-koalaGreen'}>Years</th>
                <th className={'bg-koalaGreen'}>delete</th>
                <th colSpan={5} />
            </tr>
            {childrenData.map(({ data, children }) => (
                <NemesisRecord key={data.ID} nemesisData={data} secretData={children} bgColor={bgColor} />
            ))}
        </>
    );
};

export default NemesisTableBody;
