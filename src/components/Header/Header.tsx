import { useState, useEffect } from "react";
import { motion, AnimatePresence, type Variants, type MotionProps } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../lightswind/theme-toggle";
import { Magnetic } from "../motion/Magnetic";
import { navigateTo } from "../../utils/navigation";

const navItems = [
  { name: "Home", href: "/", id: "hero" },
  { name: "About", href: "/about", id: "about" },
  { name: "Services", href: "/services", id: "services" },
  { name: "Projects", href: "/projects", id: "projects" },
  { name: "Contact", href: "/contact", id: "contact" },
];

export default function Header({ currentPath = "/" }: { currentPath?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHeader] = useState(true);
  const [activeSection, setActiveSection] = useState("Home");

  useEffect(() => {
    // If not on homepage, highlight corresponding subpage item
    if (currentPath !== "/") {
      const match = navItems.find((item) => {
        if (item.href === currentPath) return true;
        if (item.href !== "/" && currentPath.startsWith(item.href)) return true;
        return false;
      });
      if (match) {
        setActiveSection(match.name);
      }
      return;
    }

    // If on homepage, track scrolling sections
    const sectionIds = ["hero", "about", "services", "projects", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            const match = navItems.find((item) => item.id === id);
            if (match) setActiveSection(match.name);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPath]);

  const handleNavClick = (href: string, id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);

    if (currentPath === "/" && href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActiveSection("Home");
      return;
    }

    if (currentPath === "/" && id !== "hero") {
      // Allow navigation to the subpage URL
      navigateTo(href);
      return;
    }

    navigateTo(href);
  };

  const menuVariants: Variants = {
    open: {
      clipPath: "circle(1500px at 90% 5%)",
      transition: { type: "spring", stiffness: 20, restDelta: 2 },
    },
    closed: {
      clipPath: "circle(0px at 90% 5%)",
      transition: { type: "spring", stiffness: 400, damping: 40 },
    },
  };

  const listVariants: Variants = {
    open: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } },
    closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
  };

  const itemVariants: Variants = {
    open: { y: 0, opacity: 1, transition: { y: { stiffness: 1000, velocity: -100 } } },
    closed: { y: 50, opacity: 0, transition: { y: { stiffness: 1000 } } },
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0, transition: { duration: 0.4 } }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
          <div className="glass-panel w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-6 py-4 shadow-xl">
            {/* Logo */}
            <a
              href="/"
              onClick={(e) => handleNavClick("/", "hero", e)}
              className="cursor-pointer font-extrabold text-lg flex items-center gap-3 group select-none"
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px] shadow-lg group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center">
                  <span className="font-extrabold text-xs tracking-tighter bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent">
                    FK
                  </span>
                </div>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-extrabold tracking-tight text-foreground text-sm leading-none group-hover:text-primary transition-colors">
                  Farman Khan
                </span>
                <span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">
                  Portfolio
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex flex-1 justify-center">
              <ul className="flex space-x-6 lg:space-x-8">
                {navItems.map((item) => {
                  const isActive = activeSection === item.name;
                  return (
                    <li key={item.name} className="relative group text-sm font-medium transition-colors py-1">
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href, item.id, e)}
                        className={`cursor-pointer transition-colors px-2 py-1 ${
                          isActive ? "text-primary font-bold" : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {item.name}
                      </a>
                      {isActive && (
                        <motion.span
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-sky-400 rounded-full shadow-[0_0_10px_rgba(139,92,246,0.9)]"
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Actions: Theme & Mobile Toggle */}
            <div className="flex items-center gap-3">
              <Magnetic strength={0.35}>
                <a
                  href="/contact"
                  onClick={(e) => handleNavClick("/contact", "contact", e)}
                  className="hidden sm:inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all cursor-pointer"
                >
                  Let&apos;s Talk
                </a>
              </Magnetic>
              <Magnetic strength={0.4}>
                <ThemeToggle />
              </Magnetic>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="md:hidden text-foreground hover:text-primary transition-colors p-2 cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Sidebar */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                {...({
                  initial: "closed",
                  animate: "open",
                  exit: "closed",
                  variants: menuVariants,
                } as MotionProps)}
                className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"
              >
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-8 right-8 text-foreground"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ delay: 0.2 }}
                  aria-label="Close navigation menu"
                >
                  <X size={32} />
                </motion.button>

                <motion.ul
                  {...({ variants: listVariants } as MotionProps)}
                  className="flex flex-col items-center justify-center h-full space-y-10"
                >
                  {navItems.map((item) => (
                    <motion.li key={item.name} {...({ variants: itemVariants } as MotionProps)}>
                      <a
                        href={item.href}
                        onClick={(e) => handleNavClick(item.href, item.id, e)}
                        className="text-4xl font-bold text-muted-foreground hover:text-primary hover:tracking-wider transition-all cursor-pointer"
                      >
                        {item.name}
                      </a>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}

