import { FC, useState } from 'react';

import Arrow from '@/components/Icons/Arrow';
import Cross from '@/components/Icons/Cross';
import { NemesisData, SecretRecord } from '@/global/types';
import { cx } from '@/lib/classnames';
import ChildrenOfChildren from './ChildrenOfChildren';

interface BodyCharacterProps {
    characterData: NemesisData;
    secretData:
        | object
        | {
              has_secrete: {
                  records: SecretRecord[];
              };
          };
    bgColor: string;
}

const BodyCharacter: FC<BodyCharacterProps> = ({ characterData, secretData, bgColor }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const secret = secretData as { has_secrete?: { records: SecretRecord[] } };

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
                <td>{characterData?.ID}</td>
                <td>{characterData?.['Is alive?']}</td>
                <td>{characterData?.['Character ID']}</td>
                <td>{characterData?.Years}</td>
                <td>
                    <Cross className="m-auto" onClick={() => alert('TODO')} />
                </td>
                <td colSpan={5} />
            </tr>
            {isOpen && secret?.has_secrete?.records && (
                <ChildrenOfChildren bgColor={bgColor} secretData={secret?.has_secrete?.records} />
            )}
        </>
    );
};

export default BodyCharacter;
