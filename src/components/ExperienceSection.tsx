import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const responsibilities = [
    "Conducted security assessments on web applications following OWASP Top 10 guidelines",
    "Performed API security testing to identify authentication and authorization vulnerabilities",
    "Executed Android application security audits using static and dynamic analysis",
    "Documented and reported vulnerabilities with detailed remediation recommendations",
    "Assisted in security hardening and patch management for client applications",
    "Collaborated with development teams to implement security best practices"
  ];

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent hidden md:block" />

            {/* Experience Card */}
            <div className="relative pl-0 md:pl-20">
              {/* Timeline dot */}
              <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary glow-primary hidden md:block" />

              <div className="glass-strong rounded-2xl p-8 hover:glow-border transition-all duration-500">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <Briefcase className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">
                          Application Security Intern
                        </h3>
                        <p className="text-primary font-medium">Xyvin Technologies</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>Sep 2025 – Nov 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Kerala, India</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground mb-4">Key Responsibilities:</h4>
                  {responsibilities.map((responsibility, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                      className="flex items-start gap-3 group"
                    >
                      <ChevronRight className="w-5 h-5 text-primary mt-0.5 group-hover:translate-x-1 transition-transform duration-200" />
                      <p className="text-muted-foreground leading-relaxed">{responsibility}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
