import { useEffect, useRef } from 'react';

interface PatternWrapperProps {
  htmlContent: string;
  onMount?: (el: HTMLElement) => () => void;
}

function PatternWrapper({ htmlContent, onMount }: PatternWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !onMount) return;

    return onMount(containerRef.current);
  }, []);

  return (
    <div ref={containerRef} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  );
}

export default PatternWrapper;
