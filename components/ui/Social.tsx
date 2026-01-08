import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTiktok } from 'react-icons/fa';



function Social() {
  const icons = [
    { Icon: FaFacebookF, href: "https://www.facebook.com/people/GVS-3D/100082197788579/", aria: "facebook" },
    { Icon: FaTiktok, href: "https://www.tiktok.com/@g.v.s.3d", aria: "tiktok" }
  ];

  return (
    <motion.div
      className="flex space-x-4 mt-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.6, duration: 0.5 }}
    >
      {icons.map(({ Icon, href, aria }, index) => (
        <motion.a
          key={index}
          target="_blank"
          href={href}
          className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors duration-300"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
        >
          <Icon className="w-5 h-5" aria-hidden="true" />
          <span className="sr-only">{aria}</span>
        </motion.a>
      ))}
    </motion.div>
  );
}

export default Social;
