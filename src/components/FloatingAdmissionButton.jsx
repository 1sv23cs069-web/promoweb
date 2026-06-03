import React from 'react';
import { motion } from 'framer-motion';
import { GOOGLE_FORM_URL } from '../constants';

export default function FloatingAdmissionButton() {
  return (
    <motion.a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full bg-forest-green text-white shadow-2xl flex items-center justify-center font-bold text-sm hover:shadow-3xl transition-shadow cursor-pointer"
      style={{
        animation: 'pulse 2s ease-in-out infinite',
      }}
    >
      <div className="text-center">
        <div className="text-xs">Apply</div>
        <div className="text-lg">Now</div>
      </div>
    </motion.a>
  );
}
