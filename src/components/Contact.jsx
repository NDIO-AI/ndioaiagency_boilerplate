import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const contactInfo = [
    {
      icon: <EnvelopeIcon className="w-8 h-8 text-primary" />,
      title: 'Email',
      content: 'email@yoursite.com'
    },
    {
      icon: <MapPinIcon className="w-8 h-8 text-primary" />,
      title: 'Office',
      content: 'South Carolina 3531 Street 54'
    },
    {
      icon: <PhoneIcon className="w-8 h-8 text-primary" />,
      title: 'Phone',
      content: '+1 (234) 567 89 01'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-secondary dark:text-white mb-4"
          >
            Contacts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary dark:text-white mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {info.content}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-secondary dark:text-white mb-4"
          >
            Subscribe
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-300 mb-8"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu laoreet odio.
            Aenean eget lorem pellentesque, imperdiet ex convallis, iaculis justo.
          </motion.p>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <input
              type="email"
              placeholder="Email"
              className="px-6 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white focus:outline-none focus:border-primary flex-1 max-w-md"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;