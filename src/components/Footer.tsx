import { Dog, Linkedin, Twitter, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <footer className="py-20 px-6 bg-stone-50 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/nd logo.png" 
                alt="Nappy Dog Studios Logo" 
                className="w-14 h-14 object-contain rounded-lg"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-10 h-10 bg-stone-900 rounded-xl flex items-center justify-center">
                <Dog className="w-6 h-6 text-white" />
              </div>
              <span className="font-sans font-bold text-xl tracking-tight text-stone-900">
                Nappy Dog Studios
              </span>
            </div>
            <p className="text-stone-500 max-w-sm leading-relaxed mb-8">
              An AI-led indie app studio dedicated to crafting intelligent mobile experiences that empower users.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/nicolasng/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">
              Company
            </h5>
            <ul className="space-y-4">
              <li><button onClick={() => handleScroll('about')} className="text-sm text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">About</button></li>
              <li><button onClick={() => handleScroll('products')} className="text-sm text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">Products</button></li>
              <li><Link to="/blog" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Blog</Link></li>
              <li><button onClick={() => handleScroll('jobs')} className="text-sm text-stone-500 hover:text-stone-900 transition-colors cursor-pointer">Jobs</button></li>
            </ul>
          </div>

          <div>
            <h5 className="text-xs font-bold uppercase tracking-widest text-stone-900 mb-6">
              Legal
            </h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">Terms of Service</a></li>
              <li><a href="mailto:legal@ndstudios.dev" className="text-sm text-stone-500 hover:text-stone-900 transition-colors">legal@ndstudios.dev</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-stone-400">
            © 2024 Nappy Dog Studios Ltd. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">
            Handcrafted with AI in Aurora, Ontario.
          </p>
        </div>
      </div>
    </footer>
  );
}
