import { useState } from 'react'
import { motion } from 'framer-motion'
import { Instagram, MessageCircleMore } from 'lucide-react'

function Contact({ t }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '',
    message: '',
  })

  const lines = [
    `${t.contact.whatsappTemplate.intro}`,
    `${t.contact.form.name}: ${formData.name || '-'}`,
    `${t.contact.form.email}: ${formData.email || '-'}`,
    `${t.contact.form.checkIn}: ${formData.checkIn || '-'}`,
    `${t.contact.form.checkOut}: ${formData.checkOut || '-'}`,
    `${t.contact.form.guests}: ${formData.guests || '-'}`,
    `${t.contact.form.message}: ${formData.message || '-'}`,
  ]
  const whatsappHref = `https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`

  const onChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  return (
    <section id="contacto" className="py-16 sm:py-20">
      <div className="section-shell">
        <div className="grid gap-6 rounded-[2.1rem] border border-white/80 bg-[linear-gradient(135deg,#233238_0%,#31484c_45%,#536f67_100%)] p-5 text-white shadow-[0_26px_70px_rgba(23,47,55,0.14)] lg:grid-cols-[0.86fr_1.14fr] lg:p-7">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <span className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/80">
              {t.contact.tag}
            </span>
            <h2 className="headline mt-6 max-w-lg text-4xl font-bold sm:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              {t.contact.description}
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:flex-col xl:flex-row">
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-stone-950 shadow-[0_10px_26px_rgba(17,26,30,0.18)]"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <MessageCircleMore className="h-4 w-4" />
                {t.contact.whatsappButton}
              </motion.a>
              <motion.a
                href="https://www.instagram.com/casamullermza"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/22 bg-white/10 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </motion.a>
            </div>

            <div className="mt-6 text-sm leading-7 text-white/72">{t.contact.placeholders}</div>
          </motion.div>

          <motion.form
            className="rounded-[1.9rem] bg-white/10 p-5 backdrop-blur-md ring-1 ring-white/14"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.75, delay: 0.1 }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: 'name', type: 'text', label: t.contact.form.name },
                { name: 'email', type: 'email', label: t.contact.form.email },
                { name: 'checkIn', type: 'date', label: t.contact.form.checkIn },
                { name: 'checkOut', type: 'date', label: t.contact.form.checkOut },
                { name: 'guests', type: 'number', label: t.contact.form.guests, min: 1 },
              ].map((field) => (
                <label
                  key={field.name}
                  className={field.name === 'guests' ? 'sm:col-span-2' : ''}
                >
                  <span className="mb-2 block text-sm font-semibold text-white/90">{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    min={field.min}
                    value={formData[field.name]}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-white/12 bg-white/94 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-clay-300 focus:bg-white"
                  />
                </label>
              ))}
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-white/90">
                  {t.contact.form.message}
                </span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={onChange}
                  className="w-full rounded-2xl border border-white/12 bg-white/94 px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-clay-300 focus:bg-white"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </label>
            </div>

            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-stone-950 shadow-[0_10px_26px_rgba(17,26,30,0.18)]"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {t.contact.submit}
            </motion.a>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
