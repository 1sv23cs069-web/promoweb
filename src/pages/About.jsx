import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Target, BookOpen, Award } from 'lucide-react';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';

export default function About() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">About Us</h1>
          <p className="text-xl opacity-90">Excellence in Computer Science Education</p>
        </div>
      </motion.section>

      {/* Department Overview */}
      <section className="py-16 md:py-24 bg-white">
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
              <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                The Department of Computer Science & Engineering at Shridevi Institute of Engineering & Technology has been a beacon of technical excellence since its inception. We are committed to nurturing innovative minds and creating professionals who excel in the rapidly evolving world of technology.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Our department combines cutting-edge research with practical industry experience, ensuring students are well-prepared for global opportunities.
              </p>
            </div>
            <div className="bg-gradient-to-br from-forest-green/10 to-academic-gold/10 p-12 rounded-lg">
              <div className="text-center">
                <p className="text-5xl font-bold text-forest-green mb-2">25+</p>
                <p className="text-gray-600 text-lg">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <VisionCard
              icon="🎯"
              title="Our Vision"
              description="To be a globally recognized center of excellence in Computer Science education, producing innovative professionals who drive technological advancement and create positive societal impact."
            />
            <VisionCard
              icon="🚀"
              title="Our Mission"
              description="To provide comprehensive, industry-relevant education that develops critical thinking, problem-solving abilities, and ethical values in our students."
            />
            <VisionCard
              icon="💡"
              title="Our Values"
              description="Excellence, Innovation, Integrity, Collaboration, and Social Responsibility form the foundation of our educational philosophy."
            />
          </motion.div>
        </div>
      </section>

      {/* PEOs */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
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
                className="bg-gradient-to-br from-forest-green/10 to-academic-gold/10 p-6 rounded-lg shadow-lg text-center card-hover"
              >
                <div className="w-12 h-12 rounded-full bg-forest-green text-white flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                  {peo.num}
                </div>
                <h3 className="text-lg font-bold text-dark-charcoal mb-2">{peo.title}</h3>
                <p className="text-gray-600 text-sm">{peo.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Department Timeline</h2>
            <p className="section-subtitle">Our journey of growth and excellence</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8 relative"
          >
            {/* Timeline line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-forest-green to-academic-gold md:transform md:-translate-x-1/2"></div>

            {[
              { year: '1998', event: 'Department Established' },
              { year: '2005', event: 'First Batch with 100% Placements' },
              { year: '2010', event: 'Accredited by NBA' },
              { year: '2015', event: 'Research Center Launched' },
              { year: '2020', event: 'Innovation Hub Inaugurated' },
              { year: '2024', event: 'World-Class Facilities Completed' },
            ].map((item, index) => (
              <motion.div
                key={item.year}
                variants={{
                  hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { delay: index * 0.1, duration: 0.5 },
                  },
                }}
                className={`flex gap-6 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="flex-shrink-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-br from-forest-green to-academic-gold text-white font-bold shadow-lg relative z-10"
                  >
                    {index + 1}
                  </motion.div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.1, duration: 0.4 }}
                  className="flex-grow bg-white p-6 rounded-lg shadow-md"
                >
                  <h3 className="text-lg font-bold text-forest-green">{item.year}</h3>
                  <p className="text-gray-600 mt-2">{item.event}</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Department Highlights</h2>
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
                className="flex gap-4 items-start p-6 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="text-forest-green flex-shrink-0 mt-1" size={24} />
                <p className="text-gray-600 text-lg">{highlight.substring(2)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function VisionCard({ icon, title, description }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      whileHover="hover"
      className="bg-white p-8 rounded-lg shadow-lg card-hover text-center"
    >
      <div className="text-6xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold text-dark-charcoal mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}
