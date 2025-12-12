import React from 'react';

interface PairedSectionProps {
  left: React.ReactNode;
  right: React.ReactNode;
  leftWidth?: string; // e.g., "60%", "50%"
  rightWidth?: string; // e.g., "40%", "50%"
}

const PairedSection: React.FC<PairedSectionProps> = ({
  left,
  right,
  leftWidth = "50%",
  rightWidth = "50%"
}) => {
  return (
    <div className="w-full h-screen flex">
      <div style={{ width: leftWidth }} className="h-full overflow-hidden">
        {left}
      </div>
      <div style={{ width: rightWidth }} className="h-full overflow-hidden">
        {right}
      </div>
    </div>
  );
};

export default PairedSection;
