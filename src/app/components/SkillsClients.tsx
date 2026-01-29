import { motion } from 'motion/react';

const technologies = {
  languages: [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'C++', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  ],
  frameworks: [
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Django', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', invert: true },
    { name: 'Flask', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', invert: true },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  ],
  aiTools: [
    { name: 'OpenAI', logo: 'https://cdn.worldvectorlogo.com/logos/openai-2.svg', invert: true },
    { name: 'TensorFlow', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg' },
    { name: 'Keras', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg' },
    { name: 'Matplotlib', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg' },
    { name: 'Google Colab', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg' },
  ],
};

export function SkillsClients() {
  return (
    <section id="skills" className="py-20 md:py-32 px-5 md:px-[120px] bg-gray-50 dark:bg-transparent transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-5xl mb-4 dark:text-white">
            Technologies I Use
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
            My toolkit for building modern applications
          </p>
        </motion.div>

        {/* Languages */}
        <div className="mb-12">
          <h3 className="font-['Montserrat'] font-semibold text-xl md:text-2xl mb-6 text-center md:text-left text-gray-800 dark:text-white">
            Languages
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
            {technologies.languages.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-xl shadow-sm dark:shadow-none border border-transparent dark:border-white/10 hover:shadow-md transition-all"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-12 h-12 md:w-16 md:h-16 object-contain ${(tech as any).invert ? 'dark:invert' : ''}`}
                  loading="lazy"
                />
                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frameworks */}
        <div className="mb-12">
          <h3 className="font-['Montserrat'] font-semibold text-xl md:text-2xl mb-6 text-center md:text-left text-gray-800 dark:text-white">
            Frameworks
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {technologies.frameworks.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-xl shadow-sm dark:shadow-none border border-transparent dark:border-white/10 hover:shadow-md transition-all"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-12 h-12 md:w-16 md:h-16 object-contain ${(tech as any).invert ? 'dark:invert' : ''}`}
                  loading="lazy"
                />
                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* AI/ML Tools */}
        <div>
          <h3 className="font-['Montserrat'] font-semibold text-xl md:text-2xl mb-6 text-center md:text-left text-gray-800 dark:text-white">
            AI/ML Tools
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-6 md:gap-8">
            {technologies.aiTools.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-xl shadow-sm dark:shadow-none border border-transparent dark:border-white/10 hover:shadow-md transition-all"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className={`w-12 h-12 md:w-16 md:h-16 object-contain ${(tech as any).invert ? 'dark:invert' : ''}`}
                  loading="lazy"
                />
                <span className="text-sm md:text-base font-medium text-gray-700 dark:text-gray-200">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}