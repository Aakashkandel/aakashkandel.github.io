import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Semantic Technology',
    location: 'Kathmandu, Naxal',
    period: 'August 2026 - Present',
    description: 'Promoted to Software Engineer, leading Odoo ERP module development and customisation in Python, building React-based frontends integrated with Odoo APIs, designing backend modules, and managing portal development and project creation within Odoo.',
    type: 'Full-time',
    current: true,
  },
  {
    title: 'Associate Software Engineer',
    company: 'Semantic Technology',
    location: 'Kathmandu, Naxal',
    period: 'March 2025 - August 2026',
    description: 'Developed and customised Odoo ERP modules in Python, built React-based frontends integrated with Odoo APIs, designed backend modules, and managed portal development and project creation within Odoo.',
    type: 'Full-time',
    current: false,
  },
  {
    title: 'Software Development Intern',
    company: 'Semantic Technology',
    location: 'Kathmandu, Naxal',
    period: 'January 2025 - March 2025',
    description: 'Started as an intern working on Odoo development tasks, quickly demonstrated strong technical skills and dedication, and contributed to live client modules and team projects.',
    type: 'Internship',
    current: false,
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Career Journey</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey from intern to software engineer
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 bg-accent rounded-full border-4 border-background z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75" />
                )}
              </div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-lg hover:shadow-xl hover:border-accent/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      exp.current 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {exp.type}
                    </span>
                    {exp.current && (
                      <span className="flex items-center gap-1 text-xs text-accent">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-display font-bold mb-2">{exp.title}</h3>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {exp.description}
                  </p>

                  {index === 0 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-accent text-sm font-medium">
                        <ArrowRight className="h-4 w-4" />
                        Promoted from Associate Software Engineer to Software Engineer
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-2 text-accent text-sm font-medium">
                        <ArrowRight className="h-4 w-4" />
                        Promoted from Intern to Associate Software Engineer
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
