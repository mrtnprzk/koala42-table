import { FC, useState } from 'react';

import Arrow from '@/components/Icons/Arrow';
import Cross from '@/components/Icons/Cross';
import { NemesisRecord, RecordData } from '@/global/types';
import { cx } from '@/lib/classnames';
import ChildrenOfParent from './ChildrenOfParent';

interface BodyParentProps {
    parentData: RecordData;
    childrenData:
        | object
        | {
              has_nemesis: {
                  records: Array<NemesisRecord>;
              };
          };
    index: number;
}

const BodyParent: FC<BodyParentProps> = ({ parentData, childrenData, index }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const nemesisData = childrenData as { has_nemesis?: { records: Array<NemesisRecord> } };

    const bgColor = index % 2 === 0 ? 'bg-koalaLightGrey' : 'bg-koalaDarkGrey';

    return (
        <>
            <tr key={parentData?.ID} className={cx('text-white', bgColor)}>
                <td>
                    {nemesisData?.has_nemesis?.records && (
                        <Arrow
                            className={cx('mx-auto', isOpen && 'rotate-90')}
                            onClick={() => setIsOpen((prev) => !prev)}
                        />
                    )}
                </td>
                <td>{parentData?.ID}</td>
                <td>{parentData?.Name}</td>
                <td>{parentData?.Gender}</td>
                <td>{parentData?.Ability}</td>
                <td>{parentData?.['Minimal distance']}</td>
                <td>{parentData?.Weight}</td>
                <td>{parentData?.Born}</td>
                <td>{parentData?.['In space since']}</td>
                <td>{parentData?.['Beer consumption (l/y)']}</td>
                <td>{parentData?.['Knows the answer?']}</td>
                <td>
                    <Cross onClick={() => alert('TODO')} className="mx-auto" />
                </td>
            </tr>
            {isOpen && nemesisData?.has_nemesis?.records && (
                <ChildrenOfParent bgColor={bgColor} childrenData={nemesisData?.has_nemesis?.records} />
            )}
        </>
    );
};

export default BodyParent;
