import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

export function TechStack() {
  const technologies = [
    { name: 'React', logo: '⚛️' },
    { name: 'TypeScript', logo: '📘' },
    { name: 'Tailwind CSS', logo: '🎨' },
    { name: 'Node.js', logo: '💚' },
    { name: 'Next.js', logo: '▲' },
    { name: 'Firebase', logo: '🔥' },
    { name: 'AWS', logo: '☁️' },
    { name: 'PostgreSQL', logo: '🐘' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-24 bg-[#070708] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#4A5BFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-[#4A5BFF] mb-4">
            <Sparkles size={16} />
            <span className="text-sm">Technology</span>
          </div>
          <h2 className="mb-4 text-white">Our Tech Stack</h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            We use industry-leading technologies to build robust, scalable solutions
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                rotate: [0, -2, 2, 0],
              }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl glass-card hover:border-[#4A5BFF]/30 transition-all duration-300 hover:shadow-glow text-center">
                <div className="text-5xl mb-4">{tech.logo}</div>
                <div className="font-medium text-white">{tech.name}</div>
                
                {/* Hover Gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4A5BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-[#A8A8A8] max-w-3xl mx-auto">
            Our stack is constantly evolving to include the latest and most effective tools. We choose technologies based on your project's specific needs, ensuring optimal performance and maintainability.
          </p>
        </motion.div>
      </div>
    </section>
  );
}