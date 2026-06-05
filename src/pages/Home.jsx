import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, BookOpen, TrendingUp, FileText } from 'lucide-react';
import { GOOGLE_FORM_URL, STATS, WHY_CHOOSE, RECRUITERS, FACULTY, EVENTS, FACILITIES, CREATIVE_CODEX, DEPARTMENT_TIMELINE, STUDENT_EXCELLENCE, EVENT_CALENDAR, EVENT_HIGHLIGHTS, CREATIVE_CODEX_LOGO } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';
import { useCountUp, useScrollReveal } from '../utils/hooks';
import {ACHIEVEMENTS} from '../constants';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Quick Stats */}
      <QuickStatsSection />

      {/* Why Choose CSE */}
      <WhyChooseSection />

      {/* Placements Preview */}
      <PlacementsPreviewSection />

      {/* Department Timeline */}
      <DepartmentTimelineSection />

      {/* Faculty Preview */}
      <FacultyPreviewSection />

      {/* Student Achievements */}
      <AchievementsSection />

      {/* Student Excellence */}
      <StudentExcellenceSection />

      {/* Events Section */}
      <EventsSection />

      {/* Event Calendar */}
      {/* <EventCalendarSection /> */}

      {/* Event Highlights */}
      {/* <EventHighlightsSection /> */}

      {/* Creative Codex Spotlight */}
      <CreativeCodexSection />

      {/* Facilities */}
      <FacilitiesSection />

      {/* Final CTA */}
      <FinalCTASection />
    </div>
  );
}

function CreativeCodexSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-forest-green/5 to-academic-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUpVariants}
  className="bg-white rounded-3xl shadow-xl overflow-hidden"
>
  <div className="grid md:grid-cols-2 gap-0">

    {/* Left Side */}
    <div className="p-10 md:p-12 flex flex-col justify-center">

      <div className="flex items-center gap-4 mb-6">
        <img
          src={CREATIVE_CODEX_LOGO}
          alt="Creative Codex"
          className="w-20 h-20 rounded-full border-4 border-forest-green object-cover"
        />

        <div>
          <h3 className="text-3xl font-bold text-dark-charcoal">
            {CREATIVE_CODEX.name}
          </h3>

          <p className="text-academic-gold font-semibold">
            {CREATIVE_CODEX.tagline}
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed mb-8">
        {CREATIVE_CODEX.description}
      </p>

      <div className="grid grid-cols-3 gap-4 mb-8">

        <div className="text-center bg-gray-50 rounded-xl p-4">
          <h4 className="text-2xl font-bold text-forest-green">
            100+
          </h4>
          <p className="text-sm text-gray-500">
            Members
          </p>
        </div>

        <div className="text-center bg-gray-50 rounded-xl p-4">
          <h4 className="text-2xl font-bold text-forest-green">
            20+
          </h4>
          <p className="text-sm text-gray-500">
            Events
          </p>
        </div>

        <div className="text-center bg-gray-50 rounded-xl p-4">
          <h4 className="text-2xl font-bold text-forest-green">
            15+
          </h4>
          <p className="text-sm text-gray-500">
            Projects
          </p>
        </div>

      </div>

      <a
        href="/creativecodex"
        className="btn-primary w-fit"
      >
        Explore Creative Codex
      </a>

    </div>

    {/* Right Side */}

    <div className="relative h-[400px]">

      <img
        src="/images/creativecodex/team.jpg"
        alt="Creative Codex Team"
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

      <div className="absolute bottom-8 left-8 text-white">

        <h4 className="text-2xl font-bold mb-2">
          Building Future Innovators
        </h4>

        <p className="text-gray-200">
          Hackathons • Workshops • Projects • Leadership
        </p>

      </div>

    </div>

  </div>
</motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="bg-white rounded-xl shadow-lg p-8 md:p-12 border-l-4 border-forest-green max-w-3xl mx-auto"
        >
          <div className="flex items-center justify-between gap-8 flex-col md:flex-row">
            <div>
              <h3 className="text-2xl font-display font-bold text-dark-charcoal mb-3">{CREATIVE_CODEX.name}</h3>
              <p className="text-academic-gold font-semibold text-lg mb-3">"{CREATIVE_CODEX.tagline}"</p>
              <p className="text-gray-600 leading-relaxed mb-4">
                {CREATIVE_CODEX.description} Our club organizes Shrishtav, IIS symposium, workshops, and mentorship programs that elevate technical excellence and foster innovation across the department.
              </p>
              <a href="#" className="btn-primary inline-block">
                Join Creative Codex
              </a>
            </div>
            <div className="flex-shrink-0">
              <img
                src={CREATIVE_CODEX_LOGO}
                alt="Creative Codex Logo"
                className="w-32 h-32 object-contain"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function HeroSection() {
  const { yPos } = useParallax();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-dark-charcoal text-white">
      {/* Background with parallax */}
      <motion.div
        style={{
          y: yPos,
          backgroundImage: 'linear-gradient(135deg, #0B8F43 0%, #1E1E1E 100%)',
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-4">
            Department of <span className="text-academic-gold">Computer Science</span> & Engineering
          </h1>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0.2}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Building Future Innovators
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0.4}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg"
          >
            Apply Now <ArrowRight size={20} />
          </a>
          <button className="btn-outline text-lg text-white border-white hover:bg-white hover:text-dark-charcoal">
            Explore Department
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="text-white text-center">
          <p className="text-sm mb-2">Scroll to explore</p>
          <div className="text-2xl">⬇</div>
        </div>
      </motion.div>
    </section>
  );
}

function QuickStatsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Our Impact</h2>
          <p className="section-subtitle">Leading figures that define our excellence</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index }) {
  const { count, ref } = useCountUp(stat.number);

  const getIcon = (iconName) => {
    const icons = {
      'Users': <Users size={40} className="text-forest-green" />,
      'BookOpen': <BookOpen size={40} className="text-forest-green" />,
      'TrendingUp': <TrendingUp size={40} className="text-forest-green" />,
      'FileText': <FileText size={40} className="text-forest-green" />,
    };
    return icons[iconName];
  };

  return (
    <motion.div
      ref={ref}
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-lg shadow-lg text-center card-hover"
    >
      <div className="mb-4 flex justify-center">
        {getIcon(stat.icon)}
      </div>
      <div className="text-4xl md:text-5xl font-bold text-forest-green mb-2">
        {count}
        {stat.label.includes('%') && '%'}
      </div>
      <p className="text-gray-600 font-semibold">{stat.label}</p>
    </motion.div>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Why Choose CSE?</h2>
          <p className="section-subtitle">Excellence in education and industry preparation</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {WHY_CHOOSE.map((item, index) => (
            <WhyChooseCard key={item.title} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyChooseCard({ item, index }) {
  const icons = {
    'Briefcase': '💼',
    'Cpu': '🖥️',
    'CheckCircle': '✓',
    'Lightbulb': '💡',
  };

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-white p-8 rounded-xl shadow-lg card-hover border-l-4 border-forest-green"
    >
      <div className="flex items-start gap-4">
        <div className="text-5xl flex-shrink-0">{icons[item.icon]}</div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-dark-charcoal mb-2">{item.title}</h3>
          <p className="text-gray-600 mb-4 leading-relaxed">{item.description}</p>
          <ul className="space-y-2">
            {item.features?.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-700">
                <span className="text-forest-green font-bold">→</span>
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function PlacementsPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Excellent Placements</h2>
          <p className="section-subtitle">In Association with Creative Codex</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center justify-center mb-8"
        >
          <img
            src={CREATIVE_CODEX_LOGO}
            alt="Creative Codex Logo"
            className="h-12 object-contain"
          />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-r from-forest-green/10 to-academic-gold/10 p-6 rounded-lg text-center mb-8"
        >
          <p className="text-lg font-semibold text-dark-charcoal">
            "Empowering Careers Through Innovation"
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-8">
            {RECRUITERS.slice(0, 14).map((company, index) => (
              <motion.div
                key={company}
                variants={cardHoverVariants}
                custom={index * 0.05}
                className="bg-gray-50 p-4 rounded-lg text-center hover:shadow-lg transition-all"
              >
                <p className="font-semibold text-gray-700">{company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          <PlacementStatCard label="Placement Rate" value="92%" />
          <PlacementStatCard label="Highest Package" value="₹18 LPA" />
          <PlacementStatCard label="Average Package" value="₹8.5 LPA" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <a href="/placements" className="btn-primary text-lg">
            View Placements <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function PlacementStatCard({ label, value }) {
  return (
    <div className="bg-gradient-to-br from-forest-green/10 to-academic-gold/10 p-8 rounded-lg text-center">
      <p className="text-gray-600 mb-2">{label}</p>
      <p className="text-4xl font-bold text-forest-green">{value}</p>
    </div>
  );
}

function DepartmentTimelineSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Journey of Growth and Excellence</h2>
          <p className="section-subtitle">Milestones that shaped our department</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-forest-green to-academic-gold"></div>

          {/* Timeline Items */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12 md:space-y-0"
          >
            {DEPARTMENT_TIMELINE.map((item, index) => (
              <TimelineItem key={item.year} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      className="mb-8 md:mb-0"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-0 items-center">
        {/* Left side for even, right for odd */}
        <div className={`${isEven ? 'md:col-span-1 md:text-right' : 'md:col-span-1 md:order-2'}`}>
          <motion.div
            initial={{ opacity: 0, x: isEven ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
          >
            <h3 className="text-3xl font-display font-bold text-forest-green mb-2">{item.year}</h3>
            <h4 className="text-xl font-bold text-dark-charcoal mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        </div>

        {/* Center dot */}
        <div className="hidden md:flex justify-center">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="relative z-10"
          >
            <div className="w-6 h-6 bg-forest-green rounded-full border-4 border-white shadow-lg"></div>
          </motion.div>
        </div>

        {/* Right side for even, left for odd */}
        <div className={`${isEven ? 'md:col-span-1 md:order-2' : 'md:col-span-1 md:text-left'}`}>
          {/* Empty for spacing */}
        </div>
      </div>
    </motion.div>
  );
}

function FacultyPreviewSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Meet Our Faculty</h2>
          <p className="section-subtitle">Experienced educators shaping future leaders</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8"
        >
          {FACULTY.map((faculty, index) => (
            <FacultyCard key={faculty.id} faculty={faculty} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <a href="/faculty" className="btn-primary text-lg">
            View All Faculty <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FacultyCard({ faculty, index }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-white p-6 rounded-lg shadow-lg card-hover text-center"
    >
      <div className="mb-4 flex justify-center">
  <img
    src={faculty.image}
    alt={faculty.name}
    className="w-24 h-24 rounded-full object-cover border-2 border-forest-green"
  />
</div>
      <h3 className="text-xl font-bold text-dark-charcoal mb-2">{faculty.name}</h3>
      <p className="text-forest-green font-semibold text-sm mb-2">{faculty.designation}</p>
      <p className="text-gray-600 text-xs mb-3">{faculty.qualification}</p>
      <p className="text-gray-500 text-xs italic">{faculty.specialization}</p>
    </motion.div>
  );
}

function AchievementsSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Student Achievements</h2>
          <p className="section-subtitle">
            Celebrating excellence across academics, innovation, sports and culture
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-8"
        >
          {ACHIEVEMENTS.student.map((item, index) => (
            <AchievementCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <a href="/achievements" className="btn-primary">
            View All Achievements
          </a>
        </div>
      </div>
    </section>
  );
}

function StudentExcellenceSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">
          Student Excellence
        </h2>

        <p className="text-center text-gray-600">
          Coming Soon
        </p>
      </div>
    </section>
  );
}

function AchievementCard({ item, index }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className="relative h-60 overflow-hidden">
        <img
          src={item.photo}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="absolute bottom-4 left-4">
          <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-dark-charcoal mb-2">
          {item.title}
        </h3>

        <p className="text-gray-600">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Events</h2>
          <p className="section-subtitle">Creating memorable learning experiences</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8"
        >
          {EVENTS.slice(0, 4).map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <a href="/events" className="btn-primary text-lg">
            View All Events <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function EventCard({ event, index }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="overflow-hidden rounded-2xl bg-white shadow-lg"
    >
      <div className="h-60 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-2xl font-bold text-dark-charcoal">
            {event.name}
          </h3>

          <span className="text-xs bg-forest-green/10 text-forest-green px-3 py-1 rounded-full">
            {event.category}
          </span>
        </div>

        <p className="text-gray-600 mb-4">
          {event.description}
        </p>

        <p className="text-sm font-semibold text-academic-gold">
          {event.date}
        </p>
      </div>
    </motion.div>
  );
}

function FacilitiesSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-12"
        >
          <h2 className="section-title">World-Class Facilities</h2>
          <p className="section-subtitle">Infrastructure for excellence</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {FACILITIES.map((facility, index) => (
            <motion.div
              key={facility.title}
              variants={cardHoverVariants}
              custom={index}
              whileHover="hover"
              className="bg-gradient-to-br from-forest-green/5 to-academic-gold/5 p-8 rounded-lg shadow-lg card-hover"
            >
              <div className="text-4xl mb-4">
                {facility.icon === 'Cpu' && '🖥️'}
                {facility.icon === 'Monitor' && '📱'}
                {facility.icon === 'Presentation' && '📊'}
                {facility.icon === 'Cloud' && '☁️'}
                {facility.icon === 'Zap' && '⚡'}
                {facility.icon === 'Book' && '📚'}
              </div>
              <h3 className="text-xl font-bold text-dark-charcoal mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-forest-green to-academic-gold text-white">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Admissions Open 2026
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join us and shape your future in Computer Science & Engineering
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-forest-green px-10 py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-all"
        >
          Apply Now <ArrowRight size={24} />
        </a>
      </motion.div>
    </section>
  );
}

function useParallax() {
  const [yPos, setYPos] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      setYPos(window.scrollY * 0.1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { yPos };
}
