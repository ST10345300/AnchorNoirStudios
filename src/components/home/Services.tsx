import { motion } from 'motion/react';
import { Globe, Smartphone, Code, Palette, Sparkles, Layers } from 'lucide-react';

export function Services() {
  const services = [
    {
      icon: Globe,
      title: 'Startup Websites',
      description: 'Beautiful, high-converting websites built with modern frameworks. Fast, responsive, and SEO-optimized.',
      color: '#4A5BFF',
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native iOS and Android apps with seamless UX. From concept to App Store deployment.',
      color: '#7B88FF',
    },
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Tailored software solutions that scale with your business. Built with cutting-edge technology.',
      color: '#9B9FFF',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that delights. Beautiful interfaces backed by research and testing.',
      color: '#4A5BFF',
    },
    {
      icon: Sparkles,
      title: 'Branding',
      description: 'Complete brand identity systems. From logo design to comprehensive brand guidelines.',
      color: '#7B88FF',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="services" className="py-24 bg-[#070708] relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#4A5BFF]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
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
            <span className="text-sm">What We Do</span>
          </div>
          <h2 className="mb-4 text-white">Our Services</h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            End-to-end digital solutions for ambitious startups and growing businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="group"
            >
              <div className="relative p-8 rounded-3xl glass-card hover:border-[#4A5BFF]/30 transition-all duration-300 hover:shadow-glow h-full">
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative"
                  style={{
                    background: `linear-gradient(135deg, ${service.color}20 0%, ${service.color}10 100%)`,
                  }}
                >
                  <service.icon size={32} style={{ color: service.color }} />
                </motion.div>

                {/* Content */}
                <h3 className="mb-3 text-white">{service.title}</h3>
                <p className="text-[#A8A8A8] leading-relaxed">
                  {service.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#4A5BFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}