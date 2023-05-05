import { FC, useContext, useState } from 'react';

import Arrow from '@/components/Icons/Arrow';
import Cross from '@/components/Icons/Cross';
import { RecordContext } from '@/contexts/TableContext';
import { MainRecordChildren, RecordData } from '@/global/types';
import { cx } from '@/lib/classnames';
import NemesisTableBody from './NemesisTableBody';

interface MainRecordProps {
    parentData: RecordData;
    childrenData: MainRecordChildren;
    index: number;
}

const MainRecord: FC<MainRecordProps> = ({ parentData, childrenData, index }): JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const { deleteMainRecord } = useContext(RecordContext);

    const mainColumnsLength = Object.keys(parentData).length;

    const bgColor = index % 2 === 0 ? 'bg-koalaLightGrey' : 'bg-koalaDarkGrey';

    return (
        <>
            <tr className={cx('text-white', bgColor)}>
                <td>
                    {childrenData?.has_nemesis?.records && (
                        <Arrow
                            className={cx('mx-auto', isOpen && 'rotate-90')}
                            onClick={() => setIsOpen((prev) => !prev)}
                        />
                    )}
                </td>
                {!!parentData && Object.entries(parentData).map(([key, value]) => <td key={key}>{value}</td>)}
                <td>
                    <Cross onClick={() => deleteMainRecord(parentData?.ID)} className="mx-auto" />
                </td>
            </tr>
            {isOpen && childrenData?.has_nemesis?.records && (
                <NemesisTableBody
                    bgColor={bgColor}
                    mainColumnsLength={mainColumnsLength}
                    childrenData={childrenData?.has_nemesis?.records}
                />
            )}
        </>
    );
};

export default MainRecord;
