import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Globe, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Aakashkandel', label: 'GitHub' },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/aakash-kandel-b97b1b2a1/',
      label: 'LinkedIn',
    },
    { icon: Globe, href: 'https://aakashkandel.com.np/', label: 'Website' },
    { icon: Mail, href: 'mailto:aakashkandel9805@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="absolute -top-6 left-1/2 -translate-x-1/2"
      >
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          className="rounded-full bg-background shadow-lg hover:shadow-xl transition-shadow"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      </motion.div>

      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-2xl font-display font-bold inline-block mb-4">
              <span className="text-accent">A</span>akash
              <span className="text-accent">.</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              Odoo &amp; full-stack developer building custom ERP solutions and modern web
              applications.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col items-start md:items-center"
          >
            <h3 className="font-display font-bold mb-4">Quick Links</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-start md:items-end"
          >
            <h3 className="font-display font-bold mb-4">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-secondary rounded-lg hover:bg-accent/10 hover:text-accent transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground"
        >
          <p>© {currentYear} Aakash Kandel. All rights reserved.</p>
          <p>Odoo &amp; Full-Stack Developer · Nepal</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
