import { motion } from 'framer-motion'
import { MessageCircleMore } from 'lucide-react'

function FloatingWhatsApp({ t }) {
  const href = `https://wa.me/${t.contact.whatsappNumber}?text=${encodeURIComponent(
    t.contact.whatsappTemplate.intro,
  )}`

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-[70] inline-flex items-center gap-3 rounded-full bg-olive-700 px-5 py-4 text-sm font-bold text-white shadow-[0_18px_40px_rgba(45,90,81,0.32)] ring-1 ring-white/20 sm:bottom-6 sm:right-6"
      initial={{ opacity: 0, scale: 0.88, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.1, duration: 0.45, ease: 'easeOut' }}
      whileHover={{ y: -4, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      aria-label={t.contact.whatsappButton}
    >
      <MessageCircleMore className="h-5 w-5" />
      <span className="hidden sm:inline">{t.contact.whatsappButton}</span>
    </motion.a>
  )
}

export default FloatingWhatsApp
