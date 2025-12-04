import React from 'react';

interface ImageDescriptionProps {
  description: string;
}

const ImageDescription: React.FC<ImageDescriptionProps> = ({ description }) => {
  return (
    <section className="w-full h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm md:text-base font-body leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default ImageDescription;
