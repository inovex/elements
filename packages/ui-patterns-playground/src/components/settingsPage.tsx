import { useState } from 'react';
import {
  InoButton,
  InoIcon,
  InoImg,
  InoInput,
  InoList,
  InoNavDrawer,
  InoNavItem,
  InoTab,
  InoTabBar,
} from '@inovex.de/elements-react';
import elementsLogo from '../../assets/elements.svg';

function SettingsPage() {
  const [email, setEmail] = useState('emma.elements@elements.com');
  const [isEditingEmail, setIsEditingEmail] = useState(false);

  const handleEditClick = () => setIsEditingEmail(true);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleSaveClick = () => setIsEditingEmail(false);
  return (
    <div>
      <InoNavDrawer anchor="left" variant="docked" open>
        <div slot="header" className="w-full h-full">
          <InoImg src={elementsLogo} width={22} height={31} />
          <p className="title-s">inovex Elements</p>
        </div>

        <InoList slot="content" role="menubar" aria-label="Main Navigation">
          <InoNavItem role="menuitem" text="Home">
            <InoIcon icon="home" />
          </InoNavItem>
          <InoNavItem role="menuitem" text="Teams">
            <InoIcon icon="message" />
          </InoNavItem>
          <InoNavItem role="menuitem" text="Settings" activated>
            <InoIcon icon="settings" />
          </InoNavItem>
        </InoList>

        <InoList role="menubar" slot="footer" aria-label="Footer Navigation">
          <InoNavItem role="menuitem" text="IT Support">
            <InoIcon icon="developer" />
          </InoNavItem>
        </InoList>

        <main slot="app" className="bg-white h-screen px-20  py-10">
          <InoTabBar>
            <InoTab label="Account"></InoTab>
            <InoTab label="Notifcation"></InoTab>
            <InoTab label="Privacy"></InoTab>
          </InoTabBar>
          <div className="grid grid-cols-2">
            <div className="mt-10">
              <h2 className="header-h2">Account</h2>
              <h3 className="title-l mt-10">Personal information</h3>
              <p className="label-l mt-3">
                Look up and change all your personal data.
              </p>
              {/* Form-Section needs Function later*/}
              <div className="grid grid-cols-2 grid-rows-5 gap-8 mt-9">
                <div className="col-span-1 row-span-1">
                  <InoInput label="First Name" outline></InoInput>
                </div>

                <div className="col-span-1 row-span-1">
                  <InoInput label="Last Name" outline></InoInput>
                </div>

                <div className="col-span-2 row-span-1">
                  <InoInput label="Company Name" outline></InoInput>
                </div>

                <div className="col-span-2 row-span-1">
                  <InoInput label="Industry" outline></InoInput>
                </div>

                <div className="col-span-2 row-span-1">
                  <InoInput label="Role" outline data-list="roles">
                    <datalist id="roles">
                      <option>Developer</option>
                      <option>UX Designer</option>
                      <option>Product Owner</option>
                      <option>Scrum Master</option>
                    </datalist>
                  </InoInput>
                </div>
                <div className="col-span-2 row-span-1 flex justify-end">
                  <InoButton>Save Changes</InoButton>
                </div>
              </div>
              {/* Email Section needs Function later*/}
              <div className="email-section">
                <h3 className="title-l mt-8">E-Mail</h3>
                <div className="flex justify-between">
                  <p
                    id="emailDisplay"
                    className="label-l mt-3 text-inovex-primary"
                  >
                    emma.elements@elements.com
                  </p>
                  <input
                    id="emailEdit"
                    className="hidden"
                    type="text"
                    value="emma.elements@elements.com"
                  />
                  <InoButton
                    id="editEmailButton"
                    variant="text"
                    className="ino-button"
                  >
                    <InoIcon
                      className="ino-icon"
                      icon="edit"
                      slot="icon-leading"
                    ></InoIcon>
                    Edit
                  </InoButton>
                  <InoButton
                    id="saveEmailButton"
                    variant="text"
                    className="ino-button hidden"
                  >
                    <InoIcon
                      className="ino-icon"
                      icon="save"
                      slot="icon-leading"
                    >
                      Save
                    </InoIcon>
                  </InoButton>
                </div>
              </div>
            </div>
          </div>
        </main>
      </InoNavDrawer>
    </div>
  );
}

export default SettingsPage;
