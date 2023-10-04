import htmlContent from './my-pattern-a.html?raw';

function MyPattern() {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}

export default MyPattern;
