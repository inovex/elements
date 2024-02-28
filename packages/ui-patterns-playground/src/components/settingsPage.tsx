import { useState } from 'react';
import {
  InoAvatar,
  InoButton,
  InoIcon,
  InoImg,
  InoInput,
  InoList,
  InoNavDrawer,
  InoNavItem,
  InoOption,
  InoSelect,
  InoTab,
  InoTabBar,
} from '@inovex.de/elements-react';
import elementsLogo from '../../assets/elements.svg';

function SettingsPage() {
  const [isPasswordSectionVisible, setIsPasswordSectionVisible] =
    useState(false);
  const [isSecurityQuestionsVisible, setIsSecurityQuestionsVisible] =
    useState(false);

  const togglePasswordSection = () => {
    setIsPasswordSectionVisible(!isPasswordSectionVisible);
  };

  const toggleSecurityQuestions = () => {
    setIsSecurityQuestionsVisible(!isSecurityQuestionsVisible);
  };
  return (
    <div>
      <InoNavDrawer anchor="left" variant="docked" open>
        <div slot="header" className="w-full">
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

        <main slot="app" className="bg-white px-20  py-10 ">
          <InoTabBar>
            <InoTab label="Account"></InoTab>
            <InoTab label="Notifcation"></InoTab>
            <InoTab label="Privacy"></InoTab>
          </InoTabBar>
          <div className="grid grid-cols-2 gap-20">
            <div className="my-10">
              <h2 className="header-h2">Account</h2>
              <h3 className="title-l mt-10">Personal information</h3>
              <p className="label-l mt-3">
                Look up and change all your personal data.
              </p>
              {/* Form-Section needs Function later*/}
              <div className="flex flex-col gap-y-5 mt-9">
                <div className="flex justify-between gap-4">
                  <InoInput
                    className="flex-grow"
                    label="First Name"
                    outline
                  ></InoInput>
                  <InoInput
                    className="flex-grow"
                    label="Last Name"
                    outline
                  ></InoInput>
                </div>
                <InoInput label="Company Name" outline></InoInput>
                <InoInput label="Industry" outline></InoInput>
                <InoInput label="Role" outline data-list="roles">
                  <datalist id="roles">
                    <option>Developer</option>
                    <option>UX Designer</option>
                    <option>Product Owner</option>
                    <option>Scrum Master</option>
                  </datalist>
                </InoInput>
                <InoButton className="self-end">Save Changes</InoButton>
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
              <div className="border-y border-inovex-p-3 py-10 mt-10">
                {/* Password Section */}
                <div className="password-section">
                  <div className="flex justify-between items-center">
                    <h3 className="title-l">Change Password</h3>
                    <InoIcon
                      className="cursor-pointer"
                      icon={
                        isPasswordSectionVisible ? 'arrow_up' : 'arrow_down'
                      }
                      onClick={togglePasswordSection}
                    />
                  </div>

                  {/* Transition wrapper for sliding and fading */}
                  <div
                    className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out
                      ${
                        isPasswordSectionVisible
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div
                      className={`flex flex-col gap-y-5 mt-4 ${
                        isPasswordSectionVisible ? '' : 'hidden'
                      }`}
                    >
                      <InoInput label="Current password" outline></InoInput>
                      <InoInput label="New password" outline></InoInput>
                      <InoInput label="Confirm password" outline></InoInput>
                      <InoButton className="self-end">Save Changes</InoButton>
                    </div>
                  </div>
                </div>
                {/* Security Section */}
                <div className="security-section mt-8">
                  <div className="flex justify-between items-center mt-10">
                    <h3 className="title-l">Security Questions</h3>
                    <InoIcon
                      className="cursor-pointer"
                      icon={
                        isSecurityQuestionsVisible ? 'arrow_up' : 'arrow_down'
                      }
                      onClick={toggleSecurityQuestions}
                    />
                  </div>
                  <div
                    className={`flex flex-col overflow-hidden transition-all duration-700 ease-in-out
                      ${
                        isSecurityQuestionsVisible
                          ? 'max-h-96 opacity-100'
                          : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div
                      className={`flex flex-col mt-4 ${
                        isPasswordSectionVisible ? '' : 'hidden'
                      }`}
                    >
                      <div className="flex justify-between">
                        <InoSelect
                          className="w-full mr-5"
                          label="Security Question 1"
                        >
                          <InoOption value="some-id">
                            Tailwind is fun :)
                          </InoOption>
                        </InoSelect>

                        <InoInput label="Answer 1"></InoInput>
                      </div>
                      <div className="flex justify-between">
                        <InoSelect
                          className="w-full mr-5"
                          label="Security Question 2"
                        >
                          <InoOption value="some-id">
                            What is your favorite Color
                          </InoOption>
                        </InoSelect>

                        <InoInput label="Answer 2"></InoInput>
                      </div>
                      <div className="flex justify-between">
                        <InoSelect
                          className="w-full mr-5"
                          label="Security Question 3"
                        >
                          <InoOption value="some-id">
                            What is the name of your first pet
                          </InoOption>
                        </InoSelect>

                        <InoInput label="Answer 3"></InoInput>
                      </div>
                      <InoButton className="mt-5 self-end">
                        Save Changes
                      </InoButton>
                    </div>
                  </div>
                </div>
              </div>
              {/* Delete-Section */}
              <div>
                <h3 className="title-l mt-10">Delete Account</h3>
                <div className="flex justify-between items-center mt-3">
                  <p className="label-l">You wish to delete your account?</p>
                  <InoButton variant="text">Yes, Delete</InoButton>
                </div>
              </div>
            </div>
            {/* STICKY NOT WORKING RN */}
            <div className="sticky top-0">
              <h3 className="title-l">Your Photo</h3>
              <div className="w-56 flex items-center flex-col mt-8">
                <InoAvatar
                  src="https://elements.inovex.de/version/v9.1.1/assets/avatar-b432ffe7.jpg"
                  initials="EE"
                  interactive
                ></InoAvatar>
                <div className="mt-6">
                  <InoButton variant="text" className="mr-4">
                    <InoIcon icon="upload" slot="icon-leading"></InoIcon>
                    Upload
                  </InoButton>
                  <InoButton variant="text">
                    <InoIcon icon="remove" slot="icon-leading"></InoIcon>
                    Remove
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
