import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Code2 } from 'lucide-react';
import { projects } from '../data/Project';
import { Footer } from './sub/Footer';
import { useLanguage } from '../i18n/LanguageProvider';

export function ProjectDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { lang, strings } = useLanguage();

  // Mock project data


  const project = projects[lang].find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl mb-4">{strings.projectDetail.notFoundTitle}</h1>
          <Link to="/projects" className="text-accent hover:underline">
            {strings.projectDetail.backToProjects}
          </Link>
        </div>
      </div>
    );
  }

  const nextProjectId = String((parseInt(id || '1') % projects[lang].length) + 1);

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {strings.projectDetail.backToProjects}
        </button>
      </div>

      {/* Hero Image */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="w-full"
      >
        {project.heroImage && (
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-auto max-h-[70vh] object-contain mx-auto"
          />
        )}
      </motion.section>

      {/* Project Info */}
      <section className="max-w-[800px] mx-auto px-6 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="grid grid-cols-2 md:grid-cols-[0.7fr_1.3fr_1.3fr_0.7fr] gap-4 text-sm mb-12 pb-12 border-b border-border">
            <div>
              <span className="text-muted-foreground block mb-1">{strings.projectDetail.year}</span>
              <span>{project.year}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">{strings.projectDetail.client}</span>
              <span>{project.client}</span>
            </div>
            <div>
              <span className="text-muted-foreground block mb-1">{strings.projectDetail.role}</span>
              <span>{project.role}</span>
            </div>
            <div className="flex gap-2">
              {(project.link || project.github) && (
                <div>
                  <span className="text-muted-foreground block mb-1">{strings.projectDetail.links}</span>
                  <div className="flex gap-2 -ml-2">
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                        aria-label={strings.projectDetail.visitProject}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-muted rounded-md transition-colors"
                        aria-label={strings.projectDetail.viewOnGithub}
                      >
                        <Code2 className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl mb-6">
            {project.title}
            <span className="ml-3 align-middle px-3 py-1 text-xs border border-border rounded-full text-muted-foreground">
              {project.origin === 'personal' ? strings.projectBadges.personal : strings.projectBadges.company}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-12">
            {project.tags?.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-secondary text-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-12"
        >
          <div>
            <h2 className="text-2xl mb-4">{strings.projectDetail.overview}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.overview}
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">{strings.projectDetail.challenge}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-2xl mb-4">{strings.projectDetail.solution}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {project.solution}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Project Images */}
      <section className="max-w-[1400px] mx-auto px-6 py-12 space-y-12">
        {project.images?.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={image}
              alt={`${project.title} screenshot ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        ))}
      </section>

      {/* Next Project */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-border">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <span className="text-sm text-muted-foreground block mb-2">{strings.projectDetail.nextProject}</span>
            <Link
              to={`/projects/${nextProjectId}`}
              className="text-3xl hover:opacity-70 transition-opacity"
            >
              {projects[lang].find(p => p.id === nextProjectId)?.title}
            </Link>
          </div>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {strings.projectDetail.backToAllProjects}
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
