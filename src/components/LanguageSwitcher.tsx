import { component$ } from '@builder.io/qwik'
import {
  dictionaries,
  languageNames,
  languageShort,
  languages,
  useLanguage,
} from '../i18n'

export const LanguageSwitcher = component$(() => {
  const lang = useLanguage()
  const t = dictionaries[lang.value]

  return (
    <div
      class="flex items-center gap-0.5 rounded-lg border border-zinc-700/40 bg-zinc-950/50 p-0.5"
      role="group"
      aria-label={t.common.language}
    >
      {languages.map((language) => (
        <button
          key={language}
          type="button"
          onClick$={() => {
            lang.value = language
          }}
          aria-label={languageNames[language]}
          title={languageNames[language]}
          class={
            'rounded px-1.5 py-1 text-[10px] font-semibold tracking-wide transition-colors ' +
            (lang.value === language
              ? 'bg-cyan-500/15 text-cyan-400'
              : 'text-zinc-500 hover:text-white hover:bg-zinc-800/60')
          }
        >
          {languageShort[language]}
        </button>
      ))}
    </div>
  )
})
