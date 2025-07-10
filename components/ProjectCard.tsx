import { Project } from '../data/portfolioData';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => (
  <div className="flex-shrink-0 w-80 md:w-96 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg flex flex-col">
    <div className="flex-grow">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold">{project.name}</h3>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500">
            <FaArrowUpRightFromSquare />
          </a>
        )}
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{project.date}</p>
      <p className="text-gray-800 dark:text-gray-200 mb-1">{project.description}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300">{project.longDescription}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-4">
      {project.tags.map((tag, tagIndex) => (
        <span key={tagIndex} className="text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
          {tag}
        </span>
      ))}
    </div>
  </div>
);

export default ProjectCard;