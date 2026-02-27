import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './AboutPage.css';

const AboutPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      title: 'Strategy First',
      description: 'Every decision is rooted in research, positioning, and clear objectives. No guesswork.'
    },
    {
      title: 'Execution Speed',
      description: 'We move fast without compromising quality. Time is a competitive advantage.'
    },
    {
      title: 'Selective Partnerships',
      description: 'We work with brands that value clarity and are ready to commit to excellence.'
    },
    {
      title: 'Founder-Led',
      description: 'Direct access. Strategic oversight. Personal investment in every project.'
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container-narrow">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>We're not a traditional agency.</h1>
            <p className="about-subtitle">
              We're a strategic studio built for brands that refuse to blend in.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-story">
        <div className="container-narrow">
          <motion.div className="story-content" {...fadeInUp}>
            <h2>Built on clarity, not complexity.</h2>
            <p>
              Vansiii was founded on a simple truth: most brands fail not because they lack talent,
              but because they lack clarity. Clarity of message. Clarity of positioning. Clarity of execution.
            </p>
            <p>
              As a founder-led studio, every project receives strategic direction from day one.
              No junior teams experimenting. No templated solutions. Just intelligent thinking
              and precise execution designed to make your brand unforgettable.
            </p>
            <p>
              We work with startups, D2C brands, and growing companies who understand that branding
              isn't just aesthetics — it's the strategic foundation that drives growth, loyalty, and market positioning.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-founder">
        <div className="container">
          <motion.div className="founder-feature" {...fadeInUp}>
            <div className="founder-image">
              <img
                src="https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg"
                alt="Founder"
              />
            </div>
            <div className="founder-bio">
              <h2>Founder-led means you get the strategist, not the assistant.</h2>
              <p>
                Every brand we work with receives direct strategic oversight. This isn't about ego —
                it's about ensuring that the vision, execution, and outcomes align with what
                actually moves the needle for your business.
              </p>
              <p>
                With experience spanning brand strategy, digital growth, and creative direction,
                the approach is simple: understand the market, clarify the message, execute with precision.
              </p>
              <p>
                This is intentional, high-caliber work for clients who value outcomes over outputs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <motion.div className="values-header" {...fadeInUp}>
            <h2>How we work</h2>
            <p>Principles that drive everything we do</p>
          </motion.div>

          <div className="values-grid">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="value-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-approach">
        <div className="container-narrow">
          <motion.div className="approach-content" {...fadeInUp}>
            <h2>We're selective, not exclusive.</h2>
            <p>
              We work with a limited number of clients at any given time. This ensures every project
              gets the attention, strategy, and execution it deserves.
            </p>
            <p>
              If you're looking for fast turnarounds with templated solutions, we're not the right fit.
              But if you value strategic thinking, brand clarity, and measurable outcomes — let's talk.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
