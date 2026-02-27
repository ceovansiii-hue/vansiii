import { useState } from 'react';
import { motion } from 'framer-motion';
import './ContactPage.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  if (submitted) {
    return (
      <div className="contact-page">
        <section className="contact-success">
          <div className="container-narrow">
            <motion.div
              className="success-content"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>Thank you for reaching out.</h1>
              <p>
                We've received your inquiry and will review it carefully.
                If we're a good fit, you'll hear from us within 48 hours with next steps.
              </p>
              <p className="success-note">
                We work with a select number of clients to ensure every project receives
                the strategic attention it deserves.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container-narrow">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Let's work together.</h1>
            <p className="contact-subtitle">
              Every great project starts with a conversation. Tell us about your goals,
              and we'll determine if we're the right fit.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-form-section">
        <div className="container-narrow">
          <motion.div className="contact-info" {...fadeInUp}>
            <h2>What to expect</h2>
            <div className="info-grid">
              <div className="info-item">
                <h3>01. Submit Inquiry</h3>
                <p>Share your project details, goals, and timeline with us.</p>
              </div>
              <div className="info-item">
                <h3>02. Initial Review</h3>
                <p>We'll review your submission within 48 hours to assess fit.</p>
              </div>
              <div className="info-item">
                <h3>03. Discovery Call</h3>
                <p>If aligned, we'll schedule a call to discuss strategy and approach.</p>
              </div>
              <div className="info-item">
                <h3>04. Custom Proposal</h3>
                <p>We'll create a tailored proposal with scope, timeline, and investment.</p>
              </div>
            </div>
          </motion.div>

          <motion.form className="contact-form" onSubmit={handleSubmit} {...fadeInUp}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company / Brand *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="projectType">What do you need help with? *</label>
              <select
                id="projectType"
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="branding">Branding & Visual Identity</option>
                <option value="social">Social Media Strategy</option>
                <option value="content">Content Systems</option>
                <option value="launch">Launch Strategy</option>
                <option value="growth">Growth Consulting</option>
                <option value="multiple">Multiple Services</option>
                <option value="not-sure">Not Sure Yet</option>
              </select>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="budget">Budget Range *</label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under ₹5L</option>
                  <option value="5k-10k">₹5L - ₹10L</option>
                  <option value="10k-25k">₹10L - ₹25L</option>
                  <option value="25k-50k">₹25L - ₹50L</option>
                  <option value="50k-plus">₹50L+</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="timeline">Timeline *</label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (1-2 weeks)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Tell us about your project *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                placeholder="What are your goals? What challenges are you facing? What does success look like?"
                required
              />
            </div>

            <div className="form-note">
              <p>
                <strong>Note:</strong> We work with a select roster of clients to ensure
                quality and strategic focus. Estimates and proposals are shared after
                our initial discovery conversation.
              </p>
            </div>

            <button type="submit" className="btn-primary btn-large">
              Submit Inquiry
            </button>
          </motion.form>
        </div>
      </section>

      <section className="contact-alternative">
        <div className="container-narrow">
          <motion.div className="alternative-content" {...fadeInUp}>
            <h2>Prefer to email directly?</h2>
            <p>Reach out to us at <a href="mailto:hello@vansiii.com">hello@vansiii.com</a></p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
