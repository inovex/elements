interface PatternWrapperProps {
  htmlContent: string;
}

const PatternWrapper = ({ htmlContent }: PatternWrapperProps) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default PatternWrapper;
