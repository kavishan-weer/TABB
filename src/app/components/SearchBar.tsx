"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchBar({ searchQuery, setSearchQuery }: SearchBarProps) {
  return (
    <div className="relative max-w-md w-full mb-8">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-dark-brown/40" />
      </div>
      <input
        type="text"
        className="block w-full pl-10 pr-3 py-3 border border-creamy-beige rounded-2xl leading-5 bg-white placeholder-dark-brown/40 focus:outline-none focus:bg-white focus:ring-2 focus:ring-accent-orange/50 focus:border-accent-orange sm:text-sm transition-all shadow-sm"
        placeholder="Search articles by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
}
