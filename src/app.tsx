import {
  component$,
  useContextProvider,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import {
  getInitialLanguage,
  LanguageContext,
  STORAGE_KEY,
  type Language,
} from './i18n'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Download } from './pages/Download'
import { Docs } from './pages/Docs'
import { DX } from './pages/DX'
import { Changelog } from './pages/Changelog'

export const App = component$(() => {
  const route = useSignal(getInitialRoute())
  const lang = useSignal<Language>(getInitialLanguage())

  useContextProvider(LanguageContext, lang)

  useVisibleTask$(({ track }) => {
    const language = track(() => lang.value)
    document.documentElement.lang = language
    localStorage.setItem(STORAGE_KEY, language)
  })

  useVisibleTask$(() => {
    const onHashChange = () => {
      route.value = getHashRoute()
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  })

  const navigate = (path: string) => {
    window.location.hash = path
  }

  return (
    <div class="min-h-screen flex flex-col">
      <Navbar route={route} navigate$={navigate} />
      <main class="flex-1 px-4 pt-24 pb-12">
        {route.value === '/' && <Home />}
        {route.value === '/about' && <About />}
        {route.value === '/download' && <Download />}
        {route.value === '/docs' && <Docs />}
        {route.value === '/dx' && <DX />}
        {route.value === '/changelog' && <Changelog />}
      </main>
      <Footer />
    </div>
  )
})

function getHashRoute(): string {
  if (typeof window === 'undefined') return '/'
  return getInitialRoute()
}

function getInitialRoute(): string {
  if (typeof window === 'undefined') return '/'
  const hash = window.location.hash.slice(1) || '/'
  const valid = ['/', '/about', '/download', '/docs', '/dx', '/changelog']
  return valid.includes(hash) ? hash : '/'
}
