import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaFacebook className="w-6 h-6" />, href: '#', label: 'Facebook' },
    { icon: <FaTwitter className="w-6 h-6" />, href: '#', label: 'Twitter' },
    { icon: <FaLinkedin className="w-6 h-6" />, href: '#', label: 'LinkedIn' },
    { icon: <FaInstagram className="w-6 h-6" />, href: '#', label: 'Instagram' }
  ];

  const footerLinks = [
    { text: 'Terms of Service', href: '#' },
    { text: 'Privacy Policy', href: '#' },
    { text: 'Cookie Policy', href: '#' },
    { text: 'Contact', href: '#contact' }
  ];

  return (
    <footer className="bg-white dark:bg-dark-bg border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h1 className="text-2xl font-bold text-primary">NDIO AI</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm">
              Transform Your Business with AI Solutions
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center space-x-6"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="text-gray-400 hover:text-primary dark:text-gray-500 dark:hover:text-primary transition-colors duration-200"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              {footerLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors duration-200"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            © {new Date().getFullYear()} NDIO AI. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;