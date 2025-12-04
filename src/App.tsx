import { useState } from 'react';
import Footer from "./components/sections/Footer";
import NavBar from "./components/layout/NavBar";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import HorizontalScroll from "./components/layout/Carousel";
import ImgSection from "./components/sections/ImgSection";
import ImageDescription from "./components/sections/ImageDescription";
import DescriptionAbout from "./components/sections/DescriptionAbout";
import Services from "./components/sections/Services";
import VideoSection from './components/sections/VideoSection';
import { useTranslation } from "react-i18next";


function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { t } = useTranslation();

  const sections = [
    { component: <About /> },
    { component: <Services /> },
    { component: <ImgSection img="https://res.cloudinary.com/dyiiztnx4/image/upload/v1763735236/IMG_4250_jlx4wl.jpg" /> },
    { component: <ImageDescription description={t("img1_desc")} /> },
    { component: <ImgSection img="https://res.cloudinary.com/dyiiztnx4/image/upload/v1763735242/IMG_4285_dab3gk.jpg" /> },
    { component: <ImageDescription description={t("img2_desc")} /> },
    { component: <VideoSection video='https://res.cloudinary.com/dyiiztnx4/video/upload/v1763735240/IMG_4492_1_gkjl9s.mp4'/> },
    { component: <ImgSection img="https://res.cloudinary.com/dyiiztnx4/image/upload/v1763735239/IMG_4269_dnahpb.jpg" /> },
    { component: <ImageDescription description={t("img3_desc")} /> },
    { component: <DescriptionAbout /> },
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