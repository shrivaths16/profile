import { skillCategories } from '../data/portfolioData';

const Skills = () => (
  <section id="skills" className="mb-16 scroll-mt-20">
    <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
    <div className="max-w-6xl mx-auto space-y-12">
      {skillCategories.map((category, index) => (
        <div key={index}>
          <h3 className="text-2xl font-semibold mb-6 text-center md:text-left">{category.name}</h3>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            {category.skills.map((skill, skillIndex) => (
              <span 
                key={skillIndex} 
                className="bg-gray-200 dark:bg-gray-700 text-lg px-4 py-2 rounded-md shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;