import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'

function Gallery({ t, images }) {
  const [selectedImage, setSelectedImage] = useState(null)
  const featuredImages = images.slice(0, 6)

  return (
    <section id="galeria" className="py-16 sm:py-20">
      <div className="section-shell">
        <motion.div
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-2xl">
            <span className="section-tag">{t.gallery.tag}</span>
            <h2 className="headline mt-6 text-4xl font-bold text-stone-950 sm:text-5xl">
              {t.gallery.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-stone-600">{t.gallery.description}</p>
        </motion.div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredImages.map((image, index) => (
            <motion.button
              key={image.id}
              type="button"
              onClick={() => setSelectedImage(image)}
              className="group relative overflow-hidden rounded-[1.6rem] text-left shadow-[0_20px_55px_rgba(23,47,55,0.10)]"
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/55 via-stone-950/10 to-transparent" />
              <img
                src={image.src}
                alt={image.alt}
                className="h-[280px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[320px]"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/70">
                  {image.tag}
                </div>
                <div className="mt-2 text-xl font-semibold">{image.title}</div>
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
                  onClick={() => setSelectedImage(null)}
                  aria-label={t.gallery.close}
                >
                  <X className="h-5 w-5" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-h-[80vh] w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-transparent p-6 text-white">
                  <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">
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
