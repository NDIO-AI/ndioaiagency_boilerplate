import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Globe from './Globe';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-white to-blue-50 dark:from-dark-bg dark:to-gray-800 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-secondary dark:text-white leading-tight">
              Transform Your Business with <span className="text-primary">AI Solutions</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Unlock the power of artificial intelligence to drive innovation, efficiency, and growth for your organization.
            </p>
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200"
              >
                Get Started
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors duration-200"
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Globe />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;