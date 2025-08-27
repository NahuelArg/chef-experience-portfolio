import React from 'react';

const AboutSection: React.FC = () => (
  <section className="min-w-screen h-screen flex items-center bg-white px-8">
    <div className="max-w-4xl mx-auto w-full">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <h2 className="text-2xl tracking-widest uppercase text-black mb-12">La Historia</h2>
          <div className="space-y-8 text-base text-black/80 leading-relaxed font-light">
            <p>
              Con una pasión arraigada en las tradiciones culinarias mexicanas y una visión 
              contemporánea, creamos experiencias gastronómicas que honran nuestras raíces 
              mientras exploran nuevas posibilidades.
            </p>
            <p>
              Cada plato es una celebración de ingredientes locales de temporada, 
              técnicas ancestrales y creatividad moderna, resultando en sabores auténticos 
              y memorables.
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-full aspect-[4/5] bg-[#f8f8f8]">
            {/* Aquí irá la imagen del chef o del restaurante */}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
