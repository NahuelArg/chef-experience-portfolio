const Contact = () => {
  return (
    <section className="w-screen h-screen flex items-center justify-center snap-start bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-4xl font-light mb-8">Contacto</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-light mb-2">Email</h3>
              <p className="text-gray-600">contacto@empresa.com</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-2">Teléfono</h3>
              <p className="text-gray-600">+1 234 567 890</p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-2">Dirección</h3>
              <p className="text-gray-600">
                Calle Principal 123<br />
                Ciudad, País
              </p>
            </div>
          </div>
          <div className="bg-gray-50 h-64 md:h-auto"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
