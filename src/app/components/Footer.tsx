"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PawPrint, Heart, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  if (pathname.startsWith("/studio")) {
    return null;
  }

  return (
    <footer className="bg-creamy-beige text-dark-brown py-12 border-t border-soft-brown/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & Mission */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2">
            <PawPrint className="h-6 w-6 text-accent-orange" />
            <span className="font-bold text-xl tracking-tight">TABB Paw Care</span>
          </Link>
          <p className="text-dark-brown/70 max-w-sm">
            Dedicated to helping animals through education and awareness. Created in loving memory of a beloved dog.
          </p>
          <div className="flex items-center space-x-4 pt-2">
            <a href="#" className="text-dark-brown hover:text-accent-orange transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-dark-brown hover:text-accent-orange transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-dark-brown hover:text-accent-orange transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-dark-brown">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/articles" className="text-dark-brown/80 hover:text-accent-orange transition-colors">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-dark-brown/80 hover:text-accent-orange transition-colors">
                Resources
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-dark-brown/80 hover:text-accent-orange transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-dark-brown/80 hover:text-accent-orange transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact info or extra */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-dark-brown">Support Our Mission</h3>
          <p className="text-dark-brown/70 mb-4">
            Spread the word and practice kindness to all animals. Your voice makes a difference.
          </p>
          <div className="flex items-center gap-2 text-dark-brown/80 font-medium">
            <Heart className="h-5 w-5 text-accent-orange fill-accent-orange" />
            <span>Thank you for caring.</span>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-soft-brown/30 text-center text-dark-brown/60 text-sm">
        <p>&copy; {new Date().getFullYear()} TABB Paw Care. All rights reserved.</p>
      </div>
    </footer>
  );
}
