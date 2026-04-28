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
  const googleStars = !isBooking && typeof currentReview.rating === 'number' ? currentReview.rating : 0

  const renderStars = (count, colorClass = 'text-olive-500') => (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < count ? `fill-current ${colorClass}` : 'text-stone-300'}`}
        />
      ))}
    </div>
  )

  const goToPrevious = () => {
    setCurrentIndex((current) => (current === 0 ? items.length - 1 : current - 1))
  }

  const goToNext = () => {
    setCurrentIndex((current) => (current + 1) % items.length)
  }

  return (
    <section className="py-14 sm:py-16">
      <div className="section-shell">
        <div className="grid gap-5 lg:grid-cols-[0.84fr_1.16fr]">
          <motion.div
            className="rounded-[2rem] border border-white/70 bg-[#fbf8f0]/92 p-5 shadow-[0_18px_50px_rgba(73,77,48,0.07)] backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <span className="section-tag">{t.reviews.tag}</span>
            <h2 className="headline mt-5 text-3xl font-bold text-olive-950 sm:text-4xl">
              {t.reviews.title}
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-stone-600">
              {t.reviews.description}
            </p>

            <div className="mt-6 rounded-[1.7rem] bg-white/75 p-5 ring-1 ring-olive-800/10">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-end gap-3">
                    <div className="text-5xl font-extrabold leading-none text-olive-950 sm:text-6xl">
                      {t.reviews.summary.rating}
                    </div>
                    <div className="pb-2">
                      {renderStars(5, 'text-olive-500')}
                      <div className="mt-2 text-sm text-stone-500">{t.reviews.basedOn}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 h-px bg-olive-900/10" />

              <div className="mt-6">
                <div className="text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {t.reviews.categoriesLabel}
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {t.reviews.categories.map((category, index) => {
                    const value = Number(category.value)
                    const percent = Math.min((value / 10) * 100, 100)
                    const barColor = index === 1 ? '#d1a24c' : '#65714b'

                    return (
                      <div key={category.label}>
                        <div className="mb-2 flex items-center justify-between gap-4">
                          <span className="text-sm font-medium text-stone-800">{category.label}</span>
                          <span className="text-sm font-semibold text-stone-950">{category.value}</span>
                        </div>
                        <div className="h-2 overflow-hidden rounded-full bg-stone-200/70">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${percent}%`, backgroundColor: barColor }}
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <a
                href={t.reviews.summary.link}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex rounded-full bg-olive-700 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-[0_10px_26px_rgba(75,93,67,0.18)] transition hover:bg-olive-800"
              >
                {t.reviews.summary.button}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 lg:grid-rows-[auto_1fr_auto] rounded-[2rem] border border-white/70 bg-[#f6f0e4]/92 p-5 shadow-[0_18px_50px_rgba(73,77,48,0.07)] backdrop-blur-xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.08 }}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-2xl font-bold text-olive-950 sm:text-3xl">{t.reviews.filterLabel}</div>
                <div className="mt-1 text-sm text-stone-500">{t.reviews.reviewCount}</div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={goToPrevious}
                  aria-label={t.reviews.previous}
                  className="rounded-full bg-white/80 p-3 text-stone-900 ring-1 ring-olive-700/10 transition hover:bg-white"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  onClick={goToNext}
                  aria-label={t.reviews.next}
                  className="rounded-full bg-white/80 p-3 text-stone-900 ring-1 ring-olive-700/10 transition hover:bg-white"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div>
              <AnimatePresence mode="wait">
                <motion.article
                  key={`${currentReview.source}-${currentIndex}`}
                  className="rounded-[1.7rem] bg-white/88 p-5 ring-1 ring-olive-900/6 shadow-[0_12px_34px_rgba(58,63,36,0.06)]"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.32, ease: 'easeOut' }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-semibold text-stone-950">{currentReview.name}</div>
                      <div className="mt-1 text-xs uppercase tracking-[0.16em] text-stone-500">
                        {currentReview.date}
                      </div>
                    </div>
                    {!isBooking ? (
                      <div className="rounded-full bg-olive-700 px-3 py-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white">
                        {t.reviews.googleLabel}
                      </div>
                    ) : null}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    {!isBooking ? (
                      <div className="rounded-full bg-[#f7f1e2] px-4 py-2 ring-1 ring-olive-700/10">
                        {renderStars(googleStars, 'text-olive-500')}
                      </div>
                    ) : null}
                  </div>

                  <Quote className={`mt-5 h-8 w-8 ${isBooking ? 'text-[#d1a24c]' : 'text-olive-700'}`} />
                  <p className="mt-4 text-base leading-8 text-stone-700">{currentReview.text}</p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={currentReview.href}
                      target="_blank"
                      rel="noreferrer"
                      className={`inline-flex rounded-full px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] shadow-[0_10px_26px_rgba(58,63,36,0.12)] transition ${
                        isBooking
                          ? 'bg-[#1d5fd1] text-white hover:bg-[#184fb0]'
                          : 'bg-[#556a4e] text-white hover:bg-[#465740]'
                      }`}
                    >
                      {isBooking ? t.reviews.openBooking : t.reviews.openGoogle}
                    </a>
                  </div>
                </motion.article>
              </AnimatePresence>
            </div>

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
