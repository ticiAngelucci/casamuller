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
          className="max-w-2xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">{t.services.tag}</span>
        </motion.div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.services.items.map((item, index) => {
            const Icon = iconMap[item.icon]
            return (
              <motion.article
                key={item.title}
                className="group rounded-[1.7rem] border border-white/80 bg-white/86 p-6 shadow-[0_16px_34px_rgba(23,47,55,0.05)] soft-ring"
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="inline-flex rounded-2xl bg-[#24353b] p-3 text-white transition duration-300 group-hover:bg-olive-700">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-stone-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-stone-600">{item.text}</p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
