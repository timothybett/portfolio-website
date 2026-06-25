import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  tags: string[];
  tech: string[];
  type: string;
  icon?: React.ReactNode;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Material Cost Fluctuation Dashboard",
    description:
      "Interactive visualization of material price variance and its impact on final account deviation — based on UoN research.",
    category: "QS + Tech",
    tags: ["Research Project"],
    tech: ["Next.js", "D3.js", "Python"],
    type: "qs-tech",
    icon: <BarChart3 className="w-16 h-16 text-white/80" />,
  },
  {
    id: 2,
    title: "BOQ Automation System",
    description:
      "Automated Bill of Quantities generation from architectural drawings using Python scripts and Excel macros.",
    category: "Quantity Survey",
    tags: ["Automation"],
    tech: ["Python", "Excel VBA", "Pandas"],
    type: "qs",
    icon: <BarChart3 className="w-16 h-16 text-white/80" />,
  },
  {
    id: 3,
    title: "Construction Cost Database API",
    description:
      "RESTful API for storing and retrieving historical construction costs, material prices, and labour rates across regions.",
    category: "QS + Tech",
    tags: ["Backend"],
    tech: ["Node.js", "Express", "PostgreSQL"],
    type: "qs-tech",
    icon: <BarChart3 className="w-16 h-16 text-white/80" />,
  },
  {
    id: 4,
    title: "Portfolio Website",
    description:
      "Personal portfolio showcasing dual expertise in Quantity Surveying and Web Development with interactive UI.",
    category: "Web Development",
    tags: ["Frontend"],
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    type: "dev",
    icon: <BarChart3 className="w-16 h-16 text-white/80" />,
  },
  {
    id: 5,
    title: "Tender Evaluation Platform",
    description:
      "Digital platform for evaluating contractor bids with automated scoring, comparison matrices, and report generation.",
    category: "QS + Tech",
    tags: ["Full Stack"],
    tech: ["Next.js", "Prisma", "PostgreSQL"],
    type: "qs-tech",
    icon: <BarChart3 className="w-16 h-16 text-white/80" />,
  },
  {
    id: 6,
    title: "Site Progress Tracker",
    description:
      "Real-time construction progress tracking dashboard with photo uploads, milestone tracking, and cost integration.",
    category: "Web Development",
    tags: ["Full Stack"],
    tech: ["React", "Node.js", "MongoDB"],
    type: "dev",
    icon: <BarChart3 className="w-16 h-16 text-white/80" />,
  },
];

const tabs = [
  { label: "QS + Tech", value: "qs-tech" },
  { label: "Quantity Survey", value: "qs" },
  { label: "Web Development", value: "dev" },
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState("qs-tech");

  const filteredProjects = projects.filter((p) => p.type === activeTab);

  return (
    <section id="projects" className="w-full bg-gray-50 py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="text-[#2d4a5c] text-xl md:text-2xl font-semibold">
            Projects
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            A selection of work bridging QS and technology
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-6 py-2.5 text-sm font-medium rounded-sm transition-all duration-300 ${
                activeTab === tab.value
                  ? "bg-[#2d4a5c] text-white"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-[#2d4a5c]/30"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              {/* Project Image Placeholder */}
              <div className="bg-[#3d5a6c] h-48 flex flex-col items-center justify-center relative">
                {project.icon}
                <span className="text-white/60 text-xs mt-3 font-medium">
                  {project.title}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-[#c9a55c]/10 text-[#c9a55c] text-xs font-medium hover:bg-[#c9a55c]/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-[#2d4a5c] text-lg font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-gray-500 border border-gray-200 px-3 py-1 rounded-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
