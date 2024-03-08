import htmlContent from './settingsPage.html?raw';
import PatternWrapper from '../PatternWrapper';
import { setupEventListener } from '../../utils';
import { useEffect, useState } from 'react';
import elementsLogo from '../../../assets/elements.svg';
import avatarImage from '../../../assets/avatar.jpg';

function useDisableButton<
  Fields extends Record<string, string>,
  Key extends keyof Fields,
>(
  buttonSelector: string,
  initialState: Fields,
  disableUntilAllFilled: boolean = false,
) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    const submitButton = document.querySelector(
      buttonSelector,
    ) as HTMLButtonElement;

    if (disableUntilAllFilled) {
      submitButton.disabled = Object.values(form).some((field) => !field); // disable if any field is empty for password section
    } else {
      submitButton.disabled = Object.values(form).every((field) => !field);
    }
  }, [form]);

  function setField(field: Key, value: Fields[Key]) {
    setForm((form) => ({ ...form, [field]: value }));
  }

  return setField;
}

const SettingsPage = () => {
  const setPersonalInfoForm = useDisableButton(
    'ino-button#submit-personal-info',
    {
      firstName: '',
      lastName: '',
      companyName: '',
      industry: '',
      role: '',
    },
  );
  const setPasswordForm = useDisableButton(
    'ino-button#change-password-button',
    { currentPassword: '', newPassword: '', confirmPassword: '' },
    true,
  );
  const setSecurityQuestionForm = useDisableButton(
    'ino-button#save-security-questions',
    { answer1: '', answer2: '', answer3: '' },
    true,
  );

  function onTabChange(newTabIndex: number) {
    const panels = Array.from(document.getElementsByClassName('panel'));

    panels.forEach((panel, index) => {
      if (index === newTabIndex) {
        panel.classList.remove('hidden');
      } else {
        panel.classList.add('hidden');
      }
    });
  }

  function setupEventListeners(container: HTMLElement) {
    const cleanupFirstName = setupEventListener(
      container,
      'ino-input[label="First Name"]',
      'valueChange',
      'value',
      (ev) =>
        setPersonalInfoForm('firstName', (ev as CustomEvent<string>).detail),
    );
    const cleanupLastName = setupEventListener(
      container,
      'ino-input[label="Last Name"]',
      'valueChange',
      'value',
      (ev) =>
        setPersonalInfoForm('lastName', (ev as CustomEvent<string>).detail),
    );
    const cleanupCompanyName = setupEventListener(
      container,
      'ino-input[name="company"]',
      'valueChange',
      'value',
      (ev) =>
        setPersonalInfoForm('companyName', (ev as CustomEvent<string>).detail),
    );
    const cleanupIndustry = setupEventListener(
      container,
      'ino-input[label="Industry"]',
      'valueChange',
      'value',
      (ev) =>
        setPersonalInfoForm('industry', (ev as CustomEvent<string>).detail),
    );
    const cleanupRole = setupEventListener(
      container,
      'ino-input[label="Role"]',
      'valueChange',
      'value',
      (ev) => setPersonalInfoForm('role', (ev as CustomEvent<string>).detail),
    );
    const cleanupEmail = setupEventListener(
      container,
      'ino-input[label="E-mail"]',
      'valueChange',
      'value',
    );
    const cleanupCurrentPassword = setupEventListener(
      container,
      'ino-input[label="Current password"]',
      'valueChange',
      'value',
      (ev) =>
        setPasswordForm('currentPassword', (ev as CustomEvent<string>).detail),
    );
    const cleanupNewPassword = setupEventListener(
      container,
      'ino-input[label="New password"]',
      'valueChange',
      'value',
      (ev) =>
        setPasswordForm('newPassword', (ev as CustomEvent<string>).detail),
    );
    const cleanupConfirmPassword = setupEventListener(
      container,
      'ino-input[label="Confirm password"]',
      'valueChange',
      'value',
      (ev) =>
        setPasswordForm('confirmPassword', (ev as CustomEvent<string>).detail),
    );

    const cleanupSecurityAnswer1 = setupEventListener(
      container,
      'ino-input[label="Answer 1"]',
      'valueChange',
      'value',
      (ev) =>
        setSecurityQuestionForm('answer1', (ev as CustomEvent<string>).detail),
    );
    const cleanupSecurityAnswer2 = setupEventListener(
      container,
      'ino-input[label="Answer 2"]',
      'valueChange',
      'value',
      (ev) =>
        setSecurityQuestionForm('answer2', (ev as CustomEvent<string>).detail),
    );
    const cleanupSecurityAnswer3 = setupEventListener(
      container,
      'ino-input[label="Answer 3"]',
      'valueChange',
      'value',
      (ev) =>
        setSecurityQuestionForm('answer3', (ev as CustomEvent<string>).detail),
    );

    const cleanupTabBar = setupEventListener(
      container,
      'ino-tab-bar',
      'activeTabChange',
      'active-tab',
      (ev) => onTabChange((ev as CustomEvent<number>).detail),
    );

    const cleanupPasswordAccordion = setupEventListener(
      container,
      'ino-accordion#password-accordion',
      'expandedChange',
      'expanded',
    );

    const cleanupSecurityAccordion = setupEventListener(
      container,
      'ino-accordion#security-accordion',
      'expandedChange',
      'expanded',
    );

    const logoImage = document.querySelector('ino-img#logo');
    if (logoImage) {
      logoImage.setAttribute('src', elementsLogo);
    }

    const inoAvatar = document.querySelector('ino-avatar');
    if (inoAvatar) {
      inoAvatar.setAttribute('src', avatarImage);
    }

    return () => {
      cleanupFirstName();
      cleanupLastName();
      cleanupCompanyName();
      cleanupIndustry();
      cleanupRole();
      cleanupEmail();
      cleanupCurrentPassword();
      cleanupNewPassword();
      cleanupConfirmPassword();
      cleanupSecurityAnswer1();
      cleanupSecurityAnswer2();
      cleanupSecurityAnswer3();
      cleanupTabBar();
      cleanupPasswordAccordion();
      cleanupSecurityAccordion();
    };
  }

  return (
    <PatternWrapper htmlContent={htmlContent} onMount={setupEventListeners} />
  );
};

export default SettingsPage;
