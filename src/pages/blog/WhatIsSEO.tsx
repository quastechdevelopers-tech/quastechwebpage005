import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Search,
  Home,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Globe
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const WhatIsSEO = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DarkModeProvider>
      <SEO 
        title="What is SEO? - Complete Guide | QUASTECH Blog"
        description="Learn the fundamentals of Search Engine Optimization (SEO) and how it can boost your website's visibility and organic traffic. Complete guide for beginners."
        keywords="SEO, search engine optimization, organic traffic, keyword research, on-page SEO, off-page SEO"
        canonical="/blog/what-is-seo"
        ogImage="/images/blog/seo-blog.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What is SEO?", url: "/blog/what-is-seo" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Breadcrumbs */}
              <div className="flex items-center gap-2 text-white/90 text-sm mb-6">
                <Link to="/" className="hover:text-white flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-white">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-semibold">What is SEO?</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                What is SEO?
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                A Complete Guide to Search Engine Optimization
              </p>
              
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>QUASTECH Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>5 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Blog Content */}
        <article className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="h-64 md:h-96 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                <Search className="w-32 h-32 text-white/80" />
              </div>
            </motion.div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction to SEO</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Search Engine Optimization (SEO) is the practice of optimizing your website to improve its visibility in search engine results pages (SERPs). When users search for keywords related to your business, SEO helps your website appear higher in the search results, driving more organic (free) traffic to your site.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SEO is crucial for businesses of all sizes because it helps you reach potential customers at the exact moment they're searching for products or services you offer. Unlike paid advertising, SEO provides long-term, sustainable results that continue to drive traffic even after you stop actively working on it.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Why SEO Matters</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">Increased Visibility</h3>
                    </div>
                    <p className="text-gray-700">
                      Higher rankings mean more people see your website, leading to increased brand awareness and credibility.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-gray-800">Organic Traffic</h3>
                    </div>
                    <p className="text-gray-700">
                      SEO drives free, high-quality traffic to your website without the ongoing costs of paid advertising.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">Better User Experience</h3>
                    </div>
                    <p className="text-gray-700">
                      SEO improvements often enhance website usability, speed, and mobile-friendliness, benefiting all visitors.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <CheckCircle2 className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-800">Long-term Results</h3>
                    </div>
                    <p className="text-gray-700">
                      Unlike paid ads, SEO provides sustainable results that continue to drive traffic over time.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Key SEO Components</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">On-Page SEO</h3>
                    <p className="text-gray-700">
                      Optimizing elements on your website including title tags, meta descriptions, headers, content quality, and internal linking structure.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Off-Page SEO</h3>
                    <p className="text-gray-700">
                      Building your website's authority through backlinks, social media signals, and other external factors that influence your search rankings.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Technical SEO</h3>
                    <p className="text-gray-700">
                      Ensuring your website is technically sound with fast loading times, mobile responsiveness, proper site structure, and crawlability.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Getting Started with SEO</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To begin your SEO journey, start by conducting keyword research to understand what your target audience is searching for. Then, optimize your website's content, improve page speed, ensure mobile-friendliness, and build quality backlinks.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Remember, SEO is a long-term strategy that requires patience and consistent effort. Results may take several months to appear, but the investment is well worth it for sustainable organic growth.
                </p>
              </motion.div>
            </div>

            {/* Back to Blog Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-12 pt-8 border-t border-gray-200"
            >
              <Link to="/blog">
                <motion.button
                  whileHover={{ x: -5 }}
                  className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Back to Blog
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </article>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default WhatIsSEO;


