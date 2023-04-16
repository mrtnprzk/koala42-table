import { FC, ReactNode, createContext, useEffect, useState } from 'react';

import mockData from '@/__mocks__/example-data.json';
import { MainRecord } from '@/global/types';

interface RecordProviderProps {
    children: ReactNode;
}

interface TableContextType {
    isLoading: boolean;
    records: Array<MainRecord>;
}

export const RecordContext = createContext({} as TableContextType);

export const RecordProvider: FC<RecordProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [records, setRecords] = useState<Array<MainRecord>>([]);

    //simulating fetching data
    useEffect(() => {
        setIsLoading(true);
        setRecords(mockData);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return <RecordContext.Provider value={{ isLoading, records }}>{children}</RecordContext.Provider>;
};
