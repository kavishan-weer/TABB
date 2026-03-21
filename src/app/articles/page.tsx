import { client } from "../../sanity/lib/client";
import { articlesQuery, categoriesQuery } from "../../sanity/lib/queries";
import ArticlesClient from "./ArticlesClient";

export const revalidate = 60;

export default async function ArticlesPage() {
  let articles = [];
  let categories = [];
  try {
    [articles, categories] = await Promise.all([
      client.fetch(articlesQuery),
      client.fetch(categoriesQuery),
    ]);
  } catch (e) {
    console.warn("Sanity is not configured yet. Returning empty data.");
  }

  return <ArticlesClient initialArticles={articles} categories={categories} />;
}
