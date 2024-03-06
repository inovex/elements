import htmlContent from './settingsPage.html?raw';
import PatternWrapper from '../PatternWrapper';
import { setupEventListener } from '../../utils';

const SettingsPage = () => {
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

    // Toggle visibility for tabs
    const tabBar = container.querySelector('ino-tab-bar');
    const panels = container.querySelectorAll('.panel');

    const onTabChange = (e: Event) => {
      const activeTabIndex = (e as CustomEvent).detail;
      panels.forEach((panel, index) => {
        console.log('index', index);
        console.log('activeTabIndex', activeTabIndex);
        console.log('panel', panel);
        panel.classList.toggle('hidden', index !== activeTabIndex);
      });
    };

    if (tabBar) {
      tabBar.addEventListener('activeTabChange', onTabChange);
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
      if (tabBar) {
        tabBar.removeEventListener('activeTabChange', onTabChange);
      }
    };
  }

  return (
    <PatternWrapper htmlContent={htmlContent} onMount={setupEventListeners} />
  );
};

export default SettingsPage;
