import { motion } from 'framer-motion';
import { useParams, Link } from 'react-router-dom';
import './CaseStudyPage.css';

const CaseStudyPage = () => {
  const { slug } = useParams();

  const caseStudies: Record<string, any> = {
    'brand-refresh-startup': {
      title: 'Complete Brand Refresh',
      client: 'Tech Startup',
      category: 'Branding',
      year: '2024',
      heroImage: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
      problem: 'A fast-growing SaaS platform was struggling with brand inconsistency across channels. Their visual identity felt outdated, and messaging lacked clarity, making it difficult to compete in a crowded market.',
      strategy: 'We conducted a comprehensive brand audit, competitive analysis, and stakeholder interviews. The strategy focused on repositioning them as a modern, authoritative player while maintaining approachability for their core audience.',
      execution: 'Developed a complete visual identity system including logo redesign, color palette, typography, brand guidelines, and marketing templates. Created a messaging framework that clarified their value proposition across all touchpoints.',
      result: '300% increase in social media engagement, 45% improvement in brand recognition scores, and a 25% increase in conversion rates within the first quarter post-launch.',
      images: [
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
      ]
    },
    'social-strategy-d2c': {
      title: 'Social Media Transformation',
      client: 'D2C Brand',
      category: 'Social Strategy',
      year: '2024',
      heroImage: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
      problem: 'An emerging D2C brand had quality products but virtually no social presence. They needed to build community and drive sales through social channels, but lacked strategy and execution capabilities.',
      strategy: 'Created a data-driven social media strategy focusing on Instagram and TikTok. Identified key content pillars, developed a creator partnership program, and established community management protocols.',
      execution: 'Implemented a 90-day content calendar with mix of educational, entertaining, and promotional content. Launched influencer collaborations and user-generated content campaigns. Set up analytics dashboard for ongoing optimization.',
      result: '5x follower growth in 90 days, 200% increase in website traffic from social, and 150% increase in social-attributed revenue.',
      images: [
        'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg',
        'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg'
      ]
    },
    'launch-strategy-app': {
      title: 'Product Launch Campaign',
      client: 'Mobile App',
      category: 'Launch Strategy',
      year: '2024',
      heroImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      problem: 'A well-funded mobile app was preparing to launch but lacked a cohesive go-to-market strategy. They needed to generate buzz, acquire early users, and establish market presence quickly.',
      strategy: 'Developed a multi-phase launch strategy combining PR, influencer partnerships, content marketing, and paid acquisition. Created a waitlist campaign to build anticipation and validated messaging through beta testing.',
      execution: 'Executed pre-launch buzz campaign, coordinated press coverage, managed influencer partnerships, and optimized app store presence. Implemented referral mechanics to drive viral growth.',
      result: '10,000 users in the first week, featured in major tech publications, 4.8 app store rating, and 40% organic growth through referrals.',
      images: [
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
        'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg'
      ]
    },
    'brand-identity-wellness': {
      title: 'Wellness Brand Identity',
      client: 'Wellness Startup',
      category: 'Branding',
      year: '2023',
      heroImage: 'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg',
      problem: 'A premium wellness platform needed a brand identity that conveyed sophistication and trustworthiness while remaining approachable to health-conscious consumers.',
      strategy: 'Positioned the brand at the intersection of science and self-care. Strategy emphasized credibility through expert partnerships while maintaining an accessible, human tone.',
      execution: 'Created a refined visual identity with calming color palette, elegant typography, and photography guidelines. Developed comprehensive brand voice guidelines and messaging framework.',
      result: 'Featured in Vogue, Elle, and wellness-focused publications. 60% increase in premium tier subscriptions.',
      images: [
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg'
      ]
    },
    'content-strategy-agency': {
      title: 'Content System Development',
      client: 'Creative Agency',
      category: 'Content Systems',
      year: '2023',
      heroImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg',
      problem: 'A growing creative agency was struggling with content inconsistency and slow production times. Different team members created content in different styles, diluting brand impact.',
      strategy: 'Developed a comprehensive content system including templates, workflows, and guidelines. Created a framework that allowed creative freedom while maintaining brand consistency.',
      execution: 'Built template libraries for social, email, and blog content. Established approval workflows and content calendaring system. Trained internal team on system usage.',
      result: '50% faster content production, 80% reduction in revision requests, and consistent brand presence across all channels.',
      images: [
        'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
        'https://images.pexels.com/photos/3772509/pexels-photo-3772509.jpeg'
      ]
    },
    'growth-consulting-ecommerce': {
      title: 'Growth Strategy Overhaul',
      client: 'E-commerce Brand',
      category: 'Growth Consulting',
      year: '2023',
      heroImage: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg',
      problem: 'An established e-commerce brand hit a growth plateau. Traffic was stable but conversion rates were declining, and customer acquisition costs were rising.',
      strategy: 'Conducted comprehensive growth audit covering funnel optimization, retention strategies, and channel diversification. Identified quick wins and long-term strategic initiatives.',
      execution: 'Optimized checkout flow, implemented email automation sequences, launched loyalty program, and refined paid acquisition strategy. Set up measurement framework for ongoing optimization.',
      result: '40% increase in conversion rate, 35% improvement in customer lifetime value, and 25% reduction in acquisition costs.',
      images: [
        'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg',
        'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg'
      ]
    }
  };

  const study = slug ? caseStudies[slug] : null;

  if (!study) {
    return (
      <div className="case-study-page">
        <div className="container-narrow" style={{ paddingTop: '150px', textAlign: 'center' }}>
          <h1>Case study not found</h1>
          <Link to="/work" className="btn-primary" style={{ marginTop: '2rem' }}>
            Back to Work
          </Link>
        </div>
      </div>
    );
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="case-study-page">
      <section className="case-study-hero">
        <div className="container">
          <motion.div
            className="case-study-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="case-study-meta">
              <span>{study.category}</span>
              <span>{study.year}</span>
            </div>
            <h1>{study.title}</h1>
            <p className="case-study-client-name">{study.client}</p>
          </motion.div>

          <motion.div
            className="case-study-hero-image"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src={study.heroImage} alt={study.title} />
          </motion.div>
        </div>
      </section>

      <section className="case-study-content">
        <div className="container-narrow">
          <motion.div className="content-section" {...fadeInUp}>
            <h2>Problem</h2>
            <p>{study.problem}</p>
          </motion.div>

          <motion.div className="content-section" {...fadeInUp}>
            <h2>Strategy</h2>
            <p>{study.strategy}</p>
          </motion.div>

          <motion.div className="content-section" {...fadeInUp}>
            <h2>Execution</h2>
            <p>{study.execution}</p>
          </motion.div>

          <motion.div className="content-section" {...fadeInUp}>
            <h2>Result</h2>
            <p className="result-highlight">{study.result}</p>
          </motion.div>
        </div>
      </section>

      <section className="case-study-images">
        <div className="container">
          <div className="images-grid">
            {study.images.map((image: string, index: number) => (
              <motion.div
                key={index}
                className="case-image"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <img src={image} alt={`${study.title} visual ${index + 1}`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study-nav">
        <div className="container-narrow">
          <motion.div className="nav-content" {...fadeInUp}>
            <Link to="/work" className="btn-secondary">
              ← Back to Work
            </Link>
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyPage;
