import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import ReactMarkdown from "react-markdown";
import { blogPosts } from "../data/blogPosts";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SEO from "../components/SEO";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

export default function BlogPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h1 className="text-4xl font-sans font-medium text-stone-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2 justify-center">
            <ArrowLeft size={18} /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const blogPostJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": post.date,
    "publisher": {
      "@type": "Organization",
      "name": "Nappy Dog Studios",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ais-dev-mignlaomiwktwl2gluq4zt-348326429922.us-east1.run.app/nd logo.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <SEO 
        title={post.title}
        description={post.excerpt}
        canonical={`https://ais-dev-mignlaomiwktwl2gluq4zt-348326429922.us-east1.run.app/blog/${post.id}`}
        ogType="article"
        ogImage={post.image}
        jsonLd={blogPostJsonLd}
      />
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/blog" className="text-stone-600 hover:text-stone-900 transition-colors flex items-center gap-2 mb-12 group">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Blog
            </Link>

            <div className="flex items-center gap-4 text-xs font-mono text-stone-500 mb-6 uppercase tracking-widest">
              <span className="flex items-center gap-1">
                <Calendar size={12} />
                {post.date}
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-stone-900 mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="aspect-[21/9] rounded-[32px] overflow-hidden mb-12 border border-stone-200">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="markdown-body max-w-none">
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div className="mt-16 pt-12 border-t border-stone-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="px-4 py-2 bg-stone-100 rounded-full text-sm font-medium text-stone-600 flex items-center gap-1">
                    <Tag size={12} />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
