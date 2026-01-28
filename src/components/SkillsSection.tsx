import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Shield, 
  Network, 
  Eye, 
  Wrench,
  Bug,
  Lock,
  Server,
  Terminal,
  Activity,
  FileWarning,
  Database,
  Wifi
} from 'lucide-react';

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "Application & API Security",
      icon: Shield,
      color: "from-primary to-cyber-cyan",
      skills: [
        { name: "Web App Penetration Testing", icon: Bug },
        { name: "API Security Assessment", icon: Lock },
        { name: "OWASP Top 10", icon: FileWarning },
        { name: "Mobile App Security (Android)", icon: Shield }
      ]
    },
    {
      title: "Network & Infrastructure",
      icon: Network,
      color: "from-cyber-cyan to-accent",
      skills: [
        { name: "Network Security Basics", icon: Wifi },
        { name: "Firewall Concepts", icon: Server },
        { name: "Infrastructure Assessment", icon: Database },
        { name: "VPN & Protocols", icon: Network }
      ]
    },
    {
      title: "SOC & Blue Team",
      icon: Eye,
      color: "from-accent to-cyber-green",
      skills: [
        { name: "Log Analysis", icon: Activity },
        { name: "Incident Response", icon: FileWarning },
        { name: "Threat Detection", icon: Eye },
        { name: "Security Monitoring", icon: Activity }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "from-cyber-purple to-primary",
      skills: [
        { name: "Burp Suite", icon: Bug },
        { name: "OWASP ZAP / Nikto", icon: Terminal },
        { name: "MobSF / Frida / ADB", icon: Wrench },
        { name: "Nmap / Wireshark", icon: Network }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 hover:glow-border transition-all duration-500 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="w-6 h-6 text-background" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300 group/skill"
                  >
                    <skill.icon className="w-4 h-4 text-primary group-hover/skill:scale-110 transition-transform duration-200" />
                    <span className="text-sm text-muted-foreground group-hover/skill:text-foreground transition-colors">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
