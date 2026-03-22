import { motion } from "motion/react";
import { Linkedin, Mail, ExternalLink } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-stone-100 rounded-[32px] overflow-hidden">
              <img
                src="https://picsum.photos/seed/nicolas/800/1000"
                alt="Nicolas Ng"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#5A5A40] rounded-full flex items-center justify-center p-8 text-white text-center rotate-12">
              <p className="font-serif italic text-lg">
                "Building for the AI age, one app at a time."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-6">
              The Founder
            </h2>
            <h3 className="text-5xl md:text-6xl font-sans font-bold text-stone-900 mb-8 leading-tight">
              Nicolas Ng
            </h3>
            
            <div className="space-y-6 text-lg text-stone-600 leading-relaxed">
              <p>
                Nicolas Ng is the visionary founder behind Nappy Dog Studios Ltd. 
                A graduate of <span className="text-stone-900 font-semibold">York University</span> with a Specialized Honours in Marketing, 
                Nicolas has spent over <span className="text-stone-900 font-semibold">12 years</span> mastering the complexities of B2B and B2C growth marketing across the globe.
              </p>
              <p>
                His career is marked by a track record of scaling products at some of the world's most influential companies. 
                During his time at <span className="text-stone-900 font-semibold">Meta (Facebook)</span>, he was instrumental in growing key products from <span className="text-stone-900 font-semibold">0 to 1 and 1 to 5</span>, driving massive adoption and revenue. 
                His expertise in digital transformation was further honed at <span className="text-stone-900 font-semibold">Havas Media</span>, where he led global marketing initiatives for major automotive brands.
              </p>
              <p>
                After some years of <span className="text-stone-900 font-semibold">extended world travel as a digital nomad</span> while exploring the world, Nicolas emerged with a renewed focus on the transformative power of Artificial Intelligence. 
                He dedicated himself to mastering <span className="text-stone-900 font-semibold">AI prompting and programming</span> through self-study and learning hands-on by creating. 
                Nappy Dog Studios is the culmination of this journey—an indie studio born in the AI age, dedicated to building tools that are as intelligent as they are intuitive.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/nicolasng/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 rounded-full text-stone-900 font-medium hover:bg-stone-200 transition-all"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn Profile
              </a>
              <a
                href="mailto:Nick@ndstudios.dev"
                className="inline-flex items-center gap-2 px-6 py-3 bg-stone-100 rounded-full text-stone-900 font-medium hover:bg-stone-200 transition-all"
              >
                <Mail className="w-5 h-5" /> Nick@ndstudios.dev
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
