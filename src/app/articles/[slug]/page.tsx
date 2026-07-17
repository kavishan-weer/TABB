import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { client } from "../../../sanity/lib/client";
import { articleBySlugQuery } from "../../../sanity/lib/queries";
import { urlFor } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, Calendar, User, Heart, Sparkles } from "lucide-react";
import AnimatedSection from "../../components/AnimatedSection";

export const revalidate = 60;

const portableTextComponents = {
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="relative w-full my-10 rounded-2xl overflow-hidden shadow-md group border border-creamy-beige/60">
          <div className="relative w-full h-[250px] md:h-[360px]">
            <Image
              src={urlFor(value)?.url() || ""}
              alt={value.alt || "Article image"}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
          {value.caption && (
            <figcaption className="bg-white/80 backdrop-blur-md px-5 py-3 text-center text-sm text-dark-brown/70 font-medium border-t border-creamy-beige/50">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a href={value.href} rel={rel} className="font-semibold text-accent-orange hover:text-accent-blue transition-colors underline decoration-accent-orange/30 underline-offset-4 decoration-2">
          {children}
        </a>
      );
    },
  },
  block: {
    h2: ({ children }: any) => <h2 className="text-2xl md:text-3xl font-extrabold text-dark-brown mt-12 mb-4 tracking-tight leading-snug">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl md:text-2xl font-bold text-dark-brown mt-10 mb-3 tracking-tight">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg md:text-xl font-bold text-dark-brown mt-8 mb-2 tracking-tight">{children}</h4>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-accent-orange/50 pl-5 py-2 my-8 text-base md:text-lg text-dark-brown/80 font-medium italic bg-gradient-to-r from-accent-orange/[0.04] to-transparent rounded-r-xl">
        {children}
      </blockquote>
    ),
    normal: ({ children }: any) => <p className="text-base md:text-lg text-dark-brown/80 leading-[1.8] mb-6">{children}</p>,
  },
  list: {
    bullet: ({ children }: any) => <ul className="list-disc pl-6 space-y-2.5 my-6 text-base md:text-lg text-dark-brown/80 marker:text-accent-orange">{children}</ul>,
    number: ({ children }: any) => <ol className="list-decimal pl-6 space-y-2.5 my-6 text-base md:text-lg text-dark-brown/80 marker:text-accent-blue">{children}</ol>,
  },
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let article = null;
  try {
    article = await client.fetch(articleBySlugQuery, { slug });
  } catch (e) {
    console.warn("Sanity is not configured yet.");
  }

  if (!article) {
    notFound();
  }

  return (
    <div className="bg-creamy-white min-h-screen pt-36 md:pt-44 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Soft Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-accent-orange/10 to-transparent rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute top-[40%] left-[-10%] w-[400px] h-[400px] bg-creamy-beige/50 rounded-full blur-[100px] -z-10 pointer-events-none" />

      {/* Floating Decorations */}
      <Heart className="absolute top-[18%] right-[12%] w-5 h-5 text-pink-300/40 animate-pulse -z-10" style={{ animationDuration: '4s' }} />
      <Sparkles className="absolute top-[50%] left-[8%] w-4 h-4 text-yellow-400/30 animate-ping -z-10" />

      <AnimatedSection className="max-w-3xl mx-auto">
        {/* Back Link */}
        <Link 
          href="/articles" 
          className="inline-flex items-center gap-2 text-dark-brown/50 hover:text-accent-orange font-bold text-sm mb-10 transition-all hover:-translate-x-1 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
          Back to articles
        </Link>
        
        <header className="mb-10">
          {/* Category & Date */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="inline-flex items-center px-3.5 py-1 bg-accent-orange/10 text-accent-orange text-[0.65rem] font-black rounded-full uppercase tracking-[0.15em] border border-accent-orange/20">
              {article.category || "Uncategorized"}
            </span>
            <span className="flex items-center text-xs font-medium text-dark-brown/50">
              <Calendar className="w-3.5 h-3.5 mr-1.5 text-accent-blue/70" />
              {new Date(article.publishedAt || new Date()).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
                timeZone: "UTC",
              })}
            </span>
          </div>
          
          {/* Title — reduced from 7xl to 4xl max */}
          <h1 className="text-3xl md:text-4xl font-extrabold text-dark-brown leading-[1.15] mb-6 tracking-tight">
            {article.title}
          </h1>

          {/* Author */}
          {article.author && (
            <div className="flex items-center gap-3 text-dark-brown/80">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent-orange/20 to-creamy-beige flex items-center justify-center text-accent-orange border border-accent-orange/15 shadow-sm">
                <User className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[0.6rem] text-dark-brown/45 uppercase tracking-[0.15em] font-bold">Written by</p>
                <p className="text-sm font-semibold">{article.author}</p>
              </div>
            </div>
          )}
        </header>
      </AnimatedSection>

      {/* Hero Image — reduced from 700px to 400px max */}
      <AnimatedSection className="max-w-4xl mx-auto" delay={0.15}>
        {article.mainImage && (
          <div className="relative w-full h-[280px] md:h-[380px] lg:h-[420px] mb-12 rounded-[1.75rem] overflow-hidden shadow-[0_15px_40px_-15px_rgba(92,75,58,0.15)] border-[3px] border-white group">
            <Image
              src={urlFor(article.mainImage)?.url() || ""}
              alt={article.title}
              fill
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-brown/10 to-transparent pointer-events-none" />
          </div>
        )}
      </AnimatedSection>

      {/* Article Content */}
      <AnimatedSection className="max-w-3xl mx-auto" delay={0.25}>
        <article className="prose-custom">
          {article.content ? (
            <PortableText
              value={article.content}
              components={portableTextComponents}
            />
          ) : (
            <p className="text-base text-dark-brown/60 italic">No content available.</p>
          )}
        </article>

        {/* Bottom Separator */}
        <div className="mt-16 pt-10 border-t border-creamy-beige/70 flex items-center justify-center gap-3">
          <div className="w-10 h-px bg-accent-orange/30" />
          <Heart className="w-4 h-4 text-pink-400/60 fill-pink-400/40" />
          <div className="w-10 h-px bg-accent-orange/30" />
        </div>

        {/* Back to articles link at bottom */}
        <div className="mt-8 text-center">
          <Link 
            href="/articles" 
            className="inline-flex items-center gap-2 text-sm font-bold text-dark-brown/50 hover:text-accent-orange transition-all hover:-translate-x-1 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
            Back to all articles
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}
