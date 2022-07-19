import * as React from 'react';
//import { InoButton, InoIcon } from '../shared/InovexElements';
const { InoButton, InoIcon } = import.meta.glob('./shared/InovexElements');

export const Button = () => (
  <div className="App">
    <InoButton
      colorScheme="primary"
      dense={false}
      fill="solid"
      loading={false}
    >
      <InoIcon slot="icon-leading" icon="info" />
      My Button
      <InoIcon slot="icon-trailing" icon="info" />
    </InoButton>
  </div>
);
