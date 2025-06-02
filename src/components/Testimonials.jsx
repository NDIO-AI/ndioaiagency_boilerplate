import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non auctor mauris.',
      name: 'Martin Smith',
      position: 'Client',
      image: '/testimonials/martin-smith.jpg'
    },
    {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus, lacus at fringilla lacinia, leo leo eleifend tortor, quis sollicitudin mauris ipsum a elit. Duis eget tincidunt dui, non auctor mauris.',
      name: 'Jessica Brown',
      position: 'Client',
      image: '/testimonials/jessica-brown.jpg'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-white to-blue-50 dark:from-dark-bg dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-secondary dark:text-white mb-4"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 dark:text-gray-200"
          >
            What our clients say about us
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-300 italic">{testimonial.content}</p>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-secondary dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{testimonial.position}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;