import { BarChart3, Globe2, Megaphone, Search, Share2, Workflow } from "lucide-react";

const tools = [
  { name: "Web Development", label: "BUILD", icon: Globe2, left: "8%" },
  { name: "WordPress", label: "CMS", icon: Workflow, left: "22%" },
  { name: "SEO Strategy", label: "GROW", icon: Search, left: "36%" },
  { name: "Google Ads", label: "REACH", icon: Megaphone, left: "50%" },
  { name: "Meta Ads", label: "LEADS", icon: Megaphone, left: "64%" },
  { name: "Social Media", label: "SMM", icon: Share2, left: "78%" },
  { name: "Analytics", label: "MEASURE", icon: BarChart3, left: "92%" },
];

const TechStackSection = () => (
  <section className="w-full border-y border-foreground/10 bg-background px-4 py-10 md:px-8 md:py-16" aria-label="Farman Khan digital toolkit">
    <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-primary/10 bg-gradient-to-b from-sky-50 to-background shadow-sm dark:from-sky-950/30 dark:to-background">
      <div className="relative mx-auto h-[470px] max-w-6xl md:h-[540px]">
        <div className="absolute left-1/2 top-8 -translate-x-1/2 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary">Digital Toolkit</p>
          <h2 className="mt-2 whitespace-nowrap text-xl font-extrabold text-foreground md:text-3xl">Tools that grow your online presence</h2>
        </div>

        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 540" fill="none" aria-hidden="true" preserveAspectRatio="none">
          <path d="M80 150 C80 280 500 300 500 430" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M220 150 C220 285 500 300 500 430" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M360 150 C360 295 500 305 500 430" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M500 150 L500 430" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M640 150 C640 295 500 305 500 430" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M780 150 C780 285 500 300 500 430" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <path d="M920 150 C920 280 500 300 500 430" stroke="currentColor" className="text-slate-300 dark:text-slate-700" strokeWidth="2" />
          <circle r="5" fill="currentColor" className="text-primary">
            <animateMotion dur="4s" repeatCount="indefinite" path="M80 150 C80 280 500 300 500 430" />
          </circle>
          <circle r="5" fill="currentColor" className="text-sky-500">
            <animateMotion dur="4.8s" begin=".8s" repeatCount="indefinite" path="M780 150 C780 285 500 300 500 430" />
          </circle>
          <circle r="5" fill="currentColor" className="text-orange-400">
            <animateMotion dur="5.2s" begin="1.4s" repeatCount="indefinite" path="M360 150 C360 295 500 305 500 430" />
          </circle>
        </svg>

        <div className="absolute left-0 right-0 top-[112px] flex justify-between px-[4%] md:px-[7%]">
          {tools.map(({ name, label, icon: Icon, left }) => (
            <div key={name} className="absolute -translate-x-1/2 text-center" style={{ left }}>
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-slate-200 bg-white text-primary shadow-md dark:border-slate-700 dark:bg-slate-900 md:h-16 md:w-16">
                <Icon className="h-6 w-6 md:h-7 md:w-7" />
              </div>
              <p className="mt-3 whitespace-nowrap text-[10px] font-extrabold text-foreground md:text-xs">{name}</p>
              <p className="mt-1 text-[8px] font-bold tracking-widest text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="absolute left-1/2 top-[350px] flex h-32 w-32 -translate-x-1/2 items-center justify-center rounded-full border-8 border-background bg-primary text-center text-primary-foreground shadow-[0_10px_40px_hsl(var(--primary)/.3)] md:top-[370px] md:h-36 md:w-36">
          <div>
            <p className="text-2xl font-black tracking-tight">FK</p>
            <p className="mt-1 text-[9px] font-bold uppercase tracking-widest">Digital growth</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default TechStackSection;
