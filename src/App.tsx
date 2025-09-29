import { useEffect, useState } from 'react';
import Footer from "./components/sections/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Carousel from "./components/layout/Carousel";
import DishSection from "./components/sections/DishSection";
import Home from "./components/sections/Home";
import Loader from "./components/layout/Loader";  
import dish1 from './assets/Dish1.jpeg';
import dish2 from './assets/Dish2.jpeg';
import dish3 from './assets/Dish3.jpeg';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { type: "dish", component: <DishSection   img={dish3} /> },
    { type: "section", component: <Home /> },
    { type: "dish", component: <DishSection  img={dish2}/> },
    { type: "section", component: <About /> },
    { type: "dish", component: <DishSection  img={dish1}  /> },
    { type: "section", component: <Contact /> },
  ];

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="h-screen flex flex-col overflow-hidden relative">
      <NavBar onNavigate={setActiveSlide} />
      <main className="flex-1 min-h-screen  lg:ml-[200px] transition-all duration-300">
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