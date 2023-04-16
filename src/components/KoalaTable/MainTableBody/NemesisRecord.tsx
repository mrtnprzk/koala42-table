import { FC, useContext, useState } from 'react';

import Arrow from '@/components/Icons/Arrow';
import Cross from '@/components/Icons/Cross';
import { RecordContext } from '@/contexts/TableContext';
import { NemesisDataI, SecretRecordI } from '@/global/types';
import { cx } from '@/lib/classnames';
import SecretTableBody from './SecretTableBody';

interface NemesisRecordProps {
    nemesisData: NemesisDataI;
    secretData:
        | object
        | {
              has_secrete: {
                  records: Array<SecretRecordI>;
              };
          };
    bgColor: string;
}

const NemesisRecord: FC<NemesisRecordProps> = ({ nemesisData, secretData, bgColor }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const { deleteNemesisRecord } = useContext(RecordContext);

    const secret = secretData as { has_secrete?: { records: Array<SecretRecordI> } };

    return (
        <>
            <tr className={cx('text-white', bgColor)}>
                <td />
                <td>
                    {secret?.has_secrete && (
                        <Arrow
                            className={cx('ml-auto', isOpen && 'rotate-90')}
                            onClick={() => setIsOpen((prev) => !prev)}
                        />
                    )}
                </td>
                <td>{nemesisData?.ID}</td>
                <td>{nemesisData?.['Is alive?']}</td>
                <td>{nemesisData?.['Character ID']}</td>
                <td>{nemesisData?.Years}</td>
                <td>
                    <Cross className="m-auto" onClick={() => deleteNemesisRecord(nemesisData?.ID)} />
                </td>
                <td colSpan={5} />
            </tr>
            {isOpen && secret?.has_secrete?.records && (
                <SecretTableBody bgColor={bgColor} secretData={secret?.has_secrete?.records} />
            )}
        </>
    );
};

export default NemesisRecord;
