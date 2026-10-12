import { Link } from 'react-router-dom';
import { motion, cubicBezier } from 'framer-motion';
import { projects } from '../data/Project';
import { Footer } from './sub/Footer';
import { useLanguage } from '../i18n/LanguageProvider';

export function ProjectsPage() {
  const { lang, strings } = useLanguage();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: cubicBezier(0.22, 1, 0.36, 1) },
    },
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="max-w-[1200px] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-6xl mb-4">{strings.projectsPage.title}</h1>
          <p className="text-xl text-muted-foreground max-w-[600px]">
            {strings.projectsPage.subtitle}
          </p>
        </motion.div>
      </section>

      {/* Projects List */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-[1200px] mx-auto px-6 pb-24"
      >
        <div className="space-y-24">
          {projects[lang].map((project, index) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Link
                to={`/projects/${project.id}`}
                className="block group"
              >
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  {/* Image */}
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    {project.image && (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-700"
                      />
                    )}
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 ${index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-muted-foreground">{project.year}</span>
                        <span className="px-2 py-0.5 text-xs border border-border rounded-full text-muted-foreground">
                          {project.origin === 'personal' ? strings.projectBadges.personal : strings.projectBadges.company}
                        </span>
                      </div>
                      <h2 className="text-3xl md:text-4xl group-hover:opacity-70 transition-opacity">
                        {project.title}
                      </h2>
                    </div>

                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-secondary text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
