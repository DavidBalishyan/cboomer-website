import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'

const buildVariants = [
  { cmd: 'make', desc: 'Release build. Shaders get embedded in the binary.' },
  { cmd: 'make dev', desc: 'Developer build. Enables Ctrl+R shader reload.' },
  { cmd: 'make live', desc: 'Refreshes the screenshot every frame.' },
  { cmd: 'make mitshm', desc: 'Live update via MIT-SHM extension. Faster, combine with live.' },
  { cmd: 'make select', desc: 'Click a window to track it instead of the full screen.' },
]

const controls = [
  { key: 'Drag', desc: 'Pan the image' },
  { key: 'Scroll', desc: 'Zoom in / out' },
  { key: '= / -', desc: 'Zoom in / out' },
  { key: '0', desc: 'Reset position, scale, velocity, and mirror' },
  { key: '1 2 3 4 5', desc: 'Zoom presets: 100%, 200%, 400%, 800%, 1600%' },
  { key: 'arrows / h j k l', desc: 'Pan image' },
  { key: 'Ctrl+f/b/n/p', desc: 'Pan image (small step, Emacs-style)' },
  { key: 'i', desc: 'Toggle texture filtering: nearest <-> linear' },
  { key: 'o', desc: 'Toggle OSD (shader, zoom, FPS, color under cursor)' },
  { key: 'q / Esc', desc: 'Quit' },
  { key: 'r', desc: 'Reload config file' },
  { key: 'm', desc: 'Mirror the image horizontally' },
  { key: 'f', desc: 'Toggle flashlight' },
  { key: 't', desc: 'Cycle through all 12 shaders' },
  { key: 's', desc: 'Save current view to PPM or PNG' },
  { key: 'Ctrl+scroll', desc: 'Adjust flashlight radius' },
  { key: 'Ctrl+[ / ]', desc: 'Rotate image 90 degrees' },
  { key: 'Ctrl+r', desc: 'Reload shaders from disk (dev build only)' },
]

const shaders = [
  { name: 'Normal', desc: 'Default rendering with flashlight and mirror' },
  { name: 'Invert', desc: 'Photographic negative' },
  { name: 'CRT', desc: 'Chromatic aberration, scanlines, vignette' },
  { name: 'Grayscale', desc: 'Luminance-weighted desaturation' },
  { name: 'Edge', desc: 'Sobel edge detection' },
  { name: 'VHS Glitch', desc: 'Animated block shift, channel offset, noise' },
  { name: 'Distortion', desc: 'Sine-wave ripple + barrel distortion' },
  { name: 'Zoom Blur', desc: 'Radial motion blur from cursor' },
  { name: 'Posterize', desc: '4-level color quantization' },
  { name: 'Pixelate', desc: 'Coarse grid downsampling' },
  { name: 'Sepia', desc: 'Vintage darkroom tone' },
  { name: 'Emboss', desc: '3D relief effect' },
]

const configParams = [
  { key: 'min_scale', def: '0.01', desc: 'Minimum zoom level' },
  { key: 'scroll_speed', def: '1.5', desc: 'Zoom speed per scroll tick' },
  { key: 'drag_friction', def: '6.0', desc: 'How fast panning momentum decays' },
  { key: 'scale_friction', def: '4.0', desc: 'How fast zoom momentum decays' },
  { key: 'default_shader', def: '"Normal"', desc: 'Shader on startup' },
  { key: 'mirror', def: 'false', desc: 'Start with mirror on' },
  { key: 'flashlight_radius', def: '200.0', desc: 'Initial flashlight radius in pixels' },
  { key: 'scroll_invert', def: 'false', desc: 'Flip scroll-to-zoom direction' },
  { key: 'osd', def: 'false', desc: 'Show OSD on startup (toggle with o key)' },
  { key: 'smooth_reset', def: 'true', desc: 'Animate back to origin on 0 key' },
  { key: 'font', def: '(auto)', desc: 'Path or name for OSD font' },
  { key: 'screenshot_dir', def: '~/Pictures/Screenshots', desc: 'Where s saves views' },
  { key: 'screenshot_format', def: '"ppm"', desc: 'ppm or png for s key saves' },
  { key: 'ppm_save', def: 'false', desc: 'Save a PPM on startup' },
  { key: 'ppm_save_path', def: '(config dir)', desc: 'Path for startup PPM save' },
]

