import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Server, Layers, Smartphone, Sparkles } from "lucide-react";

export function Hero() {
  const navigate = useNavigate();

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-24 md:pt-40 md:pb-32 bg-white overflow-hidden flex items-center"
    >
      {/* Structural technical grid lines (inspired by Stripe/Vercel) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      {/* Subtle green ambient light bubbles */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-green-200/20 rounded-full blur-[80px]" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-emerald-200/10 rounded-full blur-[100px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-6 space-y-8 text-left">
            
            {/* Tech tag overline */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 border border-green-200/50 rounded-full text-green-700 font-mono text-xs tracking-wider uppercase"
              data-testid="hero-tech-badge"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Next-Gen Software & Marketing</span>
            </div>

            {/* H1 Headline */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl tracking-tighter font-heading font-medium text-zinc-950 leading-none"
              data-testid="hero-headline"
            >
              Transforming Businesses Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-green-500">Innovative Digital Solutions</span>
            </h1>

            {/* Subheading */}
            <p 
              className="text-base sm:text-lg text-zinc-600 leading-relaxed font-body max-w-xl"
              data-testid="hero-subheading"
            >
              We help businesses grow with high-performance websites, custom software, mobile applications, and results-driven digital marketing strategies designed for long-term success.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => navigate("/contact")}
                className="bg-green-600 hover:bg-green-700 text-white rounded-md px-6 py-3 text-sm font-body font-medium transition-all shadow-sm flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                data-testid="hero-cta-button"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigate("/portfolio")}
                className="bg-white border border-zinc-200 hover:bg-zinc-50 hover:border-zinc-300 text-zinc-900 rounded-md px-6 py-3 text-sm font-body font-medium transition-all flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
                data-testid="hero-portfolio-button"
              >
                View Portfolio
              </button>
            </div>
            
            {/* Desaturated quick stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-zinc-200/60 max-w-md">
              <div>
                <p className="text-2xl font-heading font-semibold text-zinc-950">99.9%</p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Uptime SLA</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold text-zinc-950">140+</p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Deployments</p>
              </div>
              <div>
                <p className="text-2xl font-heading font-semibold text-zinc-950">10x</p>
                <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Lead Growth</p>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Mockup/Illustration */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg aspect-square flex justify-center items-center">
              
              {/* Spinning/pulsing blueprint-style outer circle */}
              <div className="absolute w-full h-full border border-zinc-200 rounded-full [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] animate-[spin_60s_linear_infinite]" />
              <div className="absolute w-[80%] h-[80%] border border-dashed border-zinc-200 rounded-full animate-[spin_40s_linear_infinite]" />

              {/* Laptop frame mockup container */}
              <div 
                className="absolute w-[85%] md:w-[90%] bg-zinc-950 rounded-xl shadow-2xl border border-zinc-800/80 overflow-hidden transform rotate-[-4deg] translate-y-[-10px] z-10 animate-float"
                data-testid="hero-mockup-laptop"
              >
                {/* Mac toolbar */}
                <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/80" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                  <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  <span className="text-[10px] font-mono text-zinc-500 ml-4">e26-enterprise.io</span>
                </div>
                
                {/* Screen content (Dashboard mock) */}
                <div className="bg-zinc-900 p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs font-mono font-bold text-zinc-200">E26 Solutions</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">Active Node</span>
                  </div>
                  
                  {/* Grid cards on screen */}
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-zinc-950 p-2 rounded border border-zinc-800/60">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase">Leads</p>
                      <p className="text-sm font-semibold text-white mt-0.5 font-heading">1,482</p>
                      <span className="text-[8px] text-green-500 font-mono">+12.4%</span>
                    </div>
                    <div className="bg-zinc-950 p-2 rounded border border-zinc-800/60">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase">Response</p>
                      <p className="text-sm font-semibold text-white mt-0.5 font-heading">180ms</p>
                      <span className="text-[8px] text-green-400 font-mono">Perfect</span>
                    </div>
                    <div className="bg-zinc-950 p-2 rounded border border-zinc-800/60">
                      <p className="text-[9px] font-mono text-zinc-500 uppercase">ROI</p>
                      <p className="text-sm font-semibold text-white mt-0.5 font-heading">320%</p>
                      <span className="text-[8px] text-green-500 font-mono">Excellent</span>
                    </div>
                  </div>

                  {/* SVG graph mockup */}
                  <div className="bg-zinc-950 p-2 rounded border border-zinc-800/60 h-20 relative flex items-end">
                    <svg className="w-full h-12" viewBox="0 0 100 40">
                      {/* Grid lines */}
                      <line x1="0" y1="10" x2="100" y2="10" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                      <line x1="0" y1="20" x2="100" y2="20" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                      <line x1="0" y1="30" x2="100" y2="30" stroke="#1f2937" strokeWidth="0.5" strokeDasharray="2,2" />
                      {/* Animated graph line */}
                      <path 
                        d="M0,35 Q15,20 30,25 T60,10 T85,15 T100,5" 
                        fill="none" 
                        stroke="#16A34A" 
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        className="animate-[dash_3s_ease-in-out_infinite]"
                      />
                      {/* Area fill */}
                      <path 
                        d="M0,35 Q15,20 30,25 T60,10 T85,15 T100,5 L100,40 L0,40 Z" 
                        fill="url(#gradient-green)" 
                        opacity="0.1" 
                      />
                      <defs>
                        <linearGradient id="gradient-green" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#16A34A" />
                          <stop offset="100%" stopColor="#16A34A" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Mobile app overlay frame */}
              <div 
                className="absolute right-[-10px] bottom-[20px] w-[30%] bg-zinc-900 rounded-2xl shadow-2xl border-4 border-zinc-800 overflow-hidden transform rotate-[6deg] z-20"
                data-testid="hero-mockup-mobile"
              >
                <div className="bg-zinc-950 p-2.5 space-y-3">
                  <div className="flex items-center justify-between border-b border-zinc-800/80 pb-1.5">
                    <span className="text-[8px] font-mono text-zinc-400">Mobile app</span>
                    <Smartphone className="w-2.5 h-2.5 text-zinc-500" />
                  </div>
                  <div className="w-full h-8 bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center p-1">
                    <div className="text-center">
                      <p className="text-[7px] font-mono text-zinc-500">Conversion</p>
                      <p className="text-[10px] font-bold font-heading text-green-500">+140%</p>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-900 rounded-full overflow-hidden">
                    <div className="w-[75%] h-full bg-green-500" />
                  </div>
                </div>
              </div>

              {/* Floating micro card 1 */}
              <div 
                className="absolute top-[20px] left-[-20px] bg-white border border-zinc-200/80 rounded-lg p-3 shadow-md z-20 flex items-center gap-2 animate-bounce [animation-duration:4s]"
                data-testid="hero-floating-card-1"
              >
                <div className="w-8 h-8 rounded bg-green-50 flex items-center justify-center text-green-600">
                  <Server className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase">Cloud Deploy</p>
                  <p className="text-xs font-semibold text-zinc-950 font-heading">AWS / Docker</p>
                </div>
              </div>

              {/* Floating micro card 2 */}
              <div 
                className="absolute bottom-[40px] left-[-30px] bg-white border border-zinc-200/80 rounded-lg p-3 shadow-md z-20 flex items-center gap-2 animate-bounce [animation-duration:5s]"
                data-testid="hero-floating-card-2"
              >
                <div className="w-8 h-8 rounded bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-400 uppercase">Digital Marketing</p>
                  <p className="text-xs font-semibold text-zinc-950 font-heading">SEO & ROI Focus</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
