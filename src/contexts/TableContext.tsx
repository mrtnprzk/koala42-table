import { FC, ReactNode, createContext, useCallback, useEffect, useState } from 'react';

import mockData from '@/__mocks__/example-data.json';
import { MainRecord } from '@/global/types';

interface RecordProviderProps {
    children: ReactNode;
}

interface TableContextType {
    isLoading: boolean;
    records: Array<MainRecord>;
    deleteMainRecord: (id: string) => void;
}

export const RecordContext = createContext({} as TableContextType);

export const RecordProvider: FC<RecordProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [records, setRecords] = useState<Array<MainRecord>>([]);
    console.log(records);

    //delete main record
    const deleteMainRecord = useCallback((id: string) => {
        setRecords((prevRecords) => prevRecords.filter((record) => record.data.ID !== id));
    }, []);

    //TODO delete nemesis record
    const deleteNemesisRecord = useCallback((id: string) => {}, []);

    //TODO delete secret record
    const deleteSecretRecord = useCallback((id: string) => {}, []);

    //simulating fetching data
    useEffect(() => {
        setIsLoading(true);
        setRecords(mockData);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return <RecordContext.Provider value={{ isLoading, records, deleteMainRecord }}>{children}</RecordContext.Provider>;
};
