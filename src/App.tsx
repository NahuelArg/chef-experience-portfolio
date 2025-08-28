import { useEffect, useState } from 'react';
import Footer from "./components/sections/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import DishSection from "./components/sections/DishSection";
import Home from "./components/sections/Home";
import { Carousel } from "./components/layout/Carousel";
import Loader from "./components/layout/Loader";  
import asado from './assets/asado-argentin-kamado.jpg';
import  Provoleta from './assets/provoleta.webp';
import mollejas from './assets/mollejas.jpg';
import empanadas from './assets/empanadas.jpeg';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

 
  const sections = [
    { type: "dish", component: <DishSection title="Provoleta" desc="Queso provolone fundido a la parrilla, servido con orégano y aceite de oliva." img={Provoleta} category="Entrada" /> },
    { type: "section", component: <Home /> },
    { type: "dish", component: <DishSection title="Asado argentino" desc="Clásico asado argentino con diferentes cortes de carne, cocidos a la leña." img={asado} category="Principal" /> },
    { type: "section", component: <About /> },
    { type: "dish", component: <DishSection title="Empanadas Criollas" desc="Empanadas tradicionales rellenas de carne cortada a cuchillo y especias." img={empanadas} category="Entrada" /> },
    { type: "section", component: <Contact /> },
    { type: "dish", component: <DishSection title="Mollejas al limón" desc="Mollejas doradas a la parrilla, terminadas con jugo de limón fresco." img={mollejas} category="Principal" /> },
  ];

  if (isLoading) {
    return <Loader />;
  }

return (
    <div className="h-screen flex flex-col overflow-hidden bg-white relative">
      <NavBar />
<main className="flex-1 min-h-screen bg-white lg:ml-[200px] transition-all duration-300">
        <div className="absolute inset-0 pb-12"> {/* Added padding bottom for footer */}
          <Carousel className="w-full h-full">
            {sections.map((item, idx) => (
              <section key={idx} className="w-full h-full">
                {item.component}
              </section>
            ))}
          </Carousel>
        </div>
      </main>
      <Footer className="fixed bottom-0 right-0 left-0 " />
    </div>
  );
}

export default App;