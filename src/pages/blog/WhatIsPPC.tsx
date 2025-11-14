import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  TrendingUp,
  Home,
  ChevronRight,
  CheckCircle2,
  Target,
  Globe,
  DollarSign,
  BarChart3,
  MousePointerClick
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const WhatIsPPC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DarkModeProvider>
      <SEO 
        title="What is PPC? - Pay-Per-Click Advertising Guide | QUASTECH Blog"
        description="Learn about Pay-Per-Click (PPC) advertising and how to create effective PPC campaigns that drive conversions and maximize ROI."
        keywords="PPC, pay per click, Google Ads, paid advertising, ad campaigns, conversion optimization"
        canonical="/blog/what-is-ppc"
        ogImage="/images/blog/ppc.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What is PPC?", url: "/blog/what-is-ppc" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-teal-600 via-teal-700 to-teal-800 overflow-hidden">
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
                <span className="text-white font-semibold">What is PPC?</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                What is PPC?
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Master Pay-Per-Click Advertising for Maximum ROI
              </p>
              
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>QUASTECH Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 15, 2024</span>
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
              <div className="h-64 md:h-96 bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
                <TrendingUp className="w-32 h-32 text-white/80" />
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Understanding PPC</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Pay-Per-Click (PPC) is an online advertising model where advertisers pay a fee each time their ad is clicked. It's a way of buying visits to your website rather than attempting to earn those visits organically through SEO.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  PPC is one of the most effective ways to drive targeted traffic to your website quickly. Unlike SEO, which can take months to show results, PPC campaigns can start driving traffic within hours of being set up. The most popular PPC platform is Google Ads, but other platforms like Bing Ads, Facebook Ads, and LinkedIn Ads also offer PPC advertising.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">How PPC Works</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-teal-50 p-6 rounded-xl border border-teal-100">
                    <div className="flex items-center gap-3 mb-3">
                      <MousePointerClick className="w-6 h-6 text-teal-600" />
                      <h3 className="text-xl font-bold text-gray-800">Keyword Bidding</h3>
                    </div>
                    <p className="text-gray-700">
                      Advertisers bid on keywords relevant to their target audience. When users search for those keywords, ads may appear.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Target className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">Ad Auction</h3>
                    </div>
                    <p className="text-gray-700">
                      Search engines run an auction to determine which ads appear and in what order based on bid amount and quality score.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3 mb-3">
                      <DollarSign className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">Pay Per Click</h3>
                    </div>
                    <p className="text-gray-700">
                      You only pay when someone clicks on your ad, making it a cost-effective advertising method with measurable ROI.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-800">Performance Tracking</h3>
                    </div>
                    <p className="text-gray-700">
                      Track clicks, impressions, conversions, and ROI in real-time to optimize your campaigns continuously.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Creating Effective PPC Campaigns</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-teal-600 pl-6 py-4 bg-teal-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Keyword Research</h3>
                    <p className="text-gray-700">
                      Identify high-intent keywords that your target audience uses. Focus on keywords with commercial intent that are likely to convert.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Compelling Ad Copy</h3>
                    <p className="text-gray-700">
                      Write clear, compelling ad copy that highlights your unique value proposition and includes a strong call-to-action.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Landing Page Optimization</h3>
                    <p className="text-gray-700">
                      Ensure your landing pages are relevant to your ads, load quickly, and provide a clear path to conversion.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Continuous Optimization</h3>
                    <p className="text-gray-700">
                      Regularly review performance metrics, test different ad variations, adjust bids, and refine your targeting to improve results.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">PPC Best Practices</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Start with a clear goal and budget. Use negative keywords to exclude irrelevant searches and improve your campaign's efficiency. Test different ad formats, headlines, and descriptions to find what resonates best with your audience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Monitor your quality score, which affects both your ad position and cost per click. A higher quality score means better ad placement at lower costs. Focus on improving click-through rates, ad relevance, and landing page experience to boost your quality score and campaign performance.
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
                  className="flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
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

export default WhatIsPPC;

