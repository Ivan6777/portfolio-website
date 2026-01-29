import { motion } from 'motion/react';
import { Terminal, Bot, Activity, Users } from 'lucide-react';
import { ShineBorder } from '@/components/ui/shine-border';

const domains = [
  {
    icon: Terminal,
    title: 'Full-stack Development',
    description:
      'Python (Django/Flask), Modern Frontend (React/TypeScript), and Node.js. I build scalable applications with a focus on clean architecture and seamless UX.',
    color: 'var(--orange-accent)',
  },
  {
    icon: Bot,
    title: 'Machine Learning & AI',
    description:
      'Designing intelligent agent architectures and custom AI frameworks. I specialize in integrating LLMs to deliver measurable business results, such as a 12x speed optimization in professional tasks.',
    color: 'var(--purple-accent)',
  },
  {
    icon: Activity,
    title: 'Data Analytics',
    description:
      'Background in transforming raw data into actionable insights using Pandas, NumPy, and TensorFlow, with a focus on predictive modeling and process efficiency.',
    color: 'var(--cyan-turquoise)',
  },
  {
    icon: Users,
    title: 'Tech Mentorship',
    description:
      'Dedicated to talent development through technical onboarding at YCS and the creation of advanced IT educational programs for specialized schools.',
    color: '#10B981', // Emerald green
  },
];

export function DomainCards() {
  return (
    <section id="about" className="py-20 md:py-32 px-5 md:px-[120px] bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-5xl mb-4 dark:text-white">
            What I Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-4xl mx-auto">
            <span className="font-bold text-gray-900 dark:text-white">Full-stack Developer & AI Automation Specialist</span> with a
            focus on building high-performance web systems and optimizing complex
            technical workflows. I bridge the gap between robust software engineering and
            data-driven efficiency.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="group h-full"
            >
              <ShineBorder
                className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-sm hover:shadow-2xl transition-all duration-300"
                color={["#FE8FB5", "#FFBE7B", "#A07CFE"]} // RGB-like iridescent gradient
                borderRadius={16}
              >
                <div className="flex flex-col h-full">
                  {/* Icon with Abstract Background */}
                  <div className="mb-6 relative">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    >
                      {/* Abstract Data Pattern */}
                      <svg
                        className="absolute inset-0 w-full h-full opacity-20"
                        viewBox="0 0 100 100"
                      >
                        {Array.from({ length: 5 }).map((_, i) => (
                          <circle
                            key={i}
                            cx={20 + i * 15}
                            cy={20 + i * 10}
                            r={3 + i * 2}
                            fill={domain.color}
                            opacity={0.5}
                          />
                        ))}
                        {Array.from({ length: 3 }).map((_, i) => (
                          <line
                            key={i}
                            x1={10 + i * 30}
                            y1="10"
                            x2={40 + i * 20}
                            y2="90"
                            stroke={domain.color}
                            strokeWidth="1"
                            opacity={0.3}
                          />
                        ))}
                      </svg>
                      <domain.icon
                        className="w-10 h-10 relative z-10"
                        style={{ color: domain.color }}
                      />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="font-['Montserrat'] font-bold text-2xl mb-4 dark:text-white">
                    {domain.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-grow">
                    {domain.description}
                  </p>
                </div>
              </ShineBorder>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
