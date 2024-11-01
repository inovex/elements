'use client';
import { useState } from 'react';
import {
  InoAccordion,
  InoAvatar,
  InoButton,
  InoIcon,
  InoImg,
  InoInput,
  InoList,
  InoNavDrawer,
  InoNavItem,
  InoOption,
  InoProgressBar,
  InoSelect,
  InoSwitch,
  InoTab,
  InoTabBar,
} from '@inovex.de/elements-react';

export default function SettingsComponent() {
  const [isPasswordAccordionOpen, setIsPasswordAccordionOpen] = useState(false);
  const [isSecurityAccordionOpen, setIsSecurityAccordionOpen] = useState(false);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    companyName: '',
    industry: '',
    role: '',
    email: '',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    securityQuestion1: '',
    answer1: '',
    securityQuestion2: '',
    answer2: '',
    securityQuestion3: '',
    answer3: '',
  });

  const handleInputChange = (field: string) => (e: CustomEvent) => {
    setFormValues({ ...formValues, [field]: e.detail });
  };

  const handleTabChange = (event: CustomEvent) => {
    setActiveTabIndex(event.detail);
  };

  return (
    <InoNavDrawer className="relative" anchor="left" variant="docked" open>
      <div slot="header" className="w-full min-w-[80px]">
        <InoImg id="logo" src="/elements.svg" width={22} height={31}></InoImg>
        <p className="title-s">inovex Elements</p>
      </div>

      <InoList slot="content" role="menubar" aria-label="Main Navigation">
        <InoNavItem role="menuitem" text="Home">
          <InoIcon icon="home"></InoIcon>
        </InoNavItem>
        <InoNavItem role="menuitem" text="Teams">
          <InoIcon icon="message"></InoIcon>
        </InoNavItem>
        <InoNavItem role="menuitem" text="Settings" activated>
          <InoIcon icon="settings"></InoIcon>
        </InoNavItem>
      </InoList>

      <InoList role="menubar" slot="footer" aria-label="Footer Navigation">
        <InoNavItem role="menuitem" text="IT Support">
          <InoIcon icon="developer"></InoIcon>
        </InoNavItem>
      </InoList>

      <main slot="app" className="bg-white px-20 py-10 h-screen xl:min-w-[1125px]">
        <InoTabBar onActiveTabChange={handleTabChange} activeTab={activeTabIndex}>
          <InoTab label="Account" a11y-controls="account-panel" data-target="account-panel"></InoTab>
          <InoTab label="Notification" a11y-controls="notification-panel" data-target="notification-panel"></InoTab>
          <InoTab label="Updates" a11y-controls="update-panel" data-target="update-panel"></InoTab>
        </InoTabBar>

        {activeTabIndex === 0 && (
          <div id="account-panel" className="panel grid xl:grid-cols-[2fr,1fr] grid-cols-1 xl:gap-20 gap-10 py-10">
            <div>
              <h2 className="header-h2">Account</h2>
              <h3 className="title-l mt-10">Personal information</h3>
              <p className="label-l mt-3">Look up and change all your personal data.</p>

              <form className="flex flex-col gap-y-5 mt-9">
                <div className="flex xl:flex-row flex-col justify-between gap-4">
                  <InoInput
                    className="flex-grow"
                    label="First Name"
                    outline
                    value={formValues.firstName}
                    onValueChange={handleInputChange('firstName')}
                  ></InoInput>
                  <InoInput
                    className="flex-grow"
                    label="Last Name"
                    outline
                    value={formValues.lastName}
                    onValueChange={handleInputChange('lastName')}
                  ></InoInput>
                </div>
                <InoInput
                  name="company"
                  label="Company Name"
                  outline
                  value={formValues.companyName}
                  onValueChange={handleInputChange('companyName')}
                ></InoInput>
                <InoInput
                  label="Industry"
                  outline
                  value={formValues.industry}
                  onValueChange={handleInputChange('industry')}
                ></InoInput>
                <InoInput
                  label="Role"
                  outline
                  value={formValues.role}
                  onValueChange={handleInputChange('role')}
                  data-list="roles"
                >
                  <datalist id="roles">
                    <option>Developer</option>
                    <option>UX Designer</option>
                    <option>Product Owner</option>
                    <option>Scrum Master</option>
                  </datalist>
                </InoInput>
                <InoButton id="submit-personal-info" className="self-end">
                  Save Changes
                </InoButton>
              </form>

              <div>
                <h3 className="title-l mt-8">E-Mail</h3>
                <div className="flex xl:flex-row flex-col justify-between mt-6 gap-4">
                  <InoInput
                    label="E-mail"
                    className="flex-grow"
                    outline
                    value={formValues.email}
                    onValueChange={handleInputChange('email')}
                  ></InoInput>
                  <InoButton variant="text">
                    <InoIcon icon="save" slot="icon-leading"></InoIcon>
                    Save
                  </InoButton>
                </div>
              </div>

              <div className="border-y border-inovex-p-3 py-10 mt-10 flex flex-col gap-4">
                <InoAccordion
                  accordion-title="Change Password"
                  expanded={isPasswordAccordionOpen}
                  onExpandedChange={() => setIsPasswordAccordionOpen(!isPasswordAccordionOpen)}
                >
                  <div className="flex flex-col gap-y-5 mt-4">
                    <InoInput
                      label="Current password"
                      outline
                      value={formValues.currentPassword}
                      onValueChange={handleInputChange('currentPassword')}
                    ></InoInput>
                    <InoInput
                      label="New password"
                      outline
                      value={formValues.newPassword}
                      onValueChange={handleInputChange('newPassword')}
                    ></InoInput>
                    <InoInput
                      label="Confirm password"
                      outline
                      value={formValues.confirmPassword}
                      onValueChange={handleInputChange('confirmPassword')}
                    ></InoInput>
                    <InoButton id="change-password-button" className="self-end">
                      Save Changes
                    </InoButton>
                  </div>
                </InoAccordion>

                <InoAccordion
                  accordion-title="Security Questions"
                  expanded={isSecurityAccordionOpen}
                  onExpandedChange={() => setIsSecurityAccordionOpen(!isSecurityAccordionOpen)}
                >
                  <div className="flex flex-col m-y-4">
                    <div className="flex justify-between">
                      <InoSelect
                        className="w-full mr-5"
                        label="Security Question 1"
                        value={formValues.securityQuestion1}
                        onValueChange={handleInputChange('securityQuestion1')}
                      >
                        <InoOption value="question1">Question 1</InoOption>
                      </InoSelect>
                      <InoInput
                        label="Answer 1"
                        value={formValues.answer1}
                        onValueChange={handleInputChange('answer1')}
                      ></InoInput>
                    </div>
                    <div className="flex justify-between">
                      <InoSelect
                        className="w-full mr-5"
                        label="Security Question 2"
                        value={formValues.securityQuestion2}
                        onValueChange={handleInputChange('securityQuestion2')}
                      >
                        <InoOption value="question2">Question 2</InoOption>
                      </InoSelect>
                      <InoInput
                        label="Answer 2"
                        value={formValues.answer2}
                        onValueChange={handleInputChange('answer2')}
                      ></InoInput>
                    </div>
                    <div className="flex justify-between">
                      <InoSelect
                        className="w-full mr-5"
                        label="Security Question 3"
                        value={formValues.securityQuestion3}
                        onValueChange={handleInputChange('securityQuestion3')}
                      >
                        <InoOption value="question3">Question 3</InoOption>
                      </InoSelect>
                      <InoInput
                        label="Answer 3"
                        value={formValues.answer3}
                        onValueChange={handleInputChange('answer3')}
                      ></InoInput>
                    </div>
                    <InoButton id="save-security-questions" className="mt-5 self-end">
                      Save Changes
                    </InoButton>
                  </div>
                </InoAccordion>
              </div>

              <div>
                <h3 className="title-l mt-10">Delete Account</h3>
                <div className="flex justify-between items-center mt-3">
                  <p className="label-l">You wish to delete your account?</p>
                  <InoButton variant="text">Yes, Delete</InoButton>
                </div>
              </div>
            </div>

            <div className="border-t border-inovex-p-3 xl:border-none">
              <div className="sticky top-0">
                <h3 className="title-l xl:m-0 mt-10">Your Photo</h3>
                <div className="w-56 flex items-center flex-col mt-8">
                  <InoAvatar initials="EE" interactive></InoAvatar>
                  <div className="mt-6">
                    <InoButton variant="text">
                      <InoIcon icon="info" slot="icon-leading"></InoIcon>
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
          </div>
        )}

        {activeTabIndex === 1 && (
          <div id="notification-panel" className="panel py-10 max-w-xl">
            <h2 className="header-h2">Notifications</h2>
            <p className="body-l mt-10 text-inovex-n-10">Choose which Notifications you want to receive.</p>
            <div className="flex flex-col gap-20 mt-6">
              <div>
                <h3 className="title-m mb-6">Work Updates</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <span className="text-inovex-n-9">Project status updates</span>
                    <InoSwitch></InoSwitch>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <span className="text-inovex-n-9">Task assignments</span>
                    <InoSwitch></InoSwitch>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <span className="text-inovex-n-9">Deadline Reminders</span>
                    <InoSwitch></InoSwitch>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="title-m mb-6">Meeting Notifications</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <span className="text-inovex-n-9">Invitation</span>
                    <InoSwitch></InoSwitch>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <span className="text-inovex-n-9">Reminders</span>
                    <InoSwitch></InoSwitch>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <span className="text-inovex-n-9">Cancellations</span>
                    <InoSwitch></InoSwitch>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="title-m mb-6">IT Notifications</h3>
                <div className="flex flex-col sm:flex-row justify-between mb-2">
                  <span className="text-inovex-n-9">System maintenance alerts</span>
                  <InoSwitch></InoSwitch>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTabIndex === 2 && (
          <div id="update-panel" className="panel py-10 max-w-xl">
            <h2 className="header-h2">Updates</h2>
            <p className="body-l mt-10 text-inovex-n-10">Your app is currently being updated to the latest version.</p>
            <div className="flex flex-col gap-20 mt-6">
              <div>
                <h3 className="title-m my-6">Downloading Update...</h3>
                <InoProgressBar buffer={0.9} progress={0.4} indeterminate={false}></InoProgressBar>
                <p className="body-m text-inovex-n-9 mt-2">40% downloaded...</p>
              </div>

              <div>
                <h3 className="body-m my-6">Installing Update...</h3>
                <InoProgressBar indeterminate={true}></InoProgressBar>
                <p className="body-m text-inovex-n-9 mt-2">Installation will begin shortly...</p>
              </div>
            </div>
          </div>
        )}
      </main>
    </InoNavDrawer>
  );
}
