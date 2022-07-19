import { Link, useMatch } from 'react-router-dom';
//import { InoIcon, InoNavItem } from '../InovexElements';
const InoIcon = import.meta.glob('./shared/InovexElements');
const InoNavItem = import.meta.glob('./shared/InovexElements');

import React from 'react';

export const NavItemLink = ({
                              label,
                              to,
                            }: {
  label: string;
  to: string;
}) => {
  let match = useMatch(to);
  return (
    <Link className={'router-link'} to={to}>
      <InoNavItem activated={Boolean(match)} text={label}>
        {/* for now just use an empty icon to avoid jumping content issue */}
        <InoIcon icon="" />
      </InoNavItem>
    </Link>
  );
};
