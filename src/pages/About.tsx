import { component$ } from '@builder.io/qwik'

const features = [
  {
    title: '12 shader effects',
    description:
      'CRT, VHS Glitch, Edge Detection, Sepia, Pixelate, and more. Press t to cycle through them, or write your own GLSL shaders.',
  },
  {
    title: 'Smooth controls',
    description:
      'Drag to pan with inertia, scroll to zoom, toggle flashlight and mirror. Zoom presets from 100% to 1600% with animation.',
  },
  {
    title: 'Configurable',
    description:
      'Typed config file at ~/.config/cboomer/config. On-screen display with shader name, FPS, and color picker. Editor plugins for Vim and Emacs.',
  },
]

export const About = component$(() => {
  return (
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-8">
        About cboomer
      </h1>

      <div class="space-y-6 text-zinc-400 text-lg mb-12">
        <p>
          cboomer is a fullscreen screenshot viewer for Linux. It started as a
          C11 rewrite of Tsoding's{' '}
          <a
            href="https://github.com/tsoding/boomer"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            boomer
          </a>{' '}
          (which was written in Nim) and grew from there.
        </p>
        <p>
          It grabs your screen or a specific window, then renders it in a
          fullscreen OpenGL overlay. You can pan, zoom, cycle through shader
          effects, use a flashlight to light up parts of the image, and save
          the result. Panning has inertia so it feels smooth.
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-4 mb-12">
        {features.map((f) => (
          <div
            key={f.title}
            class="rounded-lg border border-zinc-800 bg-zinc-900 p-5"
          >
            <h3 class="font-semibold text-cyan-400 mb-2">{f.title}</h3>
            <p class="text-sm text-zinc-400">{f.description}</p>
          </div>
        ))}
      </div>

      <div class="flex justify-center">
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
          View on GitHub
        </a>
      </div>
    </div>
  )
})
