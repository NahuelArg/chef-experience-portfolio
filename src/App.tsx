import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Footer from "./components/sections/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Carousel from "./components/layout/Carousel";
import DishSection from "./components/sections/DishSection";
import Home from "./components/sections/Home";
import Loader from "./components/layout/Loader";  
import asado from './assets/asado-argentin-kamado.jpg';
import Provoleta from './assets/provoleta.webp';
import mollejas from './assets/mollejas.jpg';
import empanadas from './assets/empanadas.jpeg';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

 
  const sections = [
    { type: "dish", component: <DishSection title="Provoleta" desc={t("Grilled_melted_provolone")} img={Provoleta} category={t("category1")} /> },
    { type: "section", component: <Home /> },
    { type: "dish", component: <DishSection title={t("Title_argentinian_asado")} desc={t("Argentinian_asado")} img={asado} category={t("category2")} /> },
    { type: "section", component: <About /> },
    { type: "dish", component: <DishSection title={t("Title_empanadas_Criollas")} desc={t("Criolla_empanadas")} img={empanadas} category={t("category1")} /> },
    { type: "section", component: <Contact /> },
    { type: "dish", component: <DishSection title={t("Title_lemon_offal")} desc={t("Lemon_offal")} img={mollejas} category={t("category2")} /> },
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-white relative">
      <NavBar onNavigate={setActiveSlide} />
      <main className="flex-1 min-h-screen bg-white lg:ml-[200px] transition-all duration-300">
        <div className="absolute inset-0 pb-12"> {/* Added padding bottom for footer */}
          <Carousel className="w-full h-full" activeIndex={activeSlide} setActiveIndex={setActiveSlide}>
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