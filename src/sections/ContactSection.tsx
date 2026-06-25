import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Mail, Phone, Send } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    projectType: "",
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ projectType: "", name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" className="w-full bg-[#2d4a5c] py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-white text-2xl md:text-3xl font-semibold mb-4">
              Let's Build Something
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-10 max-w-md">
              Have a construction project or need a digital tool? Let's talk.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#c9a55c]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                    Location
                  </p>
                  <p className="text-white text-sm">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#c9a55c]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                    Email
                  </p>
                  <a
                    href="mailto:tbett1313@gmail.com"
                    className="text-white text-sm hover:text-[#c9a55c] transition-colors"
                  >
                    tbett1313@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#c9a55c]" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-wider mb-0.5">
                    Phone
                  </p>
                  <a
                    href="tel:+254740854158"
                    className="text-white text-sm hover:text-[#c9a55c] transition-colors"
                  >
                    +254 740 854 158
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">
                  Project Type
                </label>
                <Select
                  value={formData.projectType}
                  onValueChange={(value) =>
                    setFormData({ ...formData, projectType: value })
                  }
                >
                  <SelectTrigger className="bg-white/5 border-white/20 text-white rounded-sm h-11 focus:ring-[#c9a55c] focus:ring-offset-0">
                    <SelectValue placeholder="QS + Tech (Both)" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#2a4554] border-white/20">
                    <SelectItem value="qs-tech" className="text-white hover:bg-white/10">
                      QS + Tech (Both)
                    </SelectItem>
                    <SelectItem value="qs" className="text-white hover:bg-white/10">
                      Quantity Surveying
                    </SelectItem>
                    <SelectItem value="dev" className="text-white hover:bg-white/10">
                      Web Development
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">
                  Name
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 rounded-sm h-11 focus:ring-[#c9a55c] focus:ring-offset-0"
                  required
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">
                  Email
                </label>
                <Input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="your@email.com"
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 rounded-sm h-11 focus:ring-[#c9a55c] focus:ring-offset-0"
                  required
                />
              </div>

              <div>
                <label className="text-gray-400 text-xs uppercase tracking-wider mb-2 block">
                  Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="bg-white/5 border-white/20 text-white placeholder:text-gray-500 rounded-sm resize-none focus:ring-[#c9a55c] focus:ring-offset-0"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={submitted}
                className="w-full bg-[#c9a55c] hover:bg-[#b8954c] text-[#2d4a5c] font-semibold py-6 rounded-sm transition-all duration-300 disabled:opacity-70"
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
