import { motion } from "motion/react";
import { Mail, MapPin, MessageSquare } from "lucide-react";

export default function Contact() {
  const emails = [
    { label: "Founder", email: "Nick@ndstudios.dev" },
    { label: "General Inquiries", email: "hello@ndstudios.dev" },
    { label: "Legal", email: "legal@ndstudios.dev" },
  ];

  return (
    <section id="contact" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-6">
              Get in Touch
            </h2>
            <h3 className="text-5xl md:text-6xl font-sans font-bold text-stone-900 mb-8">
              Let's build something <br />
              <span className="italic font-serif font-light text-stone-500">extraordinary</span> together.
            </h3>
            <p className="text-lg text-stone-600 mb-12 leading-relaxed max-w-lg">
              Whether you have a question about our products, a job inquiry, or just want to say hello, we'd love to hear from you.
            </p>

            <div className="space-y-8">
              {emails.map((item) => (
                <div key={item.email} className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-stone-900" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-stone-400 mb-1">
                      {item.label}
                    </p>
                    <a
                      href={`mailto:${item.email}`}
                      className="text-xl font-medium text-stone-900 hover:text-stone-600 transition-colors"
                    >
                      {item.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-stone-50 rounded-[40px] p-12 border border-stone-200">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-6 py-4 bg-white rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-stone-400">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 bg-white rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="How can we help?"
                  className="w-full px-6 py-4 bg-white rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/5 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  className="w-full px-6 py-4 bg-white rounded-2xl border border-stone-200 focus:outline-none focus:ring-2 focus:ring-stone-900/5 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold hover:bg-stone-800 transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
