import { motion } from 'framer-motion'
import { MapPinned } from 'lucide-react'

function Location({ t }) {
  return (
    <section id="ubicacion" className="py-16 sm:py-20">
      <div className="section-shell grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">{t.location.tag}</span>
          <h2 className="headline mt-6 text-4xl font-bold text-stone-950 sm:text-5xl">
            {t.location.title}
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            {t.location.description}
          </p>
          <div className="mt-6 rounded-[1.6rem] bg-white/85 p-5 shadow-[0_18px_45px_rgba(23,47,55,0.08)] soft-ring">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-olive-700 p-3 text-white">
                <MapPinned className="h-5 w-5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-clay-500">
                  {t.location.addressLabel}
                </div>
                <p className="mt-2 text-base font-semibold text-stone-900">{t.location.address}</p>
                <p className="mt-2 text-sm leading-7 text-stone-600">{t.location.note}</p>
              </div>
            </div>
            <motion.a
              href={t.location.directionsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-white"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.location.button}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[2rem] border border-white/65 bg-white p-3 shadow-[0_18px_45px_rgba(23,47,55,0.08)] soft-ring"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, delay: 0.1 }}
        >
          <iframe
            title={t.location.mapTitle}
            src={t.location.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full rounded-[1.4rem] md:h-[380px]"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Location
