"use client";

import Link from "next/link";
import Image from "next/image";
import { urlFor } from "../../sanity/lib/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface ArticleCardProps {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  mainImage: any;
  publishedAt: string;
}

export default function ArticleCard({
  title,
  slug,
  category,
  excerpt,
  mainImage,
  publishedAt,
}: ArticleCardProps) {
  return (
    <Link href={`/articles/${slug}`} className="group h-full flex flex-col block">
      <motion.div 
        whileHover={{ y: -8 }}
        className="bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-premium hover:shadow-premium-hover border border-glass-border transition-all duration-300 h-full flex flex-col relative"
      >
        {/* Animated Accent Gradient positioned at the top edge */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-accent-orange to-accent-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Image Container */}
        <div className="relative h-48 sm:h-56 w-full overflow-hidden bg-creamy-beige p-2">
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            {mainImage ? (
              <Image
                src={urlFor(mainImage)?.url() || ""}
                alt={title || "Article Image"}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white text-dark-brown/30 font-medium tracking-wider text-sm">
                NO IMAGE
              </div>
            )}
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Floating Category Pill */}
            <div className="absolute top-3 left-3 px-3 py-1.5 bg-glass-bg backdrop-blur-md text-dark-brown text-xs font-bold rounded-full shadow-sm">
              {category}
            </div>
          </div>
        </div>

        {/* Content Container */}
        <div className="p-6 flex flex-col flex-1">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-medium text-dark-brown/50 tracking-wide uppercase">
              {new Date(publishedAt).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
                timeZone: "UTC",
              })}
            </span>
          </div>
          
          <h3 className="text-xl font-bold text-dark-brown leading-snug mb-3 line-clamp-2 group-hover:text-accent-orange transition-colors duration-300">
            {title}
          </h3>
          
          <p className="text-dark-brown/70 text-sm leading-relaxed line-clamp-3 mb-6 flex-1">
            {excerpt}
          </p>

          <div className="mt-auto pt-4 border-t border-creamy-beige flex items-center justify-between group-hover:border-soft-green transition-colors">
            <span className="font-semibold text-deep-green text-sm flex items-center gap-2">
              Read article
            </span>
            <motion.div 
              className="bg-creamy-beige p-2 rounded-full text-dark-brown group-hover:bg-accent-orange group-hover:text-white transition-colors"
              whileHover={{ rotate: 15 }}
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
