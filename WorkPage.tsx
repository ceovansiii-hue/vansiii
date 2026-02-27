import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './WorkPage.css';

const WorkPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const caseStudies = [
    {
      slug: 'brand-refresh-startup',
      title: 'Complete Brand Refresh',
      client: 'Tech Startup',
      category: 'Branding',
      year: '2024',
      image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      description: 'Strategic repositioning and visual identity for a growing SaaS platform.',
      result: '300% increase in engagement'
    },
    {
      slug: 'social-strategy-d2c',
      title: 'Social Media Transformation',
      client: 'D2C Brand',
      category: 'Social Strategy',
      year: '2024',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      description: 'End-to-end social strategy that built a loyal community from scratch.',
      result: '5x follower growth in 90 days'
    },
    {
      slug: 'launch-strategy-app',
      title: 'Product Launch Campaign',
      client: 'Mobile App',
      category: 'Launch Strategy',
      year: '2024',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      description: 'Multi-channel launch strategy that generated immediate traction.',
      result: '10k users in first week'
    },
    {
      slug: 'brand-identity-wellness',
      title: 'Wellness Brand Identity',
      client: 'Wellness Startup',
      category: 'Branding',
      year: '2023',
      image: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg',
      description: 'Sophisticated brand system for a premium wellness platform.',
      result: 'Featured in major publications'
    },
    {
      slug: 'content-strategy-agency',
      title: 'Content System Development',
      client: 'Creative Agency',
      category: 'Content Systems',
      year: '2023',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      description: 'Scalable content framework that empowered internal teams.',
      result: '50% faster content production'
    },
    {
      slug: 'growth-consulting-ecommerce',
      title: 'Growth Strategy Overhaul',
      client: 'E-commerce Brand',
      category: 'Growth Consulting',
      year: '2023',
      image: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      description: 'Data-driven growth strategy that improved conversion and retention.',
      result: '40% increase in conversion rate'
    }
  ];

  return (
    <div className="work-page">
      <section className="work-hero">
        <div className="container-narrow">
          <motion.div
            className="work-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Selected work.</h1>
            <p className="work-subtitle">
              Strategic projects that transformed how brands connect with their audiences.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="work-grid-section">
        <div className="container">
          <div className="work-grid">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                className="work-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/work/${study.slug}`} className="work-link">
                  <div className="work-image">
                    <img src={study.image} alt={study.title} />
                    <div className="work-overlay">
                      <span className="view-project">View Project →</span>
                    </div>
                  </div>
                  <div className="work-info">
                    <div className="work-meta">
                      <span className="work-category">{study.category}</span>
                      <span className="work-year">{study.year}</span>
                    </div>
                    <h3>{study.title}</h3>
                    <p className="work-client">{study.client}</p>
                    <p className="work-description">{study.description}</p>
                    <p className="work-result">{study.result}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="work-cta">
        <div className="container-narrow">
          <motion.div className="cta-content" {...fadeInUp}>
            <h2>Ready to create something exceptional?</h2>
            <p>
              Every great project starts with a conversation. Let's discuss your goals
              and see if we're the right fit.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
