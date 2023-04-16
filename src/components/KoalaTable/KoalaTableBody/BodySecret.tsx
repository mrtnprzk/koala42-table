import { FC, useContext } from 'react';

import Cross from '@/components/Icons/Cross';
import { RecordContext } from '@/contexts/TableContext';
import { SecretDataI } from '@/global/types';
import { cx } from '@/lib/classnames';

interface BodySecretProps {
    bgColor: string;
    secretData: SecretDataI;
}

const BodySecret: FC<BodySecretProps> = ({ bgColor, secretData }): JSX.Element => {
    const { deleteSecretRecord } = useContext(RecordContext);

    return (
        <tr className={cx('text-white', bgColor)}>
            <td colSpan={2} />
            <td>{secretData?.ID}</td>
            <td>{secretData?.['Nemesis ID']}</td>
            <td>{secretData?.['Secrete Code']}</td>
            <td>
                <Cross className="m-auto" onClick={() => deleteSecretRecord(secretData?.ID)} />
            </td>
            <td colSpan={6} />
        </tr>
    );
};

export default BodySecret;
