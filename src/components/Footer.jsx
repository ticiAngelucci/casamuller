function Footer({ t }) {
  return (
    <footer className="border-t border-stone-900/6 py-12">
      <div className="section-shell flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="headline text-3xl font-bold text-stone-950">Casa Muller</div>
          <p className="mt-3 max-w-md text-sm leading-7 text-stone-600">{t.footer.description}</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-clay-500">
              {t.footer.quickLinksLabel}
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-stone-700">
              {t.navLinks.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-olive-700">
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-clay-500">
              {t.footer.socialLabel}
            </div>
            <div className="mt-4 flex flex-col gap-3 text-sm text-stone-700">
              <a href="https://www.instagram.com/casamullermza" target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={`https://wa.me/${t.contact.whatsappNumber}`} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-[0.24em] text-clay-500">
              {t.footer.legalLabel}
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-stone-600">{t.footer.legalText}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
