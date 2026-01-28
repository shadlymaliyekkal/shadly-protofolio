import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Globe, 
  Smartphone, 
  Shield, 
  Key, 
  Search,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Web Application Security Assessment",
      description: "Comprehensive security assessment of web applications following OWASP Top 10 guidelines with professional vulnerability reporting.",
      icon: Globe,
      tags: ["OWASP Top 10", "Burp Suite", "OWASP ZAP", "Nikto"],
      highlights: [
        "XSS & SQL Injection testing",
        "Security misconfigurations",
        "Professional reporting"
      ],
      gradient: "from-primary to-cyber-cyan"
    },
    {
      title: "Android Application Security Audit",
      description: "In-depth security audit of Android applications using static and dynamic analysis techniques based on OWASP Mobile standards.",
      icon: Smartphone,
      tags: ["MobSF", "Frida", "ADB", "MASVS"],
      highlights: [
        "Static & dynamic analysis",
        "OWASP Mobile Top 10",
        "Reverse engineering"
      ],
      gradient: "from-cyber-cyan to-accent"
    },
    {
      title: "WordPress Incident Restoration",
      description: "Security incident response and restoration for compromised WordPress installations including malware investigation and hardening.",
      icon: Shield,
      tags: ["Malware Analysis", "WordPress", "Security Hardening"],
      highlights: [
        "Malware investigation",
        "Vulnerable plugin audit",
        "Security patching"
      ],
      gradient: "from-accent to-cyber-green"
    },
    {
      title: "Pass Printer",
      description: "Personal security utility tool designed for password handling and authentication workflow testing to understand security mechanisms.",
      icon: Key,
      tags: ["Security Tool", "Password Testing", "Authentication"],
      highlights: [
        "Password handling utilities",
        "Auth workflow testing",
        "Learning-focused tool"
      ],
      gradient: "from-cyber-green to-cyber-purple"
    },
    {
      title: "Web Scanner",
      description: "Custom OWASP Top 10 based web vulnerability scanner built to detect common security flaws and understand attack vectors.",
      icon: Search,
      tags: ["Python", "OWASP", "Vulnerability Scanner"],
      highlights: [
        "XSS & SQLi detection",
        "Misconfiguration checks",
        "Attack vector research"
      ],
      gradient: "from-cyber-purple to-primary"
    }
  ];

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-strong rounded-2xl p-6 h-full hover:glow-border transition-all duration-500 hover:-translate-y-2">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-6 h-6 text-background" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2 mb-5">
                  {project.highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ChevronRight className="w-4 h-4 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="bg-secondary/50 hover:bg-secondary text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
