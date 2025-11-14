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
  Database,
  Eye
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";
import SEO from "@/components/SEO";
import { BreadcrumbStructuredData } from "@/components/StructuredData";

const WhatIsTableau = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <DarkModeProvider>
      <SEO 
        title="What is Tableau? - Data Visualization Guide | QUASTECH Blog"
        description="Explore Tableau, the powerful data visualization tool that helps transform raw data into actionable insights and beautiful visualizations."
        keywords="Tableau, data visualization, business intelligence, data analytics, dashboards, data analysis"
        canonical="/blog/what-is-tableau"
        ogImage="/images/blog/tableau.jpg"
        category="Blog"
      />
      <BreadcrumbStructuredData 
        items={[
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: "What is Tableau?", url: "/blog/what-is-tableau" }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
        <Header />
        
        <section className="relative w-full py-12 md:py-16 bg-gradient-to-r from-indigo-600 via-indigo-700 to-indigo-800 overflow-hidden">
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
                <span className="text-white font-semibold">What is Tableau?</span>
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">
                What is Tableau?
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl mb-6">
                Transform Data into Actionable Insights
              </p>
              
              <div className="flex items-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>QUASTECH Team</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>February 5, 2024</span>
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
              <div className="h-64 md:h-96 bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Introduction to Tableau</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Tableau is a powerful data visualization and business intelligence tool that helps people see and understand their data. It enables users to create interactive dashboards, charts, and reports from various data sources without requiring extensive programming knowledge.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With Tableau, you can connect to almost any data source, blend data from multiple sources, and create beautiful visualizations that make complex data easy to understand. It's widely used by data analysts, business intelligence professionals, and organizations of all sizes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-8"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features of Tableau</h2>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Database className="w-6 h-6 text-indigo-600" />
                      <h3 className="text-xl font-bold text-gray-800">Data Connectivity</h3>
                    </div>
                    <p className="text-gray-700">
                      Connect to various data sources including Excel, SQL databases, cloud services, and web data connectors.
                    </p>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                    <div className="flex items-center gap-3 mb-3">
                      <Eye className="w-6 h-6 text-blue-600" />
                      <h3 className="text-xl font-bold text-gray-800">Interactive Dashboards</h3>
                    </div>
                    <p className="text-gray-700">
                      Create interactive dashboards that allow users to explore data dynamically with filters, drill-downs, and tooltips.
                    </p>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-xl border border-purple-100">
                    <div className="flex items-center gap-3 mb-3">
                      <BarChart3 className="w-6 h-6 text-purple-600" />
                      <h3 className="text-xl font-bold text-gray-800">Rich Visualizations</h3>
                    </div>
                    <p className="text-gray-700">
                      Build a wide variety of charts, graphs, maps, and other visualizations to represent your data effectively.
                    </p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <h3 className="text-xl font-bold text-gray-800">Real-time Analytics</h3>
                    </div>
                    <p className="text-gray-700">
                      Perform real-time data analysis and share insights across your organization quickly and efficiently.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Tableau Products</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-600 pl-6 py-4 bg-indigo-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau Desktop</h3>
                    <p className="text-gray-700">
                      The full-featured desktop application for creating and publishing visualizations. Ideal for analysts and power users.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-6 py-4 bg-blue-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau Server</h3>
                    <p className="text-gray-700">
                      Enterprise solution for sharing, managing, and collaborating on Tableau workbooks across your organization.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-6 py-4 bg-purple-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau Online</h3>
                    <p className="text-gray-700">
                      Cloud-based version of Tableau Server, offering the same functionality without the need for on-premise infrastructure.
                    </p>
                  </div>
                  <div className="border-l-4 border-green-600 pl-6 py-4 bg-green-50 rounded-r-lg">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Tableau Public</h3>
                    <p className="text-gray-700">
                      Free version for creating and sharing public visualizations. Great for learning and showcasing your work.
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
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Benefits of Using Tableau</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tableau makes data analysis accessible to everyone, not just data scientists. Its drag-and-drop interface allows users to create complex visualizations without writing code. This democratization of data helps organizations make faster, more informed decisions.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The tool's ability to handle large datasets, create interactive dashboards, and share insights easily makes it an invaluable asset for any data-driven organization. Whether you're analyzing sales trends, tracking KPIs, or exploring customer behavior, Tableau helps you see the story in your data.
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
                  className="flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors"
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

export default WhatIsTableau;

