import { motion } from 'framer-motion'
import './HomePage.css'
import godlikeLogo from '../../assets/godlike.png'

function HomePage() {
  return (
    <main className="landing-page">
      {/* Content behind — revealed after splash */}
      <section className="landing-page__content">
        <h1 className="landing-page__title">Godlike</h1>
      </section>

      {/* Black splash overlay */}
      <motion.div
        className="landing__overlay"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          duration: 1.2,
          delay: 4.9, // 0.5s black + 0.6s fade-in + 2.5s hold + 1.3s logo fade-out
          ease: 'easeInOut',
        }}
        style={{ pointerEvents: 'none' }}
        aria-hidden
      >
        <div className="landing__hero">
          {/* Logo fade-in — after 0.5s black */}
          <motion.div
            className="landing__logo-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.5, // complete black for 0.5s first
              duration: 0.6,
              ease: 'easeOut',
            }}
          >
            {/* Logo fade-out */}
            <motion.img
              src={godlikeLogo}
              alt="Godlike"
              className="landing__logo"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              transition={{
                delay: 3.6, // 0.5s black + 0.6s fade-in + 2.5s hold
                duration: 1.3,
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
