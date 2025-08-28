const Contact = () => {
  return (
       <section className="w-full h-full flex items-center justify-center bg-white">
      <div className="max-w-4xl mx-auto p-4 md:p-8 w-full">
        <h2 className="text-3xl md:text-4xl font-light mb-6 md:mb-8">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2">Email</h3>
              <p className="text-gray-600">contacto@empresa.com</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2">Teléfono</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
            <div>
              <h3 className="text-lg md:text-xl font-light mb-2">Dirección</h3>
              <p className="text-gray-600">
                Calle Principal 123<br />
                Ciudad, País
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
