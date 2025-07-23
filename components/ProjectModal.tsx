import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <div 
      onClick={onClose}
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 transition-opacity duration-300"
    >
      <div 
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full p-8 relative shadow-xl flex flex-col"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
          aria-label="Close modal"
        >
          <i className="fa-solid fa-times fa-lg"></i>
        </button>
        
        <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">{project.date}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{project.longDescription}</p>

        {/* This is the new section for the project link */}
        {project.link && (
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
            >
              <span>View Project</span>
              <i className="fa-solid fa-arrow-up-right-from-square"></i>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;