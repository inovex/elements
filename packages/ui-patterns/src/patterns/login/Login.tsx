import htmlContent from './login.html?raw';
import PatternWrapper from '../PatternWrapper';
import { setupEventListener } from '../../utils';

const Login = () => {
  function setupEventListeners(container: HTMLElement) {
    const cleanupEmail = setupEventListener(
      container,
      'ino-input[type="email"]',
      'valueChange',
      'value',
    );
    const cleanupPassword = setupEventListener(
      container,
      'ino-input[type="password"]',
      'valueChange',
      'value',
    );
    const cleanupRememberMe = setupEventListener(
      container,
      'ino-checkbox',
      'checkedChange',
      'checked',
    );

    return () => {
      cleanupEmail();
      cleanupPassword();
      cleanupRememberMe();
    };
  }

  return (
    <PatternWrapper htmlContent={htmlContent} onMount={setupEventListeners} />
  );
};

export default Login;
