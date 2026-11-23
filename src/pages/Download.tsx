import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'
import { dictionaries, useLanguage } from '../i18n'

const installSteps = `$ git clone https://github.com/DavidBalishyan/cboomer.git
$ cd cboomer
$ ./scripts/install-deps.sh
$ make`

const envforgeStep = `$ git clone https://github.com/DavidBalishyan/cboomer.git
$ cd cboomer
$ envforge enter cboomer`

const makeoverStep = `$ ./scripts/makeover
$ ./scripts/makeover test`

export const Download = component$(() => {
  const lang = useLanguage()
  const t = dictionaries[lang.value]

  return (
    <div class="max-w-2xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
        {t.download.title}
      </h1>
      <p class="text-zinc-400 text-lg mb-8">{t.download.subtitle}</p>

      <h2 class="text-lg font-semibold text-zinc-100 mb-3">
        {t.download.option1Title}
      </h2>
      <p class="text-zinc-400 text-sm mb-4">{t.download.option1Text}</p>
      <Terminal title={t.common.terminal} copyText={installSteps}>
        <div class="text-zinc-400 whitespace-pre">
          <span class="text-green-400">$</span> git clone https://github.com/DavidBalishyan/cboomer.git{'\n'}
          <span class="text-green-400">$</span> cd cboomer{'\n'}
          <span class="text-green-400">$</span> ./scripts/install-deps.sh{'\n'}
          <span class="text-green-400">$</span> make
        </div>
      </Terminal>

      <h2 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
        {t.download.option2Title}
      </h2>
      <p
        class="text-zinc-400 text-sm mb-4"
        dangerouslySetInnerHTML={t.download.option2Text}
      />
      <Terminal title={t.common.terminal} copyText={envforgeStep}>
        <div class="text-zinc-400 whitespace-pre">
          <span class="text-green-400">$</span> git clone https://github.com/DavidBalishyan/cboomer.git{'\n'}
          <span class="text-green-400">$</span> cd cboomer{'\n'}
          <span class="text-green-400">$</span> envforge enter cboomer
        </div>
      </Terminal>

      <h2 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
        {t.download.makeoverTitle}
      </h2>
      <p class="text-zinc-400 text-sm mb-4">{t.download.makeoverText}</p>
      <Terminal title={t.common.terminal} copyText={makeoverStep}>
        <div class="text-zinc-400 whitespace-pre">
          <span class="text-green-400">$</span> ./scripts/makeover{'\n'}
          <span class="text-green-400">$</span> ./scripts/makeover test
        </div>
      </Terminal>

      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <a
          href="https://github.com/DavidBalishyan/cboomer"
          target="_blank"
          class="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold rounded-lg px-6 py-3 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          {t.common.viewOnGitHub}
        </a>
        <a
          href="https://codeberg.org/DavidBalishyan/cboomer"
          target="_blank"
          class="inline-flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold rounded-lg px-6 py-3 transition-colors"
        >
          {t.common.viewCodebergMirror}
        </a>
      </div>

      <div class="mt-10 rounded-lg border border-zinc-800 bg-zinc-900 p-5">
        <h3 class="font-semibold text-zinc-100 mb-3">
          {t.download.requirementsTitle}
        </h3>
        <ul class="space-y-2">
          {t.download.requirements.map((req) => (
            <li key={req} class="flex items-start gap-2 text-sm text-zinc-400">
              <span class="text-green-400 mt-0.5">&#x2022;</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
})
