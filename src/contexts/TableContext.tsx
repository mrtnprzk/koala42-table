import { FC, ReactNode, createContext, useEffect, useMemo, useState } from 'react';

import { MainRecord } from '@/global/types';

interface RecordProviderProps {
    children: ReactNode;
}

interface TableContextType {
    isLoading: boolean;
    records: Array<MainRecord>;
    deleteMainRecord: (id: string) => void;
    deleteNemesisRecord: (id: string) => void;
    deleteSecretRecord: (id: string) => void;
}

export const RecordContext = createContext({} as TableContextType);

export const RecordProvider: FC<RecordProviderProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [records, setRecords] = useState<Array<MainRecord>>([]);

    //delete main record
    const deleteMainRecord = (recordId: string) => {
        setRecords((prevRecords) => prevRecords.filter((record) => record.data.ID !== recordId));
    };

    //delete nemesis record
    const deleteNemesisRecord = (nemesisId: string) => {
        setRecords((prevRecords) =>
            prevRecords.flatMap((record) => {
                if ('has_nemesis' in record.children) {
                    const updatedNemesisRecords = record.children.has_nemesis?.records?.filter(
                        (nemesisRecord: NemesisRecordI) => nemesisRecord.data.ID !== nemesisId,
                        (nemesisRecord) => nemesisRecord.data.ID !== nemesisId,
                    );
                    const updatedChildren = updatedNemesisRecords?.length
                        ? { has_nemesis: { records: updatedNemesisRecords } }
                        : {};

                    return [{ ...record, children: updatedChildren }];
                }

                return [record];
            }),
        );
    };

    //delete secret record
    const deleteSecretRecord = (secretId: string) => {
        setRecords((prevRecords) => {
            return prevRecords.flatMap((record) => {
                if ('has_nemesis' in record.children) {
                    const nemesisRecords = record.children.has_nemesis?.records ?? [];
                    const updatedNemesisRecords = nemesisRecords.flatMap((nemesisRecord) => {
                        if ('has_secrete' in nemesisRecord.children) {
                            const secretRecords = nemesisRecord.children.has_secrete?.records ?? [];
                            const updatedSecretRecords = secretRecords.filter(
                                (secretRecord) => secretRecord.data.ID !== secretId,
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
    };

    //simulating fetching data
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);

            try {
                const response = await fetch('./__mocks__/example-data.json');
                const data = await response.json();
                setRecords(data);
            } catch (error) {
                console.error(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);

    const value = useMemo(
        () => ({ isLoading, records, deleteMainRecord, deleteNemesisRecord, deleteSecretRecord }),
        [records],
    );

    return <RecordContext.Provider value={value}>{children}</RecordContext.Provider>;
};
