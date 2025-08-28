import { useEffect, useState } from 'react';
import Footer from "./components/sections/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Gallery from "./components/sections/GallerySection";
import Home from "./components/sections/Home";
import { Carousel } from "./components/layout/Carousel";
import Loader from "./components/layout/Loader";  

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
    { id: 'home', component: <Home /> },
    { id: 'about', component: <About /> },
    { id: 'gallery', component: <Gallery /> },
    { id: 'contact', component: <Contact /> },
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
            {sections.map(({ id, component }) => (
              <section key={id} id={id} className="w-full h-full">
                {component}
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