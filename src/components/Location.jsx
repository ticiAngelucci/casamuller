import { motion } from 'framer-motion'

function Location({ t }) {
  return (
    <section id="ubicacion" className="py-16 sm:py-20">
      <div className="section-shell">
        <motion.div
          className="overflow-hidden rounded-[2.3rem] border border-[#708261]/20 bg-[#556a4e] text-white shadow-[0_28px_72px_rgba(55,69,47,0.18)]"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
        >
          <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[0.92fr_auto] lg:items-start">
            <div>
              <span className="inline-flex rounded-full border border-white/18 bg-white/12 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white">
                {t.location.tag}
              </span>
              <h2 className="headline mt-5 max-w-md text-3xl font-bold leading-tight text-white sm:text-4xl">
                {t.location.title}
              </h2>
              <p className="mt-4 max-w-lg text-base leading-7 text-white/86">{t.location.description}</p>
            </div>

            <div className="lg:pt-[3.25rem]">
              <motion.a
                href={t.location.directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-[54px] items-center justify-center rounded-full bg-[#f3ead7] px-6 text-sm font-bold uppercase tracking-[0.14em] text-[#405136] shadow-[0_12px_26px_rgba(27,37,24,0.12)] transition hover:bg-[#e9dcc2] lg:min-w-[210px]"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                {t.location.button}
              </motion.a>
            </div>
          </div>

          <div className="px-4 pb-4 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[#607555] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
              <iframe
                title={t.location.mapTitle}
                src={t.location.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full rounded-[1.5rem] md:h-[420px]"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Location
