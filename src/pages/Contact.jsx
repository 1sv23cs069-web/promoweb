import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { CONTACT_INFO, GOOGLE_FORM_URL } from '../constants';
import { fadeUpVariants, staggerContainer, cardHoverVariants } from '../utils/animations';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For demo, just log. In production, send to backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

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
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4">Contact Us</h1>
          <p className="text-xl opacity-90">We'd love to hear from you</p>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <h2 className="text-3xl font-bold text-dark-charcoal mb-8">Get in Touch</h2>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-6"
              >
                {/* Address */}
                <motion.div
                  variants={cardHoverVariants}
                  className="flex gap-4"
                >
                  <MapPin className="text-forest-green flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-dark-charcoal mb-2">Address</h3>
                    <p className="text-gray-600">{CONTACT_INFO.address}</p>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  variants={cardHoverVariants}
                  className="flex gap-4"
                >
                  <Phone className="text-forest-green flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-dark-charcoal mb-2">Phone</h3>
                    <p className="text-gray-600">{CONTACT_INFO.phone}</p>
                    <p className="text-sm text-gray-500 mt-1">Admissions: {CONTACT_INFO.admissions}</p>
                  </div>
                </motion.div>

                {/* Email */}
                <motion.div
                  variants={cardHoverVariants}
                  className="flex gap-4"
                >
                  <Mail className="text-forest-green flex-shrink-0 mt-1" size={24} />
                  <div>
                    <h3 className="text-lg font-bold text-dark-charcoal mb-2">Email</h3>
                    <p className="text-gray-600">{CONTACT_INFO.email}</p>
                  </div>
                </motion.div>

                {/* Office Hours */}
                <motion.div
                  variants={cardHoverVariants}
                  className="flex gap-4"
                >
                  <div className="text-2xl">🕐</div>
                  <div>
                    <h3 className="text-lg font-bold text-dark-charcoal mb-2">Office Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
                  </div>
                </motion.div>
              </motion.div>

              {/* CTA for Admissions */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 p-6 bg-gradient-to-r from-forest-green/10 to-academic-gold/10 rounded-lg"
              >
                <h3 className="text-xl font-bold text-dark-charcoal mb-3">Ready to Apply?</h3>
                <p className="text-gray-600 mb-4">
                  Fill out our online application form to get started with your CSE journey.
                </p>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Apply Now
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-dark-charcoal mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-green resize-none"
                    placeholder="Your message here..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full btn-primary text-lg justify-center"
                >
                  Send Message <Send size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-8"
          >
            <h2 className="section-title">Location</h2>
            <p className="section-subtitle">Find us on the map</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-lg overflow-hidden shadow-lg h-96"
          >
            {/* Google Map Embed - Replace with your actual coordinates */}
            <iframe
              title="Shridevi Institute Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.640931829236!2d77.12!3d13.20!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTMuMjAwMCwgNzcuMTIwMA!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-12"
          >
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 max-w-3xl mx-auto"
          >
            {[
              {
                q: 'What is the admission process?',
                a: 'Admissions are based on your academic performance and entrance exam scores. Visit our Apply Now page or contact the admissions office for detailed information.',
              },
              {
                q: 'What are the placement statistics?',
                a: 'Our department has a 92% placement rate with an average package of ₹8.5 LPA and highest package of ₹18 LPA.',
              },
              {
                q: 'Are there scholarship opportunities?',
                a: 'Yes, we offer merit-based scholarships and financial aid. Contact our admissions office for more details.',
              },
              {
                q: 'What facilities are available?',
                a: 'We have modern labs, smart classrooms, cloud computing infrastructure, seminar halls, and an innovation hub.',
              },
            ].map((faq, index) => (
              <FAQItem key={index} question={faq.q} answer={faq.a} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      variants={cardHoverVariants}
      custom={index}
      className="bg-gray-50 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 text-left font-semibold text-dark-charcoal flex items-center justify-between hover:bg-gray-100 transition-colors"
      >
        {question}
        <span className={`text-forest-green transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 py-4 text-gray-600 bg-white">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
