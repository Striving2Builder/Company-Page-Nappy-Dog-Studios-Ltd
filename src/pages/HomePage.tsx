import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Blog from "../components/Blog";
import Jobs from "../components/Jobs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import SEO from "../components/SEO";

export default function HomePage() {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nappy Dog Studios",
    "url": "https://ais-dev-mignlaomiwktwl2gluq4zt-348326429922.us-east1.run.app",
    "logo": "https://ais-dev-mignlaomiwktwl2gluq4zt-348326429922.us-east1.run.app/nd logo.png",
    "founder": {
      "@type": "Person",
      "name": "Nicolas Ng"
    },
    "description": "AI-led indie app studio crafting intelligent mobile experiences.",
    "sameAs": [
      "https://www.linkedin.com/in/nicolasng/"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        title="AI-Led Indie App Studio"
        description="Nappy Dog Studios is an AI-led indie app studio dedicated to crafting intelligent mobile experiences that empower users. Founded by Nicolas Ng."
        jsonLd={organizationJsonLd}
      />
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
