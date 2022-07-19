import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import './index.scss';
import logo from './favicon.svg';

const InoList = import.meta.glob('./shared/InovexElements');
const InoListDivider = import.meta.glob('./shared/InovexElements');
const InoNavDrawer = import.meta.glob('./shared/InovexElements');

//import { InoList, InoListDivider, InoNavDrawer } from './shared/InovexElements';

import { HomeTodoApp } from './home-todo-app';
import { Dialog } from './ino-dialog';
import { Select } from './ino-select';
import { Fab } from './ino-fab';
import { NavItemLink } from './shared/components/NavItemLink';
import { Button } from './ino-button';

type CustomRoute = {
  to: string;
  label: string;
  component: any
}

const ROUTES: CustomRoute[] = [
  {
    to: '/ino-button',
    label: '<InoButton>',
    component: <Button/>
  },
  {
    to: '/ino-dialog',
    label: '<InoDialog>',
    component: <Dialog/>
  },
  {
    to: '/ino-fab',
    label: '<InoFab>',
    component: <Fab/>
  },
  {
    to: '/ino-select',
    label: '<InoSelect>',
    component: <Select/>
  }
];

const App: React.FC = () => {
  const [navOpen, setNavOpen] = React.useState(true);
  return (
    <Router>
      <InoNavDrawer
        open={navOpen}
        anchor="left"
        variant="docked"
        onOpenChange={(event) => {
          setNavOpen(event.detail);
        }}
      >
        <InoList slot="header">
          <img height={'50'} alt="react-icon" src={logo}/>
          <h2>inovex elements</h2>
          <span>React examples</span>
        </InoList>
        <InoList slot="content">
          <NavItemLink to="/home" label="TodoApp" />
          <InoListDivider/>
          {
            ROUTES.map(({ to, label }) => (
                <NavItemLink key={to} to={to} label={label}/>
              )
            )
          }
        </InoList>
        <main slot="app">
          <Routes>
            <Route path="/" element={<Navigate replace to="/home"/>}/>
            <Route path="/home" element={ <HomeTodoApp/>} />
            {
              ROUTES.map((route) => (
                  <Route key={route.to} path={route.to} element={route.component} />
                )
              )
            }
          </Routes>
        </main>
      </InoNavDrawer>
    </Router>
  );
};

export default App;
