"use client";

import {
  ShieldAlert,
  HeartPulse,
  AlertTriangle,
  Syringe,
  BriefcaseMedical,
  BookOpen,
  ExternalLink,
  Info,
  Phone,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Resources() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <div className="bg-creamy-white min-h-screen font-sans selection:bg-accent-orange/20 selection:text-dark-brown relative overflow-hidden">

      {/* Decorative Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-creamy-beige rounded-full mix-blend-multiply filter blur-[100px] opacity-70 animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-soft-brown rounded-full mix-blend-multiply filter blur-[120px] opacity-20 pointer-events-none" />
      <div className="absolute top-[40%] left-[50%] w-[800px] h-[800px] bg-creamy-beige rounded-full mix-blend-multiply filter blur-[150px] opacity-40 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-36 pb-24">

        {/* HERO SECTION */}
        <section className="text-center max-w-4xl mx-auto mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-dark-brown/5 text-dark-brown/70 font-semibold text-sm mb-8 shadow-sm tracking-wide">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-accent-orange"></span>
            </span>
            Veterinary-Approved Guidelines
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-dark-brown tracking-tight mb-8 leading-tight">
            Animal Rescue & <br /> <span className="text-accent-orange">Emergency Care</span>
          </h1>
          <p className="text-xl md:text-2xl text-dark-brown/75 leading-relaxed font-medium">
            Essential procedures to help animals in need safely and effectively.
            <br className="hidden md:block" /> First aid is preliminary always seek professional veterinary care.
          </p>
        </section>

        {/* URGENT EMERGENCY BANNER */}
        <section className="mb-20">
          <div className="relative bg-white rounded-[2.5rem] p-8 md:p-14 shadow-premium border border-accent-orange/20 overflow-hidden group hover:shadow-premium-hover transition-shadow duration-700">
            {/* Background Ribbon */}
            <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-accent-orange/[0.03] to-transparent pointer-events-none" />

            <div className="relative z-10 flex flex-col xl:flex-row gap-12 items-center xl:items-start">
              <div className="flex-shrink-0 bg-accent-orange/10 p-6 rounded-[2rem]">
                <ShieldAlert className="w-16 h-16 text-accent-orange" strokeWidth={1.5} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent-orange text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">Immediate Action</span>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-dark-brown">What To Do If You Find an Injured Animal</h2>
                </div>
                <p className="text-xl text-dark-brown/70 mb-8 max-w-3xl">Follow these veterinarian recommended steps carefully to protect both the animal and yourself.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {[
                    { text: "Call a veterinarian immediately and describe the situation.", icon: Phone },
                    { text: "Approach slowly injured animals may bite due to fear or pain.", icon: AlertTriangle },
                    { text: "Use a towel or cloth to safely restrain the animal if necessary.", icon: HeartPulse },
                    { text: "Move the animal away from danger (e.g., traffic) if it is safe.", icon: ArrowRight },
                    { text: "Keep movement minimal, especially for the head, neck, and spine.", icon: Info }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-creamy-white border border-transparent hover:border-creamy-beige transition-colors duration-300">
                      <div className="mt-1 bg-white p-2 rounded-xl shadow-sm text-accent-orange">
                        <step.icon className="w-5 h-5" />
                      </div>
                      <p className="text-dark-brown/80 font-medium leading-relaxed">{step.text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10">
                  <a
                    href="https://www.msdvetmanual.com/special-pet-topics/emergencies/what-to-do-in-a-dog-or-cat-emergency"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-dark-brown text-white py-4 px-8 rounded-full font-bold text-lg hover:bg-accent-orange hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    Read Full MSD Vet Guide <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MEDICAL GUIDELINES GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">

          {/* Card 1: Basic First Aid */}
          <div
            className="group relative bg-white/60 backdrop-blur-xl rounded-[2.5rem] p-10 shadow-sm border border-creamy-beige hover:border-accent-orange/30 hover:shadow-premium-hover transition-all duration-500 overflow-hidden flex flex-col h-full lg:col-span-2"
            onMouseEnter={() => setHoveredCard('first-aid')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={`absolute -right-20 -top-20 w-64 h-64 bg-accent-orange/5 rounded-full transition-transform duration-700 ease-out ${hoveredCard === 'first-aid' ? 'scale-150' : 'scale-100'}`} />

            <div className="relative z-10 flex flex-col h-full">
              <HeartPulse className="w-12 h-12 text-accent-orange mb-8" strokeWidth={1.5} />
              <h3 className="text-3xl font-extrabold text-dark-brown mb-4">Basic First Aid</h3>
              <p className="text-dark-brown/60 font-medium mb-8 text-lg">Proper first-aid treatment can stabilize an animal while you arrange for transport to a veterinary hospital.</p>

              <div className="space-y-6 flex-grow">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-creamy-beige/50 hover:border-creamy-beige transition-colors">
                  <h4 className="font-bold text-dark-brown text-lg mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-orange" /> Bleeding</h4>
                  <p className="text-dark-brown/80">Apply firm, direct pressure using cloth or gauze. Do not remove soaked bandages add more layers on top.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-creamy-beige/50 hover:border-creamy-beige transition-colors">
                  <h4 className="font-bold text-dark-brown text-lg mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-orange" /> Burns</h4>
                  <p className="text-dark-brown/80">Rinse with cool (not cold) water. Cover with a non-stick dressing and seek veterinary care.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-creamy-beige/50 hover:border-creamy-beige transition-colors">
                  <h4 className="font-bold text-dark-brown text-lg mb-2 flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-orange" /> Fractures / Trauma</h4>
                  <p className="text-dark-brown/80">Do not move unnecessarily. Use a flat surface (board, blanket) to transport carefully.</p>
                </div>
              </div>

              <div className="pt-8 mt-auto">
                <a href="https://www.msdvetmanual.com/emergency-medicine-and-critical-care/emergency-medicine-introduction/first-aid-and-transport-of-small-animals" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center font-bold text-accent-orange hover:text-dark-brown transition-colors">
                  Read clinical guidelines <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Vet Attention Signs */}
          <div className="group bg-dark-brown text-creamy-white rounded-[2.5rem] p-10 shadow-premium hover:shadow-premium-hover transition-all duration-700 flex flex-col h-full relative overflow-hidden">

            {/* Abstract shape */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute -top-20 -right-20 w-[150%] h-[150%] animate-spin-slow">
                <path fill="#FFFFFF" d="M47.7,-64.5C57.3,-53.4,57.7,-33,59.3,-14.8C60.9,3.5,63.6,19.6,56.7,31.7C49.9,43.7,33.5,51.8,16.2,56.9C-1.1,62.1,-19.3,64.4,-33.5,57.8C-47.7,51.1,-58,35.6,-62.7,19.1C-67.4,2.5,-66.6,-15.1,-58.5,-29.4C-50.5,-43.7,-35.1,-54.7,-18.6,-61.8C-2.2,-68.8,15.2,-71.8,32.2,-68.4C49.2,-65,65.8,-55.1,47.7,-64.5Z" transform="translate(100 100)" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm border border-white/5">
                <AlertTriangle className="w-8 h-8 text-accent-orange" />
              </div>

              <h3 className="text-3xl font-extrabold mb-4 text-white">Emergency<br />Signs</h3>
              <p className="text-creamy-white/70 mb-8 font-medium">Seek urgent help if an animal shows:</p>

              <ul className="space-y-5 flex-grow mb-8">
                {[
                  "Difficulty breathing",
                  "Severe bleeding",
                  "Seizures",
                  "Collapse or unconsciousness",
                  "Suspected poisoning or trauma"
                ].map((sign, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-orange/20 text-accent-orange flex items-center justify-center text-xs font-bold border border-accent-orange/30">!</span>
                    <span className="font-semibold text-white/90">{sign}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-6 mt-auto border-t border-white/10">
                <a href="https://www.msdvetmanual.com/special-pet-topics/emergencies/evaluation-and-initial-treatment-of-dog-and-cat-emergencies" target="_blank" rel="noopener noreferrer" className="group/link inline-flex items-center font-bold text-accent-orange hover:text-white transition-colors">
                  Emergency Protocol <ArrowRight className="ml-2 w-5 h-5 group-hover/link:translate-x-2 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* TWO COLUMN CARDS: DISTEMPER & KITS/SAFETY */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">

          {/* Canine Distemper */}
          <div className="bg-white rounded-[2.5rem] p-10 shadow-sm border border-creamy-beige hover:shadow-premium-hover transition-all duration-500 group flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-extrabold text-dark-brown">Canine Distemper</h3>
              <div className="bg-creamy-beige text-dark-brown p-3 rounded-2xl group-hover:scale-110 transition-transform">
                <Syringe className="w-6 h-6" />
              </div>
            </div>
            <p className="text-dark-brown/70 mb-6 font-medium">A highly contagious and serious viral disease affecting dogs. Prevention through vaccination is critical.</p>

            <div className="bg-creamy-white p-6 rounded-2xl mb-8 flex-grow">
              <h4 className="font-bold text-dark-brown mb-4 uppercase tracking-wider text-sm">Key Symptoms</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {["Fever", "Nasal & eye discharge", "Weakness & lethargy", "Neurological signs (seizures)"].map((sym, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-dark-brown/80 font-medium">
                    <div className="min-w-2 min-h-2 mt-2 rounded bg-accent-orange/40" /> {sym}
                  </li>
                ))}
              </ul>
            </div>

            <a href="https://www.msdvetmanual.com/generalized-conditions/canine-distemper" target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 bg-creamy-beige text-dark-brown py-4 rounded-xl font-bold hover:bg-dark-brown hover:text-white transition-colors duration-300">
              Read Treatment Guide
            </a>
          </div>

          {/* First Aid Kit & Safety */}
          <div className="flex flex-col gap-8">
            {/* Kit */}
            <div className="bg-gradient-to-br from-[#5b90a5]/10 to-transparent rounded-[2.5rem] p-8 md:p-10 shadow-sm border border-[#5b90a5]/20 flex-1 flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <BriefcaseMedical className="w-8 h-8 text-[#5b90a5]" />
                <h3 className="text-2xl font-extrabold text-dark-brown">Preparedness Kit</h3>
              </div>
              <p className="text-dark-brown/70 font-medium mb-6">Keep these vet-recommended items ready for rapid response:</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["Gauze & bandages", "Antiseptic solution", "Thermometer", "Tweezers", "Gloves", "Emergency numbers"].map((item, idx) => (
                  <span key={idx} className="bg-white px-3 py-1.5 rounded-lg text-sm font-semibold text-dark-brown/80 shadow-sm border border-creamy-beige">
                    {item}
                  </span>
                ))}
              </div>
              <a href="https://www.msdvetmanual.com/special-pet-topics/emergencies/introduction-to-emergencies" target="_blank" rel="noopener noreferrer" className="mt-auto group/link inline-flex items-center font-bold text-[#5b90a5] hover:text-dark-brown transition-colors">
                Full preparation list <ArrowRight className="ml-1.5 w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
              </a>
            </div>

            {/* Safety */}
            <div className="bg-creamy-beige/50 rounded-[2.5rem] p-8 md:p-10 shadow-sm flex items-start gap-6 border border-creamy-beige">
              <div className="bg-white rounded-2xl p-3 shadow-sm flex-shrink-0">
                <Info className="w-6 h-6 text-dark-brown" />
              </div>
              <div>
                <h3 className="text-xl font-extrabold text-dark-brown mb-2">Handler Safety First</h3>
                <p className="text-dark-brown/70 font-medium leading-relaxed">
                  Injured animals may act aggressively due to pain. Use protective methods (cloth, muzzle if safe) and never risk your own safety.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* FOOTER CITE */}
        <div className="relative mt-24 pt-16">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-soft-brown to-transparent" />
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto px-4">
            <BookOpen className="w-16 h-16 text-creamy-beige mb-8" />
            <h3 className="text-3xl font-extrabold text-dark-brown mb-6">Verified Veterinary Sources</h3>
            <p className="text-xl text-dark-brown/70 leading-relaxed mb-8 font-medium">
              All instructions are based on the <strong className="text-dark-brown">MSD Veterinary Manual</strong> and strict emergency care protocols.
            </p>
            <div className="bg-accent-orange/10 px-8 py-5 rounded-3xl border border-accent-orange/20">
              <p className="text-accent-orange font-bold uppercase tracking-widest text-sm">
                Consult a qualified veterinarian for any serious animal health situation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
