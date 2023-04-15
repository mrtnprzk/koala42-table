import { FC, Suspense } from 'react';

import { MainRecord } from '@/global/types';
import Loader from '../Loader/Loader';
import KoalaTableBody from './KoalaTableBody/KoalaTableBody';
import KoalaTableHead from './KoalaTableHead/KoalaTableHead';

interface KoalaTableProps {
    data: MainRecord[] | [];
}

const KoalaTable: FC<KoalaTableProps> = ({ data }): JSX.Element => {
    return (
        <Suspense fallback={<Loader />}>
            <table className="w-screen z-10">
                <KoalaTableHead />
                <KoalaTableBody data={data} />
            </table>
        </Suspense>
    );
};

export default KoalaTable;
