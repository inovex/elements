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
  InoProgressBar,
  InoSelect,
  InoSwitch,
  InoTab,
  InoTabBar,
} from '@inovex.de/elements-react';
import elementsLogo from '../../assets/elements.svg';

function TestPage() {
  const [isPasswordSectionVisible, setIsPasswordSectionVisible] =
    useState(false);
  const [isSecurityQuestionsVisible, setIsSecurityQuestionsVisible] =
    useState(false);

  //State for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');

  const isFormSaveDisabled =
    !firstName || !lastName || !companyName || !industry || !role;

  //State for password section
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // State for security questions
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [answer3, setAnswer3] = useState('');

  const isPasswordSaveDisabled =
    !currentPassword || !newPassword || !confirmPassword;

  const isSecuritySaveDisabled = !answer1 || !answer2 || !answer3;

  const [email, setEmail] = useState('emma.elements@elements.com');
  const [isEditEmail, setIsEditEmail] = useState(false);

  const [activeTab, setActiveTab] = useState(0);

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

        <main slot="app" className="bg-white px-20 py-10 h-screen">
          <InoTabBar
            activeTab={activeTab}
            onActiveTabChange={(e) => setActiveTab(e.detail)}
          >
            <InoTab label="Account" a11yControls="account-panel"></InoTab>
            <InoTab
              label="Notification"
              a11yControls="notification-panel"
            ></InoTab>
            <InoTab label="Updates" a11yControls="update-panel"></InoTab>
          </InoTabBar>

          {/* Account Panel */}
          {activeTab === 0 && (
            <div className="grid grid-cols-[2fr,1fr] gap-20 py-10">
              <div>
                <h2 className="header-h2">Account</h2>
                <h3 className="title-l mt-10">Personal information</h3>
                <p className="label-l mt-3">
                  Look up and change all your personal data.
                </p>
                {/* Form-Section needs Function later*/}
                <div className="flex flex-col gap-y-5 mt-9">
                  <div className="flex justify-between gap-4">
                    <InoInput
                      value={firstName}
                      onValueChange={(e) => setFirstName(e.detail)}
                      className="flex-grow"
                      label="First Name"
                      outline
                    ></InoInput>
                    <InoInput
                      value={lastName}
                      onValueChange={(e) => setLastName(e.detail)}
                      className="flex-grow"
                      label="Last Name"
                      outline
                    ></InoInput>
                  </div>
                  <InoInput
                    value={companyName}
                    onValueChange={(e) => setCompanyName(e.detail)}
                    label="Company Name"
                    outline
                  ></InoInput>
                  <InoInput
                    value={industry}
                    onValueChange={(e) => setIndustry(e.detail)}
                    label="Industry"
                    outline
                  ></InoInput>
                  <InoInput
                    value={role}
                    onValueChange={(e) => setRole(e.detail)}
                    label="Role"
                    outline
                    data-list="roles"
                  >
                    <datalist id="roles">
                      <option>Developer</option>
                      <option>UX Designer</option>
                      <option>Product Owner</option>
                      <option>Scrum Master</option>
                    </datalist>
                  </InoInput>
                  <InoButton disabled={isFormSaveDisabled} className="self-end">
                    Save Changes
                  </InoButton>
                </div>
                {/* Email Section*/}
                <div>
                  <h3 className="title-l mt-8">E-Mail</h3>
                  <div className="flex justify-between">
                    {!isEditEmail ? (
                      <>
                        <p
                          className="label-l mt-3 text-inovex-primary"
                        >
                          {email}
                        </p>
                        <InoButton
                          onClick={() => setIsEditEmail(!isEditEmail)}
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
                      </>
                    ) : (
                      <>
                        <InoInput
                          value={email}
                          onValueChange={(e) => setEmail(e.detail)}
                          className="flex-grow"
                        ></InoInput>
                        <InoButton
                          variant="text"
                          className="ino-button"
                          onClick={() => setIsEditEmail(!isEditEmail)}
                        >
                          <InoIcon
                            className="ino-icon"
                            icon="save"
                            slot="icon-leading"
                          ></InoIcon>
                          Save
                        </InoButton>
                      </>
                    )}
                  </div>
                </div>
                <div className="border-y border-inovex-p-3 py-10 mt-10">
                  {/* Password Section */}
                  <div>
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
                        <InoInput
                          value={currentPassword}
                          onValueChange={(e) => setCurrentPassword(e.detail)}
                          label="Current password"
                          outline
                        ></InoInput>
                        <InoInput
                          value={newPassword}
                          onValueChange={(e) => setNewPassword(e.detail)}
                          label="New password"
                          outline
                        ></InoInput>
                        <InoInput
                          value={confirmPassword}
                          onValueChange={(e) => setConfirmPassword(e.detail)}
                          label="Confirm password"
                          outline
                        ></InoInput>
                        <InoButton
                          disabled={isPasswordSaveDisabled}
                          className="self-end"
                        >
                          Save Changes
                        </InoButton>
                      </div>
                    </div>
                  </div>
                  {/* Security Section */}
                  <div className="mt-8">
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

                          <InoInput
                            value={answer1}
                            onValueChange={(e) => setAnswer1(e.detail)}
                            label="Answer 1"
                          ></InoInput>
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

                          <InoInput
                            value={answer2}
                            onValueChange={(e) => setAnswer2(e.detail)}
                            label="Answer 2"
                          ></InoInput>
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

                          <InoInput
                            value={answer3}
                            onValueChange={(e) => setAnswer3(e.detail)}
                            label="Answer 3"
                          ></InoInput>
                        </div>
                        <InoButton
                          disabled={isSecuritySaveDisabled}
                          className="mt-5 self-end"
                        >
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
              {/* Your Photo */}
              <div>
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
            </div>
          )}
          {/* Notifcation Panel */}
          {activeTab === 1 && (
            <div className="py-10 max-w-xl">
              <h2 className="header-h2">Notifications</h2>
              <p className="body-l mt-10 text-inovex-n-10">
                Choose which Notifications you want to receive.
              </p>
              <div className="flex flex-col gap-20 mt-6">
                <div>
                  <h3 className="title-m mb-6">Work Updates</h3>
                  <div className=" flex flex-col gap-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-inovex-n-9">
                        Project status updates
                      </span>
                      <InoSwitch />
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-inovex-n-9">Task assignments</span>
                      <InoSwitch />
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-inovex-n-9">
                        Deadline Reminders
                      </span>
                      <InoSwitch />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="title-m mb-6">Meeting Notifications</h3>
                  <div className=" flex  flex-col gap-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-inovex-n-9">Invitation</span>
                      <InoSwitch />
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-inovex-n-9">Reminders</span>
                      <InoSwitch />
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-inovex-n-9">Cancellations</span>
                      <InoSwitch />
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="title-m mb-6">IT Notifications</h3>

                  <div className="flex justify-between mb-2">
                    <span className="text-inovex-n-9">
                      System maintenance alerts
                    </span>
                    <InoSwitch />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Update Panel */}
          {activeTab === 2 && (
            <div className="py-10 max-w-xl">
              <h2 className="header-h2">Updates</h2>
              <p className="body-l mt-10 text-inovex-n-10">
                Your app is currently being updated to the latest version.
              </p>

              <div className="flex flex-col gap-20 mt-6">
                <div>
                  <h3 className="title-m my-6">Downloading Update...</h3>
                  <InoProgressBar
                    buffer={0.9}
                    progress={0.4}
                    indeterminate={false}
                  ></InoProgressBar>
                  <p className="body-m text-inovex-n-9 mt-2">
                    40% downloaded...
                  </p>
                </div>

                <div>
                  <h3 className="body-m my-6">Installing Update...</h3>
                  <InoProgressBar indeterminate={true}></InoProgressBar>
                  <p className="body-m text-inovex-n-9 mt-2">
                    Installation will begin shortly...
                  </p>
                </div>
              </div>
            </div>
          )}
        </main>
      </InoNavDrawer>
    </div>
  );
}

export default TestPage;
