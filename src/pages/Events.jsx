import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Trophy, BookOpen, Cpu, Check, X, MapPin, Clock, 
  ArrowRight, Bell, Sparkles, ZoomIn, ChevronLeft, ChevronRight, 
  Download, Laptop, Award, CalendarDays
} from 'lucide-react';
import { 
  EVENTS, 
  CREATIVE_CODEX, 
  EVENT_CALENDAR, 
  EVENT_HIGHLIGHTS, 
  CREATIVE_CODEX_LOGO 
} from '../constants';
import { 
  fadeUpVariants, 
  staggerContainer, 
  cardHoverVariants,
  scaleUpVariants 
} from '../utils/animations';

export default function Events() {
  // States for interactive features
  const [calendarFilter, setCalendarFilter] = useState('All');
  const [selectedCalendarEvent, setSelectedCalendarEvent] = useState(null);
  const [registeredEvents, setRegisteredEvents] = useState({});
  const [registrationForm, setRegistrationForm] = useState({ name: '', email: '', year: '1st Year' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [calendarNotice, setCalendarNotice] = useState(null);
  
  // Lightbox state for highlights
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Categories list for filtering calendar
  const categories = ['All', 'Workshop', 'Festival', 'Seminar', 'Competition', 'Conference', 'Cultural'];

  // Handle mock registration submission
  const handleRegister = (e) => {
    e.preventDefault();
    if (!registrationForm.name || !registrationForm.email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setRegisteredEvents(prev => ({
        ...prev,
        [selectedCalendarEvent.event]: true
      }));
      setIsSubmitting(false);
    }, 1200);
  };

  // Generate and download mock .ics file for calendar events
  const handleAddToCalendar = (event, e) => {
    e.stopPropagation();
    
    const title = event.event;
    const description = `Department of CSE - ${event.type}`;
    const monthNames = {
      January: 0, February: 1, March: 2, April: 3, May: 4, June: 5,
      July: 6, August: 7, September: 8, October: 9, November: 10, December: 11
    };
    const monthNum = monthNames[event.month] ?? 0;
    const year = new Date().getFullYear();
    const startDate = new Date(year, monthNum, 15, 10, 0, 0); // Scheduled for 15th at 10 AM
    const endDate = new Date(year, monthNum, 15, 16, 0, 0); // Scheduled to end at 4 PM

    const formatDate = (date) => {
      return date.toISOString().replace(/-|:|\.\d+/g, "");
    };

    const icsContent = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//SIET CSE//Events Calendar//EN",
      "BEGIN:VEVENT",
      `UID:${event.month}-${year}@cse.shridevi.edu.in`,
      `DTSTAMP:${formatDate(new Date())}`,
      `DTSTART:${formatDate(startDate)}`,
      `DTEND:${formatDate(endDate)}`,
      `SUMMARY:${title}`,
      `DESCRIPTION:${description}`,
      "LOCATION:Department of Computer Science & Engineering, SIET Campus, Tumkur",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    try {
      const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = `${title.replace(/\s+/g, "_")}.ics`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Trigger temporary success notification
      setCalendarNotice(`Added "${title}" to your calendar!`);
      setTimeout(() => setCalendarNotice(null), 3500);
    } catch (error) {
      console.error("Failed to generate calendar file", error);
    }
  };

  // Filter calendar list
  const filteredCalendar = EVENT_CALENDAR.filter(item => {
    if (calendarFilter === 'All') return true;
    return item.type.toLowerCase() === calendarFilter.toLowerCase();
  });

  // Lightbox Navigation
  const showPrevHighlight = () => {
    setLightboxIndex(prev => (prev === 0 ? EVENT_HIGHLIGHTS.length - 1 : prev - 1));
  };

  const showNextHighlight = () => {
    setLightboxIndex(prev => (prev === EVENT_HIGHLIGHTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 text-dark-charcoal selection:bg-forest-green selection:text-white">
      {/* Toast Notice */}
      <AnimatePresence>
        {calendarNotice && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 z-50 bg-forest-green text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 border border-white/20 font-medium"
          >
            <Check size={18} strokeWidth={3} className="bg-white text-forest-green rounded-full p-0.5" />
            <span>{calendarNotice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <motion.section
        className="relative py-24 md:py-32 bg-gradient-to-br from-forest-green via-forest-green/90 to-academic-gold text-white overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariants}
      >
        {/* Dynamic Abstract Shapes */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-academic-gold blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-semibold tracking-wider uppercase mb-6 border border-white/20"
          >
            Empowerment through knowledge
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight leading-tight">
            Events & Workshops
          </h1>
          <p className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto font-light leading-relaxed">
            Creating memorable learning experiences and fostering technical excellence
          </p>
        </div>
      </motion.section>

      {/* Featured Events */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Featured Events</h2>
            <p className="section-subtitle">Upcoming and past department highlights</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          >
            {EVENTS.map((event, index) => (
              <EventCard key={event.id} event={event} index={index} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Event Categories</h2>
            <p className="section-subtitle">Explore the diverse learning platforms we offer</p>
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
                icon: Trophy,
                color: 'text-academic-gold',
                bgColor: 'bg-academic-gold/10',
                borderColor: 'hover:border-academic-gold/40',
                description: 'Shrishtav: Our flagship technical festival featuring competitions, workshops, and innovation showcases.',
                events: ['Hackathons', 'Tech Competitions', 'Coding Contests', 'AI/ML Workshops'],
              },
              {
                title: 'Seminars & Workshops',
                icon: BookOpen,
                color: 'text-forest-green',
                bgColor: 'bg-forest-green/10',
                borderColor: 'hover:border-forest-green/40',
                description: 'Industry expert talks, skill development sessions, and hands-on workshops on latest technologies.',
                events: ['Cloud Computing', 'Cybersecurity', 'Full-stack Development', 'Data Science'],
              },
              {
                title: 'Department Activities',
                icon: Cpu,
                color: 'text-blue-600',
                bgColor: 'bg-blue-50',
                borderColor: 'hover:border-blue-400/40',
                description: 'IIS (Innovation Ignite Symposium): In association with Creative Codex, fostering innovation and collaborative learning.',
                events: ['Innovation Challenge', 'Project Showcase', 'Team Competitions', 'Mentorship Programs'],
              },
            ].map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={cardHoverVariants}
                  custom={index}
                  whileHover="hover"
                  className={`group bg-white p-8 rounded-2xl shadow-md border border-gray-100 ${category.borderColor} transition-all duration-300 flex flex-col justify-between h-full`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl ${category.bgColor} ${category.color} flex items-center justify-center mb-6 shadow-inner transition-transform duration-300 group-hover:scale-110`}>
                      <IconComponent size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-dark-charcoal mb-3 group-hover:text-forest-green transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {category.description}
                    </p>
                  </div>
                  <ul className="space-y-3 pt-6 border-t border-gray-50">
                    {category.events.map((event) => (
                      <li key={event} className="flex items-center gap-3 text-gray-700 text-sm">
                        <span className={`flex-shrink-0 w-5 h-5 rounded-full ${category.bgColor} ${category.color} flex items-center justify-center shadow-sm`}>
                          <Check size={11} strokeWidth={3} />
                        </span>
                        <span className="font-medium">{event}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Interactive Event Calendar */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Event Calendar</h2>
            <p className="section-subtitle font-light mt-1">Interactive roadmap of our active calendar year</p>
          </motion.div>

          {/* Interactive Category Filter Bar */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCalendarFilter(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  calendarFilter === cat
                    ? 'bg-forest-green text-white border-forest-green shadow-lg scale-105'
                    : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:border-gray-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Calendar Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredCalendar.map((item, index) => {
                // Determine colors based on type
                const colorConfig = {
                  Workshop: { border: 'border-t-forest-green', text: 'text-forest-green', bg: 'bg-forest-green/5' },
                  Festival: { border: 'border-t-academic-gold', text: 'text-academic-gold', bg: 'bg-academic-gold/5' },
                  Seminar: { border: 'border-t-blue-500', text: 'text-blue-500', bg: 'bg-blue-500/5' },
                  Competition: { border: 'border-t-red-500', text: 'text-red-500', bg: 'bg-red-50/5' },
                  Conference: { border: 'border-t-purple-500', text: 'text-purple-500', bg: 'bg-purple-50/5' },
                  Cultural: { border: 'border-t-pink-500', text: 'text-pink-500', bg: 'bg-pink-50/5' },
                }[item.type] || { border: 'border-t-gray-500', text: 'text-gray-500', bg: 'bg-gray-50' };

                return (
                  <motion.div
                    key={item.month}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -6, shadow: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)' }}
                    onClick={() => setSelectedCalendarEvent(item)}
                    className={`cursor-pointer bg-white rounded-2xl shadow-sm border border-gray-100 border-t-4 ${colorConfig.border} p-6 flex flex-col justify-between h-[230px] transition-all group relative overflow-hidden`}
                  >
                    {/* Background Subtle Icon Accent */}
                    <div className="absolute right-[-10px] bottom-[-10px] text-gray-100 text-9xl pointer-events-none group-hover:scale-110 transition-transform duration-300 select-none">
                      {item.icon}
                    </div>

                    <div className="relative z-10">
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-xs font-bold uppercase tracking-wider text-gray-400">
                          {item.month}
                        </span>
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${colorConfig.bg} ${colorConfig.text}`}>
                          {item.type}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-dark-charcoal line-clamp-2 leading-snug group-hover:text-forest-green transition-colors duration-300">
                        {item.event}
                      </h3>
                    </div>

                    <div className="relative z-10 pt-4 flex items-center justify-between border-t border-gray-50">
                      <span className="text-xs font-semibold text-forest-green flex items-center gap-1 group-hover:underline">
                        Register / Details <ChevronRight size={14} />
                      </span>
                      
                      <button
                        title="Add to Calendar"
                        onClick={(e) => handleAddToCalendar(item, e)}
                        className="p-1.5 text-gray-400 hover:text-forest-green hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <CalendarDays size={18} />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredCalendar.length === 0 && (
            <div className="text-center py-12 text-gray-400 font-medium bg-gray-50 rounded-2xl border border-dashed border-gray-200">
              No events scheduled in this category.
            </div>
          )}
        </div>
      </section>

      {/* Calendar Detail & Mock Registration Modal */}
      <AnimatePresence>
        {selectedCalendarEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCalendarEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-xl overflow-hidden relative border border-gray-100"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCalendarEvent(null)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-dark-charcoal hover:bg-gray-100 rounded-full transition-all"
              >
                <X size={20} />
              </button>

              {/* Modal Banner */}
              <div className="bg-gradient-to-r from-forest-green to-academic-gold p-8 text-white">
                <div className="flex gap-2 items-center mb-3">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedCalendarEvent.month}
                  </span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider">
                    {selectedCalendarEvent.type}
                  </span>
                </div>
                <h3 className="text-3xl font-display font-bold leading-tight">
                  {selectedCalendarEvent.event}
                </h3>
              </div>

              {/* Modal Content */}
              <div className="p-8 space-y-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-dark-charcoal">Event Information</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2.5">
                      <Clock size={16} className="text-forest-green" />
                      <span>10:00 AM - 04:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <MapPin size={16} className="text-forest-green" />
                      <span>CSE Department Lab</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    This upcoming {selectedCalendarEvent.type.toLowerCase()} provides an immersive platform for college students to build hands-on expertise, solve engineering problems, and gain guidance from mentors in our department.
                  </p>
                </div>

                <div className="pt-6 border-t border-gray-100">
                  {registeredEvents[selectedCalendarEvent.event] ? (
                    <motion.div 
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="bg-forest-green/10 border border-forest-green/20 rounded-2xl p-6 text-center"
                    >
                      <Check size={36} className="mx-auto text-forest-green mb-3 bg-white rounded-full p-1.5 shadow-sm border border-forest-green/20" />
                      <h4 className="text-lg font-bold text-forest-green mb-1">Registration Complete</h4>
                      <p className="text-sm text-gray-600">
                        Thank you for registering! We've sent details to your inbox.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleRegister} className="space-y-4">
                      <h4 className="text-lg font-bold text-dark-charcoal">Quick Registration</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                          type="text"
                          required
                          placeholder="Your Full Name"
                          value={registrationForm.name}
                          onChange={(e) => setRegistrationForm({ ...registrationForm, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green text-sm transition-all"
                        />
                        <input
                          type="email"
                          required
                          placeholder="Your Email Address"
                          value={registrationForm.email}
                          onChange={(e) => setRegistrationForm({ ...registrationForm, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green text-sm transition-all"
                        />
                      </div>
                      <div className="flex items-center justify-between gap-4 pt-2">
                        <select
                          value={registrationForm.year}
                          onChange={(e) => setRegistrationForm({ ...registrationForm, year: e.target.value })}
                          className="px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-forest-green/20 focus:border-forest-green text-sm text-gray-600 bg-white"
                        >
                          <option>1st Year</option>
                          <option>2nd Year</option>
                          <option>3rd Year</option>
                          <option>4th Year</option>
                        </select>
                        
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={(e) => handleAddToCalendar(selectedCalendarEvent, e)}
                            className="px-4 py-2.5 text-forest-green hover:bg-forest-green/5 border border-forest-green/20 rounded-xl text-sm font-semibold flex items-center gap-2 transition-all"
                          >
                            <CalendarDays size={16} /> Add to Calendar
                          </button>
                          
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="px-6 py-2.5 bg-forest-green text-white hover:bg-opacity-95 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg disabled:opacity-50"
                          >
                            {isSubmitting ? 'Registering...' : 'Submit Register'}
                          </button>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Gallery (Event Highlights) */}
      <section className="py-20 md:py-28 bg-gray-50 border-t border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Event Highlights</h2>
            <p className="section-subtitle font-light mt-1">Snapshots of excellence and celebration in our department</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {EVENT_HIGHLIGHTS.map((highlight, index) => (
              <motion.div
                key={index}
                variants={cardHoverVariants}
                custom={index}
                whileHover="hover"
                onClick={() => setLightboxIndex(index)}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 relative h-72 transition-all duration-300"
              >
                <img
                  src={highlight.image}
                  alt={highlight.alt}
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-110"
                />
                
                {/* Modern Dark Slide-up Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center mb-3">
                      <ZoomIn size={18} />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {highlight.title}
                    </h4>
                    <p className="text-xs text-gray-300">
                      {highlight.alt}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex flex-col items-center justify-center p-4 md:p-8"
            onClick={() => setLightboxIndex(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <X size={24} />
            </button>

            {/* Navigation Controls */}
            <button
              onClick={(e) => { e.stopPropagation(); showPrevHighlight(); }}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <ChevronLeft size={32} />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); showNextHighlight(); }}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all"
            >
              <ChevronRight size={32} />
            </button>

            {/* Image Container */}
            <div 
              className="max-w-4xl w-full max-h-[70vh] flex items-center justify-center p-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={lightboxIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={EVENT_HIGHLIGHTS[lightboxIndex].image}
                alt={EVENT_HIGHLIGHTS[lightboxIndex].alt}
                className="max-w-full max-h-[70vh] object-contain rounded-xl shadow-2xl border border-white/10"
              />
            </div>

            {/* Subtitle Details */}
            <div className="text-center mt-6 max-w-2xl px-4 pointer-events-none">
              <h3 className="text-2xl font-bold text-white mb-2">
                {EVENT_HIGHLIGHTS[lightboxIndex].title}
              </h3>
              <p className="text-sm text-gray-400">
                {EVENT_HIGHLIGHTS[lightboxIndex].alt}
              </p>
              <span className="inline-block mt-4 text-xs font-semibold text-gray-500">
                {lightboxIndex + 1} of {EVENT_HIGHLIGHTS.length}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Creative Codex Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="section-title">Creative Codex</h2>
            <p className="section-subtitle font-light mt-1">Driving Department Innovation & Technical Excellence</p>
          </motion.div>

          {/* Premium Gold Shimmer Gradient Border Card */}
          <div className="p-[1.5px] bg-gradient-to-br from-forest-green via-academic-gold to-forest-green rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 max-w-5xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              className="bg-white rounded-[22px] p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                {/* Glowing Logo Frame */}
                <div className="flex-shrink-0 relative group">
                  <div className="absolute inset-0 bg-academic-gold/20 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center justify-center h-40 w-40 rounded-full bg-white border-4 border-academic-gold shadow-lg overflow-hidden transition-transform duration-500 hover:scale-105">
                    <img
                      src={CREATIVE_CODEX_LOGO}
                      alt="Creative Codex Logo"
                      className="h-32 w-32 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.classList.remove('hidden');
                        e.target.nextSibling.classList.add('block');
                      }}
                    />
                    <div className="hidden text-6xl text-forest-green font-bold select-none">💻</div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="flex-1 text-center md:text-left">
                  <div className="inline-flex px-3 py-1 bg-academic-gold/15 text-academic-gold rounded-full text-xs font-bold uppercase tracking-wider mb-4 border border-academic-gold/25">
                    Student-led Hub
                  </div>
                  <h3 className="text-3xl font-display font-bold text-dark-charcoal mb-2">
                    {CREATIVE_CODEX.name}
                  </h3>
                  <p className="text-academic-gold font-semibold text-lg italic mb-4">
                    " {CREATIVE_CODEX.tagline} "
                  </p>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {CREATIVE_CODEX.description} Through technical hackathons, hands-on workshops, peer mentorship, and collaborative projects, we cultivate an active culture of research, development, and engineering.
                  </p>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-4">
                    <a href={CREATIVE_CODEX.website || '#'} className="btn-primary flex items-center gap-2">
                      Join Creative Codex <ArrowRight size={16} />
                    </a>
                    <a href="/about" className="btn-outline">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-forest-green to-academic-gold text-white text-center relative overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute inset-0 z-0 opacity-10">
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
            Join Our Dynamic Community
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
            Stay updated, expand your skill set, and participate in events that pave the way for a successful tech career.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-forest-green hover:bg-forest-green hover:text-white border-2 border-white px-10 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Get In Touch
          </a>
        </motion.div>
      </section>
    </div>
  );
}

// Reusable EventCard component
function EventCard({ event, index }) {
  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      whileHover="hover"
      className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col justify-between h-full"
    >
      <div>
        {/* Card Header Image */}
        <div className="relative h-56 w-full overflow-hidden bg-gray-100">
          <img
            src={event.image}
            alt={event.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.classList.remove('hidden');
              e.target.nextSibling.classList.add('flex');
            }}
          />
          {/* Custom Fallback Element */}
          <div className="hidden absolute inset-0 bg-gradient-to-br from-forest-green to-academic-gold flex-col items-center justify-center text-white p-4 text-center">
            <Sparkles size={44} className="mb-2 opacity-80 animate-pulse text-academic-gold" />
            <span className="text-lg font-bold font-display">{event.name}</span>
          </div>

          {/* Floating Category Badge */}
          <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-forest-green px-3.5 py-1 rounded-full text-xs font-bold shadow-md border border-forest-green/20">
            {event.category.toUpperCase()}
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <h3 className="text-2xl font-bold text-dark-charcoal mb-2 group-hover:text-forest-green transition-colors duration-300">
            {event.name}
          </h3>
          {event.fullName && (
            <p className="text-xs text-academic-gold font-bold tracking-wider uppercase mb-4">
              {event.fullName}
            </p>
          )}
          <p className="text-gray-600 text-sm leading-relaxed">
            {event.description}
          </p>
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-8 pb-8 pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-500 text-sm font-medium">
          <Calendar size={16} className="text-academic-gold" />
          <span>{event.date}</span>
        </div>
        {event.inAssociationWith && (
          <span className="text-[10px] text-academic-gold font-bold uppercase tracking-wider bg-academic-gold/10 px-2.5 py-0.5 rounded-full border border-academic-gold/25">
            {event.inAssociationWith} Partner
          </span>
        )}
      </div>
    </motion.div>
  );
}
