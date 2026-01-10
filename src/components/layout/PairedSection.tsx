import React from 'react';

interface PairedSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: string;
  rightWidth?: string;
  leftAlign?: 'top' | 'center' | 'bottom';
  rightAlign?: 'top' | 'center' | 'bottom';
}

const PairedSection: React.FC<PairedSectionProps> = ({
  left,
  right,
  leftWidth = "50%",
  rightWidth = "50%",
  leftAlign = "center",
  rightAlign = "center"
}) => {
  const getAlignClass = (align: 'top' | 'center' | 'bottom') => {
    switch (align) {
      case 'top': return 'md:items-start md:pt-12';
      case 'bottom': return 'md:items-end md:pb-12';
      case 'center': return 'md:items-center';
      default: return 'md:items-center';
    }
  };

  return (
    <div className="w-full h-screen md:h-auto flex">
      <div style={{ width: leftWidth }} className={`h-full md:h-auto md:flex ${getAlignClass(leftAlign)}`}>
        {left}
      </div>
      <div style={{ width: rightWidth }} className={`h-full md:h-auto md:flex ${getAlignClass(rightAlign)}`}>
        {right}
      </div>
    </div>
  );
};

export default PairedSection;
