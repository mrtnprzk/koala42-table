import { FC, ReactNode, createContext, useCallback, useEffect, useState } from 'react';

import mockData from '@/__mocks__/example-data.json';
import { MainRecordI, NemesisRecordI, SecretRecordI } from '@/global/types';

interface RecordProviderProps {
    children: ReactNode;
}

interface TableContextType {
    isLoading: boolean;
    records: Array<MainRecordI>;
    deleteMainRecord: (id: string) => void;
    deleteNemesisRecord: (id: string) => void;
    deleteSecretRecord: (id: string) => void;
}

export const RecordContext = createContext({} as TableContextType);

export const RecordProvider: FC<RecordProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [records, setRecords] = useState<Array<MainRecordI>>([]);

    //delete main record
    const deleteMainRecord = useCallback((recordId: string) => {
        setRecords((prevRecords) => prevRecords.filter((record) => record.data.ID !== recordId));
    }, []);

    //delete nemesis record
    const deleteNemesisRecord = useCallback((nemesisId: string) => {
        setRecords((prevRecords) =>
            prevRecords.flatMap((record) => {
                if ('has_nemesis' in record.children) {
                    const updatedNemesisRecords = record.children.has_nemesis?.records?.filter(
                        (nemesisRecord: NemesisRecordI) => nemesisRecord.data.ID !== nemesisId,
                    );
                    const updatedChildren = updatedNemesisRecords?.length
                        ? { has_nemesis: { records: updatedNemesisRecords } }
                        : {};

                    return [{ ...record, children: updatedChildren }];
                }

                return [record];
            }),
        );
    }, []);

    //delete secret record
    const deleteSecretRecord = useCallback((secretId: string) => {
        setRecords((prevRecords) => {
            return prevRecords.flatMap((record) => {
                if ('has_nemesis' in record?.children) {
                    const nemesisRecords = record.children.has_nemesis?.records ?? [];
                    const updatedNemesisRecords = nemesisRecords.flatMap((nemesisRecord: NemesisRecordI) => {
                        if ('has_secrete' in nemesisRecord.children) {
                            const secretRecords = nemesisRecord.children.has_secrete?.records ?? [];
                            const updatedSecretRecords = secretRecords.filter(
                                (secretRecord: SecretRecordI) => secretRecord.data.ID !== secretId,
                            );
                            const updatedChildren =
                                updatedSecretRecords.length > 0
                                    ? { has_secrete: { records: updatedSecretRecords } }
                                    : {};
                            return [{ ...nemesisRecord, children: updatedChildren }];
                        } else {
                            return nemesisRecord;
                        }
                    });
                    const updatedChildren =
                        updatedNemesisRecords.length > 0 ? { has_nemesis: { records: updatedNemesisRecords } } : {};
                    return [{ ...record, children: updatedChildren }];
                } else {
                    return record;
                }
            });
        });
    }, []);

    //simulating fetching data
    useEffect(() => {
        setIsLoading(true);
        setRecords(mockData);

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    return (
        <RecordContext.Provider
            value={{ isLoading, records, deleteMainRecord, deleteNemesisRecord, deleteSecretRecord }}
        >
            {children}
        </RecordContext.Provider>
    );
};
