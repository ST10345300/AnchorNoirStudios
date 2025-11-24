import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

export function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@anchornoir.studio',
      href: 'mailto:hello@anchornoir.studio',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'San Francisco, CA',
      href: '#',
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4A5BFF]/10 text-[#4A5BFF] mb-4">
            <Sparkles size={16} />
            <span className="text-sm">Get in Touch</span>
          </div>
          <h1 className="mb-4">Let's Start a Conversation</h1>
          <p className="text-xl text-[#A8A8A8] max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-10 shadow-xl border border-border"
          >
            <h3 className="mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-[#070708]">
                    First Name
                  </label>
                  <Input
                    id="firstName"
                    placeholder="John"
                    className="rounded-2xl border-border focus:border-[#4A5BFF] focus:ring-[#4A5BFF]"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-[#070708]">
                    Last Name
                  </label>
                  <Input
                    id="lastName"
                    placeholder="Doe"
                    className="rounded-2xl border-border focus:border-[#4A5BFF] focus:ring-[#4A5BFF]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-[#070708]">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="rounded-2xl border-border focus:border-[#4A5BFF] focus:ring-[#4A5BFF]"
                />
              </div>

              <div>
                <label htmlFor="company" className="block mb-2 text-[#070708]">
                  Company (Optional)
                </label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="rounded-2xl border-border focus:border-[#4A5BFF] focus:ring-[#4A5BFF]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-[#070708]">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  rows={6}
                  className="rounded-2xl border-border focus:border-[#4A5BFF] focus:ring-[#4A5BFF] resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#4A5BFF] hover:bg-[#3A4BEF] text-white rounded-2xl py-6 shadow-glow-hover transition-all duration-300 group"
              >
                <span className="flex items-center justify-center gap-2">
                  Send Message
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
              </Button>
            </form>
          </motion.div>

          {/* Contact Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-white border border-border hover:border-[#4A5BFF]/30 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#4A5BFF]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#4A5BFF]/20 transition-colors">
                    <info.icon size={24} className="text-[#4A5BFF]" />
                  </div>
                  <div>
                    <div className="text-sm text-[#A8A8A8] mb-1">{info.title}</div>
                    <div className="text-[#070708]">{info.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="relative rounded-3xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#4A5BFF] to-[#7B88FF]" />
              <motion.div
                className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <div className="relative z-10 p-8">
                <h3 className="text-white mb-4">Quick Response Guarantee</h3>
                <p className="text-white/90 mb-6">
                  We typically respond to all inquiries within 24 hours. For urgent matters, feel free to call us directly.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span>Fast Response</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <div className="w-2 h-2 rounded-full bg-white/60" />
                    <span>Free Consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="p-6 rounded-2xl bg-gray-50 border border-border"
            >
              <h4 className="mb-4">Office Hours</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-[#A8A8A8]">Monday - Friday</span>
                  <span className="text-[#070708]">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A8A8A8]">Saturday</span>
                  <span className="text-[#070708]">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A8A8A8]">Sunday</span>
                  <span className="text-[#070708]">Closed</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
