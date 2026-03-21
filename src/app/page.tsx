import Link from "next/link";
import { client } from "../sanity/lib/client";
import { featuredArticlesQuery } from "../sanity/lib/queries";
import ArticleCard from "./components/ArticleCard";
import AnimatedSection from "./components/AnimatedSection";
import { PawPrint, Heart, Sparkles } from "lucide-react";

// Extract a plain text excerpt from Sanity portable text blocks
function getExcerpt(blocks: any[]): string {
  if (!blocks || !blocks.length) return "No description available.";
  const block = blocks.find((b) => b._type === "block" && b.children);
  if (block) {
    return block.children.map((child: any) => child.text).join(" ").slice(0, 150) + "...";
  }
  return "No description available.";
}

export const revalidate = 60; // revalidate at most every minute

export default async function Home() {
  let featuredArticles = [];
  try {
    featuredArticles = await client.fetch(featuredArticlesQuery);
  } catch (e) {
    console.warn("Sanity is not configured yet. Returning empty articles.");
  }

  return (
    <div className="min-h-screen">
      {/* CUTE & MODERN HERO SECTION */}
      <section className="relative bg-creamy-white pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[90vh] flex flex-col items-center justify-center">
        
        {/* Living, Spinning Background Blobs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] lg:w-[800px] lg:h-[800px] rounded-[100%] bg-accent-orange/15 blur-[100px] animate-[spin_15s_linear_infinite] transform translate-x-1/3 -translate-y-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-[100%] bg-accent-blue/15 blur-[100px] animate-[spin_20s_linear_infinite_reverse] transform -translate-x-1/3 translate-y-1/3 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] rounded-[100%] bg-soft-green/30 blur-[120px] animate-[spin_25s_linear_infinite] transform -translate-x-1/2 -translate-y-1/2 pointer-events-none mix-blend-multiply" />
        
        <AnimatedSection className="w-full max-w-5xl mx-auto flex flex-col items-center text-center z-10 relative mt-8">
          
          {/* Cute Badge */}
          <div className="inline-flex items-center gap-2 py-2 px-5 bg-white border-2 border-creamy-beige rounded-full text-accent-orange font-bold text-sm tracking-wide shadow-sm mb-8">
            <PawPrint className="w-4 h-4" />
            <span>Welcome to TABB Paw Care</span>
            <Sparkles className="w-4 h-4 text-yellow-400" />
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-dark-brown tracking-tight leading-[1.15] max-w-4xl">
            Happiness for your <br className="hidden sm:block" />
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-white px-6 py-2 bg-accent-orange rounded-3xl rotate-2 inline-block shadow-md">
                furry friends.
              </span>
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-dark-brown/70 leading-relaxed max-w-2xl mx-auto mt-8 font-medium">
            Discover loving advice, expert vet tips, and heartwarming stories built especially for the pets we adore.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            <Link 
              href="/articles" 
              className="w-full sm:w-auto bg-dark-brown text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-dark-brown/80 transition-all shadow-md transform hover:-translate-y-1 flex items-center justify-center gap-2 group"
            >
              Start Reading
              <Heart className="w-5 h-5 text-accent-orange group-hover:scale-125 transition-transform" />
            </Link>
            <Link 
              href="/about" 
              className="w-full sm:w-auto bg-white text-dark-brown border-2 border-creamy-beige px-8 py-4 rounded-full font-bold text-lg hover:bg-creamy-beige transition-all shadow-sm transform hover:-translate-y-1"
            >
              Our Mission
            </Link>
          </div>
          
          {/* Big Cute Center Image Collage */}
          <div className="relative w-full max-w-5xl mt-20">
            {/* The main wide image */}
            <div className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[3rem] overflow-hidden shadow-premium border-8 border-white">
               <img 
                 src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1200&auto=format&fit=crop" 
                 alt="Cute puppy looking up" 
                 className="w-full h-full object-cover object-center"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/20 to-transparent"></div>
            </div>
            
            {/* Floating Heart Icon Desktop */}
            <div className="hidden md:flex absolute -top-8 -right-8 w-20 h-20 bg-white rounded-full shadow-lg items-center justify-center animate-[bounce_3s_infinite] border-4 border-creamy-white z-20">
              <Heart className="w-10 h-10 text-pink-400 fill-pink-400" />
            </div>

            {/* Floating Paw Icon Desktop */}
            <div className="hidden md:flex absolute -bottom-8 -left-8 w-24 h-24 bg-accent-orange text-white rounded-3xl rotate-12 shadow-lg items-center justify-center animate-[bounce_4s_infinite_reverse] border-4 border-creamy-white z-20">
              <PawPrint className="w-12 h-12" />
            </div>
          </div>

        </AnimatedSection>
        
        {/* Animated Circular Logo */}
        <div className="hidden md:flex absolute bottom-8 right-8 md:bottom-12 md:right-12 lg:bottom-16 lg:right-16 w-32 h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 items-center justify-center z-30 group cursor-pointer transition-transform duration-500 hover:scale-105">
          {/* Soft background for the whole badge */}
          <div className="absolute inset-0 rounded-full border-2 border-[#ffb076]/40 group-hover:border-[#ffb076]/70 shadow-[0_10px_35px_rgba(242,139,80,0.2)] bg-white/70 backdrop-blur-md transition-all duration-500"></div>
          
          <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible text-accent-orange">
              <path id="circlePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="transparent" />
              <text fill="currentColor">
                <textPath href="#circlePath" startOffset="0%" textLength="207" lengthAdjust="spacing" fontSize="10.5" className="font-black uppercase drop-shadow-sm">
                  TABB - Paw Care - TABB - Paw Care - 
                </textPath>
              </text>
            </svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Soft Vibrant Orange Gradient Inner Circle */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-gradient-to-tr from-[#ff8a40] to-[#ffb885] rounded-full shadow-[0_10px_20px_rgba(255,138,64,0.3)] border-[3px] border-white/90 flex items-center justify-center transition-all group-hover:scale-110 group-hover:shadow-[0_15px_30px_rgba(255,138,64,0.4)] duration-500">
              <PawPrint className="w-10 h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 fill-white/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <AnimatedSection className="py-24 bg-soft-green/30 px-4 sm:px-6 lg:px-8 border-y border-soft-green/50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold text-dark-brown">A World of Kindness</h2>
          <div className="w-20 h-1.5 bg-accent-orange mx-auto rounded-full" />
          <p className="text-lg md:text-xl text-dark-brown/80 leading-relaxed font-medium">
            Every animal deserves love, respect, and proper care. Through understanding their needs, we can build a better world for our furry companions and the strays that share our communities. Whether you're looking for health tips, training advice, or ways to help local shelters, you'll find the information you need right here.
          </p>
        </div>
      </AnimatedSection>

      {/* Featured Articles Section */}
      <section className="py-24 bg-creamy-white px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto relative z-10">
          <AnimatedSection className="flex flex-col md:flex-row items-center md:items-end justify-between mb-16 text-center md:text-left gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-brown mb-4">Latest Insights</h2>
              <p className="text-lg text-dark-brown/70 font-medium">Recent articles and guides for animal lovers.</p>
            </div>
            <Link href="/articles" className="inline-flex items-center text-accent-orange font-bold text-lg hover:text-accent-blue transition-colors group px-6 py-2 rounded-full bg-accent-orange/10">
              View all articles 
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredArticles.map((article: any, index: number) => (
              <AnimatedSection key={article._id} delay={index * 0.1}>
                <ArticleCard
                  title={article.title}
                  slug={article.slug}
                  category={article.category || "Uncategorized"}
                  excerpt={getExcerpt(article.content)}
                  mainImage={article.mainImage}
                  publishedAt={article.publishedAt || new Date().toISOString()}
                />
              </AnimatedSection>
            ))}
          </div>
          
          {featuredArticles.length === 0 && (
             <div className="text-center py-20 bg-glass-bg border border-glass-border rounded-3xl backdrop-blur-md">
                <p className="text-dark-brown/60 text-lg">No featured articles available yet.</p>
             </div>
          )}
        </div>
      </section>
    </div>
  );
}
