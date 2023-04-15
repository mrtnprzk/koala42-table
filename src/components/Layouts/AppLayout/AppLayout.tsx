import { FC, ReactNode } from 'react';

import Header from '@/components/Header/Header';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <main className="flex flex-col h-[100vh] w-[100vw]">
            <Header />
            {children}
        </main>
    );
};

export default AppLayout;
