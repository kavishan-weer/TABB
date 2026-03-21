import { groq } from "next-sanity";

// Get all posts
export const articlesQuery = groq`*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  "slug": slug.current,
  "category": categories[0]->title,
  mainImage,
  publishedAt,
  "author": author->name,
  "content": body
}`;

// Get featured posts (latest 3)
export const featuredArticlesQuery = groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
  _id,
  title,
  "slug": slug.current,
  "category": categories[0]->title,
  mainImage,
  publishedAt,
  "author": author->name,
  "content": body
}`;

// Get categories
export const categoriesQuery = groq`*[_type == "category"] | order(title asc) {
  _id,
  title
}`;

// Get a single post by its slug
export const articleBySlugQuery = groq`*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  "slug": slug.current,
  "category": categories[0]->title,
  mainImage,
  publishedAt,
  "author": author->name,
  "content": body
}`;
