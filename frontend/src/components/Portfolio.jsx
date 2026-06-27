import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web", "Software", "Mobile"];

  const projects = [
    {
      id: "project-1",
      title: "Nexus Enterprise Portal",
      category: "Web",
      sub: "Corporate Website",
      description: "A fast-loading, multi-layered enterprise hub designed with React and Next.js, serving over 5M monthly visitors with a 99% Lighthouse performance rating.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
      id: "project-2",
      title: "Veloce Commerce Platform",
      category: "Web",
      sub: "Ecommerce Store",
      description: "A secure, hyper-optimized checkout system integrated with modern headless inventory architectures, scaling sales throughput by 140%.",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2"
    },
    {
      id: "project-3",
      title: "AeroLogistics Supply Engine",
      category: "Software",
      sub: "ERP Dashboard",
      description: "A comprehensive ERP ecosystem running on real-time WebSockets to track, manage, and dispatch global supply chain workloads.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
    },
    {
      id: "project-4",
      title: "Synthetix Client Hub",
      category: "Software",
      sub: "CRM Software",
      description: "Bespoke internal business CRM software automating onboarding cycles, billing records, and automated helpdesk workflows for enterprise staff.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3"
    },
    {
      id: "project-5",
      title: "Zetta Crypto Wallet",
      category: "Mobile",
      sub: "Mobile App",
      description: "A state-of-the-art native iOS and Android application built with Flutter, featuring secure biometric login and immediate multi-chain trading operations.",
      image: "https://images.unsplash.com/photo-1720135885007-454165745e21"
    },
    {
      id: "project-6",
      title: "Equinox Energy Portal",
      category: "Web",
      sub: "Business Website",
      description: "An elegant, interactive portfolio and investor relations platform communicating the vision of clean energy development across APAC.",
      image: "https://images.pexels.com/photos/13427393/pexels-photo-13427393.jpeg"
    }
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section 
      id="portfolio" 
      className="py-24 md:py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="text-left space-y-4 max-w-2xl">
            <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
              Selected Deployments
            </p>
            <h2 
              className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
              data-testid="portfolio-heading"
            >
              Enterprise Engineering Delivered
            </h2>
            <p className="text-base text-zinc-600 font-body">
              Browse our portfolio of bespoke corporate websites, secure ERP solutions, mobile experiences, and data-driven product launches.
            </p>
          </div>

          {/* Filter Buttons */}
          <div 
            className="flex flex-wrap gap-2 border border-zinc-200/60 rounded-lg p-1 bg-zinc-50"
            data-testid="portfolio-filter-container"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-xs font-body font-semibold rounded-md transition-all ${
                  activeCategory === cat
                    ? "bg-white text-zinc-950 shadow-sm border border-zinc-200/50"
                    : "text-zinc-500 hover:text-zinc-900"
                }`}
                data-testid={`portfolio-filter-button-${cat}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="bg-white border border-zinc-200 rounded-xl overflow-hidden group hover:shadow-lg transition-all duration-300 text-left flex flex-col justify-between"
              data-testid={`portfolio-project-card-${project.id}`}
            >
              {/* Image Frame */}
              <div className="relative overflow-hidden aspect-[4/3] bg-zinc-100 border-b border-zinc-200">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  data-testid={`portfolio-project-image-${project.id}`}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded border border-zinc-200/50">
                  <span className="font-mono text-[10px] font-bold text-zinc-800 uppercase tracking-wider">
                    {project.sub}
                  </span>
                </div>
              </div>

              {/* Info content */}
              <div className="p-6 md:p-8 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <h3 
                    className="text-lg md:text-xl font-heading font-medium text-zinc-950 group-hover:text-green-600 transition-colors duration-300"
                    data-testid={`portfolio-project-title-${project.id}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-500 font-body leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-100 mt-2 flex items-center justify-between">
                  <span className="font-mono text-xs text-zinc-400">Stack: React, Node, WebSockets</span>
                  <button 
                    className="inline-flex items-center gap-1 text-xs font-body font-semibold text-zinc-800 group-hover:text-green-600 transition-colors"
                    data-testid={`portfolio-project-button-${project.id}`}
                  >
                    View Case Study
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
