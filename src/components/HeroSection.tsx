import { motion } from 'framer-motion';
import { Mail, Linkedin, Download, Shield, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profilePhoto from '@/assets/profile-photo.jpeg';

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '-1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-cyber-cyan to-accent rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-glow" />
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/50 group-hover:border-primary transition-all duration-300 group-hover:scale-105">
                <img 
                  src={profilePhoto} 
                  alt="Muhammad Shadly M" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            <span className="text-gradient">Muhammad Shadly M</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-6 flex items-center gap-2 flex-wrap justify-center"
          >
            <Shield className="w-5 h-5 text-primary" />
            <span>Cybersecurity Professional</span>
            <span className="text-primary">|</span>
            <span>Application & API Security</span>
          </motion.p>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            Passionate cybersecurity enthusiast with hands-on experience in web, API, and Android application security. 
            Skilled in vulnerability assessment, penetration testing, and security documentation with a strong foundation 
            in OWASP Top 10 and Mobile Top 10 methodologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground px-8 glow-primary hover:glow-border transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Contact Me
              </span>
            </Button>

            <Button
              size="lg"
              variant="outline"
              asChild
              className="group border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            >
              <a
                href="https://linkedin.com/in/muhammad-shadly-m"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                View LinkedIn
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="group border-accent/50 hover:border-accent hover:bg-accent/10 transition-all duration-300"
            >
              <a
                href="/cv/Muhammad_Shady_CV.pdf"
                download
              <Download className="w-4 h-4 mr-2" />
              Download CV
              </a>
            </Button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
            onClick={scrollToAbout}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ChevronDown className="w-8 h-8" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
