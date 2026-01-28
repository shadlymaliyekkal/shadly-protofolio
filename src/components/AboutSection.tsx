import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Shield, Code, FileSearch, GraduationCap } from 'lucide-react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Shield,
      title: "Security Expertise",
      description: "Specialized in web, API, and Android application security with hands-on vulnerability assessment experience."
    },
    {
      icon: Code,
      title: "OWASP Proficient",
      description: "Strong foundation in OWASP Top 10 and Mobile Top 10 security testing methodologies."
    },
    {
      icon: FileSearch,
      title: "Documentation",
      description: "Skilled in creating comprehensive security reports and technical documentation."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Committed to staying updated with the latest security trends and certifications."
    }
  ];

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a dedicated <span className="text-primary font-medium">Cybersecurity Professional</span> based 
              in Malappuram, Kerala, India, with practical experience gained through my internship at Xyvin Technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans across web application security, API security assessment, and Android 
              application security auditing. I am proficient in identifying vulnerabilities aligned with 
              <span className="text-accent font-medium"> OWASP Top 10</span> and 
              <span className="text-accent font-medium"> Mobile Top 10</span> standards.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe in a methodical approach to security testing, combining automated tools with manual 
              techniques to uncover both common and complex security issues. My goal is to help organizations 
              build more secure applications while continuously expanding my knowledge in this ever-evolving field.
            </p>
          </motion.div>

          {/* Highlight Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="glass rounded-xl p-5 hover:glow-border transition-all duration-300 group"
              >
                <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-semibold mb-2 text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
