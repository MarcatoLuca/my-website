import { Link } from 'react-router-dom';
import { motion, cubicBezier } from 'framer-motion';

import { ArrowRight, Mail } from 'lucide-react';

import { experience } from '../data/Experience';
import { skills } from '../data/Skill';
import { projects } from '../data/Project';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Footer } from './sub/Footer';

export function HomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-[1200px] mx-auto px-6 py-24 md:py-32"
      >
        <motion.div variants={itemVariants} className="max-w-[800px]">
          <h1 className="text-5xl md:text-6xl mb-6">
            Accessible & Quality-Driven Developer
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-[630px]">
            Focused on accessibility, driven by attention to detail, and committed to delivering high-quality tools using modern technologies.
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl mb-6">About</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              I'm a developer with a solid foundation in web application development and experience working with mobile platforms. I focus on building reliable software tools that provide clear and functional user experiences.

            </p>
            <p className="text-muted-foreground leading-relaxed">
              I'm interested in using design patterns and best practices to write clean and maintainable code, and I enjoy turning complex requirements into practical, well-structured solutions.            </p>
          </div>
          <div>
            <h3 className="text-2xl mb-6">Skills</h3>
            <div className="space-y-6">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h4 className="text-sm text-muted-foreground mb-2">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-border">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl">Featured Projects</h2>
          <Link
            to="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-16">
          {projects.filter(project => project.featured).map((project, index) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="block group"
            >
              <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                  <h3 className="text-3xl mb-4 mt-2 group-hover:opacity-70 transition-opacity">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-border">
        <h2 className="text-4xl mb-12">Experience</h2>
        <div className="space-y-12">
          {experience.map((exp) => (
            <div key={exp.role} className="border-l-2 border-border pl-6">
              <span className="text-sm text-muted-foreground">{exp.period}</span>
              <h3 className="text-2xl mt-1 mb-1">{exp.role}</h3>
              <p className="text-muted-foreground mb-2">{exp.company}</p>
              <p className="text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-[1200px] mx-auto px-6 py-24 border-t border-border">
        <div className="max-w-[630px]">
          <h2 className="text-4xl mb-6">Get in Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm open to new professional opportunities and full-time roles in software development.
            Feel free to contact me to discuss potential positions.
          </p>
          <a
            href="mailto:marcatoluca15@gmail.com"
            className="inline-flex items-center gap-2 text-lg hover:opacity-70 transition-opacity"
          >
            <Mail className="w-5 h-5" />
            marcatoluca15@gmail.com
          </a>
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/MarcatoLuca"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/luca-marcato-98971724b"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:bg-muted rounded-md transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
