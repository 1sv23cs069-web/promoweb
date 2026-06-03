import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Briefcase } from 'lucide-react';
import { RECRUITERS, PLACEMENT_STATS, PLACEMENT_SUCCESS_STORIES } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';
import { useCountUp } from '../utils/hooks';

export default function Placements() {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Placements</h1>
          <p className="text-xl opacity-90">Your Gateway to Success</p>
        </div>
      </motion.section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <PlacementStat
              icon={TrendingUp}
              label="Placement Rate"
              value={PLACEMENT_STATS.placementPercentage}
              suffix="%"
            />
            <PlacementStat
              icon={Award}
              label="Highest Package"
              value="18"
              suffix=" LPA"
              isPackage
            />
            <PlacementStat
              icon={Briefcase}
              label="Average Package"
              value="8.5"
              suffix=" LPA"
              isPackage
            />
            <PlacementStat
              icon={Users}
              label="Companies Visited"
              value={PLACEMENT_STATS.companiesVisited}
              suffix=""
            />
          </motion.div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Top Recruiters</h2>
            <p className="section-subtitle">Companies that trust our graduates</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-7 gap-4"
          >
            {RECRUITERS.map((company, index) => (
              <motion.div
                key={company}
                variants={cardHoverVariants}
                custom={index * 0.05}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all"
              >
                <p className="font-semibold text-gray-700 text-sm md:text-base">{company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Placement Process</h2>
            <p className="section-subtitle">Our comprehensive support system</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { num: '1', title: 'Skill Development', desc: 'Technical and soft skill training programs' },
              { num: '2', title: 'Resume Building', desc: 'Professional CV and portfolio development' },
              { num: '3', title: 'Interview Prep', desc: 'Mock interviews and mock assessments' },
              { num: '4', title: 'Placement', desc: 'Direct placement assistance and negotiations' },
            ].map((step, index) => (
              <motion.div
                key={step.num}
                variants={cardHoverVariants}
                custom={index}
                whileHover="hover"
                className="relative bg-gradient-to-br from-forest-green/10 to-academic-gold/10 p-8 rounded-lg shadow-lg text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-forest-green text-white flex items-center justify-center mx-auto mb-4 font-bold text-2xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold text-dark-charcoal mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-2xl text-forest-green">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Codex - Placement Support */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-forest-green/10 to-academic-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Placement Support</h2>
            <p className="section-subtitle">In Association with Creative Codex</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="bg-white rounded-xl shadow-lg p-8 mb-12 border-l-4 border-forest-green"
          >
            <div className="text-center max-w-2xl mx-auto">
              <p className="text-lg text-gray-700 mb-4">
                Our Creative Codex club works in association with the placement cell to provide comprehensive preparation programs including resume building, mock interviews, technical discussions, and networking opportunities with alumni.
              </p>
              <p className="text-forest-green font-semibold">"Empowering Careers Through Innovation"</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">Inspiring journeys of our alumni</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {PLACEMENT_SUCCESS_STORIES.map((story, index) => (
              <motion.div
                key={story.name}
                variants={cardHoverVariants}
                custom={index}
                whileHover="hover"
                className="bg-white rounded-lg shadow-lg card-hover overflow-hidden"
              >
                {/* Photo Placeholder */}
                <div className="w-full h-40 bg-gradient-to-br from-forest-green/20 to-academic-gold/20 flex items-center justify-center overflow-hidden border-b-4 border-forest-green">
                  <img
                    src={story.photo}
                    alt={story.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <span className="text-5xl text-gray-400">📷</span>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark-charcoal mb-1">{story.name}</h3>
                  <p className="text-forest-green font-semibold text-sm mb-1">{story.company}</p>
                  <p className="text-gray-600 text-xs mb-4">Batch of {story.batch}</p>
                  <p className="text-gray-700 font-semibold text-sm mb-3">{story.position}</p>
                  <p className="text-gray-600 italic text-sm">{story.story}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-forest-green to-academic-gold text-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our department and secure your future
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-forest-green px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
          >
            Contact Admissions
          </a>
        </motion.div>
      </section>
    </div>
  );
}

function PlacementStat({ icon: Icon, label, value, suffix, isPackage }) {
  const { count, ref } = useCountUp(isPackage ? value * 100 : value, 2000);

  return (
    <motion.div
      ref={ref}
      variants={cardHoverVariants}
      whileHover="hover"
      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg text-center card-hover"
    >
      <Icon className="text-forest-green mx-auto mb-4" size={40} />
      <div className="text-4xl md:text-5xl font-bold text-forest-green mb-2">
        {isPackage ? `₹${(count / 100).toFixed(1)}` : count}
        {suffix}
      </div>
      <p className="text-gray-600 font-semibold">{label}</p>
    </motion.div>
  );
}
