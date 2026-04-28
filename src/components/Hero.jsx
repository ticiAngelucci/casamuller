import { motion } from 'framer-motion'
import { CalendarDays, Images, MapPin } from 'lucide-react'

function Hero({ t, images }) {
  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(195,176,120,0.18),transparent_22%),radial-gradient(circle_at_88%_12%,rgba(122,149,118,0.18),transparent_24%),linear-gradient(180deg,#f4eddf_0%,#ece5d7_42%,#e8e6db_100%)]" />

      <div className="section-shell relative z-10 pb-16">
        <div className="grid items-stretch gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            className="relative flex h-full flex-col rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(248,242,229,0.96),rgba(255,255,255,0.78))] p-6 shadow-[0_22px_55px_rgba(61,62,44,0.10)] backdrop-blur-sm sm:p-8"
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="headline max-w-sm text-[2.8rem] font-bold leading-[0.94] tracking-[-0.05em] text-olive-700 sm:text-[4rem]"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
            >
              {t.hero.title}
            </motion.h1>

            <motion.p
              className="mt-4 max-w-md text-base leading-8 text-stone-700"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.14 }}
            >
              {t.hero.posterSubtitle}
            </motion.p>

            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {t.hero.tabs.map((item, index) => (
                <span
                  key={item}
                  className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] ${
                    index === 0
                      ? 'bg-olive-700 text-white shadow-[0_10px_20px_rgba(75,93,67,0.18)]'
                      : 'border border-olive-700/14 bg-white/70 text-stone-700'
                  }`}
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              className="mt-7"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.26 }}
            >
              <div className="rounded-[1.4rem] bg-[#efe6d4] p-4 ring-1 ring-olive-700/10">
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-[#f9f4ea] p-3 text-olive-700">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-stone-500">
                      {t.hero.locationLabel}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-stone-900">{t.hero.locationValue}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="mt-7 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.32 }}
            >
              <motion.a
                href="#contacto"
                className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-olive-700 px-6 py-4 text-sm font-semibold uppercase tracking-[0.08em] text-white shadow-[0_14px_28px_rgba(75,93,67,0.22)]"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <CalendarDays className="h-5 w-5 shrink-0" />
                {t.hero.primaryButton}
              </motion.a>
              <motion.a
                href="#galeria"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-olive-700/12 bg-[#f9f4ea] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-stone-950"
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                <Images className="h-4 w-4" />
                {t.hero.secondaryButton}
              </motion.a>
            </motion.div>

            <motion.div
              className="mt-auto grid grid-cols-3 gap-3 pt-7"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.38 }}
            >
              {t.hero.stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.25rem] bg-[#f9f4ea] px-4 py-4 ring-1 ring-olive-700/10"
                >
                  <div className="text-2xl font-extrabold text-olive-700">{item.value}</div>
                  <div className="mt-2 text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-stone-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative h-full"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, ease: 'easeOut', delay: 0.08 }}
          >
            <div className="pointer-events-none absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.55),transparent_20%),radial-gradient(circle_at_80%_78%,rgba(163,178,140,0.16),transparent_24%)] blur-xl" />

            <div className="relative flex h-full overflow-hidden rounded-[2.5rem] bg-[linear-gradient(180deg,#d9e3d2_0%,#ece5d7_100%)] p-0 shadow-[0_28px_72px_rgba(75,93,67,0.16)]">
              <div className="relative aspect-square w-full overflow-hidden rounded-[2.5rem]">
                <img
                  src={images.main.src}
                  alt={images.main.alt}
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,rgba(0,0,0,0.02)_50%,rgba(0,0,0,0.12)_100%)]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
