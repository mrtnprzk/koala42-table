import { FC, useContext } from 'react';

import Cross from '@/components/Icons/Cross';
import { RecordContext } from '@/contexts/TableContext';
import { SecretData } from '@/global/types';
import { cx } from '@/lib/classnames';

interface SecretRecordProps {
    bgColor: string;
    secretData: SecretData;
    mainColumnsLength: number;
}

const SecretRecord: FC<SecretRecordProps> = ({ bgColor, secretData, mainColumnsLength }): JSX.Element => {
    const { deleteSecretRecord } = useContext(RecordContext);

    const lastSpanLength = mainColumnsLength - Object.keys(secretData).length - 2;

    return (
        <tr className={cx('text-white', bgColor)}>
            <td colSpan={3} />
            {!!secretData && Object.entries(secretData).map(([key, value]) => <td key={key}>{value}</td>)}
            <td>
                <Cross className="m-auto" onClick={() => deleteSecretRecord(secretData?.ID)} />
            </td>
            <td colSpan={lastSpanLength} />
        </tr>
    );
};

export default SecretRecord;
