import { forwardRef } from 'react';

interface PatternWrapperProps {
  htmlContent: string;
}

const PatternWrapper = forwardRef<HTMLDivElement, PatternWrapperProps>(
  ({ htmlContent }, ref) => (
    <div ref={ref} dangerouslySetInnerHTML={{ __html: htmlContent }} />
  ),
);

export default PatternWrapper;
