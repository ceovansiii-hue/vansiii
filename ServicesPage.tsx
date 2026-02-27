import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

const ServicesPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const services = [
    {
      title: 'Branding & Visual Identity',
      description: 'Strategic brand systems that position you as unforgettable.',
      details: [
        'Brand Strategy & Positioning',
        'Visual Identity Design',
        'Brand Guidelines & Systems',
        'Logo & Typography',
        'Color Systems & Palette',
        'Brand Voice & Messaging'
      ],
      outcome: 'A complete brand system that communicates your value and differentiates you in the market.'
    },
    {
      title: 'Social Media Strategy & Management',
      description: 'Content that converts. Strategies that scale. Built for growth.',
      details: [
        'Social Media Audit & Strategy',
        'Content Planning & Calendar',
        'Platform-Specific Strategies',
        'Community Management',
        'Analytics & Performance Tracking',
        'Influencer & Partnership Strategy'
      ],
      outcome: 'A cohesive social presence that drives engagement, builds community, and supports business goals.'
    },
    {
      title: 'Content Systems',
      description: 'Frameworks that keep your brand consistent and compelling.',
      details: [
        'Content Strategy & Planning',
        'Editorial Guidelines',
        'Template Systems',
        'Messaging Frameworks',
        'Content Workflows',
        'Asset Libraries'
      ],
      outcome: 'A scalable content system that ensures consistency while empowering your team to create.'
    },
    {
      title: 'Launch Strategy',
      description: 'Go-to-market plans designed to make impact from day one.',
      details: [
        'Market Research & Analysis',
        'Launch Timeline & Roadmap',
        'Channel Strategy',
        'Campaign Development',
        'Press & Media Strategy',
        'Launch Metrics & KPIs'
      ],
      outcome: 'A strategic launch plan that generates momentum, captures attention, and drives early adoption.'
    },
    {
      title: 'Growth Consulting',
      description: 'Strategic guidance for brands ready to scale intelligently.',
      details: [
        'Growth Audit & Assessment',
        'Strategic Planning Sessions',
        'Performance Analysis',
        'Conversion Optimization',
        'Funnel Strategy',
        'Ongoing Strategic Support'
      ],
      outcome: 'Clear, actionable strategies that accelerate growth and improve key business metrics.'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="container-narrow">
          <motion.div
            className="services-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>Services built for impact.</h1>
            <p className="services-subtitle">
              Strategic, outcome-focused offerings designed to transform how your brand shows up in the world.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="services-list">
        <div className="container">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-detail"
              {...fadeInUp}
              transition={{ delay: index * 0.1 }}
            >
              <div className="service-header">
                <div className="service-number">0{index + 1}</div>
                <div className="service-main">
                  <h2>{service.title}</h2>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>

              <div className="service-body">
                <div className="service-details">
                  <h3>What's included</h3>
                  <ul>
                    {service.details.map((detail, i) => (
                      <li key={i}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div className="service-outcome">
                  <h3>Outcome</h3>
                  <p>{service.outcome}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="services-process">
        <div className="container-narrow">
          <motion.div className="process-content" {...fadeInUp}>
            <h2>The process</h2>
            <div className="process-steps">
              <div className="process-step">
                <div className="step-number">01</div>
                <h3>Discovery</h3>
                <p>
                  We start by understanding your business, audience, and goals.
                  Deep research. Strategic questions. No assumptions.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">02</div>
                <h3>Strategy</h3>
                <p>
                  We develop a clear strategic direction based on insights.
                  Positioning. Messaging. Roadmap. Everything aligned.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">03</div>
                <h3>Execution</h3>
                <p>
                  We bring the strategy to life with precision and speed.
                  No endless revisions. Just clarity and results.
                </p>
              </div>
              <div className="process-step">
                <div className="step-number">04</div>
                <h3>Launch & Support</h3>
                <p>
                  We ensure a smooth handoff and provide ongoing guidance.
                  You're equipped to maintain momentum.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="services-cta">
        <div className="container-narrow">
          <motion.div className="cta-content" {...fadeInUp}>
            <h2>Let's build something exceptional.</h2>
            <p>
              Every project starts with a conversation. Share your goals, and we'll determine
              if we're the right fit to help you achieve them.
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

export default ServicesPage;
