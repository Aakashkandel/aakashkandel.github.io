import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Boxes,
  Database,
  FileText,
  Workflow,
  Server,
  Code2,
  ShoppingCart,
  Wallet,
  Users,
  Factory,
  Globe,
  Truck,
  Layers,
  ShieldCheck,
  Check,
} from 'lucide-react';

/* Modules that orbit the central Odoo hub */
const innerModules = [
  { label: 'CRM', icon: Users },
  { label: 'Sales', icon: ShoppingCart },
  { label: 'Invoicing', icon: Wallet },
  { label: 'Inventory', icon: Boxes },
];

const outerModules = [
  { label: 'Manufacturing', icon: Factory },
  { label: 'Purchase', icon: Truck },
  { label: 'Website', icon: Globe },
  { label: 'Accounting', icon: Database },
];

/* Two pillars — full Odoo stack */
const pillars = [
  {
    icon: Server,
    title: 'Odoo Backend (Python)',
    points: [
      'Custom module development — models, fields, views & manifest',
      'Odoo ORM: Char, Selection, Many2one, One2many, Many2many, computed & related fields',
      'Inheritance — classical (_inherit), delegation (_inherits) & view inheritance with xpath',
      'API decorators: @api.depends, @api.onchange, @api.constrains, @api.model_create_multi',
      'Compute / onchange methods, SQL & Python constraints, default values',
      'Security: access rights (ir.model.access), record rules & user groups',
      'Automation: server actions, automated actions & scheduled jobs (cron)',
      'QWeb PDF reports, wizards (TransientModel) & data (XML/CSV) loading',
    ],
  },
  {
    icon: Code2,
    title: 'Odoo Frontend (Owl & JS)',
    points: [
      'Owl framework — components, props, reactive state & lifecycle',
      'Owl hooks: useState, useRef, onWillStart, onMounted, useService',
      'QWeb XML templating for views, reports & website pages',
      'JavaScript modules & the Odoo registry system',
      'Custom field widgets, client actions & systray items',
      'View types: Form, List/Tree, Kanban, Calendar, Pivot, Graph & Search',
      'Domains & context, action windows, menus & breadcrumbs',
      'Website builder — snippets, themes & dynamic pages',
    ],
  },
];

/* Concepts I work with day to day */
const concepts = [
  'Owl Components',
  'Owl Hooks',
  'Delegation Inheritance',
  'Classical Inheritance',
  'ORM',
  'Computed Fields',
  'Related Fields',
  '@api Decorators',
  'Record Rules',
  'Access Rights',
  'QWeb Reports',
  'Wizards',
  'Cron Jobs',
  'Server Actions',
  'Domains',
  'Registry',
  'XML Views',
  'Mixins',
  'XML-RPC / JSON-RPC',
  'FastAPI Integration',
];

/* Capability cards */
const capabilities = [
  {
    icon: Boxes,
    title: 'Custom Module Development',
    desc: 'Building tailored Odoo modules end to end — models, views, security and business logic.',
  },
  {
    icon: Database,
    title: 'ORM & Data Modelling',
    desc: 'Relational models with computed, related & stored fields, constraints and onchange logic.',
  },
  {
    icon: Layers,
    title: 'Inheritance & Extension',
    desc: 'Extending standard apps safely with classical and delegation inheritance, and view xpath.',
  },
  {
    icon: FileText,
    title: 'QWeb Reports & Views',
    desc: 'Pixel-perfect PDF reports and dynamic form, list, kanban and website templates with QWeb.',
  },
  {
    icon: Workflow,
    title: 'Automation & Workflows',
    desc: 'Automated actions, server actions, scheduled jobs and approval flows that save real hours.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Integrations',
    desc: 'Access rights, record rules, and FastAPI / XML-RPC / JSON-RPC integrations with other systems.',
  },
];

const stats = [
  { value: 6, suffix: '+', label: 'Odoo Projects' },
  { value: 15, suffix: '+', label: 'Custom Models' },
  { value: 2, suffix: '+', label: 'Years Experience' },
  { value: 100, suffix: '%', label: 'Client Focus' },
];

