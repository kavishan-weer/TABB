"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Placeholder Formspree Action
    // When real Formspree endpoint is available, replace this with an actual fetch call.
    try {
      // const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
      //   method: "POST",
      //   body: new FormData(e.currentTarget),
      //   headers: { Accept: "application/json" }
      // });
      
      // Simulating a successful network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-creamy-white min-h-screen pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-dark-brown mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-dark-brown/70 max-w-2xl mx-auto">
            Have a question, feedback, or want to collaborate to help more animals? We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-dark-brown mb-6">Let's Connect</h2>
            <p className="text-dark-brown/80 text-lg leading-relaxed mb-8">
              Whether you need advice regarding an animal or want to support our mission, reach out to us. We reply as soon as we can.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 bg-creamy-beige p-6 rounded-2xl">
                <Mail className="h-6 w-6 text-accent-orange" />
                <div>
                  <h3 className="font-semibold text-dark-brown">Email Us</h3>
                  <a href="mailto:hello@tabbpawcare.org" className="text-dark-brown/70 hover:text-accent-orange transition-colors">hello@tabbpawcare.org</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-creamy-beige p-6 rounded-2xl">
                <Phone className="h-6 w-6 text-accent-orange" />
                <div>
                  <h3 className="font-semibold text-dark-brown">Call Us</h3>
                  <a href="tel:+1234567890" className="text-dark-brown/70 hover:text-accent-orange transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-creamy-beige p-6 rounded-2xl">
                <MapPin className="h-6 w-6 text-accent-orange" />
                <div>
                  <h3 className="font-semibold text-dark-brown">Location</h3>
                  <span className="text-dark-brown/70">Global Community Online</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-creamy-beige">
            <h3 className="text-2xl font-bold text-dark-brown mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-dark-brown mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-creamy-beige focus:ring-2 focus:ring-accent-orange focus:border-accent-orange bg-creamy-white outline-none transition-shadow"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-dark-brown mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-creamy-beige focus:ring-2 focus:ring-accent-orange focus:border-accent-orange bg-creamy-white outline-none transition-shadow"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-brown mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-creamy-beige focus:ring-2 focus:ring-accent-orange focus:border-accent-orange bg-creamy-white outline-none transition-shadow resize-none"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-accent-orange text-white font-bold py-4 rounded-xl hover:bg-opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-md disabled:opacity-70"
              >
                {status === "submitting" ? "Sending..." : (
                  <>Send Message <Send className="h-5 w-5" /></>
                )}
              </button>

              {status === "success" && (
                <div className="p-4 bg-soft-green text-deep-green rounded-xl text-center font-medium">
                  Thanks! We've received your message.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-center font-medium">
                  Oops! Something went wrong. Please try again.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
