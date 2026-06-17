import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor in Computer Application (BCA)',
    institution: 'Lumbini ICT Campus',
    period: '2021 - 2026',
    description:
      'Completed my BCA with a focus on web development — gaining strong skills in programming, databases, and software development, with a commitment to continuous learning and real-world application.',
    achievements: ['Web Development', 'Databases', 'Programming'],
  },
  {
    degree: 'Higher Secondary Education (+2 Science)',
    institution: 'Gaindakot Namuna Secondary School',
    period: '2019 - 2020',
    description: 'Completed higher secondary education in the Science stream.',
    achievements: ['Science'],
  },
];

const focusAreas = [
  'Advanced Odoo Development',
  'FastAPI & System Design',
  'Scalable MERN Architecture',
];

const Education = () => {
  return (
    <section id="education" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">Academic Background</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My educational journey and certifications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education Cards */}
          <div className="lg:col-span-2 space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.01 }}
                className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <h3 className="text-xl font-display font-bold">{edu.degree}</h3>
                      <span className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-accent font-medium mb-3">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm mb-4">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement) => (
                        <span
                          key={achievement}
                          className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-full text-xs"
                        >
                          <Award className="h-3 w-3" />
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card rounded-2xl p-6 border border-border h-fit"
          >
            <h3 className="text-xl font-display font-bold mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-accent" />
              Currently Focused On
            </h3>

            <div className="space-y-4">
              {focusAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                >
                  <span className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm font-medium">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-br from-accent/10 to-accent/10 rounded-xl">
              <p className="text-sm text-muted-foreground">
                Always learning and expanding my knowledge in the ever-evolving tech landscape.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
