import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, GraduationCap, BookOpen, ShieldCheck, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Certified Penetration Tester (CPT)",
      issuer: "CC Cyber Campus, Calicut",
      year: "2025",
      icon: ShieldCheck,
      gradient: "from-primary to-cyber-cyan"
    },
    {
      title: "Ethical Hacker",
      issuer: "Cisco",
      year: "2024",
      icon: Award,
      gradient: "from-cyber-cyan to-accent"
    },
    {
      title: "Cyber Threat Management",
      issuer: "Cisco",
      year: "2024",
      icon: Award,
      gradient: "from-accent to-cyber-green"
    }
  ];

  const education = [
    {
      degree: "Certified Penetration Tester (CPT)",
      institution: "CC Cyber Campus, Calicut",
      year: "2025",
      status: "Completed"
    },
    {
      degree: "Higher Secondary Education",
      institution: "DUHSS Panakkad",
      year: "2024",
      status: "Completed"
    },
    {
      degree: "Certified Ethical Hacker (CEH) & BCA",
      institution: "Currently Pursuing",
      year: "Ongoing",
      status: "In Progress"
    }
  ];

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications & <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  className="glass rounded-xl p-5 hover:glow-border transition-all duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cert.gradient} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <cert.icon className="w-6 h-6 text-background" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                          {cert.title}
                        </h4>
                        <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:text-primary" />
                      </div>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      <Badge variant="secondary" className="mt-2 bg-secondary/50">
                        {cert.year}
                      </Badge>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <GraduationCap className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>

            <div className="space-y-4">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  className="glass rounded-xl p-5 hover:glow-border transition-all duration-500 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-cyber-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 text-background" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground group-hover:text-accent transition-colors">
                        {edu.degree}
                      </h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="flex items-center gap-2 mt-2">
                        <Badge variant="secondary" className="bg-secondary/50">
                          {edu.year}
                        </Badge>
                        <Badge 
                          variant="outline" 
                          className={edu.status === "In Progress" ? "border-accent text-accent" : "border-primary text-primary"}
                        >
                          {edu.status}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
