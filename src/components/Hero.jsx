import { motion } from 'framer-motion'
import { CalendarDays, Home, Images, MapPin, Trees } from 'lucide-react'

function Hero({ t, images }) {
  return (
    <section id="inicio" className="relative overflow-hidden bg-[linear-gradient(135deg,#d6f0ef_0%,#f7f4eb_48%,#ffd1bf_100%)] pt-28 sm:pt-32">
      <motion.div
        className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#23b3bc]/18 blur-3xl"
        animate={{ y: [0, 22, 0], x: [0, 12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ff866f]/18 blur-3xl"
        animate={{ y: [0, -16, 0], x: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="section-shell relative z-10 py-8 pb-14">
        <div className="rounded-[2rem] border border-white/55 bg-white/44 p-3 shadow-[0_40px_120px_rgba(26,53,61,0.16)] backdrop-blur-xl sm:p-5">
          <div className="overflow-hidden rounded-[1.7rem] bg-white">
            <div className="flex items-center justify-between border-b border-stone-900/6 px-4 py-4 sm:px-6">
              <div>
                <div className="headline text-2xl font-semibold text-stone-950">Casa Muller</div>
                <div className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-stone-500">
                  {t.hero.eyebrow}
                </div>
              </div>
              <motion.a
                href="#contacto"
                className="hidden rounded-full bg-stone-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white sm:inline-flex"
                whileHover={{ y: -2, scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.hero.primaryButton}
              </motion.a>
            </div>

            <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
              <motion.div
                className="bg-[#f7f8f3] px-5 py-8 sm:px-7 lg:px-8 lg:py-10"
                initial={{ opacity: 0, x: -28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
              >
                <div className="flex flex-wrap gap-2">
                  {t.hero.tabs.map((tab, index) => (
                    <div
                      key={tab}
                      className={`rounded-full px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${
                        index === 0 ? 'bg-[#23b3bc] text-white' : 'bg-white text-stone-600 ring-1 ring-stone-900/6'
                      }`}
                    >
                      {tab}
                    </div>
                  ))}
                </div>

                <h1 className="headline mt-7 max-w-lg text-4xl leading-[0.96] font-semibold text-stone-950 sm:text-5xl lg:text-[3.7rem]">
                  {t.hero.posterTitle}
                </h1>
                <p className="mt-5 max-w-lg text-base leading-8 text-stone-600 sm:text-lg">
                  {t.hero.posterSubtitle}
                </p>

                <div className="mt-7 rounded-[1.5rem] bg-white p-4 shadow-[0_18px_40px_rgba(23,47,55,0.08)] ring-1 ring-stone-900/6">
                  <div className="grid gap-3 sm:grid-cols-[1fr_1fr]">
                    {t.hero.quickInfo.map((item) => {
                      const Icon =
                        item.icon === 'location' ? MapPin : item.icon === 'house' ? Home : Trees

                      return (
                        <div
                          key={item.label}
                          className="rounded-[1.2rem] bg-[#f7f8f3] px-4 py-4 ring-1 ring-stone-900/6"
                        >
                          <div className="flex items-center gap-3">
                            <div className="rounded-xl bg-white p-2 text-[#23b3bc] ring-1 ring-stone-900/6">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <div className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-stone-500">
                                {item.label}
                              </div>
                              <div className="mt-1 text-sm font-semibold text-stone-900">{item.value}</div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_1fr]">
                    <motion.a
                      href="#contacto"
                      className="inline-flex items-center justify-center gap-2 rounded-[1.1rem] bg-[#ff866f] px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <CalendarDays className="h-4 w-4" />
                      {t.hero.bookingAction}
                    </motion.a>
                    <motion.a
                      href="#galeria"
                      className="inline-flex items-center justify-center gap-2 rounded-[1.1rem] bg-stone-950 px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Images className="h-4 w-4" />
                      {t.hero.secondaryButton}
                    </motion.a>
                  </div>
                </div>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {t.hero.stats.map((item, index) => (
                    <motion.div
                      key={item.label}
                      className="rounded-[1.3rem] bg-white px-4 py-4 shadow-[0_12px_30px_rgba(23,47,55,0.07)] ring-1 ring-stone-900/6"
                      initial={{ opacity: 0, y: 22 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.35 + index * 0.08, duration: 0.6 }}
                    >
                      <div className="text-2xl font-extrabold text-[#23b3bc]">{item.value}</div>
                      <div className="mt-1 text-sm font-medium text-stone-600">{item.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative bg-[radial-gradient(circle_at_top_left,rgba(35,179,188,0.18),transparent_20%),linear-gradient(135deg,#10353d_0%,#127784_45%,#1aa1aa_100%)] p-4 sm:p-5"
                initial={{ opacity: 0, x: 28 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.85, ease: 'easeOut', delay: 0.1 }}
              >
                <div className="relative h-full min-h-[420px] overflow-hidden rounded-[1.6rem] sm:min-h-[560px]">
                  <motion.img
                    src={images.main.src}
                    alt={images.main.alt}
                    className="h-full w-full object-cover"
                    initial={{ scale: 1.08 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,22,26,0.08)_0%,rgba(8,20,24,0.14)_45%,rgba(8,20,24,0.36)_100%)]" />

                  <motion.div
                    className="absolute left-4 top-4 w-[42%] rounded-[1.3rem] border border-white/18 bg-white/16 p-2 backdrop-blur-md sm:left-5 sm:top-5"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.7 }}
                    whileHover={{ y: -4, rotate: -1 }}
                  >
                    <img
                      src={images.collage[0].src}
                      alt={images.collage[0].alt}
                      className="h-[140px] w-full rounded-[1rem] object-cover sm:h-[180px]"
                    />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-5 right-5 w-[36%] rounded-[1.3rem] border border-white/18 bg-white/16 p-2 backdrop-blur-md"
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.82, duration: 0.7 }}
                    whileHover={{ y: -4, rotate: 1 }}
                  >
                    <img
                      src={images.collage[1].src}
                      alt={images.collage[1].alt}
                      className="h-[130px] w-full rounded-[1rem] object-cover sm:h-[165px]"
                    />
                  </motion.div>

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="max-w-sm rounded-[1.4rem] bg-white/90 p-4 backdrop-blur-md">
                      <div className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-[#23b3bc]">
                        {t.hero.cardTag}
                      </div>
                      <div className="mt-2 text-xl font-semibold text-stone-950">{t.hero.cardTitle}</div>
                      <p className="mt-2 text-sm leading-6 text-stone-600">{t.hero.cardText}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
