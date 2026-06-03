import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import { FACULTY } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaculty = FACULTY.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesSearch;
  });

  // Organize by hierarchy
  const hoD = filteredFaculty.filter(f => f.isHoD);
  const others = filteredFaculty.filter(f => !f.isHoD);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <motion.section
        className="py-20 bg-gradient-to-r from-forest-green to-academic-gold text-white"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Faculty</h1>
          <p className="text-xl opacity-90">Meet our experienced educators and researchers</p>
        </div>
      </motion.section>

      {/* Search */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUpVariants}
            className="max-w-2xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOD Section */}
      {hoD.length > 0 && (
        <section className="py-16 md:py-24 bg-gradient-to-br from-forest-green/5 to-academic-gold/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-display font-bold text-dark-charcoal mb-2">Department Leadership</h2>
              <p className="text-gray-600">Guiding excellence and innovation</p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex justify-center"
            >
              {hoD.map((faculty, index) => (
                <FacultyCard key={faculty.id} faculty={faculty} index={index} />
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Faculty Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {others.length > 0 ? (
              others.map((faculty, index) => (
                <FacultyCard key={faculty.id} faculty={faculty} index={index} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-600 text-lg">No faculty members found matching your search.</p>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="section-title mb-6">Join Our Department</h2>
          <p className="text-xl text-gray-600 mb-8">
            Be part of a community of excellence and innovation
          </p>
          <a href="/contact" className="btn-primary text-lg">
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

function FacultyCard({ faculty, index }) {
  const [hovering, setHovering] = useState(false);

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group relative"
    >
      <motion.div
        initial={false}
        animate={{ rotateY: hovering ? 180 : 0 }}
        transition={{ duration: 0.4 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-96"
      >
        {/* Front of card */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="w-full h-full bg-white rounded-xl shadow-lg p-6 flex flex-col items-center justify-center text-center border border-gray-200"
        >
          {/* Image Placeholder */}
          <div className="w-24 h-24 rounded-full mb-4 bg-gradient-to-br from-forest-green/20 to-academic-gold/20 flex items-center justify-center overflow-hidden border-4 border-forest-green">
            <img
              src={faculty.image}
              alt={faculty.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
            <span className="text-4xl text-gray-400">📷</span>
          </div>

          <h3 className="text-lg font-bold text-dark-charcoal mb-1">{faculty.name}</h3>
          <p className="text-forest-green font-semibold text-sm mb-2">{faculty.designation}</p>
          
          <div className="mt-auto pt-4 border-t border-gray-200 w-full">
            <p className="text-xs text-gray-500">Hover to see details</p>
          </div>
        </div>

        {/* Back of card */}
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className="w-full h-full bg-gradient-to-br from-forest-green to-academic-gold rounded-xl shadow-lg p-6 flex flex-col justify-center text-white absolute top-0 left-0"
        >
          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-sm mb-1">Qualification</h4>
              <p className="text-xs opacity-90 leading-tight">{faculty.qualification}</p>
            </div>
            <div className="border-t border-white/30 pt-4">
              <h4 className="font-bold text-sm mb-1">Specialization</h4>
              <p className="text-xs opacity-90 leading-tight">{faculty.specialization}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
