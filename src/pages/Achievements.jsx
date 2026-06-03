import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS, CREATIVE_CODEX } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';

export default function Achievements() {
  const [activeTab, setActiveTab] = useState('student');

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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Achievements</h1>
          <p className="text-xl opacity-90">Excellence celebrated across all domains</p>
        </div>
      </motion.section>

      {/* Tabs */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setActiveTab('student')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'student'
                  ? 'bg-forest-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Student Achievements
            </button>
            <button
              onClick={() => setActiveTab('faculty')}
              className={`px-8 py-3 rounded-lg font-semibold transition-all ${
                activeTab === 'faculty'
                  ? 'bg-forest-green text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Faculty Achievements
            </button>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'student' && (
            <StudentAchievements />
          )}
          {activeTab === 'faculty' && (
            <FacultyAchievements />
          )}
        </div>
      </section>

      {/* Creative Codex Recognition */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-forest-green/10 to-academic-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Supported by Creative Codex</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="bg-white rounded-xl shadow-lg p-8 text-center border-t-4 border-forest-green"
          >
            <p className="text-lg text-gray-600 mb-3">
              Many of our student achievements are facilitated through Creative Codex - our innovation club that provides mentorship, resources, and platforms for showcasing talent.
            </p>
            <p className="text-forest-green font-semibold">Creative Codex: "Bringing Ideas to Life Through Technology"</p>
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
            Celebrate Excellence
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our community of achievers
          </p>
          <a href="/contact" className="btn-primary text-lg bg-white text-forest-green hover:bg-gray-100">
            Get in Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

function StudentAchievements() {
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
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display font-bold text-dark-charcoal mb-4">
          Student Excellence
        </h2>
        <p className="text-xl text-gray-600">
          Our students shine in academics, sports, and innovation
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            emoji: '🏆',
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
            emoji: '🥇',
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
            emoji: '⚽',
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
            emoji: '🎭',
            title: 'Cultural',
            achievements: [
              'Best Technical Event Organizers',
              'Cultural Fest Coordinators',
              'Technical Festival "Shrishtav" Success',
              'Departmental Quiz Competitions',
            ],
            photo: '/images/achievements/cultural.jpg',
          },
        ].map((category, index) => (
          <motion.div
            key={category.title}
            variants={cardHoverVariants}
            custom={index}
            whileHover="hover"
            className="bg-white rounded-lg shadow-lg card-hover overflow-hidden"
          >
            {/* Photo Placeholder */}
            <div className="w-full h-48 bg-gradient-to-br from-forest-green/20 to-academic-gold/20 flex items-center justify-center overflow-hidden border-b-4 border-forest-green">
              <img
                src={category.photo}
                alt={category.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-6xl text-gray-400">{category.emoji}</span>
            </div>

            <div className="p-6">
              <h3 className="text-2xl font-bold text-dark-charcoal mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <span className="text-forest-green font-bold mt-1 text-lg">✓</span>
                    <span className="text-gray-600">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Stats */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
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
            className="bg-gradient-to-br from-forest-green/10 to-academic-gold/10 p-6 rounded-lg text-center border border-forest-green/20"
          >
            <p className="text-3xl font-bold text-forest-green mb-2">{stat.value}</p>
            <p className="text-gray-600 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

function FacultyAchievements() {
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
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-display font-bold text-dark-charcoal mb-4">
          Faculty Excellence
        </h2>
        <p className="text-xl text-gray-600">
          Our faculty members are recognized researchers and industry experts
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {[
          {
            emoji: '📄',
            title: 'Research & Publications',
            items: [
              '150+ International Journal Publications',
              '45+ Conference Papers',
              'Published in prestigious venues',
              'Indexed in Scopus and Web of Science',
            ],
          },
          {
            emoji: '🔬',
            title: 'Patents & Innovation',
            items: [
              '5 Patents Filed in AI & IoT',
              '3 Patents Granted',
              'Innovation Lab Established',
              'Technology Transfer Initiatives',
            ],
          },
          {
            emoji: '🏅',
            title: 'National Recognition',
            items: [
              'Best Teacher Awards',
              'Research Excellence Recognitions',
              'National Fellowship Holders',
              'Distinguished Faculty Status',
            ],
          },
          {
            emoji: '🎓',
            title: 'Academic Contributions',
            items: [
              'Guest Lectures at IITs',
              'Textbook Authors',
              'Curriculum Development',
              'International Collaborations',
            ],
          },
        ].map((category, index) => (
          <motion.div
            key={category.title}
            variants={cardHoverVariants}
            custom={index}
            whileHover="hover"
            className="bg-white p-8 rounded-lg shadow-lg card-hover"
          >
            <div className="text-5xl mb-4">{category.emoji}</div>
            <h3 className="text-2xl font-bold text-dark-charcoal mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-academic-gold font-bold mt-1">★</span>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Faculty Stats */}
      <motion.div
        variants={staggerContainer}
        className="grid grid-cols-1 md:grid-cols-4 gap-6"
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
            className="bg-gradient-to-br from-academic-gold/10 to-forest-green/10 p-6 rounded-lg text-center"
          >
            <p className="text-3xl font-bold text-academic-gold mb-2">{stat.value}</p>
            <p className="text-gray-600 font-semibold">{stat.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
