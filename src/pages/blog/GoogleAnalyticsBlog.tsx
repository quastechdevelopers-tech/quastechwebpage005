import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  BarChart3,
  Home,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Globe,
  Eye,
  Settings
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const GoogleAnalyticsBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DarkModeProvider>
      <SEO 
        title="Google Analytics & Search Console Guide | QUASTECH Blog"
        description="Master Google Analytics and Search Console to track your website performance, understand user behavior, and improve your search rankings."
        keywords="Google Analytics, Google Search Console, website analytics, SEO tracking, performance metrics"
        canonical="/blog/google-analytics-google-search-blog"
        ogImage="/images/blog/google-analytics.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Google Analytics & Search Console", url: "/blog/google-analytics-google-search-blog" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-orange-600 via-orange-700 to-orange-800 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-2 text-white/90 text-sm mb-6">
                <Link to="/" className="hover:text-white flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/blog" className="hover:text-white">Blog</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-semibold">Google Analytics & Search Console</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Google Analytics & Google Search Console
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Complete Guide to Website Analytics and Search Performance
              </p>
              
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>QUASTECH Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 20, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <article className="py-8 md:py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-8 rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="h-64 md:h-96 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
                <BarChart3 className="w-32 h-32 text-white/80" />
              </div>
            </motion.div>

            <div className="prose prose-lg max-w-none">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding Google Analytics</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Google Analytics is a powerful web analytics tool that provides detailed insights into your website's performance. It tracks user behavior, traffic sources, conversions, and much more, helping you make data-driven decisions to improve your website's effectiveness.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With Google Analytics, you can understand who your visitors are, where they come from, what pages they view, how long they stay, and what actions they take on your site. This information is invaluable for optimizing your marketing strategies and improving user experience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features of Google Analytics</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-gray-800">Audience Insights</h3>
                    </div>
                    <p className="text-gray-700">
                      Understand your visitors' demographics, interests, devices, and geographic locations.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">Traffic Sources</h3>
                    </div>
                    <p className="text-gray-700">
                      Identify where your visitors come from - organic search, paid ads, social media, or direct traffic.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">Conversion Tracking</h3>
                    </div>
                    <p className="text-gray-700">
                      Set up goals and track conversions to measure the success of your marketing campaigns.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Settings className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-800">Custom Reports</h3>
                    </div>
                    <p className="text-gray-700">
                      Create customized reports tailored to your specific business needs and KPIs.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Google Search Console Overview</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Google Search Console is a free tool that helps you monitor, maintain, and troubleshoot your site's presence in Google Search results. It provides insights into how Google sees your site and helps you optimize its performance in search results.
                </p>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Search Performance</h3>
                    <p className="text-gray-700">
                      See which queries bring users to your site, your average position in search results, click-through rates, and impressions.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Coverage Reports</h3>
                    <p className="text-gray-700">
                      Identify indexing issues, understand which pages are indexed, and fix crawl errors that might prevent your content from appearing in search results.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Mobile Usability</h3>
                    <p className="text-gray-700">
                      Ensure your site is mobile-friendly and identify any mobile usability issues that could affect your search rankings.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Using Both Tools Together</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  While Google Analytics focuses on user behavior and website performance, Google Search Console focuses on search visibility and indexing. Using both tools together gives you a complete picture of your website's performance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Connect your Google Analytics and Search Console accounts to see search query data directly in Analytics, allowing you to analyze which search terms drive the most valuable traffic to your site.
                </p>
              </motion.div>
            </div>

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
                  className="flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700 transition-colors"
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

export default GoogleAnalyticsBlog;


