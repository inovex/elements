import {useEffect} from "react";

export type WithWrapperProps = Pick<PatternWrapperProps, 'onHtmlLoad'>

interface PatternWrapperProps {
  htmlContent: string;
  onHtmlLoad?: (str: string) => void
}

const PatternWrapper = ({ htmlContent, onHtmlLoad }: PatternWrapperProps) => {

  useEffect(() => {

    if(htmlContent && onHtmlLoad) onHtmlLoad(htmlContent)

  }, [htmlContent, onHtmlLoad]);

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default PatternWrapper;
