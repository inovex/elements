import { useEffect, useRef } from 'react';
import htmlContent from './login.html?raw';
import PatternWrapper from '../PatternWrapper';

const Login = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const setupEventListener = (
      selector: string,
      eventType: string,
      detailAttribute: 'value' | 'checked',
    ) => {
      const element = container.querySelector(selector);
      if (!element) return;

      const eventHandler = (e: Event) => {
        const customEvent = e as CustomEvent;
        if (detailAttribute in element) {
          // @ts-expect-error: Direct property assignment
          element[detailAttribute] = customEvent.detail;
        }
      };

      element.addEventListener(eventType, eventHandler);
      return () => element.removeEventListener(eventType, eventHandler);
    };

    const cleanupEmail = setupEventListener(
      'ino-input[type="email"]',
      'valueChange',
      'value',
    );
    const cleanupPassword = setupEventListener(
      'ino-input[type="password"]',
      'valueChange',
      'value',
    );
    const cleanupRememberMe = setupEventListener(
      'ino-checkbox',
      'checkedChange',
      'checked',
    );

    return () => {
      cleanupEmail?.();
      cleanupPassword?.();
      cleanupRememberMe?.();
    };
  }, []);

  return <PatternWrapper ref={containerRef} htmlContent={htmlContent} />;
};

export default Login;
