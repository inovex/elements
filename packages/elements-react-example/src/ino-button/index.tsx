import * as React from 'react';
import { InoButton, InoIcon, InoTooltip, InoCheckbox } from '../shared/InovexElements';
import { useState } from 'react';

export const Button = () => {
  const [check, setCheck] = useState(false);

  return (
    <div className="App">
      <InoCheckbox
        onCheckedChange={(event) => setCheck(event.detail)}
        checked={check}
      >MyLabel</InoCheckbox>
      <br />
      <p id="sss">Lorem ipsum text...</p>
      {check && (
        <InoTooltip for="sss">Goo</InoTooltip>
      )}
      <br />
      <InoButton id="sss" dense={false} fill="solid" loading={false}>
        <InoIcon slot="icon-leading" icon="info" />
        My Button
        <InoIcon slot="icon-trailing" icon="info" />
      </InoButton>
    </div>
  )
};
