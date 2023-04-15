import { FC } from 'react';

import Cross from '@/components/Icons/Cross';
import { cx } from '@/lib/classnames';

interface BodySecretProps {
    bgColor: string;
    secretData: any; //TODO: add type
}

const BodySecret: FC<BodySecretProps> = ({ bgColor, secretData }): JSX.Element => {
    return (
        <tr className={cx('text-white', bgColor)}>
            <td colSpan={2} />
            <td>{secretData?.ID}</td>
            <td>{secretData?.['Nemesis ID']}</td>
            <td>{secretData?.['Secrete Code']}</td>
            <td>
                <Cross className="m-auto" onClick={() => alert('TODO')} />
            </td>
            <td colSpan={6} />
        </tr>
    );
};

export default BodySecret;
