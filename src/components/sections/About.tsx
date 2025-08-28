import chef from '../../assets/chefsolidario.jpg'

const About = () => {
  return (
<section className="w-full min-h-screen flex items-center justify-center bg-white px-4 sm:px-8 md:px-12 py-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-6 text-center">
          Sobre Mí
        </h2>
        {/* Cambiamos el orden en móvil: primero imagen, luego texto */}
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          {/* Contenedor de texto */}
          <div className="space-y-4 mt-6 md:mt-0">
            <div className="prose prose-lg max-w-none">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
                Soy un chef profesional con pasión por la cocina argentina y sus sabores tradicionales.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mt-4">
                Mi filosofía culinaria se basa en respetar los ingredientes locales y las técnicas tradicionales,
                mientras incorporo toques modernos para crear experiencias gastronómicas únicas.
              </p>
              <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 mt-4">
                Especializado en carnes a la parrilla y platos regionales, busco transmitir la esencia
                de nuestra cultura a través de cada preparación.
              </p>
            </div>
            {/* Tags */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mt-6">
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs sm:text-sm">
                Parrilla Argentina
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs sm:text-sm">
                Cocina Regional
              </span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs sm:text-sm">
                Eventos Privados
              </span>
            </div>
          </div>
          {/* Contenedor de imagen */}
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[400px] w-full rounded-lg overflow-hidden shadow-xl">
            <img 
              src={chef} 
              alt="Chef en acción" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;