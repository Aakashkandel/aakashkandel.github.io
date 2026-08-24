import { motion } from 'framer-motion';
import { Server, Layout, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    name: 'Odoo & Backend',
    icon: Server,
    skills: [
      { name: 'Odoo (Python)', level: 92 },
      { name: 'Python', level: 88 },
      { name: 'FastAPI', level: 82 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'Laravel / PHP', level: 72 },
    ],
  },
  {
    name: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React', level: 85 },
      { name: 'JavaScript', level: 85 },
      { name: 'TypeScript', level: 75 },
      { name: 'Owl (Odoo JS)', level: 78 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    name: 'Databases',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'MySQL', level: 75 },
      { name: 'REST / RPC APIs', level: 85 },
    ],
  },
  {
    name: 'Tools & DevOps',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 88 },
      { name: 'Docker', level: 70 },
      { name: 'Odoo.sh', level: 72 },
      { name: 'Linux', level: 75 },
    ],
  },
];

const alsoKnown = [
  'XML / QWeb',
  'XML-RPC',
  'JSON-RPC',
  'Express',
  'Mongoose',
  'Redux',
  'Vite',
  'REST APIs',
  'Postman',
  'Agile',
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 lg:py-32">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Toolkit</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Skills &amp; <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Odoo is my specialty, but I'm a full-stack developer at heart — here's the stack I work
            with day to day.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:border-accent/30 transition-colors"
              >
                <h3 className="text-lg font-display font-bold mb-6 flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-accent" />
                  </span>
                  {category.name}
                </h3>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIndex * 0.08 }}
                    >
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-medium text-sm">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + skillIndex * 0.08, ease: 'easeOut' }}
                          className="h-full bg-gradient-to-r from-accent to-accent rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Also experienced with */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-8">
            Also experienced with
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {alsoKnown.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.04 }}
                whileHover={{ scale: 1.08, y: -2 }}
                className="px-4 py-2 glass-card rounded-full text-sm font-medium cursor-default hover:border-accent/40 transition-colors"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
