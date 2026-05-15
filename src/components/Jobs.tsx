import { motion } from "motion/react";
import { Briefcase, ArrowRight } from "lucide-react";

export default function Jobs() {
  return (
    <section id="jobs" className="py-32 px-6 bg-[#151619] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-500 mb-6">
              Careers
            </h2>
            <h3 className="text-5xl md:text-6xl font-sans font-bold mb-8 leading-tight">
              Join the <br />
              <span className="italic font-serif font-light text-stone-400">Nappy Dog</span> pack.
            </h3>
            <p className="text-lg text-stone-400 mb-12 leading-relaxed max-w-lg">
              We are always looking for talented individuals who are passionate about AI, design, and mobile technology. 
              Even if we don't have an open role that fits your profile, we'd love to hear from you.
            </p>
            <a
              href="mailto:hello@ndstudios.dev"
              className="inline-flex items-center gap-2 bg-white text-stone-900 px-8 py-4 rounded-full font-bold hover:bg-stone-100 transition-all"
            >
              Send your CV <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-6">
            <div className="p-12 bg-white/5 rounded-[48px] border border-white/10 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center mb-8">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-3xl font-bold mb-4">No Open Roles</h4>
              <p className="text-stone-400 text-lg max-w-sm mb-10">
                We don't have any specific openings at the moment, but we're always looking for exceptional talent.
              </p>
              <a
                href="mailto:hello@ndstudios.dev"
                className="text-sm font-bold uppercase tracking-widest text-white hover:text-stone-300 transition-colors flex items-center gap-2"
              >
                Join our talent pool <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
