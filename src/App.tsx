import { useEffect, useState } from 'react';
import Footer from "./components/sections/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Carousel from "./components/layout/Carousel";
import DishSection from "./components/sections/DishSection";
import Home from "./components/sections/Home";



function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sections = [
    { type: "section", component: <Home /> },
    { type: "section", component: <About /> },
    { type: "dish", component: <DishSection   img={"https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_6574_l5pc55.jpg"} /> },
    { type: "dish", component: <DishSection  img={"https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_6580_i8kgg2.jpg"} /> },
    { type: "dish", component: <DishSection  img={"https://res.cloudinary.com/dyiiztnx4/image/upload/v1759234128/IMG_2209_jpg_gactuk.jpg"}  /> },
    { type: "section", component: <Contact /> },
  ];

  return (
    <div className="h-screen flex flex-col relative">
      <NavBar onNavigate={setActiveSlide} />
      <main className="flex-1 min-h-screen   transition-all duration-400">
        <div className="absolute inset-0 pb-12">
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