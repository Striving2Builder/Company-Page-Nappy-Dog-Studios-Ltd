import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Blog from "../components/Blog";
import Jobs from "../components/Jobs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Blog />
        <Jobs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
