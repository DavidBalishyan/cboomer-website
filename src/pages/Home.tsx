import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'
import { dictionaries, useLanguage } from '../i18n'

export const Home = component$(() => {
  const lang = useLanguage()
  const t = dictionaries[lang.value]
  const h = t.home.help
  const helpOutput = `$ cboomer --help
cboomer  -  ${h.tagline}

${h.usage}  cboomer [OPTIONS]

${h.options}
  -d, --delay <seconds>    ${h.delay}
  -h, --help               ${h.help}
      --new-config [path]  ${h.newConfig}
  -c, --config <path>      ${h.config}
  -V, --version            ${h.version}
  -w, --windowed           ${h.windowed}`

  return (
    <div class="max-w-3xl mx-auto flex flex-col items-center gap-12">
      <section class="text-center mt-12">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100">
          cboomer
        </h1>
        <p class="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
          {t.home.description}
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#/download"
            class="inline-block bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            {t.home.buildFromSource}
          </a>
          <a
            href="https://mega.nz/file/nq4HSBoK#qp-FGWQrytO1ccjn25z4TjMenMdqzSZIrt-hiE6uy1U"
            target="_blank"
            class="inline-block bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            {t.home.watchDemo}
          </a>
        </div>
      </section>

      <section class="w-full">
        <Terminal title="cboomer --help" copyText="cboomer --help">
          <div class="text-zinc-400 whitespace-pre">{helpOutput}</div>
        </Terminal>
      </section>
    </div>
  )
})
