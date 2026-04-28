import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function Experience({ t, images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const delay = currentIndex === images.length - 1 ? 6200 : 4600
    const timeoutId = window.setTimeout(() => {
      setCurrentIndex((current) => (current + 1) % images.length)
    }, delay)

    return () => window.clearTimeout(timeoutId)
  }, [currentIndex, images.length])

  const goToPrevious = () => {
    setCurrentIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % images.length)
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-6 rounded-[2.1rem] border border-white/80 bg-white/84 p-5 shadow-[0_22px_60px_rgba(23,47,55,0.07)] soft-ring lg:grid-cols-[1.05fr_0.95fr] lg:p-7">
          <motion.div
            className="relative min-h-[360px] overflow-hidden rounded-[1.8rem] bg-stone-950"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={images[currentIndex].id}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.65, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/74 via-stone-950/20 to-transparent" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
              <span className="rounded-full border border-white/15 bg-white/12 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/82 backdrop-blur-sm">
                {t.experience.carouselLabel}
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label={t.experience.previous}
                  className="rounded-full border border-white/15 bg-white/12 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label={t.experience.next}
                  className="rounded-full border border-white/15 bg-white/12 p-3 text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/66">
                {images[currentIndex].tag}
              </div>
              <div className="mt-2 text-2xl font-semibold">{images[currentIndex].title}</div>
              <p className="mt-3 max-w-md text-sm leading-7 text-white/80">
                {images[currentIndex].description}
              </p>
              <div className="mt-5 flex gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`${t.experience.goToSlide} ${index + 1}`}
                    className={`h-2.5 rounded-full transition-all ${
                      index === currentIndex ? 'w-10 bg-white' : 'w-2.5 bg-white/45'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col justify-center p-2 lg:p-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-tag">{t.experience.tag}</span>
            <h2 className="headline mt-6 max-w-xl text-4xl font-bold text-stone-950 sm:text-5xl">
              {t.experience.title}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
              {t.experience.description}
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {t.experience.highlights.map((item, index) => (
                <motion.div
                  key={item}
                  className="rounded-[1.4rem] bg-[#faf9f4] p-4 ring-1 ring-stone-900/6 shadow-[0_10px_24px_rgba(23,47,55,0.04)]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                >
                  <p className="font-semibold text-stone-800">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Experience
