import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowLeft, Compass } from 'lucide-react';
import './ComingSoon.css';

export const ComingSoon = () => {
  const location = useLocation();
  const pageName = location.pathname.substring(1).charAt(0).toUpperCase() + location.pathname.substring(2);

  return (
    <div className="coming-soon-page">
      <div className="container">
        <motion.div 
          className="coming-soon-card glass-panel"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="coming-soon-content">
            <motion.div 
              className="icon-container"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Compass size={48} className="text-gold" />
            </motion.div>
            
            <motion.h1 
              className="cs-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {pageName || 'Coming Soon'}
            </motion.h1>
            
            <motion.p 
              className="cs-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              We are crafting something exceptional.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Link to="/" className="btn-primary return-btn">
                <ArrowLeft size={18} />
                Return Home
              </Link>
            </motion.div>
          </div>
          
          <div className="coming-soon-visual">
            <div className="abstract-shape shape-1"></div>
            <div className="abstract-shape shape-2"></div>
            <div className="abstract-shape shape-3"></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
