import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "Law Firm Website",
      subtitle: "Premium website with an elegant layout for legal services",
      link: "https://imran-khan-bay.vercel.app/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-10.png",
      gridClass: "md:col-span-7 h-[420px]",
    },
    {
      id: 2,
      title: "Professional Moving Services",
      subtitle: "Responsive WordPress website with booking capabilities",
      link: "https://packers.cityaddigital.com/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-02.png",
      gridClass: "md:col-span-5 h-[420px]",
    },
    {
      id: 3,
      title: "Expetto Dental Platform",
      subtitle: "Dental clinic discovery platform with advanced search",
      link: "https://salmon-lark-876193.hostingersite.com/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-03.png",
      gridClass: "md:col-span-5 h-[360px]",
    },
    {
      id: 4,
      title: "Smart Trading Connections",
      subtitle: "Fintech landing page focused on conversions and growth",
      link: "https://traleve.com/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-04.png",
      gridClass: "md:col-span-7 h-[360px]",
    },
    {
      id: 5,
      title: "Instant Home Services",
      subtitle: "On-demand home service booking platform with doorstep delivery",
      link: "https://reprota.com/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-09.png",
      gridClass: "md:col-span-7 h-[380px]",
    },
    {
      id: 6,
      title: "City Ad Digital",
      subtitle: "Digital marketing solutions focused on business growth and ROI",
      link: "https://cityaddigital.in/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-06.png",
      gridClass: "md:col-span-5 h-[380px]",
    },
    {
      id: 7,
      title: "Home Service Partner",
      subtitle: "Platform helping service professionals reach more customers",
      link: "https://reprota.in/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-07.png",
      gridClass: "md:col-span-5 h-[380px]",
    },
    {
      id: 8,
      title: "Palace Curtains and Blinds",
      subtitle: "Premium e-commerce storefront for luxury curtains and blinds",
      link: "https://futurewindowcurtains.ae/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-08.png",
      gridClass: "md:col-span-7 h-[380px]",
    },
    {
      id: 9,
      title: "Local Home Services",
      subtitle: "Service booking portal with streamlined checkout and tracking",
      link: "https://awa-law.com/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-05.png",
      gridClass: "md:col-span-7 h-[380px]",
    },
    {
      id: 10,
      title: "AWA Law Firm Website",
      subtitle: "Professional corporate law firm website with responsive layout",
      link: "https://awa-law.com/",
      image: "https://farman-khan-portfolio.vercel.app/projects/project-04.png",
      gridClass: "md:col-span-5 h-[380px]",
    },
  ];

  return (
    <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-center md:text-left">
          Selected <span className="text-gradient-primary">Works</span>
        </h2>
        <p className="text-muted-foreground text-center md:text-left max-w-2xl text-lg">
          A collection of websites, digital experiences, and marketing projects I've worked on.
        </p>
      </motion.div>

      {/* 12-Column Full-Width Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">
        {projects.map((project, i) => (
          <motion.a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className={`group relative overflow-hidden rounded-[2.25rem] block shadow-xl border border-foreground/10 ${project.gridClass}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            {/* Background Image Container */}
            <div className="absolute inset-0 bg-neutral-950">
              <img 
                src={project.image} 
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 transform-gpu"
              />
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none">
              <div className="flex items-end justify-between gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 transform-gpu">
                <div className="z-10 max-w-lg">
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium text-white/80 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                    {project.subtitle}
                  </p>
                </div>
                
                {/* Arrow Action Icon */}
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center shrink-0 opacity-80 group-hover:opacity-100 group-hover:bg-white group-hover:text-black transition-all duration-300 rotate-45 group-hover:rotate-0 z-10 shadow-lg">
                  <ArrowUpRight className="w-6 h-6 text-white group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
};
