import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const FloatingWhatsApp = () => {
  return (
    <motion.a
      href="https://wa.me/916396097330?text=Hi%20Farman,%20I%20am%20interested%20in%20discussing%20a%20project%20with%20you."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.12, y: -3 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 text-white shadow-[0_4px_25px_rgba(16,185,129,0.45)] hover:shadow-[0_8px_30px_rgba(16,185,129,0.65)] backdrop-blur-md border border-emerald-400/40 group cursor-pointer"
    >
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
      </span>
      <MessageCircle className="w-5 h-5 text-white" />
      <span className="text-xs font-bold tracking-wide hidden sm:inline-block">
        Chat on WhatsApp
      </span>
    </motion.a>
  );
};

export default FloatingWhatsApp;
