import { FC, useContext } from 'react';

import { RecordContext } from '@/contexts/TableContext';
import Loader from '../Loader/Loader';
import MainTableBody from './MainTableBody/MainTableBody';
import MainTableHead from './MainTableHead/MainTableHead';

const KoalaTable: FC = (): JSX.Element => {
    const { records, isLoading } = useContext(RecordContext);

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : (
                <table className="w-screen z-10">
                    <MainTableHead />
                    <MainTableBody recordsData={records} />
                </table>
            )}
        </>
    );
};

export default KoalaTable;
