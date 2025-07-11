import { useRef, useState, useEffect } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setIsScrolled(scrollLeft > 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    };

    container.addEventListener('scroll', checkScrollPosition);
    // A timeout helps ensure the check runs after the layout is fully painted
    const initialCheckTimeout = setTimeout(checkScrollPosition, 100);

    window.addEventListener('resize', checkScrollPosition);

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
      clearTimeout(initialCheckTimeout);
    };
  }, []);

  return (
    <section id="projects" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="relative max-w-7xl mx-auto">
        {isScrolled && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
            aria-label="Scroll left"
          >
            <i className="fa-solid fa-chevron-left fa-xl"></i>
          </button>
        )}

        {/* Add 'flex-nowrap' here to ensure a single scrollable row */}
        <div
          ref={scrollContainerRef}
          className="flex flex-nowrap space-x-8 overflow-x-auto pb-4 scrollbar-hide"
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {!isAtEnd && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
            aria-label="Scroll right"
          >
            <i className="fa-solid fa-chevron-right fa-xl"></i>
          </button>
        )}

        {isScrolled && (
          <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-900 pointer-events-none"></div>
        )}

        {!isAtEnd && (
          <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-900 pointer-events-none"></div>
        )}
      </div>
    </section>
  );
};

export default Projects;