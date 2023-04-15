import { FC } from 'react';

import BodyCharacter from './BodyCharacter';

interface ChildrenOfParentProps {
    childrenData: any; //TODO: add type
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
            {childrenData.map(({ data, children }: { data: any; children: any }, i: number) => (
                <BodyCharacter key={i} characterData={data} secretData={children} bgColor={bgColor} />
            ))}
        </>
    );
};

export default ChildrenOfParent;