/* Animated count-up number */
const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const duration = 1400;
    let start: number | null = null;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} className="gradient-text">
      {count}
      {suffix}
    </span>
  );
};

/* A ring of modules that orbits the hub; children counter-rotate to stay upright */
const OrbitRing = ({
  modules,
  radius,
  duration,
  reverse = false,
}: {
  modules: { label: string; icon: React.ComponentType<{ className?: string }> }[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) => {
  return (
    <motion.div
      className="absolute inset-0"
      animate={{ rotate: reverse ? -360 : 360 }}
      transition={{ duration, repeat: Infinity, ease: 'linear' }}
    >
      {modules.map((mod, i) => {
        const angle = (i / modules.length) * 2 * Math.PI;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const Icon = mod.icon;
        return (
          <motion.div
            key={mod.label}
            className="absolute top-1/2 left-1/2"
            style={{ x, y }}
            animate={{ rotate: reverse ? 360 : -360 }}
            transition={{ duration, repeat: Infinity, ease: 'linear' }}
          >
            <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1">
              <div className="glass-card glow rounded-2xl p-2.5 sm:p-3 flex items-center justify-center">
                <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-accent" />
              </div>
              <span className="text-[10px] sm:text-xs font-medium text-muted-foreground whitespace-nowrap">
                {mod.label}
              </span>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const OdooExpertise = () => {
  return (
    <section id="expertise" className="relative py-20 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 -z-10" />

      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block tracking-wide">My Core Expertise</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Odoo ERP <span className="gradient-text">Development</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Odoo is my specialty. I work across the entire Odoo stack — business logic in Python on
            the backend and rich interfaces with the Owl framework on the frontend — building and
            customising modules that fit real business processes end to end.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Left — narrative + stats */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-2xl font-display font-bold mb-4">
              One platform, <span className="gradient-text">every department</span>
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              From CRM, Sales and Inventory to Accounting, Purchase and Manufacturing, I build and
              customise the Odoo modules that keep a business running — connecting every workflow
              into a single, consistent system.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass-card border-gradient rounded-2xl p-5"
                >
                  <div className="text-3xl sm:text-4xl font-display font-bold">
                    <Counter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — orbital animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px]">
              {/* Orbit guides */}
              <div className="absolute inset-[18%] rounded-full border border-border/60" />
              <div className="absolute inset-0 rounded-full border border-border/40" />

              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl gradient-bg flex flex-col items-center justify-center shadow-2xl glow"
                >
                  <span className="text-white font-display font-bold text-2xl sm:text-3xl leading-none">
                    Odoo
                  </span>
                  <span className="text-white/80 text-[10px] sm:text-xs mt-1">ERP Expert</span>
                </motion.div>
              </div>

              {/* Orbiting modules */}
              <OrbitRing modules={innerModules} radius={95} duration={22} />
              <OrbitRing modules={outerModules} radius={155} duration={32} reverse />
            </div>
          </motion.div>
        </div>

        {/* Full-stack pillars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 sm:p-8 hover:border-accent/40 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  <h3 className="font-display font-bold text-xl">{pillar.title}</h3>
                </div>
                <ul className="space-y-3">
                  {pillar.points.map((point, j) => (
                    <motion.li
                      key={point}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: j * 0.05 }}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <Check className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                      <span>{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Concepts cloud */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">
            Odoo concepts I work with
          </h3>
          <div className="flex flex-wrap justify-center gap-2.5">
            {concepts.map((concept, index) => (
              <motion.span
                key={concept}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: index * 0.03 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-3.5 py-1.5 glass-card rounded-full text-sm font-medium cursor-default hover:border-accent/50 hover:text-accent transition-colors"
              >
                {concept}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Capability cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative glass-card rounded-2xl p-6 overflow-hidden hover:border-accent/40 transition-colors"
              >
                <div className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 to-transparent pointer-events-none" />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-display font-bold text-lg mb-2">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OdooExpertise;
