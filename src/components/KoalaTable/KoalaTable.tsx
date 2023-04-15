import { FC, Suspense } from 'react';

import Loader from '../Loader/Loader';
import KoalaTableBody from './KoalaTableBody/KoalaTableBody';
import KoalaTableHead from './KoalaTableHead/KoalaTableHead';

interface KoalaTableProps {
    data: any; //TODO: add type
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
