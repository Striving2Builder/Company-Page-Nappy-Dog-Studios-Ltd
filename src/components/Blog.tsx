import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";

export default function Blog() {
  return (
    <section id="blog" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-6">
              Blog
            </h2>
            <h3 className="text-5xl md:text-6xl font-sans font-bold text-stone-900">
              Insights from the <br />
              <span className="italic font-serif font-light text-stone-500">cutting edge</span>.
            </h3>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-stone-900 font-bold hover:gap-3 transition-all pb-2 border-b-2 border-stone-900"
          >
            View all posts <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link to={`/blog/${post.id}`}>
                <div className="aspect-[16/10] bg-stone-100 rounded-[24px] overflow-hidden mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-3 py-1 bg-stone-50 rounded-full border border-stone-100">
                    {post.tags[0]}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400">
                    {post.date}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-stone-900 group-hover:text-stone-600 transition-colors leading-tight">
                  {post.title}
                </h4>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
