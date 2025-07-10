import { useRef, useState, useEffect } from 'react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAtEnd, setIsAtEnd] = useState(false);

  // Function to handle scrolling
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8; // Scroll by 80% of the container width
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // Effect to check scroll position and update arrow visibility
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const checkScrollPosition = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setIsScrolled(scrollLeft > 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1); // -1 for precision
    };

    container.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Initial check

    // Check on resize as well
    window.addEventListener('resize', checkScrollPosition);

    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', checkScrollPosition);
    };
  }, []);


  return (
    <section id="projects" className="mb-16 scroll-mt-20">
      <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
      <div className="relative max-w-7xl mx-auto">

        {/* Left Arrow Button */}
        {isScrolled && (
          <button
            onClick={() => handleScroll('left')}
            className="absolute top-1/2 left-0 -translate-y-1/2 z-10 p-2 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
            aria-label="Scroll left"
          >
            <FaChevronLeft size={24} />
          </button>
        )}

        {/* Projects Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide" // Hiding scrollbar
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {/* Right Arrow Button */}
        {!isAtEnd && (
          <button
            onClick={() => handleScroll('right')}
            className="absolute top-1/2 right-0 -translate-y-1/2 z-10 p-2 bg-white/50 dark:bg-gray-800/50 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-700 transition"
            aria-label="Scroll right"
          >
            <FaChevronRight size={24} />
          </button>
        )}

        {/* Gradient Fades */}
        <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white dark:from-gray-900 pointer-events-none"></div>
        <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white dark:from-gray-900 pointer-events-none"></div>
      </div>
    </section>
  );
};

export default Projects;