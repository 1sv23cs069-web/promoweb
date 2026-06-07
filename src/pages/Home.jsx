import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Users, BookOpen, TrendingUp, 
  FileText, Briefcase, Cpu, Lightbulb, Play, Pause, 
  ChevronLeft, ChevronRight, Monitor, Cloud, Zap, Book, 
  ArrowDown, Award, Sparkles, Trophy
} from 'lucide-react';
import { 
  GOOGLE_FORM_URL, STATS, WHY_CHOOSE, RECRUITERS, FACULTY, 
  EVENTS, FACILITIES, CREATIVE_CODEX, DEPARTMENT_TIMELINE, 
  STUDENT_EXCELLENCE, EVENT_CALENDAR, EVENT_HIGHLIGHTS, 
  CREATIVE_CODEX_LOGO, ACHIEVEMENTS 
} from '../constants';
import { 
  fadeUpVariants, staggerContainer, cardHoverVariants 
} from '../utils/animations';
import { useCountUp } from '../utils/hooks';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-dark-charcoal selection:bg-forest-green selection:text-white">
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
    <section className="py-20 md:py-28 bg-gradient-to-br from-forest-green/5 to-academic-gold/5 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title">Creative Codex Spotlight</h2>
          <p className="section-subtitle">Driving innovation and technical excellence in the department</p>
        </motion.div>

        {/* Premium Gold Shimmer Card */}
        <div className="p-[1.5px] bg-gradient-to-br from-forest-green via-academic-gold to-forest-green rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="bg-white rounded-[22px] overflow-hidden"
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-10 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-5 mb-6">
                  {/* Glowing Spotlight Circle */}
                  <div className="relative group flex-shrink-0">
                    <div className="absolute inset-0 bg-academic-gold/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center justify-center h-20 w-20 rounded-full bg-white border-4 border-academic-gold shadow-md overflow-hidden transition-transform duration-500 hover:scale-105">
                      <img
                        src={CREATIVE_CODEX_LOGO}
                        alt="Creative Codex Logo"
                        className="h-14 w-14 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden text-3xl text-forest-green select-none font-bold">💻</div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl font-display font-bold text-dark-charcoal">
                      {CREATIVE_CODEX.name}
                    </h3>
                    <p className="text-academic-gold font-semibold tracking-wide">
                      {CREATIVE_CODEX.tagline}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {CREATIVE_CODEX.description} Our active community nurtures developer potential through student-led hackathons, collaborative tech products, peer mentoring, and hands-on workshops.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-academic-gold/30 transition-colors">
                    <h4 className="text-2xl font-bold text-forest-green">100+</h4>
                    <p className="text-sm text-gray-500">Members</p>
                  </div>
                  <div className="text-center bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-academic-gold/30 transition-colors">
                    <h4 className="text-2xl font-bold text-forest-green">20+</h4>
                    <p className="text-sm text-gray-500">Events</p>
                  </div>
                  <div className="text-center bg-gray-50 border border-gray-100 rounded-xl p-4 hover:border-academic-gold/30 transition-colors">
                    <h4 className="text-2xl font-bold text-forest-green">15+</h4>
                    <p className="text-sm text-gray-500">Projects</p>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="btn-primary w-fit flex items-center gap-2"
                >
                  Join Creative Codex <ArrowRight size={18} />
                </a>
              </div>

              {/* Right Team Photo */}
              <div className="relative h-[350px] md:h-auto min-h-[350px]">
                <img
                  src="/images/creativecodex/team.jpg"
                  alt="Creative Codex Team"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white pr-6">
                  <h4 className="text-2xl font-bold mb-2">Building Future Innovators</h4>
                  <p className="text-gray-200 text-sm">
                    Hackathons • Workshops • Projects • Leadership
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
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
        className="absolute inset-0 z-0 bg-cover bg-center"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0}
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Department of <span className="text-academic-gold">Computer Science</span> & Engineering
          </h1>
        </motion.div>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fadeUpVariants}
          custom={0.2}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Building Future Innovators at Shridevi Institute of Engineering & Technology
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
            className="btn-primary text-lg px-8 py-3.5 shadow-lg hover:shadow-xl"
          >
            Apply Now <ArrowRight size={20} />
          </a>
          <a 
            href="/about"
            className="btn-outline text-lg text-white border-white hover:bg-white hover:text-dark-charcoal px-8 py-3.5 shadow-lg"
          >
            Explore Department
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="text-white text-center flex flex-col items-center">
          <p className="text-xs tracking-widest uppercase mb-2 opacity-80">Scroll to explore</p>
          <ArrowDown size={20} className="animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}

function QuickStatsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
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
      'Users': <Users size={32} className="text-forest-green" />,
      'BookOpen': <BookOpen size={32} className="text-forest-green" />,
      'TrendingUp': <TrendingUp size={32} className="text-forest-green" />,
      'FileText': <FileText size={32} className="text-forest-green" />,
    };
    return icons[iconName];
  };

  return (
    <motion.div
      ref={ref}
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-md text-center card-hover border border-gray-100 flex flex-col justify-between"
    >
      <div className="mb-4 flex justify-center w-14 h-14 rounded-full bg-forest-green/10 items-center mx-auto shadow-inner">
        {getIcon(stat.icon)}
      </div>
      <div>
        <div className="text-4xl md:text-5xl font-bold text-forest-green mb-2">
          {count}
          {stat.label.includes('%') && '%'}
        </div>
        <p className="text-gray-500 text-sm font-semibold tracking-wide uppercase">{stat.label.replace('%', '')}</p>
      </div>
    </motion.div>
  );
}

function WhyChooseSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title">Why Choose CSE?</h2>
          <p className="section-subtitle">Excellence in education and industry preparation</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 animate-fadeUp"
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
  const getIcon = (iconName) => {
    const icons = {
      'Briefcase': <Briefcase size={28} className="text-forest-green" />,
      'Cpu': <Cpu size={28} className="text-forest-green" />,
      'CheckCircle': <CheckCircle size={28} className="text-forest-green" />,
      'Lightbulb': <Lightbulb size={28} className="text-forest-green" />,
    };
    return icons[iconName] || <CheckCircle size={28} className="text-forest-green" />;
  };

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-white p-8 rounded-2xl shadow-md card-hover border border-gray-100 border-l-4 border-l-forest-green flex flex-col justify-between"
    >
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-forest-green/10 flex items-center justify-center flex-shrink-0 shadow-inner">
          {getIcon(item.icon)}
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-dark-charcoal mb-3">{item.title}</h3>
          <p className="text-gray-600 mb-5 leading-relaxed text-sm">{item.description}</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {item.features?.map((feature) => (
              <li key={feature} className="flex items-center gap-2 text-gray-700 text-xs font-medium">
                <span className="text-forest-green font-bold">✓</span>
                <span>{feature}</span>
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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-10"
        >
          <h2 className="section-title">Excellent Placements</h2>
          <p className="section-subtitle">Empowering student careers through industrial linkages</p>
        </motion.div>

        {/* Highlight Association with Creative Codex */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mb-10"
        >
          <div className="p-[1px] bg-gradient-to-r from-forest-green to-academic-gold rounded-full shadow-md">
            <div className="bg-white px-5 py-2 rounded-full flex items-center gap-3">
              <img
                src={CREATIVE_CODEX_LOGO}
                alt="Creative Codex Logo"
                className="h-8 w-8 object-contain"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <span className="text-xs font-bold uppercase tracking-wider text-forest-green">
                In Association with Creative Codex
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
            {RECRUITERS.slice(0, 14).map((company, index) => (
              <motion.div
                key={company}
                variants={cardHoverVariants}
                custom={index * 0.05}
                className="bg-gray-50 border border-gray-100 p-4 rounded-xl text-center hover:shadow-md hover:border-forest-green/20 transition-all cursor-default"
              >
                <p className="font-semibold text-gray-700 text-sm">{company}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto"
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
    <div className="bg-gradient-to-br from-forest-green/5 to-academic-gold/5 border border-forest-green/10 p-8 rounded-2xl text-center shadow-sm hover:shadow-md transition-shadow">
      <p className="text-gray-500 font-semibold tracking-wider text-xs uppercase mb-2">{label}</p>
      <p className="text-4xl font-bold text-forest-green">{value}</p>
    </div>
  );
}

function DepartmentTimelineSection() {
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
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title">Our Journey of Growth & Excellence</h2>
          <p className="section-subtitle">Key milestones that shaped our department</p>
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

function FacultyPreviewSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
        >
          <h2 className="section-title">Meet Our Faculty</h2>
          <p className="section-subtitle">Experienced educators shaping future leaders</p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10"
        >
          {FACULTY.slice(0, 4).map((faculty, index) => (
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
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 card-hover text-center flex flex-col justify-between"
    >
      <div>
        <div className="mb-4 flex justify-center relative group">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-forest-green shadow-inner bg-gray-50 flex items-center justify-center">
            {!imageError ? (
              <img
                src={faculty.image}
                alt={faculty.name}
                className="w-full h-full object-cover"
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-forest-green/10 flex items-center justify-center text-forest-green">
                <Users size={36} />
              </div>
            )}
          </div>
        </div>
        <h3 className="text-xl font-bold text-dark-charcoal mb-1">{faculty.name}</h3>
        <p className="text-forest-green font-semibold text-sm mb-2">{faculty.designation}</p>
        <p className="text-gray-500 text-xs mb-3">{faculty.qualification}</p>
      </div>
      <p className="text-gray-400 text-xs italic border-t border-gray-50 pt-3 mt-3">{faculty.specialization}</p>
    </motion.div>
  );
}

function AchievementsSection() {
  return (
    <section className="py-20 bg-gray-50 border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
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
          {ACHIEVEMENTS.student.slice(0, 2).map((item, index) => (
            <AchievementCard
              key={item.title}
              item={item}
              index={index}
            />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <a href="/achievements" className="btn-primary text-lg">
            View All Achievements <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}

function AchievementCard({ item, index }) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="overflow-hidden rounded-2xl bg-white shadow-md border border-gray-100 flex flex-col h-full"
    >
      <div className="relative h-60 overflow-hidden bg-gray-100">
        {!imageError ? (
          <img
            src={item.photo}
            alt={item.title}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-forest-green/10 to-academic-gold/10 flex items-center justify-center text-forest-green p-4 text-center">
            <Trophy size={48} className="text-academic-gold opacity-80" />
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

        <div className="absolute bottom-4 left-4">
          <span className="bg-white/95 backdrop-blur-sm text-forest-green font-bold text-xs uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <h3 className="text-xl font-bold text-dark-charcoal mb-2">
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

function FacilitiesSection() {
  const getIcon = (iconName) => {
    const icons = {
      'Cpu': <Cpu size={36} className="text-forest-green" />,
      'Monitor': <Monitor size={36} className="text-forest-green" />,
      'Presentation': <TrendingUp size={36} className="text-forest-green" />,
      'Cloud': <Cloud size={36} className="text-forest-green" />,
      'Zap': <Zap size={36} className="text-forest-green" />,
      'Book': <Book size={36} className="text-forest-green" />,
    };
    return icons[iconName] || <Cpu size={36} className="text-forest-green" />;
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center mb-16"
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
              className="bg-white border border-gray-100 p-8 rounded-2xl shadow-md card-hover flex flex-col items-start gap-4"
            >
              <div className="w-14 h-14 rounded-2xl bg-forest-green/10 flex items-center justify-center shadow-inner flex-shrink-0">
                {getIcon(facility.icon)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-dark-charcoal mb-2">{facility.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-forest-green to-academic-gold text-white text-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-white blur-3xl" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariants}
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Admissions Open 2026
        </h2>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
          Join Shridevi's CSE department and shape your future with state-of-the-art education and research.
        </p>
        <a
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-white text-forest-green hover:bg-forest-green hover:text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
        >
          Apply Now <ArrowRight size={22} />
        </a>
      </motion.div>
    </section>
  );
}

function useParallax() {
  const [yPos, setYPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setYPos(window.scrollY * 0.15);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { yPos };
}
