import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'

const buildVariants = [
  { cmd: 'make', desc: 'Build cboomer with its shaders embedded.' },
  { cmd: 'make dev', desc: 'Allow Ctrl+R to reload shaders from disk.' },
  { cmd: 'make live', desc: 'Refreshes the screenshot every frame.' },
  { cmd: 'make mitshm', desc: 'Use MIT-SHM for faster captures. Pair it with live.' },
  { cmd: 'make select', desc: 'Click a window to track it instead of the full screen.' },
]

const makeoverExample = `$ ./scripts/makeover
$ ./scripts/makeover dev live mitshm select
$ ./scripts/makeover test
$ ./scripts/makeover --list`

const zigExample = `$ zig build
$ zig build -Ddev -Dlive -Dmitshm -Dselect
$ zig build test
$ zig build run
$ zig build clean`

const ninjaExample = `$ perl scripts/experimental/generate.pl --dev --live
$ ninja

# The Python generator produces the same build file
$ python3 scripts/experimental/generate.py --dev --live
$ ninja`

const testExample = `$ make test
$ ./scripts/makeover test
$ zig build test`

const commandLineOptions = [
  { option: '-d, --delay <seconds>', desc: 'Wait before capturing the screen.' },
  { option: '-h, --help', desc: 'Print the help text and exit.' },
  { option: '--new-config [path]', desc: 'Write a default config, optionally at a custom path.' },
  { option: '-c, --config <path>', desc: 'Load a config file from a custom path.' },
  { option: '-V, --version', desc: 'Print the embedded Git commit and exit.' },
  { option: '-w, --windowed', desc: 'Open a normal window and remember its position.' },
]

const controls = [
  { key: 'Left drag', desc: 'Pan the image' },
  { key: 'Scroll', desc: 'Zoom in or out' },
  { key: '= / -', desc: 'Zoom in / out' },
  { key: '0', desc: 'Reset position, scale, velocity, and mirror state' },
  { key: '1 2 3 4 5', desc: 'Set zoom to 100%, 200%, 400%, 800%, or 1600%' },
  { key: 'arrows / h j k l', desc: 'Pan the image' },
  { key: 'Ctrl+f/b/n/p', desc: 'Pan image (small step, Emacs-style)' },
  { key: 'i', desc: 'Switch between nearest and linear texture filtering' },
  { key: 'o', desc: 'Show or hide the OSD with shader, zoom, FPS, color, and filter details' },
  { key: 'q / Esc', desc: 'Quit' },
  { key: 'r', desc: 'Reload the config file' },
  { key: 'm', desc: 'Mirror the image horizontally' },
  { key: 'f', desc: 'Turn the flashlight on or off' },
  { key: 't', desc: 'Cycle through all 12 shaders' },
  { key: 's', desc: 'Save the rendered view, with shaders, as PPM or PNG' },
  { key: 'Ctrl+scroll / +/-', desc: 'Adjust the radius while the flashlight is on' },
  { key: 'Ctrl+[ / Ctrl+]', desc: 'Rotate 90 degrees counter-clockwise or clockwise' },
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
  { key: 'font', def: '(auto-detect)', desc: 'Path or system name for the OSD font' },
  { key: 'screenshot_dir', def: '~/Pictures/Screenshots', desc: 'Where s saves views' },
  { key: 'screenshot_format', def: '"ppm"', desc: 'ppm or png for s key saves' },
  { key: 'ppm_save', def: 'false', desc: 'Save a PPM on startup' },
  { key: 'ppm_save_path', def: '$HOME/.config/cboomer/screenshot.ppm', desc: 'Path for the startup PPM save' },
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
screenshot_dir = "~/Pictures/Screenshots"
screenshot_format = "png"
ppm_save = false
ppm_save_path = "$HOME/.config/cboomer/screenshot.ppm"

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
screenshot_dir = "~/Pictures" # string path (~ expands to $HOME)
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

      {/* Command line */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Command-line options
        </h2>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {commandLineOptions.map((item, i) => (
            <div
              key={item.option}
              class={
                'px-5 py-3 md:flex md:items-start md:gap-4' +
                (i < commandLineOptions.length - 1 ? ' border-b border-zinc-800' : '')
              }
            >
              <code class="block text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap md:min-w-[220px] w-fit">
                {item.option}
              </code>
              <span class="block text-sm text-zinc-400 mt-2 md:mt-0">
                {item.desc}
              </span>
            </div>
          ))}
        </div>
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

      {/* Makeover */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Makeover build
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          The repository includes a vendored copy of{' '}
          <a
            href="https://github.com/davidBalishyan/makeover"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Makeover
          </a>{' '}
          and a Buildfile that mirrors the GNU Make targets. It only needs
          Python 3 and does not require a separate installation.
        </p>
        <Terminal title="terminal" copyText={makeoverExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> ./scripts/makeover{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover dev live mitshm select{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover test{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover --list
          </div>
        </Terminal>
        <p class="text-zinc-400 text-sm mt-4">
          Feature targets can be combined. Set overrides through the
          environment, such as{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            CC=clang ./scripts/makeover
          </code>
          . Run{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            ./scripts/makeover clean
          </code>{' '}
          before switching unrelated feature or compiler-flag combinations.
        </p>
      </section>

      {/* Other build systems */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Zig and Ninja
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          build.zig supports the same four feature flags as Make. Pass each
          flag with <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">-D</code>.
        </p>
        <Terminal title="Zig" copyText={zigExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> zig build{'\n'}
            <span class="text-green-400">$</span> zig build -Ddev -Dlive -Dmitshm -Dselect{'\n'}
            <span class="text-green-400">$</span> zig build test{'\n'}
            <span class="text-green-400">$</span> zig build run{'\n'}
            <span class="text-green-400">$</span> zig build clean
          </div>
        </Terminal>

        <p class="text-zinc-400 text-sm mt-6 mb-4">
          The experimental Ninja path starts with either the Perl or Python
          generator. Both generators accept dev, live, mitshm, and select.
        </p>
        <Terminal title="Ninja (experimental)" copyText={ninjaExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> perl scripts/experimental/generate.pl --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja{'\n\n'}
            <span class="text-zinc-500"># The Python generator produces the same build file</span>{'\n'}
            <span class="text-green-400">$</span> python3 scripts/experimental/generate.py --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja
          </div>
        </Terminal>
      </section>

      {/* Testing */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Testing</h2>
        <p class="text-zinc-400 text-sm mb-4">
          The test suite has 38 checks for config parsing, vector math, camera
          behavior, and PPM and PNG output. It does not open an X display.
        </p>
        <Terminal title="terminal" copyText={testExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> make test{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover test{'\n'}
            <span class="text-green-400">$</span> zig build test
          </div>
        </Terminal>
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
          </code>. Generate a default one:
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
          Write each setting as <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">key = value</code>.
          The parser gets the type from the value itself.
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

      {/* Editor support */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Editor support
        </h2>
        <p class="text-zinc-400 text-sm">
          The editors directory contains config syntax files for Vim, Neovim,
          and Emacs. They recognize cboomer settings, strings, numbers,
          booleans, and comments. See the{' '}
          <a
            href="https://github.com/DavidBalishyan/cboomer/tree/main/editors"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            editor setup notes
          </a>{' '}
          for installation commands.
        </p>
      </section>
    </div>
  )
})
