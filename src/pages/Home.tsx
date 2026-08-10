import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'

const helpOutput = `$ cboomer --help
cboomer  -  fullscreen screenshot viewer

Usage:  cboomer [OPTIONS]

Options:
  -d, --delay <seconds>    delay execution by <seconds>
  -h, --help               show this help and exit
      --new-config [path]  generate a default config at [path]
  -c, --config <path>      use config at <path>
  -V, --version            show version and exit
  -w, --windowed           windowed mode instead of fullscreen`

export const Home = component$(() => {
  return (
    <div class="max-w-3xl mx-auto flex flex-col items-center gap-12">
      <section class="text-center mt-12">
        <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-zinc-100">
          cboomer
        </h1>
        <p class="mt-6 text-lg text-zinc-400 max-w-xl mx-auto">
          A fullscreen screenshot viewer for Linux with pan, zoom, flashlight
          effects, and live window tracking. Built with C11, X11, and OpenGL.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href="#/download"
            class="inline-block bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            Build from source
          </a>
          <a
            href="https://mega.nz/file/nq4HSBoK#qp-FGWQrytO1ccjn25z4TjMenMdqzSZIrt-hiE6uy1U"
            target="_blank"
            class="inline-block bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-semibold rounded-lg px-6 py-3 transition-colors"
          >
            Watch the demo
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
