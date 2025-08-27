import FAQ from "./components/sections/FaqSection"
import Footer from "./components/sections/FooterSection"
import NavBar from "./components/sections/NavBar"
import About from "./components/sections/About"
import Contact from "./components/sections/Contact"
import Gallery from "./components/sections/GallerySection"

function App() {
  return (
    <div className="relative min-h-screen bg-[#f8f5f0]">
      <NavBar />
      <main className="w-full min-h-screen lg:pl-[240px] overflow-x-hidden">
        <section id="about" className="min-h-screen">
          <About/>
        </section>
        <section id="gallery" className="min-h-screen">
          <Gallery />
        </section>
        <section id="contact" className="min-h-screen">
          <Contact/>
        </section>
        <section id="faq" className="min-h-screen">
          <FAQ />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </main>
    </div>
  );
}

export default App;
