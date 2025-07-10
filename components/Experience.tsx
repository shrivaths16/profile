import { experiences } from '../data/portfolioData';
import TimelineItem from './TimelineItem';

const Experience = () => (
    <section id="experience" className="mb-16 scroll-mt-20">
      {/* Increase heading size */}
      <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
      {/* Widen the container */}
      <div className="relative max-w-4xl mx-auto">
        {experiences.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </div>
    </section>
  );

export default Experience;