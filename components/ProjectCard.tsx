import Image from 'next/image';
import { Project } from '../data/portfolioData';

interface ProjectCardProps {
  project: Project;
  onCardClick: () => void;
}

const ProjectCard = ({ project, onCardClick }: ProjectCardProps) => (
  <button 
    onClick={onCardClick}
    className="group w-full bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden text-left transition-transform duration-300 hover:-translate-y-2"
  >
    {/* This entire div will only render if project.image exists */}
    {project.image && (
      <div className="relative h-48 w-full">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    )}
    
    <div className="p-6">
      <h3 className="text-xl font-bold">{project.name}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 mb-3">{project.date}</p>
      <p className="text-gray-800 dark:text-gray-200">{project.description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {project.tags.map((tag) => (
          <span key={tag} className="text-xs bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </button>
);

export default ProjectCard;