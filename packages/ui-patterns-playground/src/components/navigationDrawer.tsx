import { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InoIcon,
  InoImg,
  InoList,
  InoNavDrawer,
  InoNavItem,
} from '@inovex.de/elements-react';

import ShowcaseBox from './showcaseBox';

type NavigationDrawerProps = {
  children: ReactNode;
};

function NavigationDrawer({ children }: NavigationDrawerProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <InoNavDrawer
      className="customizable-drawer"
      open={drawerOpen}
      anchor="left"
      variant="docked"
      onOpenChange={(e) => setDrawerOpen(e.detail)}
    >
      <div slot="header">
        <InoImg
          slot="logo"
          width={32}
          height={32}
          alt="inovex Elements Logo"
          src="/favicon-32x32.png"
        ></InoImg>
        <p>Patterns</p>
      </div>
      <InoList role="menubar" slot="content" aria-label="Main Navigation">
        <Link to="/">
          <InoNavItem role="menuitem" text="Login">
            <InoIcon icon="dashboard"></InoIcon>
          </InoNavItem>
        </Link>
        <Link to="/mypatterna">
          <InoNavItem role="menuitem" text="MyPatternA" activated>
            <InoIcon icon="number"></InoIcon>
          </InoNavItem>
        </Link>
      </InoList>

      <InoList role="menubar" slot="footer" aria-label="Footer Navigation">
        <Link to="/guide">
          <InoNavItem role="menuitem" text="Guide">
            <InoIcon icon="question"></InoIcon>
          </InoNavItem>
        </Link>
      </InoList>

      {/* Content will be placed here in the App.tsx component */}
      <main
        slot="app"
        className="main-content h-full flex justify-center items-center"
      >
        <div>
          <ShowcaseBox>{children}</ShowcaseBox>
        </div>
      </main>
    </InoNavDrawer>
  );
}

export default NavigationDrawer;
