import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'

const helpOutput = `$ cboomer --help
Usage: cboomer [OPTIONS]
Zoomer application for Linux with pan, zoom,
flashlight effects, and live window tracking.

Options:
  --help           Show this help message
  --version        Show version
  --delay <ms>     Delay before capture (ms)
  --new-config     Generate default config file
  --config <path>  Use custom config file
  --windowed       Run in windowed mode`

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
        <a
          href="#/download"
          class="mt-8 inline-block bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold rounded-lg px-6 py-3 transition-colors"
        >
          Download now
        </a>
      </section>

      <section class="w-full">
        <Terminal title="cboomer --help" copyText="cboomer --help">
          <div class="text-zinc-400 whitespace-pre">{helpOutput}</div>
        </Terminal>
      </section>
    </div>
  )
})
