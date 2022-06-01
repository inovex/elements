import React from 'react';
import './Dialog.scss';

import { InoButton, InoDialog, InoIconButton, InoOption, InoSelect } from '../shared/InovexElements';

export const Dialog: React.FC = () => {
  const [selectedValue, setSelectedValue] = React.useState('');
  const [dialogOpen, setDialogOpen] = React.useState(false);
  return (
    <div className="App">
      <InoButton onClick={() => setDialogOpen(true)}>
        Open Dialog
      </InoButton>

      <InoDialog dismissible open={dialogOpen}>
        <div className="ino-dialog-header">
          <div className="ino-dialog-title">
            <h3>My example Dialog</h3>
            <InoIconButton
              onClickEl={() => setDialogOpen(false)}
              icon="close"
            />
          </div>
        </div>
        <div className="ino-dialog-content">
          <InoSelect
            onValueChange={(event) => setSelectedValue(event.detail)}
            label="Form select"
            required
            value={selectedValue}
          >
            <InoOption value="Douglas, Gaylord and Gutmann">
              Douglas, Gaylord and Gutmann
            </InoOption>
            <InoOption value="Reinger, Russel and Dooley">
              Reinger, Russel and Dooley
            </InoOption>
            <InoOption value="Borer, Barton and Homenick">
              Borer, Barton and Homenick
            </InoOption>
            <InoOption value="Gutmann LLC">Gutmann LLC</InoOption>
          </InoSelect>{' '}
        </div>
        <div className="ino-dialog-footer">
          <InoButton onClick={() => setDialogOpen(false)}>
            Close Dialog
          </InoButton>
        </div>
      </InoDialog>
    </div>
  );
};
