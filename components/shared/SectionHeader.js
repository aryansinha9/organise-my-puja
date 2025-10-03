import React from 'react';
import { motion } from 'framer-motion';

const Mandala = () => (
  <svg
    width="200"
    height="200"
    viewBox="0 0 100 100"
    className="absolute inset-0 m-auto text-orange-200 opacity-20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="50" cy="50" r="38" stroke="currentColor" strokeWidth="0.5" />
    {[...Array(12)].map((_, i) => (
      <line
        key={i}
        x1="50"
        y1="50"
        x2="50"
        y2="2"
        transform={`rotate(${i * 30}, 50, 50)`}
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ))}
    {[...Array(8)].map((_, i) => (
      <path
        key={i}
        d="M50 2 a 20 20 0 0 1 12 4"
        transform={`rotate(${i * 45}, 50, 50)`}
        stroke="currentColor"
        strokeWidth="0.5"
      />
    ))}
  </svg>
);

const SectionHeader = ({ badgeText, title, subtitle, titleHighlight }) => {
  return (
    <motion.div
      className="text-center mb-16 relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
        >
          <Mandala />
        </motion.div>
      </div>

      <div className="relative z-10">
        {badgeText && (
          <p className="text-orange-600 font-medium mb-4 text-sm">
            {badgeText}
          </p>
        )}
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-orange-900 mb-4">
          {title}{' '}
          {titleHighlight && (
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
              {titleHighlight}
            </span>
          )}
        </h2>
        {subtitle && (
          <p className="font-sans text-xl text-orange-700 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default SectionHeader;