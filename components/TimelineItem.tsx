import { Experience } from '../data/portfolioData';
import { FaMapPin } from 'react-icons/fa'; // Import an icon

interface TimelineItemProps {
  item: Experience;
}

const TimelineItem = ({ item }: TimelineItemProps) => (
  <div className="relative mb-8 pl-10">
    {/* Vertical Line */}
    <span className="absolute left-[18px] top-0 h-full w-0.5 bg-gray-300 dark:bg-gray-600"></span>

    {/* Dot */}
    <span className="absolute left-4 top-1.5 h-2 w-2 rounded-full bg-blue-500"></span>

    {/* Content */}
    <p className="mb-1 text-base font-semibold text-gray-500 dark:text-gray-400">{item.year}</p>
    <h3 className="text-xl font-bold">{item.title}</h3>

    {/* Company and Location section */}
    <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-1">
      <h4 className="font-medium text-blue-500 dark:text-blue-400 text-lg">{item.company}</h4>
      <div className="flex items-center gap-1 text-base text-gray-600 dark:text-gray-400">
        <FaMapPin />
        <span>{item.location}</span>
      </div>
    </div>

    <p className="text-lg text-gray-700 dark:text-gray-300">{item.description}</p>
  </div>
);

export default TimelineItem;