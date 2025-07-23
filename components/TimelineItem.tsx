import { Experience } from '../data/portfolioData';

interface TimelineItemProps {
  item: Experience;
}

const TimelineItem = ({ item }: TimelineItemProps) => (
  <div className="mb-8 flex justify-start items-center w-full">
    {/* The Icon on the timeline axis */}
    <div className="z-10 flex-shrink-0 flex items-center justify-center bg-blue-500 shadow-xl w-16 h-16 rounded-full">
      {/* Always render the same icon */}
      <i className="fa-solid fa-briefcase text-white text-2xl"></i>
    </div>

    {/* The Experience Card */}
    <div className="ml-8 rounded-lg shadow-xl w-full px-6 py-4 bg-gray-50 dark:bg-gray-800/50 text-left">
      <p className="mb-1 text-sm font-semibold text-gray-500 dark:text-gray-400">{item.year}</p>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{item.title}</h3>
      <h4 className="mb-3 font-medium text-blue-500 dark:text-blue-400">{item.company}</h4>
      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-left">
        {item.description.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default TimelineItem;