import { useEffect, useState } from 'react';

import mockData from '@/__mocks__/example-data.json';
import KoalaTable from '@/components/KoalaTable/KoalaTable';
import Loader from '@/components/Loader/Loader';
import { MainRecord } from '@/global/types';

export default function Home() {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [data, setData] = useState<MainRecord[] | []>([]);

    //simulating fetching data
    useEffect(() => {
        setIsLoading(true);
        setData(mockData);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return <>{isLoading ? <Loader /> : <KoalaTable data={data} />}</>;
}