const configExample = `# ~/.config/cboomer/config
# Lines starting with # are comments. Inline # comments work too.

# Zoom and pan
scroll_speed = 1.5
drag_friction = 6.0
scale_friction = 4.0
min_scale = 0.01

# Shader and display
default_shader = "Normal"
mirror = false
osd = false
smooth_reset = true

# Flashlight
flashlight_radius = 200.0

# Scroll behavior
scroll_invert = false

# Screenshot saves
screenshot_dir = ~/Pictures/Screenshots
screenshot_format = "png"
ppm_save = false
ppm_save_path = ~/config/cboomer/screenshot.ppm

# OSD font (auto-detect if empty)
font = "DejaVuSans"

# Boolean values: true/false, 1/0, yes/no, on/off
# Strings must be quoted: "Normal"
# Paths with ~ or $HOME expand automatically`

const configSyntaxExample = `# Values are typed by how you write them:
scroll_speed = 1.5        # double
min_scale = 0.01          # double
drag_friction = 6.0       # double
osd = true                # bool
default_shader = "Normal" # string
screenshot_dir = ~/Pictures  # path (~ expands to $HOME)
flashlight_radius = 200  # int or double`

export const Docs = component$(() => {
  return (
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-12">
        Documentation
      </h1>

      {/* Quick Start */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Quick start</h2>
        <Terminal title="terminal" copyText="make && ./cboomer">
          <div class="text-zinc-400">
            <span class="text-green-400">$</span> make{'\n'}
            <span class="text-green-400">$</span> ./cboomer
          </div>
        </Terminal>
      </section>

      {/* Build Variants */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Build variants
        </h2>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {buildVariants.map((v, i) => (
            <div
              key={v.cmd}
              class={
                'flex items-center gap-4 px-5 py-3' +
                (i < buildVariants.length - 1 ? ' border-b border-zinc-800' : '')
              }
            >
              <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap">
                {v.cmd}
              </code>
              <span class="text-sm text-zinc-400">{v.desc}</span>
            </div>
          ))}
        </div>
        <p class="mt-3 text-sm text-zinc-500">
          Flags can be combined:{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            make dev live mitshm select
          </code>
        </p>
      </section>

      {/* Controls */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Controls</h2>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {controls.map((c, i) => (
            <div
              key={c.key}
              class={
                'flex items-center gap-4 px-5 py-3' +
                (i < controls.length - 1 ? ' border-b border-zinc-800' : '')
              }
            >
              <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap min-w-[140px]">
                {c.key}
              </code>
              <span class="text-sm text-zinc-400">{c.desc}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Shaders */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Shader effects
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          Press <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded">t</code> to
          cycle through them. Animated shaders get a time uniform so they
          change over time.
        </p>
        <div class="grid md:grid-cols-2 gap-3">
          {shaders.map((s) => (
            <div
              key={s.name}
              class="rounded-lg border border-zinc-800 bg-zinc-900 p-4"
            >
              <h3 class="font-semibold text-cyan-400 text-sm">{s.name}</h3>
              <p class="text-xs text-zinc-500 mt-1">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Configuration */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Configuration</h2>
        <p class="text-zinc-400 text-sm mb-4">
          The config file lives at{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded">
            $HOME/.config/cboomer/config
          </code>
          . Generate a default one:
        </p>
        <Terminal title="terminal" copyText="cboomer --new-config">
          <div class="text-zinc-400">
            <span class="text-green-400">$</span> cboomer --new-config
          </div>
        </Terminal>

        {/* Config syntax */}
        <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
          Config syntax
        </h3>
        <p class="text-zinc-400 text-sm mb-4">
          The format is <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">key = value</code>.
          Values are typed by their literal form, not by annotation.
        </p>
        <Terminal title="config syntax" copyText={configSyntaxExample}>
          <div class="text-zinc-400 whitespace-pre text-xs">{configSyntaxExample}</div>
        </Terminal>

        <p class="text-zinc-400 text-sm mt-4 mb-4">
          Lines starting with <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">#</code> are
          comments. Inline comments after <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">#</code> also
          work. Boolean values accept <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">true</code>/<code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">false</code>,{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">1</code>/<code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">0</code>,{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">yes</code>/<code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">no</code>, and{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">on</code>/<code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">off</code>.
          Paths with <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">~</code> or{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">$HOME</code> expand
          to your home directory.
        </p>

        {/* Full example */}
        <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
          Example config
        </h3>
        <Terminal title="~/.config/cboomer/config" copyText={configExample}>
          <div class="text-zinc-400 whitespace-pre text-xs">{configExample}</div>
        </Terminal>

        {/* Config reference table */}
        <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
          All options
        </h3>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {configParams.map((p, i) => (
            <div
              key={p.key}
              class={
                'flex items-center gap-4 px-5 py-3' +
                (i < configParams.length - 1 ? ' border-b border-zinc-800' : '')
              }
            >
              <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap min-w-[140px]">
                {p.key}
              </code>
              <span class="text-xs font-mono text-zinc-500 whitespace-nowrap">
                {p.def}
              </span>
              <span class="text-sm text-zinc-400">{p.desc}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
})
