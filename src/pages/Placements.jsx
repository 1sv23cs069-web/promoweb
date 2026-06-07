import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, Users, Award, Briefcase, ChevronRight, 
  GraduationCap, FileCheck, Landmark, UserCheck, Sparkles 
} from 'lucide-react';
import { 
  RECRUITERS, PLACEMENT_STATS, PLACEMENT_SUCCESS_STORIES, 
  CREATIVE_CODEX_LOGO 
} from '../constants';
import { 
  fadeUpVariants, staggerContainer, cardHoverVariants 
} from '../utils/animations';
import { useCountUp } from '../utils/hooks';

export default function Placements() {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Placements</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Your Gateway to a Rewarding Engineering Career
          </p>
        </div>
      </motion.section>

      {/* Statistics */}
      <section className="py-20 bg-white">
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
              suffix=" Partner LPA"
              isPackage
            />
            <PlacementStat
              icon={Briefcase}
              label="Average Package"
              value="8.5"
              suffix=" Partner LPA"
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
      <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Top Recruiters</h2>
            <p className="section-subtitle">Leading organizations hiring our engineering talent</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4"
          >
            {RECRUITERS.map((company, index) => (
              <motion.div
                key={company}
                variants={cardHoverVariants}
                custom={index * 0.05}
                whileHover={{ scale: 1.05, border: '1px solid rgba(11, 143, 67, 0.2)' }}
                className="bg-white p-5 border border-gray-100 rounded-xl shadow-sm text-center transition-all cursor-default"
              >
                <p className="font-semibold text-gray-700 text-sm md:text-base">{company}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Placement Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Placement Process</h2>
            <p className="section-subtitle">Our comprehensive roadmap to career readiness</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {[
              { num: '1', icon: GraduationCap, title: 'Skill Development', desc: 'Technical coding bootcamps and soft skill training programs' },
              { num: '2', icon: FileCheck, iconColor: 'text-academic-gold', title: 'Resume Building', desc: 'Professional CV editing and portfolio development projects' },
              { num: '3', icon: Users, iconColor: 'text-blue-500', title: 'Interview Prep', desc: 'Mock HR interviews and system architecture mock assessments' },
              { num: '4', icon: Landmark, iconColor: 'text-red-500', title: 'Campus Drives', desc: 'Direct recruiting assistance, interviews, and final placement offers' },
            ].map((step, index) => {
              const IconComp = step.icon;
              return (
                <motion.div
                  key={step.num}
                  variants={cardHoverVariants}
                  custom={index}
                  whileHover="hover"
                  className="relative bg-gradient-to-br from-gray-50 to-white p-8 border border-gray-100 rounded-2xl shadow-sm text-center card-hover flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-full bg-forest-green text-white flex items-center justify-center mx-auto mb-5 font-bold text-xl shadow-md border-4 border-white">
                      {step.num}
                    </div>
                    
                    <div className="flex justify-center mb-4 text-forest-green">
                      <IconComp size={36} className={step.iconColor || ''} />
                    </div>

                    <h3 className="text-xl font-bold text-dark-charcoal mb-3 group-hover:text-forest-green transition-colors">{step.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                  </div>

                  {index < 3 && (
                    <div className="hidden lg:block absolute right-[-14px] top-1/2 -translate-y-1/2 text-gray-300 font-bold z-10">
                      <ChevronRight size={28} className="text-forest-green opacity-40 animate-pulse" />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Creative Codex - Placement Support (Highlighted in Gold) */}
      <section className="py-20 bg-gradient-to-br from-forest-green/5 to-academic-gold/5 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Preparation & Mentorship</h2>
            <p className="section-subtitle">Accelerating placement readiness</p>
          </motion.div>

          {/* Shimmer Gold Gradient Border Card */}
          <div className="p-[1.5px] bg-gradient-to-br from-forest-green via-academic-gold to-forest-green rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="bg-white rounded-[22px] p-8 md:p-12 text-center"
            >
              <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
                <div className="p-1 bg-gradient-to-r from-academic-gold to-forest-green rounded-full shadow-md">
                  <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-2">
                    <img
                      src={CREATIVE_CODEX_LOGO}
                      alt="Creative Codex Logo"
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-academic-gold">
                      Creative Codex Support
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  Our **Creative Codex** club works in close coordination with the placement department to deliver dedicated peer mentorship, resume building bootcamps, system design discussions, coding mock drills, and placement prep talks hosted by SIET alumni.
                </p>
                <div className="inline-flex items-center gap-2 text-forest-green font-bold uppercase text-xs tracking-wider border-t border-gray-100 pt-4 w-full justify-center">
                  <Sparkles size={16} className="text-academic-gold" />
                  <span>Empowering Careers Through Innovation</span>
                  <Sparkles size={16} className="text-academic-gold" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Student Success Stories</h2>
            <p className="section-subtitle">Inspiring journeys of our alumni placed in top tech companies</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {PLACEMENT_SUCCESS_STORIES.map((story, index) => (
              <AlumniCard key={story.name} story={story} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-academic-gold text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Ready to Launch Your Tech Career?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
            Join the CSE department, get guided by expert mentors, and land your dream job offer.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-forest-green hover:bg-forest-green hover:text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
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
      className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm text-center card-hover flex flex-col justify-between h-[210px]"
    >
      <div className="w-14 h-14 rounded-full bg-forest-green/10 flex items-center justify-center mx-auto mb-4 text-forest-green shadow-inner">
        <Icon size={28} />
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-forest-green mb-2">
          {isPackage ? `₹${(count / 100).toFixed(1)}` : count}
          {suffix.replace(' Partner', '')}
        </div>
        <p className="text-gray-500 font-semibold text-xs tracking-wider uppercase">{label}</p>
      </div>
    </motion.div>
  );
}

function AlumniCard({ story, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-white rounded-3xl shadow-md border border-gray-100 card-hover overflow-hidden flex flex-col justify-between h-full"
    >
      <div>
        {/* Photo Container */}
        <div className="w-full h-48 bg-gradient-to-br from-forest-green/10 to-academic-gold/10 flex items-center justify-center overflow-hidden border-b border-gray-50 relative">
          {!imageError ? (
            <img
              src={story.photo}
              alt={story.name}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-forest-green/5 flex flex-col items-center justify-center text-forest-green">
              <UserCheck size={44} className="text-academic-gold/80" />
            </div>
          )}
          
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-forest-green/15 text-xs text-forest-green font-bold shadow-sm">
            Batch: {story.batch}
          </div>
        </div>

        <div className="p-8">
          <h3 className="text-xl font-bold text-dark-charcoal mb-1">{story.name}</h3>
          <p className="text-forest-green font-bold text-xs uppercase tracking-wider mb-4">{story.company}</p>
          <span className="inline-block bg-academic-gold/10 text-academic-gold px-3 py-1 rounded-full text-xs font-bold mb-4">
            {story.position}
          </span>
          <p className="text-gray-500 text-sm italic leading-relaxed font-light">
            " {story.story} "
          </p>
        </div>
      </div>
    </motion.div>
  );
}
