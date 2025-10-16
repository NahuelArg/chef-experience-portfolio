import { useState } from 'react';
import Footer from "./components/sections/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import HorizontalScroll from "./components/layout/Carousel";
import DishSection from "./components/sections/DishSection";
import DescriptionAbout from "./components/sections/DescriptionAbout";
import Services from "./components/sections/Services";
import SolSection from "./components/sections/SolSection";


function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const sections = [
    { component: <About /> },
    { component: <Services /> },
    { component: <DishSection img="https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_2209_jpg_gactuk.jpg" /> },
    { component: <DishSection img="https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_6574_l5pc55.jpg" /> },
    { component: <SolSection /> },
    { component: <DishSection img="https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_6580_i8kgg2.jpg" /> },
    { component: <DescriptionAbout t={(key: string) => key} /> },
    { component: <Contact /> },
  ];

  return (
    <div className="h-screen flex flex-col relative overflow-hidden">
      <NavBar onNavigate={setActiveSlide} />
      <main className="flex-1 min-h-screen overflow-hidden">
        <div className="absolute inset-0 pb-12">
          <HorizontalScroll className="w-full h-full" activeIndex={activeSlide} setActiveIndex={setActiveSlide}>
            {sections.map((item, idx) => (
              <section key={idx} className="w-full h-full">
                {item.component}
              </section>
            ))}
          </HorizontalScroll>
        </div>
      </main>
      <Footer className="fixed bottom-0 right-0 left-0" />
    </div>
  );
}

export default App;