import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "shadlymaliyekkalofficial80@gmail.com.com",
      href: "mailto:shadlymaliyekkalofficial80@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8075325753",
      href: "tel:+918075325753"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Muhammad Shadly M",
      href: "https://linkedin.com/in/muhammad-shadly-m"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Malappuram, Kerala, India",
      href: null
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-lg mx-auto">
            Interested in working together or have a security concern to discuss? 
            Feel free to reach out.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
            
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 glass rounded-xl hover:glow-border transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 glass rounded-xl">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-background" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium">{item.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input
                    required
                    placeholder="Your name"
                    className="bg-secondary/30 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="bg-secondary/30 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input
                  required
                  placeholder="What is this about?"
                  className="bg-secondary/30 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea
                  required
                  placeholder="Your message..."
                  rows={5}
                  className="bg-secondary/30 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting || isSubmitted}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity glow-primary"
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Message Sent!
                  </>
                ) : isSubmitting ? (
                  <>
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full mr-2"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
