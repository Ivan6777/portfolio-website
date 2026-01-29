import { useState } from 'react';
import { motion } from 'motion/react';
import Masonry from 'react-responsive-masonry';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  aspectRatio: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Neural Network Visualization',
    category: 'ML',
    image: 'https://images.unsplash.com/photo-1717501219687-ddce079f704b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrfGVufDF8fHx8MTc2OTYxMTU3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1:1',
  },
  {
    id: 2,
    title: 'Data Network Graph',
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1762279389002-7b6abd7bd6c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMG5ldHdvcmslMjBncmFwaHxlbnwxfHx8fDE3Njk2MjYyNzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1:2',
  },
  {
    id: 3,
    title: 'Modern Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1758411898021-ef0dadaaa295?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY5NjA1NTA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '2:1',
  },
  {
    id: 4,
    title: 'Geometric Data Art',
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1595411425732-e69c1abe2763?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZW9tZXRyaWMlMjBwYXR0ZXJuJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzY5NjQ3OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1:1',
  },
  {
    id: 5,
    title: 'Analytics Dashboard',
    category: 'Web',
    image: 'https://images.unsplash.com/photo-1737703638422-2cfa152cdcb7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmFseXRpY3MlMjBjaGFydHMlMjBncmFwaHN8ZW58MXx8fHwxNzY5NjgzNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '2:1',
  },
  {
    id: 6,
    title: 'AI Visualization',
    category: 'ML',
    image: 'https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2OTY3ODcyMXww&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1:1',
  },
  {
    id: 7,
    title: 'Circuit Board Patterns',
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1766203551890-2664b619042b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwY2lyY3VpdCUyMGJvYXJkJTIwcGF0dGVybnN8ZW58MXx8fHwxNzY5NjgzNzM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1:2',
  },
  {
    id: 8,
    title: 'Colorful Abstract Data',
    category: 'Data',
    image: 'https://images.unsplash.com/photo-1761507321319-2d59343016f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGFic3RyYWN0JTIwZGF0YSUyMGFydHxlbnwxfHx8fDE3Njk2ODM3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    aspectRatio: '1:1',
  },
];

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'ML', 'Data', 'Web'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 md:py-32 px-5 md:px-[120px] bg-white dark:bg-transparent transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Montserrat'] font-bold text-3xl md:text-5xl mb-4 dark:text-white">
            Portfolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            A collection of projects showcasing ML, data visualization, and full-stack development.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 md:pb-0">
          <div className="flex gap-2 md:gap-4 min-w-max px-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-['Montserrat'] font-medium transition-all whitespace-nowrap min-h-[44px] ${activeFilter === filter
                    ? 'bg-[var(--cyan-turquoise)] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-white/10 dark:text-gray-200 dark:hover:bg-white/20'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid - Desktop: Masonry, Mobile: Single Column */}
        <div className="hidden md:block">
          <Masonry columnsCount={4} gutter="24px">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Masonry>
        </div>

        {/* Mobile Grid - Single Column */}
        <div className="md:hidden grid grid-cols-1 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} mobile />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, mobile = false }: { project: Project; mobile?: boolean }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-white/5 group cursor-pointer ${mobile ? 'aspect-[4/5]' : ''
        }`}
      style={
        !mobile && project.aspectRatio === '1:2'
          ? { aspectRatio: '1/2' }
          : !mobile && project.aspectRatio === '2:1'
            ? { aspectRatio: '2/1' }
            : !mobile
              ? { aspectRatio: '1/1' }
              : {}
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />

      {/* Overlay - Dims on hover (desktop) or always visible (mobile) */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${mobile || isHovered ? 'opacity-100' : 'opacity-0'
          }`}
      >
        {/* Card Info */}
        <div className="absolute top-6 left-6 right-6">
          <p className="text-[var(--cyan-turquoise)] text-sm font-['Montserrat'] font-semibold mb-2">
            {project.category}
          </p>
          <h3 className="text-white font-['Montserrat'] font-bold text-xl mb-3">
            {project.title}
          </h3>
        </div>

        {/* Control Bar with Dual Action Buttons - Slides up from bottom */}
        <motion.div
          initial={!mobile ? { y: 20, opacity: 0 } : {}}
          animate={isHovered || mobile ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 p-6"
        >
          <div className="flex gap-3">
            {/* Button A: Live Demo */}
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[var(--cyan-turquoise)] text-white font-['Montserrat'] font-bold text-[14px] rounded-full hover:opacity-90 transition-opacity min-h-[44px]">
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </button>

            {/* Button B: GitHub */}
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border-2 border-white text-white font-['Montserrat'] font-bold text-[14px] rounded-full hover:bg-white/10 transition-colors min-h-[44px]">
              <Github className="w-4 h-4" />
              GitHub
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}