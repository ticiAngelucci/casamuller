import { motion } from 'framer-motion'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

function About({ t, images }) {
  const previewImages = images.slice(0, 2)

  return (
    <section id="la-casa" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 rounded-[2rem] border border-white/70 bg-white/82 p-5 shadow-[0_28px_70px_rgba(23,47,55,0.10)] backdrop-blur-xl lg:grid-cols-[0.95fr_1.05fr] lg:p-7">
          <motion.div
            className="grid gap-5"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-tag">{t.about.tag}</span>
            <h2 className="headline mt-6 max-w-xl text-4xl font-bold text-stone-950 sm:text-5xl">
              {t.about.title}
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
              {t.about.description}
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {previewImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  className="overflow-hidden rounded-[1.6rem] bg-sand-50 p-3 ring-1 ring-stone-900/6"
                  initial={{ opacity: 0, x: index === 0 ? -18 : 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.65, delay: 0.1 + index * 0.08 }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-[210px] w-full rounded-[1.2rem] object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {t.about.features.slice(0, 6).map((feature) => (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                transition={{ duration: 0.55 }}
                className="rounded-[1.5rem] border border-white/65 bg-sand-50/88 p-5 soft-ring"
              >
                <div className="text-xs font-bold uppercase tracking-[0.24em] text-clay-500">
                  {feature.value}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-stone-900">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{feature.text}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
