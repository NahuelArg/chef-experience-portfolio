import React from 'react';

interface PairedSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: string; // e.g., "60%", "50%"
  rightWidth?: string; // e.g., "40%", "50%"
  leftAlign?: 'top' | 'center' | 'bottom'; // Vertical alignment for left
  rightAlign?: 'top' | 'center' | 'bottom'; // Vertical alignment for right
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
      case 'top': return 'md:items-start';
      case 'bottom': return 'md:items-end';
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
