const skills = [
  { name: 'React', description: 'Building dynamic UI with component-based architecture.' },
  { name: 'JavaScript', description: 'Core scripting language for web interactivity.' },
  { name: 'Tailwind CSS', description: 'Utility-first framework for responsive design.' },
  { name: 'HTML', description: 'Markup language to structure web content.' },
  { name: 'CSS', description: 'Styling language for beautiful UI.' }
];

const Skills = () => (
  <section className="w-full py-14 bg-indigo-50 dark:bg-gray-800 text-center">
    <h2 className="text-3xl font-semibold mb-8 text-indigo-700 dark:text-white">Skills</h2>
    <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto px-6">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-700 p-6 w-64 rounded-xl shadow-md transition-transform transform hover:scale-105"
        >
          <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-300 mb-2">{skill.name}</h3>
          <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
