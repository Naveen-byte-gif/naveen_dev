import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";

function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <ContactUs />
      <Footer />
    </main>
  );
}
export default Home;
