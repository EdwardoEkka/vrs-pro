import { motion } from 'framer-motion'
import './HomePage.css'
import godlikeLogo from '../../assets/godlike.png'

function HomePage() {
  return (
    <main className="landing-page">
      {/* Content behind */}
      <section className="landing-page__content">
        <h1 className="landing-page__title">Godlike</h1>
      </section>

      {/* Black overlay */}
      <motion.div
        className="landing__overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 1.2,
          delay: 4.2, // ⬅ waits until logo fully fades out
          ease: 'easeInOut',
        }}
        style={{ pointerEvents: 'none' }}
        aria-hidden
      >
        <div className="landing__hero">
          <motion.div
            className="landing__logo-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.4, // quick fade-in
              ease: 'easeOut',
            }}
          >
            <motion.img
              src={godlikeLogo}
              alt="Godlike"
              className="landing__logo"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                delay: 2.9, // ⬅ 0.4 fade-in + 2.5s HOLD
                duration: 1.3, // slow fade-out
                ease: 'easeInOut',
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

export default HomePage
