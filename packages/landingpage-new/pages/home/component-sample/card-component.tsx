import { InoCard } from '@elements';
import { NextPage } from 'next';

interface Props {
  content: JSX.Element;
}

const CardComponent: NextPage<Props> = (props) => {
  const { content } = props;

  return <InoCard disableElevation={true}> {content}</InoCard>;
};

export default CardComponent;
