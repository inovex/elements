import { h } from '@stencil/core';
import { useState } from 'react';

const EditLinkDialog = () => {
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [lastURL, setLastURL] = useState('');

  const handleDeleteLink = () => {
    // Implement your delete link logic here
  };

  const submitLink = () => {
    // Implement your submit link logic here
  };

  return (
    <ino-dialog
      id="url-dialog"
      open={showLinkDialog}
      dismissible={true}
      headerText="Insert Link"
      onClose={() => setShowLinkDialog(false)}
    >
      <section data-ino-dialog-section slot="body">
        <ino-input
          data-ino-dialog-input
          label="URL"
          type="text"
          required={true}
          autoFocus={true}
          helper="Please enter a valid URL"
          error={!lastURL}
          value={lastURL}
          onValueChange={(e) => setLastURL(e.detail)}
          placeholder="https://example.org"
        ></ino-input>
      </section>
      <section data-ino-dialog-section slot="footer">
        <ino-button variant="outlined" onClick={() => setShowLinkDialog(false)}>
          Cancel
        </ino-button>
        <ino-button
          data-ino-dialog-delete
          variant="outlined"
          onClick={() => handleDeleteLink()}
          type="reset"
        >
          Delete
        </ino-button>
        <ino-button onClick={() => submitLink()} type="submit">
          Insert
        </ino-button>
      </section>
    </ino-dialog>
  );
};

export default EditLinkDialog;
