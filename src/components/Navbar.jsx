import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Globe, Menu, X } from 'lucide-react'

const languages = ['es', 'en', 'pt']

function Navbar({ language, setLanguage, t }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  const navClass = isScrolled
    ? 'border-b border-olive-700/10 bg-[#f4ecdc]/88 shadow-[0_14px_40px_rgba(61,62,44,0.08)] backdrop-blur-xl'
    : 'bg-[#f4ecdc]/62 backdrop-blur-lg'

  return (
    <motion.header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${navClass}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <a href="#inicio" className="headline text-[1.9rem] font-bold text-stone-950">
          Casa Müller
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {t.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-stone-700 transition duration-300 hover:text-olive-700"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <div className="glass-panel flex items-center gap-1 rounded-full px-2 py-1 shadow-[0_10px_24px_rgba(61,62,44,0.06)] soft-ring">
            <Globe className="h-4 w-4 text-olive-700" />
            {languages.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setLanguage(option)}
                className={`rounded-full px-3 py-2 text-xs font-bold uppercase tracking-[0.24em] transition ${
                  language === option
                    ? 'bg-olive-700 text-white shadow-[0_8px_18px_rgba(75,93,67,0.18)]'
                    : 'text-stone-500 hover:bg-white/70 hover:text-olive-700'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="glass-panel inline-flex rounded-full p-3 text-stone-900 shadow-[0_10px_25px_rgba(61,62,44,0.06)] soft-ring lg:hidden"
          onClick={() => setIsOpen(true)}
          aria-label={t.openMenu}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-stone-950/35 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[88%] max-w-sm flex-col bg-[#fbfbf7] px-6 py-6 shadow-2xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 220, damping: 26 }}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="headline text-2xl font-bold text-stone-950">Casa Müller</span>
                <button
                  type="button"
                  className="rounded-full bg-white p-3 text-stone-900 soft-ring"
                  onClick={() => setIsOpen(false)}
                  aria-label={t.closeMenu}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {t.navLinks.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="border-b border-stone-900/7 py-3 text-lg font-semibold text-stone-800"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-10">
                <div className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-stone-500">
                  {t.languageLabel}
                </div>
                <div className="flex gap-2">
                  {languages.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => {
                        setLanguage(option)
                        setIsOpen(false)
                      }}
                      className={`rounded-full px-4 py-3 text-xs font-bold uppercase tracking-[0.24em] ${
                        language === option ? 'bg-stone-950 text-white' : 'bg-white text-stone-700 soft-ring'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}

export default Navbar
