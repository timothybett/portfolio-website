import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";

interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

const qsCategories: SkillCategory[] = [
  {
    title: "COST MANAGEMENT",
    skills: ["Cost Estimation", "Budgeting", "Value Engineering", "Cost Planning", "Final Accounts"],
    color: "#2d4a5c",
  },
  {
    title: "CONTRACT ADMIN",
    skills: ["FIDIC Contracts", "Tender Docs", "Contract Negotiation", "Claims Management"],
    color: "#2d4a5c",
  },
];

const devCategories: SkillCategory[] = [
  {
    title: "FRONTEND",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    color: "#c9a55c",
  },
  {
    title: "BACKEND",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
    color: "#c9a55c",
  },
];

const bridgeSkills = [
  "Data Visualization",
  "Process Automation",
  "Excel Macros",
  "Python Scripts",
  "Web Scraping",
  "Report Generation",
];

export default function SkillsMatrix() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="w-full bg-[#1e333f] py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#c9a55c] text-xs font-semibold tracking-[0.2em] uppercase">
            Technical Arsenal
          </span>
          <h2 className="text-white text-2xl md:text-3xl font-semibold mt-4">
            Dual Toolkit
          </h2>
        </motion.div>

        {/* Skills Layout */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6 items-start">
          {/* QS Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase text-center mb-6">
              Quantity Surveying
            </h3>
            {qsCategories.map((cat, i) => (
              <div key={i} className="bg-[#2a4554] rounded-lg p-5">
                <h4 className="text-[#c9a55c] text-xs font-semibold tracking-wider mb-3">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#1e333f] text-gray-300 text-xs px-3 py-1.5 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Bridge Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col items-center justify-center lg:pt-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-[#c9a55c]/50" />
              <ArrowRight className="w-4 h-4 text-[#c9a55c]" />
              <div className="h-px w-12 bg-[#c9a55c]/50" />
            </div>

            <div className="bg-[#c9a55c]/10 border border-[#c9a55c]/30 rounded-lg p-6 w-full max-w-xs">
              <h4 className="text-[#c9a55c] text-xs font-semibold tracking-wider text-center mb-4 uppercase">
                Bridge
              </h4>
              <div className="flex flex-wrap gap-2 justify-center">
                {bridgeSkills.map((skill) => (
                  <span
                    key={skill}
                    className="bg-[#c9a55c]/20 text-[#c9a55c] text-xs px-3 py-1.5 rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 mt-6">
              <div className="h-px w-12 bg-[#c9a55c]/50" />
              <ArrowRight className="w-4 h-4 text-[#c9a55c]" />
              <div className="h-px w-12 bg-[#c9a55c]/50" />
            </div>
          </motion.div>

          {/* Dev Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-white text-sm font-semibold tracking-wider uppercase text-center mb-6">
              Web Development
            </h3>
            {devCategories.map((cat, i) => (
              <div key={i} className="bg-[#2a4554] rounded-lg p-5">
                <h4 className="text-[#c9a55c] text-xs font-semibold tracking-wider mb-3">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-[#1e333f] text-gray-300 text-xs px-3 py-1.5 rounded-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
