import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, User, BookOpen, GraduationCap } from 'lucide-react';
import { FACULTY } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';

export default function Faculty() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSpecialization, setActiveSpecialization] = useState('All');

  const specializations = [
    { label: 'All', key: 'All' },
    { label: 'AI & ML', key: 'ai' },
    { label: 'Cloud & DevOps', key: 'cloud' },
    { label: 'IoT & Hardware', key: 'iot' },
    { label: 'Cybersecurity', key: 'security' },
    { label: 'Software & Web', key: 'software' }
  ];

  const filteredFaculty = FACULTY.filter((member) => {
    const spec = member.specialization.toLowerCase();
    const name = member.name.toLowerCase();
    
    const matchesSearch = name.includes(searchTerm.toLowerCase()) || spec.includes(searchTerm.toLowerCase());
    
    if (activeSpecialization === 'All') return matchesSearch;
    
    let matchesCategory = false;
    if (activeSpecialization === 'ai') {
      matchesCategory = spec.includes('artificial') || spec.includes('learning') || spec.includes('image') || spec.includes('vision');
    } else if (activeSpecialization === 'cloud') {
      matchesCategory = spec.includes('cloud') || spec.includes('devops') || spec.includes('kubernetes') || spec.includes('big data') || spec.includes('database') || spec.includes('nosql');
    } else if (activeSpecialization === 'iot') {
      matchesCategory = spec.includes('iot') || spec.includes('embedded') || spec.includes('robotics');
    } else if (activeSpecialization === 'security') {
      matchesCategory = spec.includes('security') || spec.includes('hacking') || spec.includes('network');
    } else if (activeSpecialization === 'software') {
      matchesCategory = spec.includes('web') || spec.includes('stack') || spec.includes('mern') || spec.includes('mobile') || spec.includes('flutter') || spec.includes('programming') || spec.includes('compiler') || spec.includes('algorithms');
    }
    
    return matchesSearch && matchesCategory;
  });

  // Organize by hierarchy
  const hoD = filteredFaculty.filter(f => f.isHoD);
  const others = filteredFaculty.filter(f => !f.isHoD);

  return (
    <div className="min-h-screen bg-gray-50 text-dark-charcoal selection:bg-forest-green selection:text-white">
      {/* Hero */}
      <motion.section
        className="py-24 bg-gradient-to-br from-forest-green via-forest-green/90 to-academic-gold text-white relative overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Our Faculty</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Meet our team of experienced educators, researchers, and mentors shaping the future of technology
          </p>
        </div>
      </motion.section>

      {/* Search & Filter Bar */}
      <section className="py-12 bg-white border-b border-gray-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search faculty by name or topic..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green text-sm shadow-sm transition-all"
              />
            </div>

            {/* Specialization Filter Tags */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end w-full md:w-auto">
              {specializations.map((spec) => (
                <button
                  key={spec.key}
                  onClick={() => setActiveSpecialization(spec.key)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                    activeSpecialization === spec.key
                      ? 'bg-forest-green text-white border-forest-green shadow-md scale-105'
                      : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                  }`}
                >
                  {spec.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOD Section */}
      {hoD.length > 0 && (
        <section className="py-20 md:py-24 bg-gradient-to-br from-forest-green/5 to-academic-gold/5 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-charcoal mb-3">
                Department Leadership
              </h2>
              <p className="text-gray-500 font-light max-w-xl mx-auto">
                Guiding our academic programs, student-led innovation, and institutional collaborations
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex justify-center"
            >
              {hoD.map((faculty, index) => (
                <div key={faculty.id} className="w-full max-w-sm">
                  <FacultyCard faculty={faculty} index={index} />
                </div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {/* Faculty Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {others.length > 0 && hoD.length > 0 && (
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-dark-charcoal mb-3">
                Faculty Members
              </h2>
              <p className="text-gray-500 font-light max-w-xl mx-auto">
                Our distinguished lecturers and assistant professors
              </p>
            </div>
          )}

          <motion.div
            layout
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <AnimatePresence>
              {others.length > 0 ? (
                others.map((faculty, index) => (
                  <motion.div
                    key={faculty.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FacultyCard faculty={faculty} index={index} />
                  </motion.div>
                ))
              ) : (
                hoD.length === 0 && (
                  <div className="col-span-full text-center py-16 text-gray-400 bg-gray-50 border border-dashed border-gray-200 rounded-2xl">
                    No faculty members found matching your filters.
                  </div>
                )
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>



      {/* Join CTA */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="section-title mb-6">Join Our Faculty Team</h2>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto font-light">
            Become a part of our progressive engineering ecosystem to mentor the next generation of coders.
          </p>
          <a href="/contact" className="btn-primary text-lg px-8 py-3.5 shadow-md">
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

function UserAvatar({ faculty }) {
  const [imageError, setImageError] = useState(false);
  const isHoD = faculty.isHoD;

  if (imageError) {
    return (
      <div className="w-full h-full bg-forest-green/5 flex items-center justify-center text-forest-green shadow-inner">
        <User size={isHoD ? 48 : 36} className="opacity-80" />
      </div>
    );
  }

  return (
    <img
      src={faculty.image}
      alt={faculty.name}
      className="w-full h-full object-cover"
      onError={() => setImageError(true)}
    />
  );
}

function FacultyCard({ faculty, index }) {
  const [hovering, setHovering] = useState(false);
  const isHoD = faculty.isHoD;
  const imageSizeClass = isHoD ? 'w-36 h-36' : 'w-28 h-28';

  return (
    <div
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="group relative cursor-pointer w-full h-[380px] perspective"
    >
      <motion.div
        animate={{ rotateY: hovering ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
        className="w-full h-full relative"
      >
        {/* Front of card */}
        <div
          style={{ backfaceVisibility: 'hidden' }}
          className="absolute inset-0 w-full h-full bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-between text-center border border-gray-100 hover:shadow-xl transition-all duration-300"
        >
          {/* Image Container with HOD golden frame */}
          <div className={`${imageSizeClass} rounded-full bg-gradient-to-br from-forest-green/10 to-academic-gold/10 flex items-center justify-center overflow-hidden border-4 ${isHoD ? 'border-academic-gold shadow-md' : 'border-forest-green'} flex-shrink-0 relative group-hover:scale-105 transition-transform duration-300`}>
            <UserAvatar faculty={faculty} />
          </div>

          <div className="space-y-1 mt-4">
            <h3 className="text-lg font-bold text-dark-charcoal group-hover:text-forest-green transition-colors duration-300">
              {faculty.name}
            </h3>
            <p className="text-forest-green font-semibold text-xs uppercase tracking-wider">
              {faculty.designation}
            </p>
          </div>

          <div className="w-full pt-4 border-t border-gray-50">
            <p className="text-[10px] uppercase font-bold tracking-widest text-academic-gold">
              Hover for specialization
            </p>
          </div>
        </div>

        {/* Back of card */}
        <div
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-forest-green to-academic-gold rounded-2xl shadow-lg p-6 flex flex-col justify-center items-center text-white text-center"
        >
          <div className="space-y-4">
            <div className="flex flex-col items-center">
              <GraduationCap size={28} className="text-white mb-1" />
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-white/70 mb-0.5">Qualification</h4>
              <p className="text-xs font-semibold leading-snug">{faculty.qualification}</p>
            </div>
            <div className="border-t border-white/20 pt-3 flex flex-col items-center">
              <BookOpen size={24} className="text-white mb-1" />
              <h4 className="font-bold text-[10px] uppercase tracking-widest text-white/70 mb-0.5">Specialization</h4>
              <p className="text-[10px] leading-relaxed max-w-[180px]">{faculty.specialization}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
