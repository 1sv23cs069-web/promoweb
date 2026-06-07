import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, Medal, Flame, Sparkles, FileText, Cpu, Award, 
  GraduationCap, Check, ArrowRight, UserCheck 
} from 'lucide-react';
import { ACHIEVEMENTS, CREATIVE_CODEX_LOGO } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('student');

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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Achievements</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Excellence Celebrated Across Academics, Research, and Technical Competitions
          </p>
        </div>
      </motion.section>

      {/* Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('student')}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === 'student'
                  ? 'bg-forest-green text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              Student Achievements
            </button>
            <button
              onClick={() => setActiveTab('faculty')}
              className={`px-8 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                activeTab === 'faculty'
                  ? 'bg-forest-green text-white shadow-md scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }`}
            >
              Faculty Achievements
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'student' ? (
            <StudentAchievements />
          ) : (
            <FacultyAchievements />
          )}
        </div>
      </section>

      {/* Creative Codex Recognition (Highlighted in Gold) */}
      <section className="py-20 bg-gradient-to-br from-forest-green/5 to-academic-gold/5 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Nurturing Innovation</h2>
            <p className="section-subtitle">Collaborative platforms driving student growth</p>
          </motion.div>

          {/* Gold Gradient Border Spotlight Card */}
          <div className="p-[1.5px] bg-gradient-to-br from-forest-green via-academic-gold to-forest-green rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="bg-white rounded-[22px] p-8 md:p-12 text-center"
            >
              <div className="flex flex-col items-center gap-6 max-w-2xl mx-auto">
                <div className="p-[1px] bg-gradient-to-r from-academic-gold to-forest-green rounded-full shadow-md">
                  <div className="bg-white px-5 py-2.5 rounded-full flex items-center gap-3">
                    <img
                      src={CREATIVE_CODEX_LOGO}
                      alt="Creative Codex Logo"
                      className="h-8 w-8 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                    <span className="text-xs font-bold uppercase tracking-wider text-academic-gold">
                      Supported by Creative Codex
                    </span>
                  </div>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  A significant share of our student awards, coding victories, and startup prototypes are incubated inside **Creative Codex**—our student-run innovation cell that acts as a bridge for mentorship, code reviews, hardware access, and collaborative platforms.
                </p>
                <div className="inline-flex items-center gap-2 text-forest-green font-bold uppercase text-xs tracking-wider border-t border-gray-100 pt-4 w-full justify-center">
                  <Sparkles size={16} className="text-academic-gold" />
                  <span>Bringing Ideas to Life Through Technology</span>
                  <Sparkles size={16} className="text-academic-gold" />
                </div>
              </div>
            </motion.div>
          </div>
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
            Celebrate Engineering Excellence
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 font-light leading-relaxed">
            Join a vibrant culture of developers, developers, and researchers making an impact.
          </p>
          <a href="/contact" className="inline-block bg-white text-forest-green hover:bg-forest-green hover:text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300">
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

