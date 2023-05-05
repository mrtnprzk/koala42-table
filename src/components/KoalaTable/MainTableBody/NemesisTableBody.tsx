import { FC } from 'react';

import { NemesisRecord as NemesisRecordT } from '@/global/types';
import NemesisRecord from './NemesisRecord';

interface NemesisTableBodyProps {
    childrenData: Array<NemesisRecordT>;
    bgColor: string;
    mainColumnsLength: number;
}

const NemesisTableBody: FC<NemesisTableBodyProps> = ({ childrenData, bgColor, mainColumnsLength }): JSX.Element => {
    const lastSpanLength = childrenData && mainColumnsLength - Object.keys(childrenData[0]?.data).length - 1;

    return (
        <>
            <tr className={bgColor}>
                <th />
                <th className={'bg-koalaGreen'} />
                {!!childrenData?.length &&
                    Object.keys(childrenData[0]?.data).map((key) => (
                        <th className={'bg-koalaGreen'} key={key}>
                            {key}
                        </th>
                    ))}
                <th className={'bg-koalaGreen'}>delete</th>
                <th colSpan={lastSpanLength} />
            </tr>
            {childrenData.map(({ data, children }) => (
                <NemesisRecord
                    key={data.ID}
                    nemesisData={data}
                    secretData={children}
                    bgColor={bgColor}
                    mainColumnsLength={mainColumnsLength}
                />
            ))}
        </>
    );
};

export default NemesisTableBody;
