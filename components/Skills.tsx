import { skillCategories } from '../data/portfolioData';

const Skills = () => (
  <section id="skills" className="mb-16 scroll-mt-20">
    <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {skillCategories.map((category, index) => (
        <div 
          key={index} 
          className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-lg shadow-md"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center text-blue-500 dark:text-blue-400">
            {category.name}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {category.skills.map((skill, skillIndex) => (
              <div 
                key={skillIndex} 
                className="flex items-center gap-3 bg-gray-200 dark:bg-gray-700 px-4 py-2 rounded-lg transition-transform duration-300 hover:scale-105 hover:bg-gray-300 dark:hover:bg-gray-600"
              >
                <span className="text-xl">{skill.icon}</span>
                <span className="font-medium">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;