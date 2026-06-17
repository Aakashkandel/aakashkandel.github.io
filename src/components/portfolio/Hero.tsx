import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, MapPin, Briefcase, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const floatingBadges = [
  { label: 'Odoo', className: 'top-6 left-0', delay: 0 },
  { label: 'Python', className: 'top-20 right-0', delay: 0.6 },
  { label: 'Owl', className: 'bottom-24 -left-2', delay: 0.9 },
];

const Hero = () => {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16"
    >
      {/* Monochrome background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-grid bg-grid-fade opacity-70" />
        <motion.div
          className="absolute top-1/4 -left-24 w-[30rem] h-[30rem] bg-foreground/[0.05] rounded-full blur-[130px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-24 w-[32rem] h-[32rem] bg-accent/[0.12] rounded-full blur-[130px]"
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="order-2 lg:order-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-foreground opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
              </span>
              <span className="text-sm font-medium">Available for Odoo &amp; web projects</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] mb-6"
            >
              Hi, I'm{' '}
              <span className="gradient-text-animated">Aakash Kandel</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl lg:text-5xl">
                Odoo Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Odoo &amp; full-stack developer specialising in custom ERP modules, Python &amp;
              FastAPI integrations. I also build modern web apps with the MERN stack, React, and
              Laravel — clean code, thoughtful UX, scalable solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span>Semantic Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                <span>ERP &amp; Web Solutions</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <Button size="lg" className="rounded-full gap-2 glow" asChild>
                <a href="#projects">
                  View My Work
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </motion.div>
          </motion.div>

          {/* Profile Visual — large image, no frame, fading right-to-left */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
          >
            <div className="relative w-72 sm:w-80 lg:w-full lg:max-w-md flex justify-center lg:justify-end">
              {/* Accent glow behind the figure */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 w-[80%] h-[75%] bg-accent/25 blur-[110px] rounded-full" />

              {!imgError ? (
                <img
                  src="/profile.png"
                  alt="Aakash Kandel"
                  onError={() => setImgError(true)}
                  className="relative w-full h-auto max-h-[72vh] object-contain mask-fade-b select-none pointer-events-none"
                />
              ) : (
                /* Fallback monogram (shown until public/profile.png is added) */
                <div className="aspect-[4/5] w-full gradient-bg rounded-[2rem] flex flex-col items-center justify-center">
                  <span className="font-display font-bold text-8xl text-white select-none">AK</span>
                  <span className="mt-3 text-xs uppercase tracking-[0.3em] text-white/80">
                    Add public/profile.png
                  </span>
                </div>
              )}

              {/* Floating glass badges */}
              {floatingBadges.map((badge) => (
                <motion.div
                  key={badge.label}
                  className={`absolute ${badge.className} glass-card px-3 py-1.5 rounded-xl shadow-lg`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: badge.delay }}
                >
                  <span className="text-sm font-semibold text-accent">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#expertise"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
};

export default Hero;
