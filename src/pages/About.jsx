import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, Target, Rocket, Lightbulb, Play, Pause, 
  ChevronLeft, ChevronRight, Award
} from 'lucide-react';
import { 
  DEPARTMENT_TIMELINE 
} from '../constants';
import { 
  fadeUpVariants, staggerContainer, cardHoverVariants 
} from '../utils/animations';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Excellence in Computer Science Education and Collaborative Research
          </p>
        </div>
      </motion.section>

      {/* Department Overview */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="section-title mb-6">Department Overview</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed font-light">
                The Department of Computer Science & Engineering at Shridevi Institute of Engineering & Technology has been a beacon of technical excellence since its inception. We are committed to nurturing innovative minds and creating professionals who excel in the rapidly evolving world of technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed font-light">
                Our department combines cutting-edge research with practical industry experience, ensuring students are well-prepared for global opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-forest-green/5 to-academic-gold/5 p-12 rounded-2xl border border-forest-green/10 flex flex-col items-center justify-center text-center shadow-sm">
              <p className="text-6xl font-extrabold text-forest-green mb-2">25+</p>
              <p className="text-gray-500 font-semibold tracking-wider uppercase text-sm">Years of Educational Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <VisionCard
              icon={Target}
              iconColor="text-academic-gold"
              bgColor="bg-academic-gold/10"
              title="Our Vision"
              description="To be a globally recognized center of excellence in Computer Science education, producing innovative professionals who drive technological advancement and create positive societal impact."
            />
            <VisionCard
              icon={Rocket}
              iconColor="text-forest-green"
              bgColor="bg-forest-green/10"
              title="Our Mission"
              description="To provide comprehensive, industry-relevant education that develops critical thinking, problem-solving abilities, and ethical values in our students."
            />
            <VisionCard
              icon={Lightbulb}
              iconColor="text-blue-600"
              bgColor="bg-blue-50"
              title="Our Values"
              description="Excellence, Innovation, Integrity, Collaboration, and Social Responsibility form the foundation of our educational philosophy."
            />
          </motion.div>
        </div>
      </section>

      {/* Program Educational Objectives (PEOs) */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Program Educational Objectives (PEOs)</h2>
            <p className="section-subtitle">What our graduates achieve after 3-5 years</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { num: '1', title: 'Professional Excellence', desc: 'Successful careers in IT and software sectors' },
              { num: '2', title: 'Innovation & Entrepreneurship', desc: 'Startups and innovative projects' },
              { num: '3', title: 'Higher Education', desc: 'Advanced degrees and research pursuits' },
              { num: '4', title: 'Social Impact', desc: 'Technology for societal benefit' },
            ].map((peo, index) => (
              <motion.div
                key={peo.num}
                variants={cardHoverVariants}
                custom={index}
                whileHover="hover"
                className="bg-gradient-to-br from-forest-green/5 to-academic-gold/5 border border-forest-green/10 p-6 rounded-2xl shadow-sm text-center card-hover flex flex-col justify-between"
              >
                <div className="w-12 h-12 rounded-full bg-forest-green text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-md">
                  {peo.num}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark-charcoal mb-2">{peo.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{peo.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <AboutTimelineSection />

      {/* Highlights */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Department Highlights</h2>
            <p className="section-subtitle">Core markers of our departmental strength</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              '✓ 450+ Students across all years',
              '✓ 35+ Faculty members with PhD qualification',
              '✓ 92% Placement rate consistently',
              '✓ 150+ Research publications',
              '✓ 45+ Companies recruiting annually',
              '✓ 5 State-of-the-art laboratories',
              '✓ Active research in AI, Cloud Computing, IoT',
              '✓ Industry collaborations and partnerships',
            ].map((highlight, index) => (
              <motion.div
                key={highlight}
                variants={cardHoverVariants}
                custom={index}
                whileHover="hover"
                className="flex gap-4 items-center p-6 bg-gray-50 border border-gray-100 rounded-2xl shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-forest-green/10 flex items-center justify-center text-forest-green flex-shrink-0 shadow-inner">
                  <CheckCircle size={20} />
                </div>
                <p className="text-gray-700 text-lg font-light">{highlight.substring(2)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function VisionCard({ icon: Icon, iconColor, bgColor, title, description }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      whileHover="hover"
      className="bg-white p-8 rounded-2xl shadow-md card-hover text-center border border-gray-100 flex flex-col items-center justify-between h-full"
    >
      <div className={`w-16 h-16 rounded-2xl ${bgColor} ${iconColor} flex items-center justify-center mb-6 shadow-inner transition-transform duration-300 hover:scale-110`}>
        <Icon size={32} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-dark-charcoal mb-3">{title}</h3>
        <p className="text-gray-600 leading-relaxed text-sm font-light">{description}</p>
      </div>
    </motion.div>
  );
}

function AboutTimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % DEPARTMENT_TIMELINE.length);
      }, 4000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? DEPARTMENT_TIMELINE.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === DEPARTMENT_TIMELINE.length - 1 ? 0 : prev + 1));
  };

  const activeItem = DEPARTMENT_TIMELINE[activeIndex];

  return (
    <section className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title">Department Timeline</h2>
          <p className="section-subtitle">Our journey of growth and excellence</p>
        </motion.div>

        {/* Year Stepper Track */}
        <div className="relative mb-12 max-w-4xl mx-auto px-4">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-forest-green to-academic-gold -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${(activeIndex / (DEPARTMENT_TIMELINE.length - 1)) * 100}%` }}
          />

          <div className="relative z-10 flex justify-between items-center">
            {DEPARTMENT_TIMELINE.map((item, idx) => (
              <button
                key={item.year}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsPlaying(false);
                }}
                className={`w-12 h-12 rounded-full border-4 flex items-center justify-center font-bold text-sm shadow-md transition-all duration-300 ${
                  activeIndex === idx
                    ? 'bg-gradient-to-br from-forest-green to-academic-gold text-white border-white scale-125 ring-4 ring-forest-green/20'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-gray-400 hover:text-gray-700'
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>

        {/* Slideshow Controls */}
        <div className="flex justify-center items-center gap-6 mb-12">
          <button
            onClick={handlePrev}
            className="p-2.5 rounded-full border border-gray-200 bg-white shadow-sm text-gray-600 hover:bg-gray-50 hover:text-forest-green transition-all"
            title="Previous Milestone"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold shadow-md transition-all ${
              isPlaying 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-forest-green text-white hover:bg-forest-green/95'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause size={16} /> Pause Slideshow
              </>
            ) : (
              <>
                <Play size={16} /> Play Slideshow
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            className="p-2.5 rounded-full border border-gray-200 bg-white shadow-sm text-gray-600 hover:bg-gray-50 hover:text-forest-green transition-all"
            title="Next Milestone"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Milestone Detail Card */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.35 }}
              className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 relative overflow-hidden text-center md:text-left flex flex-col md:flex-row gap-8 items-center"
            >
              {/* Glow Accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-forest-green/5 rounded-full blur-3xl pointer-events-none" />

              {/* Icon Container */}
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-forest-green/10 to-academic-gold/10 text-5xl flex items-center justify-center flex-shrink-0 shadow-inner">
                {activeItem.icon}
              </div>

              {/* Text Content */}
              <div className="flex-1 space-y-4">
                <div className="inline-flex px-4 py-1.5 bg-gradient-to-r from-forest-green to-academic-gold text-white rounded-full text-sm font-bold shadow-sm">
                  {activeItem.year}
                </div>
                <h3 className="text-3xl font-bold text-dark-charcoal">
                  {activeItem.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed font-light">
                  {activeItem.description}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
