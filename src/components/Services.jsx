import { motion } from 'framer-motion'
import {
  AirVent,
  BedDouble,
  CarFront,
  ChefHat,
  Flame,
  MapPinned,
  Trees,
  Wifi,
} from 'lucide-react'

const iconMap = {
  wifi: Wifi,
  kitchen: ChefHat,
  linens: BedDouble,
  climate: AirVent,
  grill: Flame,
  parking: CarFront,
  green: Trees,
  tourism: MapPinned,
}

function Services({ t }) {
  return (
    <section id="servicios" className="py-16 sm:py-20">
      <div className="section-shell">
        <motion.div
          className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="max-w-2xl">
            <span className="section-tag">{t.services.tag}</span>
            <h2 className="headline mt-6 text-4xl font-bold text-stone-950 sm:text-5xl">
              {t.services.title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-stone-600 sm:text-lg">
            {t.services.description}
          </p>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.services.items.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.article
                key={item.title}
                className="group rounded-[1.5rem] border border-white/60 bg-white/82 p-5 shadow-[0_16px_45px_rgba(23,47,55,0.08)] soft-ring"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="inline-flex rounded-2xl bg-olive-700 p-3 text-white transition group-hover:bg-clay-500">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
