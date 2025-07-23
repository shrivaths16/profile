import { useState } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { Project } from '../data/portfolioData';

const Projects = () => {
  // State to track which project is selected to be shown in the modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="mb-16 scroll-mt-20">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="flex justify-center px-4 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index} 
                project={project} 
                onCardClick={() => openModal(project)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* The Modal component is here, but only visible when a project is selected */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </>
  );
};

export default Projects;