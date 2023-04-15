import { FC } from 'react';

import { NemesisRecord } from '@/global/types';
import BodyCharacter from './BodyCharacter';

interface ChildrenOfParentProps {
    childrenData: NemesisRecord[];
    bgColor: string;
}

const ChildrenOfParent: FC<ChildrenOfParentProps> = ({ childrenData, bgColor }): JSX.Element => {
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
                <BodyCharacter key={data.ID} characterData={data} secretData={children} bgColor={bgColor} />
            ))}
        </>
    );
};

export default ChildrenOfParent;
