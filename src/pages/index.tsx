import KoalaTable from '@/components/KoalaTable/KoalaTable';
import { RecordProvider } from '@/contexts/TableContext';

export default function Home() {
    return (
        <RecordProvider>
            <KoalaTable />
        </RecordProvider>
    );
}
