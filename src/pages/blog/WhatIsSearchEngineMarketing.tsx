import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  Target,
  Home,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Globe,
  DollarSign,
  Search,
  BarChart3
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const WhatIsSearchEngineMarketing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DarkModeProvider>
      <SEO 
        title="Search Engine Marketing (SEM) Guide | QUASTECH Blog"
        description="Understand Search Engine Marketing and how paid advertising can complement your SEO strategy to drive targeted traffic and conversions."
        keywords="SEM, search engine marketing, paid search, Google Ads, PPC advertising, search advertising"
        canonical="/blog/what-is-search-engine-marketing"
        ogImage="/images/blog/sem.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Search Engine Marketing", url: "/blog/what-is-search-engine-marketing" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-red-600 via-red-700 to-red-800 overflow-hidden">
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
                <span className="text-white font-semibold">Search Engine Marketing</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Search Engine Marketing (SEM)
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Drive Targeted Traffic with Paid Search Advertising
              </p>
              
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>QUASTECH Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 10, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>5 min read</span>
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
              <div className="h-64 md:h-96 bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                <Target className="w-32 h-32 text-white/80" />
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding SEM</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Search Engine Marketing (SEM) is a digital marketing strategy that involves promoting websites by increasing their visibility in search engine results pages (SERPs) through paid advertising. While SEO focuses on organic (free) search results, SEM focuses on paid placements.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  SEM typically includes Pay-Per-Click (PPC) advertising, where advertisers bid on keywords relevant to their target audience. When users search for those keywords, the ads appear at the top of search results, and advertisers pay only when users click on their ads.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">SEM vs SEO</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-800">SEM (Paid)</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Immediate results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Pay per click</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" />
                        <span>Full control over ad placement</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Search className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">SEO (Organic)</h3>
                    </div>
                    <ul className="text-gray-700 space-y-2">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Long-term results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>No cost per click</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                        <span>Builds authority over time</span>
                      </li>
                    </ul>
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Components of SEM</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-600 pl-6 py-4 bg-red-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Keyword Research</h3>
                    <p className="text-gray-700">
                      Identify high-value keywords that your target audience uses when searching for products or services like yours. Focus on keywords with good search volume and commercial intent.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Ad Creation</h3>
                    <p className="text-gray-700">
                      Write compelling ad copy that includes your target keywords, highlights your unique value proposition, and includes a clear call-to-action to encourage clicks.
                    </p>
                  </div>
                  <div className="border-l-4 border-yellow-600 pl-6 py-4 bg-yellow-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Bid Management</h3>
                    <p className="text-gray-700">
                      Set appropriate bids for your keywords based on your budget, competition, and expected return on investment. Use automated bidding strategies to optimize performance.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Landing Page Optimization</h3>
                    <p className="text-gray-700">
                      Ensure your landing pages are relevant to your ads, load quickly, and provide a clear path to conversion. A well-optimized landing page improves quality score and reduces cost per click.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of SEM</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SEM offers immediate visibility in search results, precise targeting options, and measurable results. You can target specific demographics, locations, and even times of day. The pay-per-click model means you only pay when someone clicks on your ad, making it cost-effective.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  When combined with SEO, SEM creates a comprehensive search marketing strategy. Use SEM for immediate results while SEO builds long-term organic visibility. Together, they maximize your presence in search results and drive more qualified traffic to your website.
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
                  className="flex items-center gap-2 text-red-600 font-semibold hover:text-red-700 transition-colors"
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

export default WhatIsSearchEngineMarketing;


