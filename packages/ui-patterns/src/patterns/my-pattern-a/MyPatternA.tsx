import htmlContent from './my-pattern-a.html?raw';
import PatternWrapper, {WithWrapperProps} from '../PatternWrapper';

function MyPatternA(props: WithWrapperProps) {
  return <PatternWrapper htmlContent={htmlContent} {...props} />;
}

export default MyPatternA;
