import { motion } from 'framer-motion';
import {
  Github,
  MessageSquare,
  Store,
  Dumbbell,
  Stethoscope,
  Plug,
  Boxes,
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Akchatbox',
    category: 'MERN Stack',
    description:
      'A real-time chat application with instant messaging, authentication, and live conversations built end to end on the MERN stack.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.io'],
    icon: MessageSquare,
    gradient: 'from-zinc-700 via-zinc-800 to-black',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Second-Hand Marketplace',
    category: 'MERN Stack',
    description:
      'A buy-and-sell marketplace for pre-owned goods with listings, search, user profiles, and secure transactions.',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    icon: Store,
    gradient: 'from-neutral-800 via-neutral-900 to-black',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Suravi — Doctor Consultation',
    category: 'Odoo + React + FastAPI',
    description:
      'An online doctor consultation platform — Odoo on the backend, a React frontend, and the two connected through a FastAPI layer. Patients book appointments and consult doctors remotely.',
    technologies: ['Odoo', 'React', 'FastAPI', 'Python'],
    icon: Stethoscope,
    gradient: 'from-zinc-800 via-neutral-900 to-zinc-950',
    liveUrl: '#',
    githubUrl: '#',
    hideGithub: true,
  },
  {
    title: 'Gym Supplement Store',
    category: 'Laravel',
    description:
      'A full-featured e-commerce store for gym supplements with product catalog, cart, checkout, and an admin dashboard.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade'],
    icon: Dumbbell,
    gradient: 'from-neutral-700 via-zinc-800 to-neutral-950',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Odoo × FastAPI Integration',
    category: 'Odoo + Python',
    description:
      'Integration layer connecting Odoo ERP with external services through FastAPI — exposing and syncing data over clean REST endpoints.',
    technologies: ['Odoo', 'FastAPI', 'Python', 'XML-RPC'],
    icon: Plug,
    gradient: 'from-zinc-900 via-black to-zinc-950',
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
  },
  {
    title: 'Odoo ERP Solutions',
    category: 'Odoo',
    description:
      'A range of custom Odoo modules and ERP implementations delivered at Semantic Technology — sales, inventory, accounting and more.',
    technologies: ['Odoo', 'Python', 'PostgreSQL', 'QWeb'],
    icon: Boxes,
    gradient: 'from-neutral-800 via-zinc-900 to-black',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-secondary/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-medium mb-4 block">My Work</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A mix of ERP integrations and full-stack web apps I've designed and built.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col glass-card rounded-2xl overflow-hidden hover:border-accent/40 transition-colors"
              >
                {/* Gradient banner */}
                <div className={`relative h-36 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                  <div className="absolute inset-0 bg-grid opacity-20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-14 w-14 text-white/90 transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  {project.featured && (
                    <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-white/20 text-white backdrop-blur-sm">
                      Featured
                    </span>
                  )}
                  <span className="absolute bottom-3 left-4 text-xs font-medium text-white/90">
                    {project.category}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {!project.hideGithub && (
                    <div className="flex gap-3 mt-auto">
                      <Button variant="outline" size="sm" className="gap-2 rounded-full flex-1" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
