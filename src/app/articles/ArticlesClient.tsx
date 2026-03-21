"use client";

import { useState, useMemo } from "react";
import ArticleCard from "../components/ArticleCard";
import CategoryFilter from "../components/CategoryFilter";
import SearchBar from "../components/SearchBar";
import { motion, AnimatePresence } from "framer-motion";

// Function to extract text from portable text block
function getExcerpt(blocks: any[]): string {
  if (!blocks || !blocks.length) return "No description available.";
  const block = blocks.find((b) => b._type === "block" && b.children);
  if (block) {
    return block.children.map((child: any) => child.text).join(" ").slice(0, 150) + "...";
  }
  return "No description available.";
}

interface ArticlesClientProps {
  initialArticles: any[];
  categories: any[];
}

export default function ArticlesClient({ initialArticles, categories }: ArticlesClientProps) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categoryNames = useMemo(() => {
    return categories.map(c => c.title);
  }, [categories]);

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      const matchCategory = activeCategory === "All" || article.category === activeCategory;
      const matchSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [initialArticles, activeCategory, searchQuery]);

  return (
    <div className="bg-creamy-white min-h-screen pt-40 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Abstract Background Blur */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-soft-green/50 rounded-full blur-[100px] -z-10 mix-blend-multiply" />
      <div className="absolute top-60 right-20 w-80 h-80 bg-accent-orange/20 rounded-full blur-[120px] -z-10 mix-blend-multiply" />

      <div className="max-w-7xl mx-auto z-10 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-dark-brown mb-6 tracking-tight">
            Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-orange to-accent-blue">Knowledge</span>
          </h1>
          <p className="text-lg md:text-xl text-dark-brown/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Dive into our collection of educational resources, expert advice, and heartfelt stories designed and curated for animal welfare champions.
          </p>
          
          <div className="flex flex-col items-center justify-center w-full">
             <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
             <CategoryFilter 
                categories={categoryNames} 
                activeCategory={activeCategory} 
                onCategoryChange={setActiveCategory} 
             />
          </div>
        </motion.div>

        {filteredArticles.length > 0 ? (
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article._id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, type: "spring" }}
                >
                  <ArticleCard
                    title={article.title}
                    slug={article.slug}
                    category={article.category || "Uncategorized"}
                    excerpt={getExcerpt(article.content)}
                    mainImage={article.mainImage}
                    publishedAt={article.publishedAt || new Date().toISOString()}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-glass-bg backdrop-blur-md rounded-3xl border border-glass-border shadow-sm max-w-2xl mx-auto mt-10"
          >
            <h3 className="text-2xl font-bold text-dark-brown mb-3">No articles found</h3>
            <p className="text-dark-brown/60 text-lg">Try adjusting your search or category filter to find what you're looking for.</p>
            <button 
              onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
              className="mt-8 px-6 py-3 bg-white border border-creamy-beige text-dark-brown font-semibold rounded-full hover:bg-soft-green transition-colors shadow-sm"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
