import { FC, useState } from 'react';

import Arrow from '@/components/Icons/Arrow';
import Cross from '@/components/Icons/Cross';
import { cx } from '@/lib/classnames';
import ChildrenOfParent from './ChildrenOfParent';

interface BodyParentProps {
    parentData: any;
    childrenData: any;
    index: number;
}

const BodyParent: FC<BodyParentProps> = ({ parentData, childrenData, index }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);

    const bgColor = index % 2 === 0 ? 'bg-koalaLightGrey' : 'bg-koalaDarkGrey';

    return (
        <>
            <tr key={parentData?.ID} className={cx('text-white', bgColor)}>
                <td>
                    {childrenData?.has_nemesis && (
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
            {isOpen && childrenData?.has_nemesis && (
                <ChildrenOfParent bgColor={bgColor} childrenData={childrenData?.has_nemesis?.records} />
            )}
        </>
    );
};

export default BodyParent;
