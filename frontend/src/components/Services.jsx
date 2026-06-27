import React from "react";
import { Monitor, Cpu, Smartphone, TrendingUp, Check } from "lucide-react";

export function Services() {
  const services = [
    {
      id: "web-dev",
      title: "Web Design & Development",
      description: "We build fast, responsive, and visually stunning web experiences engineered to convert traffic into loyal business clients.",
      icon: Monitor,
      items: [
        "Corporate Websites",
        "Business Websites",
        "Ecommerce Websites",
        "Landing Pages",
        "UI/UX Design",
        "CMS Development",
        "Website Maintenance"
      ]
    },
    {
      id: "software-dev",
      title: "Software Development",
      description: "Empower your organization with tailored, highly scalable enterprise solutions that automate complex business processes.",
      icon: Cpu,
      items: [
        "ERP Systems",
        "CRM Solutions",
        "HRMS",
        "Inventory Management",
        "Billing Software",
        "Business Automation",
        "Enterprise Applications",
        "Cloud Software"
      ]
    },
    {
      id: "mobile-dev",
      title: "Mobile App Development",
      description: "Deliver powerful, seamless mobile user experiences on iOS and Android platforms engineered with modern codebases.",
      icon: Smartphone,
      items: [
        "Android Apps",
        "iOS Apps",
        "Flutter Apps",
        "Cross-Platform Apps",
        "Business Apps",
        "Ecommerce Apps",
        "API Integration",
        "App Maintenance"
      ]
    },
    {
      id: "marketing",
      title: "Digital Marketing",
      description: "Drive predictable, results-focused business growth with data-driven paid advertising, organic search, and branding strategies.",
      icon: TrendingUp,
      items: [
        "SEO Optimization",
        "Google Ads",
        "Meta Ads",
        "Social Media Marketing",
        "Branding",
        "Lead Generation",
        "Email Marketing",
        "Analytics & Reporting"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 bg-zinc-50 border-y border-zinc-200/60"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="text-left space-y-4 max-w-2xl mb-16">
          <p className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-green-600">
            Enterprise Offerings
          </p>
          <h2 
            className="text-3xl sm:text-4xl tracking-tight font-heading font-medium text-zinc-950"
            data-testid="services-heading"
          >
            Core Digital Capabilities Designed For Business Scale
          </h2>
          <p className="text-base text-zinc-600 font-body">
            At E26 Media, we build robust digital systems and design marketing solutions that streamline operations, captivate customers, and secure long-term business growth.
          </p>
        </div>

        {/* Bento/Technical Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="bg-white border border-zinc-200 rounded-xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col justify-between"
                data-testid={`services-card-${service.id}`}
              >
                <div>
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-lg bg-green-50 border border-green-200/50 flex items-center justify-center text-green-600 mb-6">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  
                  {/* Title */}
                  <h3 
                    className="text-xl sm:text-2xl tracking-tight font-heading font-medium text-zinc-900 mb-3"
                    data-testid={`services-card-title-${service.id}`}
                  >
                    {service.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-600 font-body mb-6 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Offerings list */}
                <div className="border-t border-zinc-100 pt-6 mt-2">
                  <p className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">What we offer</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.items.map((item, idx) => (
                      <li 
                        key={idx}
                        className="flex items-center gap-2 text-sm text-zinc-600 font-body"
                        data-testid={`services-card-item-${service.id}-${idx}`}
                      >
                        <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
