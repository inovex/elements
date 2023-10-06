import htmlContent from './my-pattern-a.html?raw';

function MyPatternA() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default MyPatternA;
