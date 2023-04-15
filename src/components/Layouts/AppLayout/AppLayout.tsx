import { FC, ReactNode } from 'react';

import Header from '@/components/Header/Header';

interface AppLayoutProps {
    children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
    return (
        <main className="flex flex-col h-[100vh] w-[100vw]">
            <Header />
            <div className="container mx-auto px-2 py-3 pt-16 lg:pt-20">{children}</div>
        </main>
    );
};

export default AppLayout;
