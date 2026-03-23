import { motion } from "motion/react";
import { ExternalLink, Smartphone, Globe } from "lucide-react";

export default function Products() {
  const products = [
    {
      title: "Lingocapture",
      url: "https://www.Lingocapture.com",
      description: "Master languages through real-world discovery. Use our AR camera for contextual learning with instant AI insights, dive into a Smart Feed of situational and curriculum content, and level up your skills in the language learning Arcade.",
      image: "/lc-logo.png",
      tags: ["AR Learning", "Smart Feed", "Language Arcade"],
    },
    {
      title: "Aurabase",
      url: "https://www.Aurabase.app",
      description: "A comprehensive AI-powered platform for holistic health tracking across mind, body, and spirit. Aurabase features a specialized AI Council of agents to provide deeply personalized guidance, helping you master your unique health and wellness journey.",
      image: "/ab-logo.png",
      tags: ["Holistic Health", "AI Wellness Council", "Mind & Body"],
    },
  ];

  return (
    <section id="products" className="py-32 px-6 bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-6">
            Our Products
          </h2>
          <h3 className="text-5xl md:text-6xl font-sans font-bold text-stone-900">
            Built for the AI Age
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group bg-white rounded-[32px] overflow-hidden border border-stone-200 hover:shadow-2xl hover:shadow-stone-200/50 transition-all duration-500"
            >
              <div className="aspect-video overflow-hidden bg-stone-100 flex items-center justify-center p-12">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3 py-1 bg-stone-50 rounded-full border border-stone-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h4 className="text-3xl font-bold text-stone-900 mb-4">
                  {product.title}
                </h4>
                <p className="text-stone-600 mb-8 leading-relaxed">
                  {product.description}
                </p>
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-stone-900 font-bold hover:gap-3 transition-all"
                >
                  Visit Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
