import { FC } from 'react';

import { SecretRecord } from '@/global/types';
import BodySecret from './BodySecret';

interface ChildrenOfChildrenProps {
    bgColor: string;
    secretData: Array<SecretRecord>;
}

const ChildrenOfChildren: FC<ChildrenOfChildrenProps> = ({ bgColor, secretData }): JSX.Element => {
    return (
        <>
            <tr className={bgColor}>
                <th colSpan={2} />
                <th className={'bg-koalaGreen'}>ID</th>
                <th className={'bg-koalaGreen'}>Nemesis ID</th>
                <th className={'bg-koalaGreen'}>Secret Code</th>
                <th className={'bg-koalaGreen'}>delete</th>
                <th colSpan={6} />
            </tr>
            {secretData?.map(({ data }) => (
                <BodySecret key={data.ID} bgColor={bgColor} secretData={data} />
            ))}
        </>
    );
};

export default ChildrenOfChildren;
