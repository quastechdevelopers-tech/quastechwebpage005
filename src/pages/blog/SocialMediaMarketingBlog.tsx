import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  ArrowLeft,
  Share2,
  Home,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Target,
  Globe,
  Users,
  MessageSquare
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const SocialMediaMarketingBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DarkModeProvider>
      <SEO 
        title="Social Media Marketing Strategies | QUASTECH Blog"
        description="Learn effective social media marketing strategies to grow your brand, engage with your audience, and drive business results."
        keywords="social media marketing, SMM, brand engagement, social media strategy, content marketing"
        canonical="/blog/social-media-marketing-blog"
        ogImage="/images/blog/social-media.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "Social Media Marketing", url: "/blog/social-media-marketing-blog" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 overflow-hidden">
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
                <span className="text-white font-semibold">Social Media Marketing</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                Social Media Marketing
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Strategies to Grow Your Brand and Engage Your Audience
              </p>
              
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>QUASTECH Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 1, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>8 min read</span>
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
              <div className="h-64 md:h-96 bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <Share2 className="w-32 h-32 text-white/80" />
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">The Power of Social Media Marketing</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Social media marketing (SMM) has become an essential component of modern business strategy. With billions of active users across various platforms, social media offers unparalleled opportunities to connect with your target audience, build brand awareness, and drive business growth.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Effective social media marketing goes beyond just posting content. It involves understanding your audience, creating valuable content, engaging with followers, and using data to continuously improve your strategy.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Social Media Platforms</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-800">Facebook & Instagram</h3>
                    </div>
                    <p className="text-gray-700">
                      Ideal for B2C businesses, visual content, and building community through groups and stories.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">LinkedIn</h3>
                    </div>
                    <p className="text-gray-700">
                      Perfect for B2B marketing, professional networking, and sharing industry insights.
                    </p>
                  </div>
                  <div className="bg-red-50 p-6 rounded-xl border border-red-100">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-red-600" />
                      <h3 className="text-xl font-bold text-gray-800">Twitter</h3>
                    </div>
                    <p className="text-gray-700">
                      Great for real-time updates, customer service, and engaging in industry conversations.
                    </p>
                  </div>
                  <div className="bg-pink-50 p-6 rounded-xl border border-pink-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-pink-600" />
                      <h3 className="text-xl font-bold text-gray-800">TikTok & YouTube</h3>
                    </div>
                    <p className="text-gray-700">
                      Excellent for video content, reaching younger audiences, and building brand personality.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Effective SMM Strategies</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Content Planning</h3>
                    <p className="text-gray-700">
                      Create a content calendar that aligns with your business goals, audience interests, and platform best practices. Mix educational, entertaining, and promotional content.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Engagement & Community Building</h3>
                    <p className="text-gray-700">
                      Respond to comments, messages, and mentions promptly. Build a community around your brand by encouraging user-generated content and hosting interactive sessions.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Analytics & Optimization</h3>
                    <p className="text-gray-700">
                      Track key metrics like engagement rate, reach, clicks, and conversions. Use insights to refine your strategy and focus on what works best for your audience.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-6 py-4 bg-orange-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Paid Advertising</h3>
                    <p className="text-gray-700">
                      Leverage social media advertising to reach a wider audience, retarget website visitors, and promote specific products or services with precise targeting options.
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
                  Consistency is key in social media marketing. Post regularly, maintain a consistent brand voice, and ensure all content aligns with your brand values. Focus on providing value to your audience rather than just promoting your products.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Remember that social media is about building relationships. Engage authentically with your audience, listen to their feedback, and adapt your strategy based on their needs and preferences. Success in social media marketing comes from genuine connection, not just follower counts.
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
                  className="flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
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

export default SocialMediaMarketingBlog;

