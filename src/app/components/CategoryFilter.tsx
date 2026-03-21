"use client";

import { motion } from "framer-motion";
import { cn } from "./Navbar";

interface CategoryFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-10 items-center justify-center max-w-4xl mx-auto">
      {["All", ...categories].map((category) => {
        const isActive = activeCategory === category;
        return (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={cn(
              "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 outline-none",
              isActive ? "text-white shadow-md shadow-accent-orange/20" : "text-dark-brown hover:text-accent-orange bg-white border border-creamy-beige hover:border-accent-orange/30 shadow-sm"
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeCategory"
                className="absolute inset-0 bg-accent-orange rounded-full -z-10"
                initial={false}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category}</span>
          </button>
        );
      })}
    </div>
  );
}
