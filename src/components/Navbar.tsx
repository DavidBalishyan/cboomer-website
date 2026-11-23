import { component$, useSignal, type Signal } from '@builder.io/qwik'
import { LanguageSwitcher } from './LanguageSwitcher'
import { dictionaries, useLanguage } from '../i18n'

interface NavbarProps {
  route: Signal<string>
  navigate$: (path: string) => void
}

export const Navbar = component$<NavbarProps>(({ route, navigate$ }) => {
  const mobileOpen = useSignal(false)
  const lang = useLanguage()
  const t = dictionaries[lang.value]

  const links = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.docs, path: '/docs' },
    { label: t.nav.changelog, path: '/changelog' },
    { label: t.nav.dx, path: '/dx' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.download, path: '/download' },
  ]

  return (
    <nav class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-5xl px-4">
      <div class="bg-zinc-900/40 backdrop-blur-xl border border-zinc-700/30 shadow-2xl shadow-cyan-500/[0.04] rounded-3xl px-6 py-3 flex items-center justify-between gap-4">
        <a
          href="#/"
          onClick$={(e) => {
            e.preventDefault()
            navigate$('/')
          }}
          class="text-zinc-100 font-bold text-lg tracking-tight font-mono shrink-0"
        >
          cboomer
        </a>

        <div class="flex items-center gap-4 md:gap-6">
          <div class="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                onClick$={(e) => {
                  e.preventDefault()
                  navigate$(link.path)
                }}
                class={
                  'text-sm transition-colors ' +
                  (route.value === link.path
                    ? 'text-cyan-400 font-medium'
                    : 'text-white/70 hover:text-white')
                }
              >
                {link.label}
              </a>
            ))}
          </div>

          <LanguageSwitcher />

          <button
            class="md:hidden text-zinc-400 hover:text-white p-1"
            onClick$={() => (mobileOpen.value = !mobileOpen.value)}
            aria-label={t.common.toggleMenu}
          >
            {mobileOpen.value ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen.value && (
        <div class="md:hidden mt-2 bg-zinc-900/50 backdrop-blur-xl border border-zinc-700/30 rounded-2xl p-4 flex flex-col gap-2">
          {links.map((link) => (
            <a
              key={link.path}
              href={`#${link.path}`}
              onClick$={(e) => {
                e.preventDefault()
                navigate$(link.path)
                mobileOpen.value = false
              }}
              class={
                'text-sm px-4 py-2 rounded-lg transition-colors ' +
                (route.value === link.path
                  ? 'text-cyan-400 font-medium bg-zinc-800/50'
                  : 'text-white/70 hover:text-white hover:bg-zinc-800/30')
              }
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
})
