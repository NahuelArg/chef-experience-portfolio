const About = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center snap-start bg-gray-50">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-light mb-8">Sobre Nosotros</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <p className="text-gray-600">
              Somos un equipo apasionado por crear experiencias únicas y memorables.
            </p>
            <p className="text-gray-600">
              Nuestro enfoque combina diseño minimalista con funcionalidad intuitiva.
            </p>
          </div>
          <div className="bg-gray-100 h-64 md:h-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
