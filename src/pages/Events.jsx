import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { EVENTS, CREATIVE_CODEX } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';

export default function Events() {
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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Events & Workshops</h1>
          <p className="text-xl opacity-90">Creating memorable learning experiences</p>
        </div>
      </motion.section>

      {/* Featured Events */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Featured Events</h2>
            <p className="section-subtitle">Upcoming and past highlights</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {EVENTS.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Event Categories</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Technical Festivals',
                icon: '🎯',
                description: 'Shrishtav: Our flagship technical festival featuring competitions, workshops, and innovation showcases.',
                events: ['Hackathons', 'Tech Competitions', 'Coding Contests', 'AI/ML Workshops'],
              },
              {
                title: 'Seminars & Workshops',
                icon: '🎓',
                description: 'Industry expert talks, skill development sessions, and hands-on workshops on latest technologies.',
                events: ['Cloud Computing', 'Cybersecurity', 'Full-stack Development', 'Data Science'],
              },
              {
                title: 'Department Activities',
                icon: '💻',
                description: 'IIS (Innovation Ignite Symposium): In association with Creative Codex, fostering innovation and collaborative learning.',
                events: ['Innovation Challenge', 'Project Showcase', 'Team Competitions', 'Mentorship Programs'],
              },
            ].map((category, index) => (
              <motion.div
                key={category.title}
                variants={cardHoverVariants}
                custom={index}
                whileHover="hover"
                className="bg-white p-8 rounded-lg shadow-lg card-hover"
              >
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-dark-charcoal mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.events.map((event) => (
                    <li key={event} className="flex items-center gap-2 text-gray-600">
                      <span className="text-forest-green">•</span>
                      {event}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Event Calendar</h2>
            <p className="section-subtitle">Mark your calendars</p>
          </motion.div>

          <div className="space-y-6">
            {[
              { month: 'January', event: 'New Year Tech Bootcamp', type: 'Workshop' },
              { month: 'March', event: 'Shrishtav (Technical Festival)', type: 'Festival' },
              { month: 'May', event: 'Summer Internship Talks', type: 'Seminar' },
              { month: 'July', event: 'Cloud Computing Bootcamp', type: 'Workshop' },
              { month: 'September', event: 'IIS (Innovation Ignite Symposium)', type: 'Competition' },
              { month: 'October', event: 'Tech Symposium', type: 'Conference' },
              { month: 'November', event: 'Placement Drive Preparation', type: 'Workshop' },
              { month: 'December', event: 'Year-end Talent Show', type: 'Cultural' },
            ].map((item, index) => (
              <motion.div
                key={item.month}
                variants={fadeUpVariants}
                custom={index * 0.05}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-forest-green text-white">
                    <Calendar size={24} />
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-dark-charcoal">{item.month}</h3>
                  <p className="text-gray-600">{item.event}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-academic-gold/20 text-academic-gold text-sm font-semibold rounded-full">
                    {item.type}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Event Highlights</h2>
            <p className="section-subtitle">Memorable moments from our events</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              '📸', '🎉', '🏆', '👥', '💻', '🎤', '📊', '🌟',
            ].map((emoji, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                custom={index}
                whileHover="hover"
                className="bg-white aspect-square rounded-lg shadow-lg flex items-center justify-center text-6xl card-hover"
              >
                {emoji}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Creative Codex Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-forest-green/10 to-academic-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Creative Codex</h2>
            <p className="section-subtitle">Driving Department Innovation</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-l-4 border-forest-green"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-32 w-32 rounded-full bg-gradient-to-br from-forest-green to-academic-gold">
                  <span className="text-6xl">💻</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-3xl font-display font-bold text-dark-charcoal mb-3">{CREATIVE_CODEX.name}</h3>
                <p className="text-academic-gold font-semibold text-lg mb-3">" {CREATIVE_CODEX.tagline} "</p>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {CREATIVE_CODEX.description} Through competitions, workshops, and collaborative projects, we foster a culture of technical excellence and innovation.
                </p>
                <div className="flex flex-wrap gap-3">
                  <a href="#" className="btn-primary">
                    Join Creative Codex
                  </a>
                  <a href="#" className="btn-outline">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
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
            Join Our Community
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Be part of exciting events and opportunities
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-forest-green px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
          >
            Get More Information
          </a>
        </motion.div>
      </section>
    </div>
  );
}

function EventCard({ event, index }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg card-hover"
    >
      <div className="text-6xl mb-4">{event.image}</div>
      <h3 className="text-2xl font-bold text-dark-charcoal mb-2">{event.name}</h3>
      <p className="text-gray-600 mb-4">{event.description}</p>
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-forest-green">{event.date}</span>
        <span className="px-3 py-1 bg-forest-green/10 text-forest-green text-xs font-semibold rounded-full">
          {event.category}
        </span>
      </div>
    </motion.div>
  );
}
