import '@inovex.de/elements-react';
import { ReactNode } from 'react';

type ShowcaseBoxProps = {
  children: ReactNode;
};

function ShowcaseBox({ children }: ShowcaseBoxProps) {
  return <div className="bg-inovex-n-1 p-28 shadow-inner">{children}</div>;
}

export default ShowcaseBox;
