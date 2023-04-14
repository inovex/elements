import { CSSProperties, ReactNode } from 'react';

interface StepIndicatorProps {
  step?: string | null;
  children?: ReactNode;
}

/**
 * StepIndicator Component
 * @param {string} [step='?'] - The step number or text to display inside the step indicator
 * @param {ReactNode} [children=null] - The additional text or elements to display next to the step indicator
 */
export function StepIndicator({
  step = '?',
  children = null,
}: StepIndicatorProps) {
  const wrapperStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  };

  const stepStyle: CSSProperties = {
    flex: 'none',
    height: '30px',
    width: '30px',
    backgroundColor: '#2D02FF',
    borderRadius: '50%',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
    marginRight: '16px',
  };

  if (children === null) {
    return (
      <div className="step" style={stepStyle}>
        {step}
      </div>
    );
  } else {
    return (
      <div className="step-indicator-wrapper" style={wrapperStyle}>
        <div className="step" style={stepStyle}>
          {step}
        </div>
        <div className="step-text">{children}</div>
      </div>
    );
  }
}
