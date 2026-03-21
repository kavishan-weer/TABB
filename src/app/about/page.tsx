import { Heart, Sparkles, PawPrint, Quote, Star, Moon, Sun } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

export default function About() {
  return (
    <div className="bg-creamy-white min-h-screen pt-48 md:pt-56 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden font-sans">
      {/* Abstract Aesthetic Backgrounds - Warmer and more expansive */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-accent-orange/15 to-transparent rounded-full blur-[140px] animate-[pulse_10s_ease-in-out_infinite] -z-10 pointer-events-none" />
      <div className="absolute top-[30%] left-[-20%] w-[700px] h-[700px] bg-creamy-beige/70 rounded-full blur-[160px] animate-[spin_30s_linear_infinite_reverse] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-15%] right-[5%] w-[500px] h-[500px] bg-[#ffd1ba]/30 rounded-full blur-[120px] animate-[pulse_8s_ease-in-out_infinite] -z-10 pointer-events-none" />

      {/* Floating Sparkles across the page */}
      <Star className="absolute top-[20%] right-[15%] w-4 h-4 text-yellow-500/50 animate-ping -z-10" />
      <Star className="absolute top-[60%] left-[10%] w-5 h-5 text-yellow-500/30 animate-pulse -z-10" />
      <Heart className="absolute bottom-[30%] right-[20%] w-6 h-6 text-accent-orange/10 -rotate-12 animate-bounce -z-10" style={{ animationDuration: '4s' }} />

      {/* Main Title Section */}
      <AnimatedSection className="max-w-3xl mx-auto flex flex-col items-center text-center mb-20 relative">
        <div className="inline-flex items-center gap-2 py-1.5 px-6 bg-white/80 backdrop-blur-xl border border-creamy-beige/80 rounded-full text-accent-orange font-bold text-xs md:text-sm tracking-[0.2em] uppercase shadow-sm mb-6 transition-all hover:scale-105 hover:shadow-md cursor-default">
          <Sparkles className="w-3 h-3 text-[#ffb076] animate-pulse" />
          <span>Our Story</span>
          <Sparkles className="w-3 h-3 text-[#ffb076] animate-pulse" />
        </div>
        <div className="relative inline-block">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-dark-brown tracking-tighter leading-none relative z-10">
            About
          </h1>
          {/* Decorative floating elements around title */}
          <Heart className="absolute -top-6 -right-10 w-10 h-10 text-[#ff8fa3] fill-[#ff8fa3] rotate-12 animate-pulse drop-shadow-md z-20" style={{ animationDuration: '3s' }} />
          <Heart className="absolute -bottom-2 -left-6 w-6 h-6 text-[#ffb076] fill-[#ffb076] -rotate-12 animate-bounce drop-shadow-sm z-0" style={{ animationDuration: '5s' }} />
        </div>
        <p className="mt-6 text-lg md:text-xl text-dark-brown/60 font-medium max-w-xl mx-auto tracking-wide">
          A platform built from loss, driven by love.
        </p>
      </AnimatedSection>

      {/* Content Container */}
      <AnimatedSection className="max-w-5xl mx-auto relative z-10 space-y-16" delay={0.1}>
        
        {/* CARD 1: The Initiative */}
        <div className="bg-white/70 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 pb-24 md:pb-28 shadow-[0_20px_50px_-15px_rgba(92,75,58,0.1)] border-[1.5px] border-white text-center relative group hover:shadow-[0_30px_60px_-15px_rgba(92,75,58,0.15)] transition-all duration-700 hover:-translate-y-1">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-accent-orange/5 to-transparent rounded-full blur-3xl -z-10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
          <PawPrint className="absolute -bottom-10 -left-10 w-48 h-48 text-creamy-beige/60 -rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />

          {/* Animated Circular Logo */}
          <div className="hidden md:flex absolute -bottom-14 left-1/2 -translate-x-1/2 w-28 h-28 lg:w-36 lg:h-36 items-center justify-center z-20 group/logo cursor-pointer transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-full border-2 border-[#ffb076]/30 group-hover/logo:border-[#ffb076]/60 shadow-[0_8px_25px_rgba(242,139,80,0.12)] bg-white/60 backdrop-blur-md transition-all duration-500"></div>
            
            <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
              <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible text-accent-orange">
                <path id="aboutCirclePath" d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0" fill="transparent" />
                <text fill="currentColor">
                  <textPath href="#aboutCirclePath" startOffset="0%" textLength="207" lengthAdjust="spacing" fontSize="10.5" className="font-black uppercase">
                    TABB - Paw Care - TABB - Paw Care - 
                  </textPath>
                </text>
              </svg>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 lg:w-[4.5rem] lg:h-[4.5rem] bg-gradient-to-tr from-[#ff8a40] to-[#ffb885] rounded-full shadow-[0_8px_18px_rgba(255,138,64,0.35)] border-[3px] border-white/90 flex items-center justify-center transition-all group-hover/logo:scale-110 group-hover/logo:shadow-[0_12px_25px_rgba(255,138,64,0.45)] duration-500">
                <PawPrint className="w-7 h-7 lg:w-8 lg:h-8 text-white drop-shadow-md fill-white/10" />
              </div>
            </div>
          </div>

          <h2 className="font-extrabold text-3xl md:text-5xl text-dark-brown leading-tight max-w-4xl mx-auto relative z-10 tracking-tight">
            <span className="relative inline-block px-5 py-2 mb-2">
              <span className="absolute inset-0 bg-accent-orange/10 rounded-2xl transform -rotate-2"></span>
              <span className="relative text-accent-orange">TABB Paw Care</span>
            </span> <br />
            <span className="block text-2xl md:text-4xl mt-2 text-dark-brown/90">is an initiative dedicated to improving animal welfare.</span>
          </h2>
          
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent-orange/40 to-transparent mx-auto my-8 opacity-70" />
          
          <p className="text-lg md:text-xl text-dark-brown/80 leading-relaxed max-w-3xl mx-auto font-medium relative z-10">
            We believe that even small actions, when guided by the right knowledge, can make a meaningful difference. Through this platform, we aim to provide clear, compassionate information about pet care, stray support, and animal health, so that anyone can step in and help when it matters most.
          </p>
        </div>

        {/* CARD 2: The Personal Story */}
        <div className="bg-gradient-to-br from-white/90 to-[#fff5f0]/90 backdrop-blur-2xl rounded-[3rem] p-10 md:p-16 shadow-[0_20px_50px_-15px_rgba(242,139,80,0.1)] border-[1.5px] border-white relative overflow-hidden group hover:shadow-[0_30px_60px_-15px_rgba(242,139,80,0.15)] transition-all duration-700 hover:-translate-y-1">
          <Quote className="absolute -top-6 -right-6 w-64 h-64 text-accent-orange/[0.04] rotate-180 pointer-events-none transition-transform duration-1000 group-hover:scale-110" />

          <div className="relative z-10 flex flex-col items-center text-center gap-10 md:gap-14">
            
            {/* Memory Portrait */}
            <div className="shrink-0 relative mt-4 md:mt-0 flex flex-col items-center">
              <div className="absolute inset-0 bg-accent-orange/20 blur-[40px] rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div className="relative w-56 h-56 md:w-72 md:h-72 overflow-hidden shadow-[0_20px_40px_rgba(92,75,58,0.15)] border-[6px] md:border-[8px] border-white bg-creamy-beige transition-all duration-1000 ease-out z-10"
                style={{ borderRadius: '50% 50% 40% 60% / 60% 50% 50% 40%' }}>
                <img
                  src="/Taani.png"
                  alt="Taani - In Memory"
                  className="w-full h-full object-cover object-top filter saturate-[1.05] contrast-[1.05] group-hover:scale-105 group-hover:rotate-1 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 shadow-[inset_0_10px_30px_rgba(0,0,0,0.1)] pointer-events-none"></div>
              </div>

              {/* Floating memory pills */}
              <div className="absolute -bottom-4 right-[-5%] bg-white px-5 py-2.5 rounded-3xl shadow-xl border border-creamy-beige/50 transform rotate-3 z-20 animate-[bounce_4s_infinite]">
                <p className="text-[#ff6b81] font-bold text-xs md:text-sm tracking-widest uppercase flex items-center gap-2">
                  <Heart className="w-3.5 h-3.5 fill-[#ff6b81]" /> Forever Loved
                </p>
              </div>
              <div className="absolute top-[5%] left-[-10%] bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-3xl shadow-md border border-creamy-beige/50 transform -rotate-6 z-20 animate-[bounce_5s_infinite_reverse]">
                <p className="text-accent-orange font-bold text-[0.65rem] md:text-xs tracking-widest uppercase flex items-center gap-1.5">
                  <Star className="w-3 h-3 fill-accent-orange/40" /> Angel
                </p>
              </div>
            </div>

            {/* The Story Text */}
            <div className="flex-1 w-full max-w-3xl flex flex-col items-center mt-10 md:mt-0 relative">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-dark-brown mb-6 tracking-tight leading-[1.1] text-center">
                A Deeply <br className="hidden lg:block"/>
                <span className="text-accent-orange">Personal Experience</span>
              </h3>

              <p className="text-lg md:text-xl leading-relaxed text-dark-brown/85 font-medium mb-8">
                On <strong className="text-dark-brown bg-accent-orange/10 px-2 py-0.5 rounded-md">February 22, 2026</strong>, I lost my dog to <strong className="text-dark-brown">distemper</strong>. We did everything possible, every effort, every moment, every hope but in the end, it wasn't enough.
              </p>

              {/* Quote Block */}
              <div className="bg-white/80 backdrop-blur-xl p-6 md:p-8 rounded-[2rem] shadow-[0_10px_30px_-15px_rgba(92,75,58,0.15)] border border-creamy-beige mb-8 relative group/quote hover:shadow-[0_15px_40px_-15px_rgba(92,75,58,0.2)] transition-all duration-500">
                <Quote className="absolute top-5 left-5 w-6 h-6 text-accent-orange/20 group-hover/quote:-translate-y-1 group-hover/quote:-translate-x-1 transition-transform" />
                <p className="text-[1.15rem] md:text-[1.35rem] leading-[1.6] text-dark-brown/95 font-bold italic relative z-10 pl-10 pr-2 pt-1 tracking-wide" style={{ fontFamily: 'Georgia, serif' }}>
                  "She passed away in my arms, a moment I will never forget."
                </p>
                <div className="mt-5 pl-10 flex items-center gap-3 opacity-90">
                  <div className="h-px bg-accent-orange/40 w-10" />
                  <span className="text-accent-orange text-[0.65rem] md:text-xs font-black tracking-[0.2em] uppercase">
                    It stayed with me
                  </span>
                </div>
              </div>

              <p className="text-[1.05rem] md:text-lg text-dark-brown/75 leading-relaxed font-medium">
                It made me realize how important awareness, early action, and proper knowledge are. From that day on, I wanted to do something meaningful that could help other animals and support people trying their best, just like I did.
              </p>
            </div>
          </div>
        </div>

        {/* CARD 3: Emotional Conclusion (Sunset Gradient) */}
        <div className="bg-gradient-to-br from-[#ff9b66] to-[#e87040] rounded-[3rem] p-10 md:p-16 text-center shadow-[0_20px_50px_-10px_rgba(232,112,64,0.4)] relative overflow-hidden group hover:shadow-[0_30px_60px_-10px_rgba(232,112,64,0.5)] transition-all duration-700 hover:-translate-y-1">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/20 to-transparent opacity-60 pointer-events-none"></div>

          <Sun className="absolute -top-10 -right-10 w-40 h-40 text-white/10 animate-[spin_40s_linear_infinite]" />
          <Moon className="absolute -bottom-10 -left-10 w-32 h-32 text-dark-brown/5 -rotate-12" />

          <h2 className="text-4xl md:text-6xl font-black text-white leading-tight relative z-10 mb-6 tracking-tight drop-shadow-sm">
            <span className="text-[#fff4eb]">TABB Paw Care</span> <br />
            is that effort.
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-white/95 font-medium max-w-3xl mx-auto relative z-10 mb-12 drop-shadow-sm">
            It is a space built with empathy, driven by purpose, and focused on sharing knowledge that can save lives. Whether it's learning how to care for a pet, helping an injured stray, or understanding diseases like distemper, every piece of information here is meant to make a real difference.
          </p>

          <div className="bg-white/15 backdrop-blur-2xl p-8 md:p-12 rounded-[2.5rem] mx-auto max-w-2xl border border-white/40 shadow-[0_15px_40px_rgba(0,0,0,0.15)] inline-block relative z-10 transform transition-all hover:-translate-y-1 hover:bg-white/20 duration-500">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-white px-5 py-2 rounded-full shadow-lg border border-[#ffe0cc]">
              <Heart className="w-5 h-5 text-[#ff6b81] fill-[#ff6b81] animate-pulse" />
            </div>

            <h3 className="text-2xl md:text-4xl font-black text-white leading-snug mb-4 mt-3 drop-shadow-sm">
              Because every animal deserves care.
            </h3>
            <p className="text-lg md:text-xl text-white/90 font-bold tracking-wide">
              And no one should feel helpless <br className="hidden md:block" /> when trying to save the ones they love.
            </p>
          </div>
        </div>

      </AnimatedSection>
    </div>
  );
}
