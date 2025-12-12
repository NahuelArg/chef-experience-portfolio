import React from 'react';

interface ImageDescriptionProps {
  description: string;
}

const ImageDescription: React.FC<ImageDescriptionProps> = ({ description }) => {
  return (
    <section className="w-full h-screen md:h-auto flex items-center justify-center px-4 md:px-8 md:py-12">
      <div className="max-w-3xl mx-auto text-center md:flex md:items-center md:justify-center md:h-full">
        <p className="text-sm md:text-base font-body leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ImageDescription;
