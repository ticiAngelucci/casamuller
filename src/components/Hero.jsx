import { motion } from 'framer-motion'
import { CalendarDays, Images, MapPin } from 'lucide-react'

function Hero({ t, images }) {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eef5f2_0%,#f7f4eb_52%,#f6efe7_100%)] pt-28 sm:pt-32"
    >
      <motion.div
        className="absolute left-0 top-10 h-72 w-72 rounded-full bg-olive-300/20 blur-3xl"
        animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-clay-300/18 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-shell relative z-10 py-8 pb-14">
        <div className="rounded-[2rem] border border-white/70 bg-white/60 p-3 shadow-[0_34px_110px_rgba(23,47,55,0.12)] backdrop-blur-xl sm:p-5">
          <div className="grid gap-4 lg:grid-cols-[0.82fr_1.18fr]">
            <motion.div
              className="rounded-[1.7rem] bg-white px-5 py-6 shadow-[0_20px_60px_rgba(23,47,55,0.08)] ring-1 ring-stone-900/6 sm:px-7 sm:py-8 lg:px-8 lg:py-10"
              initial={{ opacity: 0, x: -22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <div className="rounded-full border border-stone-900/10 bg-sand-50 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-stone-700 w-fit">
                {t.hero.eyebrow}
              </div>

              <motion.h1
                className="headline mt-6 max-w-md text-5xl leading-[0.94] font-semibold text-stone-950 sm:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.12, duration: 0.8 }}
              >
                {t.hero.posterTitle}
              </motion.h1>

              <motion.p
                className="mt-5 max-w-md text-base leading-8 text-stone-600 sm:text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.22, duration: 0.8 }}
              >
                {t.hero.posterSubtitle}
              </motion.p>

              <motion.div
                className="mt-7 rounded-[1.4rem] bg-sand-50 p-4 ring-1 ring-stone-900/6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-3 text-olive-700 ring-1 ring-stone-900/6">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-stone-500">
                      {t.hero.locationLabel}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-stone-900">{t.hero.locationValue}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="mt-7 flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.8 }}
              >
                <motion.a
                  href="#contacto"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CalendarDays className="h-4 w-4" />
                  {t.hero.primaryButton}
                </motion.a>
                <motion.a
                  href="#galeria"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-stone-900/10 bg-white px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-stone-950"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Images className="h-4 w-4" />
                  {t.hero.secondaryButton}
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-[1.7rem] bg-stone-950"
              initial={{ opacity: 0, x: 22 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
            >
              <motion.img
                src={images.main.src}
                alt={images.main.alt}
                className="h-[420px] w-full object-cover sm:h-[560px] lg:h-full"
                initial={{ scale: 1.05 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/22 via-transparent to-transparent" />
              <motion.div
                className="absolute bottom-4 right-4 hidden w-[240px] rounded-[1.3rem] border border-white/18 bg-white/88 p-2 shadow-[0_20px_50px_rgba(15,23,28,0.18)] backdrop-blur-md sm:block"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.7 }}
              >
                <img
                  src={images.collage[0].src}
                  alt={images.collage[0].alt}
                  className="h-[160px] w-full rounded-[1rem] object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="mt-4 grid gap-3 px-1 sm:grid-cols-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            {t.hero.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.35rem] border border-white/80 bg-white/92 px-5 py-5 shadow-[0_18px_45px_rgba(23,47,55,0.10)]"
              >
                <div className="text-xs font-bold uppercase tracking-[0.18em] text-stone-500">
                  {item.label}
                </div>
                <div className="mt-2 text-3xl font-extrabold text-stone-950">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
