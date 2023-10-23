import React from 'react';

interface PreviewBoxProps {
  title: string;
  description: string;
}

const PreviewBox: React.FC<PreviewBoxProps> = ({ title, description }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default PreviewBox;
