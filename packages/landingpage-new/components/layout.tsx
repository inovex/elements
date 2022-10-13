import {ReactNode} from 'react';

import dynamic from 'next/dynamic'
import {InoButton, InoTab, InoTabBar} from "@inovex.de/elements-react";
import {useRouter} from "next/router";

const ImportedTabBar = dynamic(import("@inovex.de/elements-react").then(m => m.InoTabBar), {
    ssr: false,
}) as typeof InoTabBar;

const ImportedInoTab = dynamic(() => import("@inovex.de/elements-react").then(m => m.InoTab), {
    ssr: false,
}) as typeof InoTab;

export default function Layout({children}: { children: ReactNode }) {

    const router = useRouter()

    return (
        <div>
            <header>
                <ImportedTabBar activeTab={router.pathname === '/' ? 0 : router.pathname === '/explore' ? 1 : 2}>
                    <ImportedInoTab label={"Home"} onInteracted={() => router.push('/')}></ImportedInoTab>
                    <ImportedInoTab label={"Explore"} onInteracted={() => router.push('explore')}></ImportedInoTab>
                    <ImportedInoTab label={"Storybook"} onInteracted={() => router.push('storybook')}></ImportedInoTab>
                </ImportedTabBar>
            </header>
            <main>{children}</main>
        </div>
    );
}