function StudentAchievements() {
  const categories = [
    {
      icon: Trophy,
      iconColor: 'text-academic-gold',
      bgColor: 'bg-academic-gold/10',
      title: 'Hackathons',
      achievements: [
        'National Hackathon Winners 2024',
        'Smart India Hackathon Finalists',
        'CodeChef and CodeForces Rankings',
        'Multiple state-level competitions',
      ],
      photo: '/images/achievements/hackathon.jpg',
    },
    {
      icon: Medal,
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
      title: 'Competitions',
      achievements: [
        'ACM ICPC Qualifiers',
        'Google Code Jam Participants',
        'Inter-college Programming Contests',
        'Cyber Security Competitions',
      ],
      photo: '/images/achievements/icpc.jpg',
    },
    {
      icon: Flame,
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
      title: 'Sports',
      achievements: [
        'Inter-college Cricket Champions',
        'Badminton and Volleyball Winners',
        'Table Tennis Tournament Victory',
        'Marathon and Athletic Events',
      ],
      photo: '/images/achievements/sports.jpg',
    },
    {
      icon: Sparkles,
      iconColor: 'text-pink-500',
      bgColor: 'bg-pink-50',
      title: 'Cultural',
      achievements: [
        'Best Technical Event Organizers',
        'Cultural Fest Coordinators',
        'Technical Festival "Shrishtav" Success',
        'Departmental Quiz Competitions',
      ],
      photo: '/images/achievements/cultural.jpg',
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-dark-charcoal mb-4">
          Student Excellence
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
          Our students consistently secure awards in engineering, sports, and research
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {categories.map((category, index) => {
          const IconComp = category.icon;
          return (
            <StudentAchievementCard key={category.title} category={category} IconComp={IconComp} index={index} />
          );
        })}
      </div>

      {/* Additional Stats */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {[
          { label: 'Research Papers', value: '45+' },
          { label: 'Patents Filed', value: '5' },
          { label: 'National Awards', value: '12+' },
          { label: 'Innovation Projects', value: '30+' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={cardHoverVariants}
            custom={index}
            className="bg-gradient-to-br from-forest-green/5 to-academic-gold/5 border border-forest-green/10 p-6 rounded-2xl text-center shadow-sm"
          >
            <p className="text-3xl font-extrabold text-forest-green mb-1">{stat.value}</p>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function StudentAchievementCard({ category, IconComp, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-white rounded-3xl shadow-md border border-gray-100 card-hover overflow-hidden flex flex-col justify-between h-full group"
    >
      <div>
        {/* Photo Container */}
        <div className="w-full h-52 bg-gradient-to-br from-forest-green/10 to-academic-gold/10 flex items-center justify-center overflow-hidden border-b border-gray-50 relative">
          {!imageError ? (
            <img
              src={category.photo}
              alt={category.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-forest-green/5 flex items-center justify-center text-forest-green">
              <div className={`w-16 h-16 rounded-2xl ${category.bgColor} ${category.iconColor} flex items-center justify-center shadow-inner`}>
                <IconComp size={36} />
              </div>
            </div>
          )}
          {/* Floating Icon Badge when photo loaded */}
          {!imageError && (
            <div className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-sm shadow-md flex items-center justify-center ${category.iconColor}`}>
              <IconComp size={20} />
            </div>
          )}
        </div>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-dark-charcoal mb-4 group-hover:text-forest-green transition-colors">
            {category.title}
          </h3>
          <ul className="space-y-3">
            {category.achievements.map((achievement) => (
              <li key={achievement} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                <span className={`flex-shrink-0 w-5 h-5 rounded-full ${category.bgColor} ${category.iconColor} flex items-center justify-center shadow-sm`}>
                  <Check size={11} strokeWidth={3} />
                </span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function FacultyAchievements() {
  const items = [
    {
      icon: FileText,
      iconColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      title: 'Research & Publications',
      items: [
        '150+ International Journal Publications',
        '45+ Conference Papers',
        'Published in prestigious IEEE & ACM venues',
        'Indexed in Scopus and Web of Science databases',
      ],
    },
    {
      icon: Cpu,
      iconColor: 'text-teal-600',
      bgColor: 'bg-teal-50',
      title: 'Patents & Innovation',
      items: [
        '5 Patents Filed in AI & IoT domains',
        '3 Patents Successfully Granted',
        'SIET Innovation Lab Established',
        'Technology Transfer Initiatives',
      ],
    },
    {
      icon: Award,
      iconColor: 'text-academic-gold',
      bgColor: 'bg-academic-gold/10',
      title: 'National Recognition',
      items: [
        'Best Teacher Awards by State bodies',
        'Research Excellence Recognitions',
        'National Fellowship Holders',
        'Distinguished Faculty Status',
      ],
    },
    {
      icon: GraduationCap,
      iconColor: 'text-forest-green',
      bgColor: 'bg-forest-green/10',
      title: 'Academic Contributions',
      items: [
        'Guest Lectures at IITs and NITs',
        'Textbook Authors for Core Engineering',
        'Curriculum Advisory Board Members',
        'International Collaborations',
      ],
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-display font-bold text-dark-charcoal mb-4">
          Faculty Excellence
        </h2>
        <p className="text-xl text-gray-500 font-light max-w-xl mx-auto">
          Our faculty members are recognized researchers, authors, and industry consultants
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {items.map((category, index) => {
          const IconComp = category.icon;
          return (
            <motion.div
              key={category.title}
              variants={cardHoverVariants}
              custom={index}
              whileHover="hover"
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md card-hover flex flex-col justify-between h-full group"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl ${category.bgColor} ${category.iconColor} flex items-center justify-center mb-6 shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                  <IconComp size={28} />
                </div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-5 group-hover:text-forest-green transition-colors">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600 font-light">
                      <span className="text-academic-gold font-extrabold text-sm">★</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Faculty Stats */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
      >
        {[
          { label: 'PhD Faculty', value: '28+' },
          { label: 'Research Grants', value: '₹5 Cr+' },
          { label: 'Citation Index', value: '2000+' },
          { label: 'Mentored PhD', value: '45+' },
        ].map((stat, index) => (
          <motion.div
            key={stat.label}
            variants={cardHoverVariants}
            custom={index}
            className="bg-gradient-to-br from-academic-gold/5 to-forest-green/5 border border-academic-gold/10 p-6 rounded-2xl text-center shadow-sm"
          >
            <p className="text-3xl font-extrabold text-academic-gold mb-1">{stat.value}</p>
            <p className="text-gray-500 text-xs font-semibold uppercase tracking-wider">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
