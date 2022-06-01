import React from 'react';

import { InoFab, InoIcon } from '../shared/InovexElements';

export const Fab: React.FC = () => {
  return (
    <div className="App">
      <InoFab label="This is a fab">
        <InoIcon slot="icon-leading" icon="star" />
      </InoFab>
    </div>
  );
};
