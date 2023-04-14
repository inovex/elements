import { ReactNode } from 'react';

interface HintProps {
  children: ReactNode;
}

export function Hint({ children }: HintProps) {
  const hintStyles = {
    color: '#908DA2',
    fontSize: '12px',
    marginTop: '8px',
    marginBottom: '24px',
  };

  return <div style={hintStyles}>{children}</div>;
}
