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
              <a href="https://www.linkedin.com/in/nicolasng/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all" title="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all" title="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all" title="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://music.youtube.com/channel/UC0DJH61-UHKjZ_XYw1sF1BQ?si=Aqp0v_sUcXOB6IIO" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white border border-stone-200 rounded-full flex items-center justify-center text-stone-600 hover:bg-stone-900 hover:text-white transition-all" title="YouTube Music Artist">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-13.332c-3.432 0-6.228 2.796-6.228 6.228S8.568 18.228 12 18.228s6.228-2.796 6.228-6.228S15.432 5.772 12 5.772zM9.684 15.54V8.46L15.816 12l-6.132 3.54z"/>
                </svg>
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
