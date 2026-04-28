import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

function Gallery({ t, images }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const groupedImages = useMemo(() => {
    const groups = new Map()
    images.forEach((image, index) => {
      if (!groups.has(image.tag)) {
        groups.set(image.tag, { ...image, startIndex: index })
      }
    })
    return Array.from(groups.values())
  }, [images])

  const selectedImage = selectedIndex !== null ? images[selectedIndex] : null

  const openImage = (startIndex) => {
    setSelectedIndex(startIndex)
  }

  const goToPrevious = () => {
    setSelectedIndex((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  const goToNext = () => {
    setSelectedIndex((current) => (current === images.length - 1 ? 0 : current + 1))
  }

  return (
    <section id="galeria" className="py-16 sm:py-20">
      <div className="section-shell">
        <motion.div
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">{t.gallery.tag}</span>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groupedImages.map((image, index) => (
            <motion.button
              key={`${image.tag}-${image.id}`}
              type="button"
              onClick={() => openImage(image.startIndex)}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/70 text-left shadow-[0_16px_36px_rgba(23,47,55,0.08)]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/72 via-stone-950/18 to-transparent" />
              <img
                src={image.src}
                alt={image.alt}
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px]"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/80 [text-shadow:0_2px_10px_rgba(0,0,0,0.45)]">
                  {image.tag}
                </div>
                <div className="mt-2 text-xl font-semibold [text-shadow:0_4px_16px_rgba(0,0,0,0.55)]">
                  {image.title}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[60] bg-stone-950/80 p-4 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <div className="flex h-full items-center justify-center">
              <motion.div
                className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/15 bg-stone-950"
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.96, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  className="absolute right-4 top-4 z-10 rounded-full bg-white/14 p-3 text-white backdrop-blur-sm"
                  onClick={() => setSelectedIndex(null)}
                  aria-label={t.gallery.close}
                >
                  <X className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-sm transition hover:bg-white/24"
                  onClick={goToPrevious}
                  aria-label={t.gallery.previous}
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  className="absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/14 text-white backdrop-blur-sm transition hover:bg-white/24"
                  onClick={goToNext}
                  aria-label={t.gallery.next}
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/78 to-transparent p-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/75">
                    {selectedImage.tag}
                  </div>
                  <div className="mt-2 text-2xl font-semibold">{selectedImage.title}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
