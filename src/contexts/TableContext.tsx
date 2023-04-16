import { FC, ReactNode, createContext, useCallback, useEffect, useState } from 'react';

import mockData from '@/__mocks__/example-data.json';
import { MainRecord, NemesisRecord } from '@/global/types';

interface RecordProviderProps {
    children: ReactNode;
}

interface TableContextType {
    isLoading: boolean;
    records: Array<MainRecord>;
    deleteMainRecord: (id: string) => void;
    deleteNemesisRecord: (id: string) => void;
}

export const RecordContext = createContext({} as TableContextType);

export const RecordProvider: FC<RecordProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [records, setRecords] = useState<Array<MainRecord>>([]);
    console.log(records);

    //delete main record
    const deleteMainRecord = useCallback((recordId: string) => {
        setRecords((prevRecords) => prevRecords.filter((record) => record.data.ID !== recordId));
    }, []);

    //delete nemesis record
    const deleteNemesisRecord = useCallback((nemesisId: string) => {
        setRecords((prevRecords) => {
            return prevRecords.map((record) => {
                if ('has_nemesis' in record.children) {
                    const updatedNemesisRecords = record?.children?.has_nemesis?.records?.filter(
                        (nemesisRecord: NemesisRecord) => nemesisRecord.data.ID !== nemesisId,
                    );
                    const updatedChildren = updatedNemesisRecords?.length
                        ? { has_nemesis: { records: updatedNemesisRecords } }
                        : {};

                    return {
                        ...record,
                        children: updatedChildren,
                    };
                } else {
                    return record;
                }
            });
        });
    }, []);

    //TODO delete secret record
    // const deleteSecretRecord = useCallback((secretId: string) => {}, []);

    //simulating fetching data
    useEffect(() => {
        setIsLoading(true);
        setRecords(mockData);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <RecordContext.Provider value={{ isLoading, records, deleteMainRecord, deleteNemesisRecord }}>
            {children}
        </RecordContext.Provider>
    );
};
