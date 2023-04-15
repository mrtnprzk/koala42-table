import { FC, useState } from 'react';

import Arrow from '@/components/Icons/Arrow';
import Cross from '@/components/Icons/Cross';
import { cx } from '@/lib/classnames';
import ChildrenOfChildren from './ChildrenOfChildren';

interface BodyCharacterProps {
    characterData: any;
    secretData: any;
    bgColor: string;
}

const BodyCharacter: FC<BodyCharacterProps> = ({ characterData, secretData, bgColor }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <tr className={cx('text-white', bgColor)}>
                <td />
                <td>
                    {secretData?.has_secrete && (
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
            {isOpen && secretData?.has_secrete?.records && (
                <ChildrenOfChildren bgColor={bgColor} secretData={secretData?.has_secrete?.records} />
            )}
        </>
    );
};

export default BodyCharacter;
