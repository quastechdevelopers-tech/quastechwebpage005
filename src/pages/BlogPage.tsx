import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import {
  BookOpen,
  Calendar,
  User,
  ArrowRight,
  Search,
  TrendingUp,
  Code,
  BarChart3,
  Share2,
  Target,
  DollarSign,
  Globe,
  FileText,
  Home,
  ChevronRight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const BlogPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: "what-is-seo",
      title: "What is SEO?",
      slug: "what-is-seo",
      description: "Learn the fundamentals of Search Engine Optimization and how it can boost your website's visibility and organic traffic.",
      category: "Digital Marketing",
      author: "QUASTECH Team",
      date: "2024-01-15",
      readTime: "5 min read",
      image: "/images/blog/seo-blog.jpg",
      icon: Search,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: "google-analytics-search",
      title: "Google Analytics & Google Search Console",
      slug: "google-analytics-google-search-blog",
      description: "Master Google Analytics and Search Console to track your website performance and improve your search rankings.",
      category: "Analytics",
      author: "QUASTECH Team",
      date: "2024-01-20",
      readTime: "7 min read",
      image: "/images/blog/google-analytics.jpg",
      icon: BarChart3,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: "affiliate-marketing",
      title: "Affiliate Marketing",
      slug: "affiliate-marketing-blog",
      description: "Discover how to build a successful affiliate marketing business and generate passive income online.",
      category: "Marketing",
      author: "QUASTECH Team",
      date: "2024-01-25",
      readTime: "6 min read",
      image: "/images/blog/affiliate-marketing.jpg",
      icon: DollarSign,
      color: "from-green-500 to-green-600"
    },
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      slug: "social-media-marketing-blog",
      description: "Learn effective social media marketing strategies to grow your brand and engage with your audience.",
      category: "Marketing",
      author: "QUASTECH Team",
      date: "2024-02-01",
      readTime: "8 min read",
      image: "/images/blog/social-media.jpg",
      icon: Share2,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: "what-is-tableau",
      title: "What is Tableau?",
      slug: "what-is-tableau",
      description: "Explore Tableau, the powerful data visualization tool that helps transform raw data into actionable insights.",
      category: "Data Analytics",
      author: "QUASTECH Team",
      date: "2024-02-05",
      readTime: "6 min read",
      image: "/images/blog/tableau.jpg",
      icon: BarChart3,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: "search-engine-marketing",
      title: "Search Engine Marketing (SEM)",
      slug: "what-is-search-engine-marketing",
      description: "Understand Search Engine Marketing and how paid advertising can complement your SEO strategy.",
      category: "Digital Marketing",
      author: "QUASTECH Team",
      date: "2024-02-10",
      readTime: "5 min read",
      image: "/images/blog/sem.jpg",
      icon: Target,
      color: "from-red-500 to-red-600"
    },
    {
      id: "what-is-ppc",
      title: "What is PPC?",
      slug: "what-is-ppc",
      description: "Learn about Pay-Per-Click advertising and how to create effective PPC campaigns that drive conversions.",
      category: "Digital Marketing",
      author: "QUASTECH Team",
      date: "2024-02-15",
      readTime: "7 min read",
      image: "/images/blog/ppc.jpg",
      icon: TrendingUp,
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <DarkModeProvider>
      <SEO 
        title="Blog - QUASTECH | Latest Articles & Insights"
        description="Explore our blog for the latest insights on SEO, Digital Marketing, Data Analytics, and more. Learn from industry experts and stay updated with the latest trends."
        keywords="blog, SEO, digital marketing, analytics, tableau, PPC, SEM, affiliate marketing, social media marketing"
        canonical="/blog"
        ogImage="/images/blog/blog-hero.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative w-full py-16 md:py-24 bg-gradient-to-r from-blue-600 via-blue-700 to-orange-500 overflow-hidden">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white"
            >
              {/* Breadcrumbs */}
              <div className="flex items-center justify-center gap-2 text-white/90 text-sm mb-6">
                <Link to="/" className="hover:text-white flex items-center gap-1">
                  <Home className="w-4 h-4" />
                  Home
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white font-semibold">Blog</span>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <BookOpen className="w-16 h-16 mx-auto mb-6 text-white/90" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
                QUASTECH Blog
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
                Stay updated with the latest insights, trends, and expert knowledge in Digital Marketing, Data Analytics, and Technology
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">
                  Latest Articles
                </span>
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Explore our collection of expert-written articles covering the latest trends and technologies
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                        <div className={`absolute inset-0 bg-gradient-to-br ${post.color} opacity-80`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <post.icon className="w-20 h-20 text-white/90" />
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs font-semibold px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 flex-grow flex flex-col">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
                          {post.description}
                        </p>

                        {/* Meta Info */}
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4 pt-4 border-t border-gray-100">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500 flex items-center gap-1">
                            <FileText className="w-4 h-4" />
                            {post.readTime}
                          </span>
                          <motion.div
                            whileHover={{ x: 5 }}
                            className="flex items-center gap-2 text-blue-600 font-semibold text-sm group-hover:text-blue-700"
                          >
                            Read More
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 to-orange-500">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-white"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Want to Learn More?
              </h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto text-white/90">
                Explore our comprehensive training programs and take your career to the next level
              </p>
              <Link to="/#courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-blue-600 font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors shadow-lg"
                >
                  View All Courses
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </DarkModeProvider>
  );
};

export default BlogPage;

