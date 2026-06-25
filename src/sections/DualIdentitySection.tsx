import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HardHat, Code2, FileText, Calculator, ClipboardList, Gavel, Ruler, TrendingUp, Server, Database, Layers, Zap, Globe } from "lucide-react";

const qsSkills = [
  { icon: FileText, label: "BOQ Preparation" },
  { icon: Calculator, label: "Cost Estimation" },
  { icon: ClipboardList, label: "Tender Documentation" },
  { icon: Gavel, label: "Contract Administration" },
  { icon: Ruler, label: "Site Measurement" },
  { icon: TrendingUp, label: "Valuation Reports" },
];

const devSkills = [
  { icon: Code2, label: "React / Next.js" },
  { icon: Server, label: "Node.js / Express" },
  { icon: Zap, label: "Python Automation" },
  { icon: Database, label: "Database Design" },
  { icon: Globe, label: "API Development" },
  { icon: Layers, label: "Performance Optimization" },
];

export default function DualIdentitySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="w-full bg-white py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a55c] text-xs font-semibold tracking-[0.2em] uppercase">
            What I Do
          </span>
          <h2 className="text-[#2d4a5c] text-2xl md:text-3xl font-semibold mt-4">
            Quantity Surveying meets Software Engineering
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* QS Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#2d4a5c]/10 rounded-lg flex items-center justify-center mb-6">
                <HardHat className="w-8 h-8 text-[#2d4a5c]" />
              </div>
              <h3 className="text-[#2d4a5c] text-lg font-bold uppercase tracking-wide mb-2">
                Quantity
              </h3>
              <h3 className="text-[#2d4a5c] text-lg font-bold uppercase tracking-wide mb-6">
                Surveying
              </h3>

              <ul className="space-y-3 w-full">
                {qsSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                  >
                    <skill.icon className="w-4 h-4 text-[#2d4a5c] flex-shrink-0" />
                    <span>{skill.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bridge - hidden on mobile, visible on desktop */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex-col items-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-white border border-gray-200 rounded-full p-3 shadow-md"
            >
              <div className="w-8 h-8 bg-[#c9a55c] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">&times;</span>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="text-[10px] text-gray-400 mt-2 text-center whitespace-nowrap"
            >
              Where these intersect
              <br />
              is my specialty
            </motion.p>
          </div>

          {/* Dev Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#c9a55c]/10 rounded-lg flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-[#c9a55c]" />
              </div>
              <h3 className="text-[#2d4a5c] text-lg font-bold uppercase tracking-wide mb-2">
                Web
              </h3>
              <h3 className="text-[#2d4a5c] text-lg font-bold uppercase tracking-wide mb-6">
                Development
              </h3>

              <ul className="space-y-3 w-full">
                {devSkills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-gray-600 text-sm"
                  >
                    <skill.icon className="w-4 h-4 text-[#c9a55c] flex-shrink-0" />
                    <span>{skill.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
