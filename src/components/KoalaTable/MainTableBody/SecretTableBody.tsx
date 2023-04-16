import { FC } from 'react';

import { SecretRecordI } from '@/global/types';
import SecretRecord from './SecretRecord';

interface SecretTableBodyProps {
    bgColor: string;
    secretData: Array<SecretRecordI>;
}

const SecretTableBody: FC<SecretTableBodyProps> = ({ bgColor, secretData }): JSX.Element => {
    return (
        <>
            <tr className={bgColor}>
                <th colSpan={3} />
                <th className={'bg-koalaGreen'}>ID</th>
                <th className={'bg-koalaGreen'}>Nemesis ID</th>
                <th className={'bg-koalaGreen'}>Secret Code</th>
                <th className={'bg-koalaGreen'}>delete</th>
                <th colSpan={5} />
            </tr>
            {secretData?.map(({ data }) => (
                <SecretRecord key={data.ID} bgColor={bgColor} secretData={data} />
            ))}
        </>
    );
};

export default SecretTableBody;
