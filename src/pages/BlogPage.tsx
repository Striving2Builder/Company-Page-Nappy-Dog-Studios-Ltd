import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-sans font-medium tracking-tight text-stone-900 mb-6">
              Insights & <span className="italic serif text-stone-500">Innovation</span>
            </h1>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Exploring the science behind AI, language acquisition, and holistic wellness.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-[32px] overflow-hidden border border-stone-200 hover:shadow-xl transition-all duration-500 group"
              >
                <Link to={`/blog/${post.id}`}>
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 text-xs font-mono text-stone-500 mb-4 uppercase tracking-widest">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <User size={12} />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-2xl font-sans font-medium text-stone-900 mb-4 group-hover:text-stone-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-stone-600 mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {post.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-stone-100 rounded-full text-xs font-medium text-stone-600 flex items-center gap-1">
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-stone-900 font-medium group-hover:gap-4 transition-all">
                      Read More <ArrowRight size={18} />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
