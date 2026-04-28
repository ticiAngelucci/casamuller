import { motion } from 'framer-motion'

function LoadingScreen({ t }) {
  return (
    <motion.div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#f8f1e8_0%,#f3e6d6_45%,#ebe1d2_100%)]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeOut' } }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(169,176,141,0.18),transparent_24%),radial-gradient(circle_at_80%_25%,rgba(157,113,87,0.14),transparent_22%),radial-gradient(circle_at_50%_80%,rgba(230,212,191,0.7),transparent_28%)]" />

      <div className="relative flex flex-col items-center px-6 text-center">
        <motion.div
          className="relative flex h-28 w-28 items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute h-28 w-28 rounded-full border border-olive-700/20" />
          <div className="absolute h-20 w-20 rounded-full border border-clay-500/30" />
          <motion.div
            className="absolute h-5 w-5 rounded-full bg-olive-700"
            animate={{
              x: [0, 24, 0, -24, 0],
              y: [-20, 0, 20, 0, -20],
              scale: [1, 1.15, 1, 1.15, 1],
            }}
            transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-8"
        >
          <div className="headline text-4xl font-bold tracking-[0.08em] text-stone-950 sm:text-5xl">
            Casa Muller
          </div>
          <p className="mt-4 max-w-md text-sm leading-7 text-stone-600 sm:text-base">
            {t.hero.subtitle}
          </p>
        </motion.div>

        <div className="mt-8 flex items-center gap-2">
          {[0, 1, 2].map((item) => (
            <motion.span
              key={item}
              className="h-2.5 w-2.5 rounded-full bg-clay-500"
              animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 0.9, repeat: Infinity, delay: item * 0.14, ease: 'easeInOut' }}
            />
          ))}
        </div>

        <div className="loading-line mt-8 h-px w-48 overflow-hidden rounded-full bg-stone-900/10">
          <motion.div
            className="h-full bg-olive-700"
            initial={{ x: '-100%' }}
            animate={{ x: '220%' }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default LoadingScreen
