import { CSSProperties } from 'react';

export function StepIndicator({ step = '?' }) {
  const style: CSSProperties = {
    height: '30px',
    width: '30px',
    backgroundColor: '#2D02FF',
    borderRadius: '50%',
    color: '#fff',
    display: 'inline-block',
    fontSize: '20px',
    lineHeight: '30px',
    textAlign: 'center',
    marginRight: '16px',
  };
  return (
    <span className="step" style={style}>
      {step}
    </span>
  );
}
