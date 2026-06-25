import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen w-full bg-[#2d4a5c] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-8"
      >
        <span className="inline-block bg-[#3d5a6c] text-[#c9a55c] text-xs font-medium tracking-widest uppercase px-6 py-2 rounded-sm">
          BQS Student &bull; IQSK Member
        </span>
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-white text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-6"
      >
        Timothy Kipngeno Bett
      </motion.h1>

      {/* Dual Identity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col items-center mb-8"
      >
        <span className="text-[#c9a55c] text-lg md:text-xl font-medium tracking-wide">
          Quantity Surveyor
        </span>
        <X className="text-[#c9a55c] w-4 h-4 my-2" />
        <span className="text-[#c9a55c] text-lg md:text-xl font-medium tracking-wide">
          Web Developer
        </span>
      </motion.div>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="text-gray-300 text-center max-w-2xl text-sm md:text-base leading-relaxed mb-4"
      >
        Bridging construction cost management with digital precision.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="text-gray-400 text-center max-w-2xl text-xs md:text-sm leading-relaxed mb-10"
      >
        I measure, estimate, and administer building contracts — then build the software that makes those processes faster and smarter.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
      >
        <Button
          onClick={() => scrollToSection("projects")}
          className="flex-1 bg-[#c9a55c] hover:bg-[#b8954c] text-[#2d4a5c] font-semibold py-6 rounded-sm transition-all duration-300"
        >
          QS Projects
        </Button>
        <Button
          onClick={() => scrollToSection("projects")}
          variant="outline"
          className="flex-1 border-white/30 text-white hover:bg-white/10 font-semibold py-6 rounded-sm transition-all duration-300"
        >
          Dev Work
        </Button>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 border-2 border-white/30 rounded-full flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
