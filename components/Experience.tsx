import { experiences } from '../data/portfolioData';
import TimelineItem from './TimelineItem';

const Experience = () => (
  <section id="experience" className="mb-16 scroll-mt-20">
    <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
    {/* Use a wider container and position the timeline line to the left */}
    <div className="relative max-w-5xl mx-auto px-4">
      {/* The timeline axis is now positioned on the left */}
      <div className="absolute left-8 top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>
      <div className="relative">
        {experiences.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </div>
  </section>
);

export default Experience;