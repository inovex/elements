import htmlContent from './settingsPage.html?raw';
import PatternWrapper from '../PatternWrapper';
import { setupEventListener } from '../../utils';
import { useEffect, useState } from "react";

function useDisableButton<
  Fields extends Record<string, string>,
  Key extends keyof Fields,
>(buttonSelector: string, initialState: Fields) {
  const [form, setForm] = useState(initialState);

  useEffect(() => {
    const submitButton = document.querySelector(
      buttonSelector,
    ) as HTMLButtonElement;

    submitButton.disabled = Object.values(form).every((field) => !field);
  }, [form]);

  function setField(field: Key, value: Fields[Key]) {
    setForm((form) => ({ ...form, [field]: value }));
  }

  return setField;
}

const SettingsPage = () => {

  const setPersonalInfoForm = useDisableButton('ino-button#submit-personal-info', {name: '', company: ''})
  // const setPasswordForm = useDisableButton('ino-button[type="submit"]', {name: '', company: ''})

  function onTabChange(newTabIndex: number) {
    const panels = Array.from(document.getElementsByClassName('panel'))

    panels.forEach((panel, index) => {

      if(index === newTabIndex) {
        panel.classList.remove('hidden')
      } else {
        panel.classList.add('hidden')
      }
    })
  }

  function setupEventListeners(container: HTMLElement) {
    const cleanupFirstName = setupEventListener(
      container,
      'ino-input[label="First Name"]',
      'valueChange',
      'value',
    );
    const cleanupLastName = setupEventListener(
      container,
      'ino-input[label="Last Name"]',
      'valueChange',
      'value',
    );
    const cleanupCompanyName = setupEventListener(
      container,
      'ino-input[label="Company Name"]',
      'valueChange',
      'value',
      (ev) => setPersonalInfoForm('company', (ev as CustomEvent<string>).detail),
    );
    const cleanupIndustry = setupEventListener(
      container,
      'ino-input[label="Industry"]',
      'valueChange',
      'value',
    );
    const cleanupRole = setupEventListener(
      container,
      'ino-input[label="Role"]',
      'valueChange',
      'value',
    );
    const cleanupEmail = setupEventListener(
      container,
      'ino-input[label="Email"]',
      'valueChange',
      'value',
    );
    const cleanupCurrentPassword = setupEventListener(
      container,
      'ino-input[label="Current password"]',
      'valueChange',
      'value',
    );
    const cleanupNewPassword = setupEventListener(
      container,
      'ino-input[label="New password"]',
      'valueChange',
      'value',
    );
    const cleanupConfirmPassword = setupEventListener(
      container,
      'ino-input[label="Confirm password"]',
      'valueChange',
      'value',
    );
    const cleanupSecurityAnswer1 = setupEventListener(
      container,
      'ino-input[label="Answer 1"]',
      'valueChange',
      'value',
    );
    const cleanupSecurityAnswer2 = setupEventListener(
      container,
      'ino-input[label="Answer 2"]',
      'valueChange',
      'value',
    );
    const cleanupSecurityAnswer3 = setupEventListener(
      container,
      'ino-input[label="Answer 3"]',
      'valueChange',
      'value',
    );

    const cleanupTabBar = setupEventListener(
      container,
      'ino-tab-bar',
      'activeTabChange',
      'active-tab',
      (ev) => onTabChange((ev as CustomEvent<number>).detail)
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
