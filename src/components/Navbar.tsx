import { motion } from "motion/react";
import { Menu, X, Dog } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Products", href: "/#products" },
    { name: "Blog", href: "/blog" },
    { name: "Jobs", href: "/#jobs" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href.startsWith("/#")) {
      const id = href.substring(2);
      if (location.pathname === "/") {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: "smooth" });
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.getElementById(id);
          element?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#E8DCC4]/95 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-4 h-full">
          <div className="h-full flex items-center">
            <img 
              src="/nd-logo.png" 
              alt="Nappy Dog Studios Logo" 
              className="h-20 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden w-16 h-16 bg-stone-100 rounded-xl flex items-center justify-center">
              <Dog className="w-10 h-10 text-stone-800" />
            </div>
          </div>
          <span className="font-sans font-bold text-2xl tracking-tight text-stone-900">
            Nappy Dog Studios
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {link.name}
              </Link>
            )
          ))}
          <button
            onClick={() => handleNavClick("/#contact")}
            className="bg-stone-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-stone-800 transition-all cursor-pointer"
          >
            Get in touch
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-stone-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#E8DCC4] border-b border-black/5 px-6 py-8 flex flex-col gap-6"
        >
          {navLinks.map((link) => (
            link.href.startsWith("/#") ? (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className="text-left text-lg font-medium text-stone-600 hover:text-stone-900"
              >
                {link.name}
              </button>
            ) : (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-stone-600 hover:text-stone-900"
              >
                {link.name}
              </Link>
            )
          ))}
        </motion.div>
      )}
    </nav>
  );
}
