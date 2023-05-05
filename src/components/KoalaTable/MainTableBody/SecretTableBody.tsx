import { FC } from 'react';

import { SecretRecord as SecretRecordT } from '@/global/types';
import SecretRecord from './SecretRecord';

interface SecretTableBodyProps {
    bgColor: string;
    secretData: Array<SecretRecordT>;
    mainColumnsLength: number;
}

const SecretTableBody: FC<SecretTableBodyProps> = ({ bgColor, secretData, mainColumnsLength }): JSX.Element => {
    const lastSpanLength = secretData && mainColumnsLength - Object.keys(secretData[0]?.data).length - 2;

    return (
        <>
            <tr className={bgColor}>
                <th colSpan={3} />
                {!!secretData?.length &&
                    Object.keys(secretData[0]?.data).map((key) => (
                        <th className={'bg-koalaGreen'} key={key}>
                            {key}
                        </th>
                    ))}
                <th className={'bg-koalaGreen'}>delete</th>
                <th colSpan={lastSpanLength} />
            </tr>
            {secretData?.map(({ data }) => (
                <SecretRecord key={data.ID} bgColor={bgColor} secretData={data} mainColumnsLength={mainColumnsLength} />
            ))}
        </>
    );
};

export default SecretTableBody;
