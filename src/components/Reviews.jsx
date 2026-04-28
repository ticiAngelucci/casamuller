import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

function Reviews({ t, reviews }) {
  const items = useMemo(
    () => [
      ...reviews.booking.map((review) => ({ ...review, source: 'booking' })),
      ...reviews.google.map((review) => ({ ...review, source: 'google' })),
    ],
    [reviews],
  )

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setCurrentIndex((current) => (current + 1) % items.length)
    }, 5200)

    return () => window.clearTimeout(timeoutId)
  }, [currentIndex, items.length])

  const currentReview = items[currentIndex]
  const isBooking = currentReview.source === 'booking'

  const goToPrevious = () => {
    setCurrentIndex((current) => (current === 0 ? items.length - 1 : current - 1))
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % items.length)
  }

  return (
    <section className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-6 rounded-[2.1rem] border border-white/80 bg-white/84 p-5 shadow-[0_24px_70px_rgba(23,47,55,0.07)] backdrop-blur-xl lg:grid-cols-[0.72fr_1.28fr] lg:p-7">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">{t.reviews.tag}</span>
            <h2 className="headline mt-6 max-w-md text-4xl font-bold text-stone-950 sm:text-5xl">
              {t.reviews.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-stone-600 sm:text-lg">
              {t.reviews.description}
            </p>

            <div className="mt-8 rounded-[1.6rem] bg-[#faf9f4] p-5 ring-1 ring-stone-900/6 shadow-[0_12px_28px_rgba(23,47,55,0.04)]">
              <div className="flex items-center gap-3">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-[#ffb545] text-[#ffb545]" />
                  ))}
                </div>
                <div className="text-2xl font-extrabold text-stone-950">{t.reviews.summary.rating}</div>
              </div>
              <div className="mt-2 text-sm text-stone-600">{t.reviews.summary.caption}</div>
              <a
                href={t.reviews.summary.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex rounded-full bg-stone-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_26px_rgba(28,45,51,0.14)]"
              >
                {t.reviews.summary.button}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="rounded-[1.8rem] bg-[linear-gradient(135deg,rgba(115,146,134,0.05),rgba(255,255,255,0.96),rgba(216,178,150,0.05))] p-4 ring-1 ring-stone-900/6 sm:p-5"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <div className="mb-4 flex items-center justify-between gap-4">
              <div
                className={`rounded-full px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] ${
                  isBooking ? 'bg-stone-950 text-white' : 'bg-olive-700 text-white'
                }`}
              >
                {isBooking ? t.reviews.bookingLabel : t.reviews.googleLabel}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label={t.reviews.previous}
                  className="rounded-full bg-white p-3 text-stone-900 ring-1 ring-stone-900/6 transition hover:bg-[#fbfbf8]"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label={t.reviews.next}
                  className="rounded-full bg-white p-3 text-stone-900 ring-1 ring-stone-900/6 transition hover:bg-[#fbfbf8]"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={`${currentReview.source}-${currentIndex}`}
                className="rounded-[1.7rem] bg-white p-6 shadow-[0_18px_45px_rgba(23,47,55,0.06)] ring-1 ring-stone-900/6"
                initial={{ opacity: 0, y: 18, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -18, scale: 0.98 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                <Quote className={`h-8 w-8 ${isBooking ? 'text-stone-950' : 'text-olive-700'}`} />
                <p className="mt-5 max-w-2xl text-base leading-8 text-stone-700 sm:text-lg">
                  {currentReview.text}
                </p>

                <div className="mt-7 flex flex-col gap-4 border-t border-stone-900/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="font-semibold text-stone-950">{currentReview.name}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">
                      {currentReview.date}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-[#faf9f4] px-4 py-2 text-sm font-bold text-stone-900 ring-1 ring-stone-900/6">
                      {currentReview.rating}
                    </div>
                    <a
                      href={currentReview.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex rounded-full bg-stone-950 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_26px_rgba(28,45,51,0.14)]"
                    >
                      {isBooking ? t.reviews.openBooking : t.reviews.openGoogle}
                    </a>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-5 flex flex-wrap gap-2">
              {items.map((item, index) => (
                <button
                  key={`${item.source}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`${t.reviews.goTo} ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex
                      ? `w-10 ${item.source === 'booking' ? 'bg-stone-950' : 'bg-olive-700'}`
                      : 'w-2.5 bg-stone-300'
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Reviews
