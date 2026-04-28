import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

function About({ t, images }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const about = t?.about ?? {}
  const features = Array.isArray(about.features) ? about.features : []
  const title = about.title ?? ''
  const description = about.description ?? ''
  const previousImageLabel = about.previousImage ?? 'Previous image'
  const nextImageLabel = about.nextImage ?? 'Next image'
  const mixedImages = [
    images[0],
    images[12],
    images[3],
    images[8],
    images[16],
    images[5],
    images[14],
    images[1],
  ].filter(Boolean)
  const [direction, setDirection] = useState(1)
  const previewImages = [
    mixedImages[currentIndex % mixedImages.length],
    mixedImages[(currentIndex + 1) % mixedImages.length],
  ]

  const goToPrevious = () => {
    setDirection(-1)
    setCurrentIndex((current) => (current === 0 ? mixedImages.length - 1 : current - 1))
  }

  const goToNext = () => {
    setDirection(1)
    setCurrentIndex((current) => (current + 1) % mixedImages.length)
  }

  return (
    <section id="la-casa" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 rounded-[2.1rem] border border-white/80 bg-white/82 p-5 shadow-[0_24px_65px_rgba(23,47,55,0.07)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-7">
          <motion.div
            className="grid gap-5"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="headline mt-6 max-w-xl text-4xl font-bold text-stone-950 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              {description}
            </p>

            <div className="relative">
              <div className="mb-4 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label={previousImageLabel}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f9f4ea] text-stone-900 shadow-[0_8px_18px_rgba(61,62,44,0.10)] ring-1 ring-olive-700/10 transition hover:bg-white"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label={nextImageLabel}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#f9f4ea] text-stone-900 shadow-[0_8px_18px_rgba(61,62,44,0.10)] ring-1 ring-olive-700/10 transition hover:bg-white"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentIndex}
                    className="grid gap-4 sm:grid-cols-2"
                    initial={{ opacity: 0, x: direction > 0 ? 44 : -44 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: direction > 0 ? -44 : 44 }}
                    transition={{ duration: 0.38, ease: 'easeOut' }}
                  >
                    {previewImages.map((image) => (
                      <div
                        key={image.id}
                        className="group overflow-hidden rounded-[1.7rem] bg-[#faf9f4] p-3 ring-1 ring-stone-900/6 shadow-[0_12px_28px_rgba(23,47,55,0.05)]"
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="h-[220px] w-full rounded-[1.2rem] object-cover transition duration-700 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.slice(0, 6).map((feature) => (
              <motion.article
                key={feature.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.5 }}
                className="rounded-[1.6rem] border border-white/70 bg-[#fcfcf8] p-5 shadow-[0_12px_30px_rgba(23,47,55,0.04)] soft-ring"
              >
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">
                  {feature.value}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-stone-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{feature.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
