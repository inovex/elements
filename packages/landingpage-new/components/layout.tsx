import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { InoTab, InoTabBar } from '@elements';

export default function Layout({children}: { children: ReactNode }) {

    const router = useRouter()

    return (
        <div>
            <header>
                <InoTabBar activeTab={router.pathname === '/' ? 0 : router.pathname === '/explore' ? 1 : 2}>
                    <InoTab label={"Home"} onInteracted={() => router.push('/')}></InoTab>
                    <InoTab label={"Explore"} onInteracted={() => router.push('explore')}></InoTab>
                    <InoTab label={"Storybook"} onInteracted={() => router.push('storybook')}></InoTab>
                </InoTabBar>
            </header>
            <main>{children}</main>
        </div>
    );
}
