import { FC, useContext } from 'react';

import { RecordContext } from '@/contexts/TableContext';
import Loader from '../Loader/Loader';
import KoalaTableBody from './KoalaTableBody/KoalaTableBody';
import KoalaTableHead from './KoalaTableHead/KoalaTableHead';

const KoalaTable: FC = (): JSX.Element => {
    const { records, isLoading } = useContext(RecordContext);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <table className="w-screen z-10">
                    <KoalaTableHead />
                    <KoalaTableBody recordsData={records} />
                </table>
            )}
        </>
    );
};

export default KoalaTable;
