import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  DollarSign,
  Home,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Globe,
  Users,
  Wallet
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const AffiliateMarketingBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DarkModeProvider>
      <SEO 
        title="Affiliate Marketing Guide - Build Passive Income | QUASTECH Blog"
        description="Discover how to build a successful affiliate marketing business and generate passive income online. Complete guide for beginners."
        keywords="affiliate marketing, passive income, online business, affiliate programs, marketing strategies"
        canonical="/blog/affiliate-marketing-blog"
        ogImage="/images/blog/affiliate-marketing.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Affiliate Marketing", url: "/blog/affiliate-marketing-blog" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-green-600 via-green-700 to-green-800 overflow-hidden">
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
                <span className="text-white font-semibold">Affiliate Marketing</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Affiliate Marketing
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Build a Successful Passive Income Business Online
              </p>
              
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>QUASTECH Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>January 25, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>6 min read</span>
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
              <div className="h-64 md:h-96 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                <DollarSign className="w-32 h-32 text-white/80" />
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Affiliate Marketing?</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Affiliate marketing is a performance-based marketing strategy where you earn commissions by promoting other companies' products or services. When someone makes a purchase through your unique affiliate link, you receive a percentage of the sale.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  This business model has become increasingly popular because it allows individuals to generate passive income without creating their own products. You simply need to find products you believe in and share them with your audience.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Affiliate Marketing</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Wallet className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">Low Startup Costs</h3>
                    </div>
                    <p className="text-gray-700">
                      Start with minimal investment - no need to create products, manage inventory, or handle customer service.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">Passive Income Potential</h3>
                    </div>
                    <p className="text-gray-700">
                      Build a sustainable income stream that continues to generate revenue even when you're not actively working.
                    </p>
                  </div>
                  <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-bold text-gray-800">Work from Anywhere</h3>
                    </div>
                    <p className="text-gray-700">
                      Run your affiliate marketing business from anywhere in the world with just an internet connection.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-800">Scalable Business</h3>
                    </div>
                    <p className="text-gray-700">
                      Scale your income by promoting multiple products and expanding your reach to larger audiences.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Getting Started</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Choose Your Niche</h3>
                    <p className="text-gray-700">
                      Select a niche you're passionate about and have knowledge in. This makes it easier to create authentic content and build trust with your audience.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Join Affiliate Programs</h3>
                    <p className="text-gray-700">
                      Research and join reputable affiliate programs that offer products relevant to your niche. Look for programs with good commission rates and reliable tracking.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Create Quality Content</h3>
                    <p className="text-gray-700">
                      Build a website, blog, or social media presence where you can share valuable content and naturally promote affiliate products to your audience.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Track and Optimize</h3>
                    <p className="text-gray-700">
                      Monitor your affiliate links' performance, test different strategies, and optimize your approach based on what works best for your audience.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Best Practices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Success in affiliate marketing requires patience, consistency, and a focus on providing value to your audience. Always disclose your affiliate relationships transparently and only promote products you genuinely believe in.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Build trust with your audience by being honest about your experiences with products, and focus on solving their problems rather than just making sales. Remember, long-term success comes from building relationships, not just making quick commissions.
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
                  className="flex items-center gap-2 text-green-600 font-semibold hover:text-green-700 transition-colors"
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

export default AffiliateMarketingBlog;


