import '@inovex.de/elements-react';
import { ReactNode } from 'react';

type ShowcaseBoxProps = {
  children: ReactNode;
};

function ShowcaseBox({ children }: ShowcaseBoxProps) {
  return <div className="outline-8 outline-dashed outline-inovex-primary-focus outline-offset-8">{children}</div>;
}

export default ShowcaseBox;
