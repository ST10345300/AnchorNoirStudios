import { motion } from 'motion/react';
import { Target, Eye, Heart, Users, Award, TrendingUp, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in every project we deliver.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients as true partners in success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for perfection in every detail, every time.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We stay ahead of trends to deliver cutting-edge solutions.',
    },
  ];

  const team = [
    {
      name: 'Alex Johnson',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM5NDg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Design',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM5NDg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM5NDg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      name: 'Emily Thompson',
      role: 'Product Strategist',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM5NDg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const timeline = [
    {
      year: '2019',
      title: 'Founded',
      description: 'Anchor Noir Studios was born with a vision to help startups succeed.',
    },
    {
      year: '2020',
      title: 'First 10 Clients',
      description: 'Delivered successful projects for our first wave of innovative startups.',
    },
    {
      year: '2021',
      title: 'Expanded Team',
      description: 'Grew our team to include top designers and developers.',
    },
    {
      year: '2022',
      title: 'Industry Recognition',
      description: 'Received awards for design excellence and client satisfaction.',
    },
    {
      year: '2023',
      title: '50+ Projects',
      description: 'Reached the milestone of 50 successful project deliveries.',
    },
    {
      year: '2024',
      title: 'Looking Ahead',
      description: 'Continuing to innovate and help more startups achieve their goals.',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-32 pb-24"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/10 text-[#4A5BFF] mb-6">
            <Sparkles size={16} />
            <span className="text-sm">About Us</span>
          </div>
          <h1 className="mb-6">Building Digital Excellence</h1>
          <p className="text-xl text-[#A8A8A8] max-w-3xl mx-auto">
            We're a team of passionate designers, developers, and strategists dedicated to helping startups bring their digital visions to life.
          </p>
        </motion.div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtfGVufDF8fHx8MTc2MzkzODc0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Our team"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-[#A8A8A8]">
              <p>
                Anchor Noir Studios was founded in 2019 with a simple mission: to help startups succeed through exceptional digital experiences. What started as a small team of three has grown into a full-service digital agency.
              </p>
              <p>
                We've had the privilege of working with ambitious founders and innovative companies, helping them launch products, scale their businesses, and achieve their goals.
              </p>
              <p>
                Today, we continue to push the boundaries of what's possible in digital design and development, always putting our clients' success first.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-24 mb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 rounded-3xl bg-white border border-border shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#4A5BFF]/10 flex items-center justify-center mb-6">
                <Target size={32} className="text-[#4A5BFF]" />
              </div>
              <h3 className="mb-4">Our Mission</h3>
              <p className="text-[#A8A8A8]">
                To empower startups and growing businesses with premium digital solutions that drive growth, engage users, and create lasting impact in the digital world.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="p-8 rounded-3xl bg-white border border-border shadow-lg"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#4A5BFF]/10 flex items-center justify-center mb-6">
                <Eye size={32} className="text-[#4A5BFF]" />
              </div>
              <h3 className="mb-4">Our Vision</h3>
              <p className="text-[#A8A8A8]">
                To be the go-to digital partner for innovative startups worldwide, known for our exceptional quality, creative excellence, and commitment to client success.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="mb-4">Our Values</h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-blue flex items-center justify-center shadow-glow">
                <value.icon size={32} className="text-white" />
              </div>
              <h4 className="mb-2">{value.title}</h4>
              <p className="text-[#A8A8A8] text-sm">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/10 text-[#4A5BFF] mb-4">
            <Sparkles size={16} />
            <span className="text-sm">Our Team</span>
          </div>
          <h2 className="mb-4">Meet the Team</h2>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            Talented individuals working together to create exceptional results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="relative rounded-3xl overflow-hidden mb-4 shadow-lg">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070708]/60 to-transparent" />
              </div>
              <h4 className="mb-1">{member.name}</h4>
              <p className="text-[#A8A8A8]">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/10 text-[#4A5BFF] mb-4">
              <Sparkles size={16} />
              <span className="text-sm">Our Journey</span>
            </div>
            <h2 className="mb-4">Company Timeline</h2>
            <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
              Key milestones in our journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-6 rounded-2xl bg-white border border-border hover:border-[#4A5BFF]/30 transition-all duration-300">
                  <div className="text-4xl font-bold text-[#4A5BFF] mb-3">
                    {item.year}
                  </div>
                  <h4 className="mb-2">{item.title}</h4>
                  <p className="text-[#A8A8A8] text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
