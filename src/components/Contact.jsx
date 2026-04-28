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
        <div className="grid gap-5 rounded-[2.2rem] border border-white/80 bg-[linear-gradient(135deg,#f8f2e5_0%,#f4ecdc_55%,#efe5d2_100%)] p-5 text-stone-900 shadow-[0_26px_70px_rgba(87,76,46,0.08)] lg:grid-cols-[0.8fr_1.2fr] lg:p-6">
          <motion.div
            className="flex flex-col justify-between rounded-[1.9rem] bg-[#556a4e] p-6 text-white shadow-[0_18px_50px_rgba(55,69,47,0.16)]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75 }}
          >
            <div>
            <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.28em] text-white/80">
              {t.contact.tag}
            </span>
            <h2 className="headline mt-5 max-w-md text-4xl font-bold sm:text-[3.2rem]">
              {t.contact.title}
            </h2>
            <p className="mt-4 max-w-sm text-base leading-7 text-white/78">
              {t.contact.description}
            </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <motion.a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f6eedf] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-[#425238] shadow-[0_10px_26px_rgba(17,26,30,0.14)]"
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
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/8 px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.98 }}
              >
                <Instagram className="h-4 w-4" />
                {t.contact.instagramButton}
              </motion.a>
            </div>
          </motion.div>

          <motion.form
            className="rounded-[1.9rem] bg-white/58 p-5 backdrop-blur-md ring-1 ring-[#74886a]/14"
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
                  <span className="mb-2 block text-sm font-semibold text-stone-700">{field.label}</span>
                  <input
                    name={field.name}
                    type={field.type}
                    min={field.min}
                    value={formData[field.name]}
                    onChange={onChange}
                    className="w-full rounded-2xl border border-[#cfc3aa] bg-[#fffdf8] px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-olive-500 focus:bg-white"
                  />
                </label>
              ))}
              <label className="sm:col-span-2">
                <span className="mb-2 block text-sm font-semibold text-stone-700">
                  {t.contact.form.message}
                </span>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={onChange}
                  className="w-full rounded-2xl border border-[#cfc3aa] bg-[#fffdf8] px-4 py-3 text-sm text-stone-900 outline-none transition focus:border-olive-500 focus:bg-white"
                  placeholder={t.contact.form.messagePlaceholder}
                />
              </label>
            </div>

            <motion.a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-full items-center justify-center rounded-full bg-[#556a4e] px-6 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-white shadow-[0_10px_26px_rgba(55,69,47,0.16)]"
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
