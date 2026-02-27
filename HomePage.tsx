import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

 const services = [
  {
    title: 'Brand Identity',
    description: 'Built from scratch. Distinct, memorable, and impossible to ignore.'
  },
  {
    title: 'Social Growth Strategy',
    description: 'Platform-native strategies designed to drive attention, demand, and relevance.'
  },
  {
    title: 'Content Architecture',
    description: 'Systems that make your brand look consistent, intentional, and instantly recognisable.'
  },
  {
    title: 'Launch & Positioning',
    description: 'From idea to impact — we craft how you enter and dominate your category.'
  }
];

  const caseStudies = [
    {
      slug: 'brand-refresh-startup',
      title: 'Complete Brand Refresh',
      client: 'Tech Startup',
      category: 'Branding',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      result: '300% increase in engagement'
    },
    {
      slug: 'social-strategy-d2c',
      title: 'Social Media Transformation',
      client: 'D2C Brand',
      category: 'Social Strategy',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      result: '5x follower growth in 90 days'
    },
    {
      slug: 'launch-strategy-app',
      title: 'Product Launch Campaign',
      client: 'Mobile App',
      category: 'Launch Strategy',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      result: '10k users in first week'
    }
  ];

  const credentials = [
    '50+ brands transformed',
    'India & International',
    'Strategy-first approach',
    'Founder-led studio'
  ];

  return (
    <div className="homepage">
      <section className="hero">
        <div className="container">
          <motion.div
            className="hero-content"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.h1 className="hero-title" variants={fadeInUp}>
              We build brands
              <br />
              people remember.
            </motion.h1>
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Strategy-led branding and growth
              <br />
              Strategy-first. Execution-focused.
            </motion.p>
            <motion.div className="hero-cta" variants={fadeInUp}>
              <Link to="/contact" className="btn-primary">
                Work With Us
              </Link>
              <Link to="/work" className="btn-secondary">
                View Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="credentials">
        <div className="container">
          <div className="credentials-grid">
            {credentials.map((item, index) => (
              <motion.div
                key={index}
                className="credential-item"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="services-preview">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>What we do</h2>
            <p>Precision-crafted services for high-impact brands</p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="section-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/services" className="link-arrow">
              All Services
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="work-preview">
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Selected work</h2>
            <p>Results that speak louder than promises</p>
          </motion.div>

          <div className="case-studies-grid">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                className="case-study-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Link to={`/work/${study.slug}`} className="case-study-link">
                  <div className="case-study-image">
                    <img src={study.image} alt={study.title} />
                    <div className="case-study-overlay">
                      <span className="view-case">View Case Study →</span>
                    </div>
                  </div>
                  <div className="case-study-info">
                    <span className="case-study-category">{study.category}</span>
                    <h3>{study.title}</h3>
                    <p className="case-study-client">{study.client}</p>
                    <p className="case-study-result">{study.result}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="section-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/work" className="link-arrow">
              View All Work
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="founder-section">
        <div className="container">
          <motion.div
            className="founder-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="founder-text">
              <h2>Founder-led studio</h2>
              <p>
                Every project is personally overseen. No junior teams. No templated solutions.
                Just strategic thinking and precise execution.
              </p>
              <p>
                We work with a select roster of clients who value clarity, speed, and outcomes over endless revisions.
              </p>
              <Link to="/about" className="link-arrow">
                About Vansiii
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to build something unforgettable?</h2>
            <p>Let's talk strategy, brand, and growth.</p>
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
