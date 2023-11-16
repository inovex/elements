import htmlContent from './my-pattern-a.html?raw';
import PatternWrapper from '../PatternWrapper';

function MyPatternA() {
  return <PatternWrapper htmlContent={htmlContent} />;
}

export default MyPatternA;
