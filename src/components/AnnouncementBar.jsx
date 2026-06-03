import React from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import { GOOGLE_FORM_URL } from '../constants';

export default function AnnouncementBar() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gradient-to-r from-forest-green to-academic-gold text-white py-4 px-4"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">🎓</span>
          <div>
            <p className="font-bold text-lg">Admissions Open 2026</p>
            <p className="text-sm opacity-90">Join India's Leading CSE Department</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-forest-green px-6 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all inline-block"
          >
            Apply Now
          </a>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Close announcement"
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
