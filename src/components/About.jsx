import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-dark-bg dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-secondary dark:text-white mb-6"
          >
            About NDIO AI
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-gray-600 dark:text-gray-300"
          >
            <p className="text-lg">
              We are at the forefront of artificial intelligence innovation, dedicated to transforming businesses through cutting-edge AI solutions. Our mission is to make advanced technology accessible and practical for organizations of all sizes.
            </p>
            <p>
              With years of expertise in AI and machine learning, we help businesses automate processes, gain valuable insights from data, and stay ahead in an increasingly digital world. Our team of experts works closely with each client to deliver customized solutions that drive real results.
            </p>
            <p>
              At NDIO AI, we believe in the power of technology to create positive change. We're committed to ethical AI development and ensuring our solutions benefit both businesses and society as a whole.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;