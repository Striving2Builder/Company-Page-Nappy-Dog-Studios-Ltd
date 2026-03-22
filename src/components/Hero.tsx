import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-40 pb-20 px-6 bg-[#f5f5f0]">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-stone-200 mb-8"
        >
          <Sparkles className="w-4 h-4 text-stone-500" />
          <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
            AI-Led Indie App Studio
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-sans font-bold tracking-tight text-stone-900 mb-8 leading-[0.9]"
        >
          Crafting the next <br />
          <span className="italic font-serif font-light">generation</span> of apps.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-stone-600 mb-12 leading-relaxed"
        >
          Nappy Dog Studios Ltd. is an Aurora, Ontario-based indie app studio born in the AI age. 
          We build intelligent, user-centric mobile experiences that push the boundaries of what's possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="w-full md:w-auto bg-stone-900 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-stone-800 transition-all"
          >
            Our Products <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="#about"
            className="w-full md:w-auto bg-white text-stone-900 px-8 py-4 rounded-full font-medium border border-stone-200 hover:bg-stone-50 transition-all"
          >
            About the Founder
          </a>
        </motion.div>
      </div>
    </section>
  );
}
