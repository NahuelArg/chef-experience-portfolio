import React from 'react';

interface DishProps {
  title: string;
  desc: string;
  img: string;
}

const GallerySection: React.FC = () => {
  const dishes: DishProps[] = [
    { 
      title: "Plato Signature", 
      desc: "Una creación especial que define nuestra cocina",
      img: "https://source.unsplash.com/800x600/?gourmet,food"
    },
    { 
      title: "Plato de Temporada", 
      desc: "Ingredientes frescos en perfecta armonía",
      img: "https://source.unsplash.com/800x600/?seasonal,food"
    },
    { 
      title: "Plato del Chef", 
      desc: "La pasión por la cocina en cada detalle",
      img: "https://source.unsplash.com/800x600/?chef,cooking"
    },
    { 
      title: "Postre Especial", 
      desc: "El final perfecto para una experiencia única",
      img: "https://source.unsplash.com/800x600/?dessert,gourmet"
    }
  ];

  return (
    <section className="min-w-screen h-screen bg-gradient-to-br from-gray-50 to-white px-8">
      <div className="max-w-7xl mx-auto h-full flex flex-col justify-center">
        <h2 className="text-5xl font-light text-gray-900 mb-16 text-center">Nuestros Platos</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {dishes.map((dish, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-2">
                <img 
                  src={dish.img} 
                  alt={dish.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300"></div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-2xl font-light text-gray-900 mb-2">{dish.title}</h3>
                <p className="text-gray-600 italic">{dish.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
