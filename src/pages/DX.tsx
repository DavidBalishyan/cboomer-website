import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'

const envforgeExample = `name: "cboomer"

packages:
  - build-essential
  - libx11-dev
  - libxrandr-dev
  - libxext-dev
  - libgl-dev
  - zlib1g-dev
  - cppcheck
  - ninja-build
  - perl
  - python3

env:
  CC: gcc
  CFLAGS: "-Wall -Wextra -pedantic -std=c11 -O2 -g"

setup:
  - make -C $(pwd)

teardown:
  - make -C $(pwd) clean`

const ninjaExample = `# Perl (no extra dependencies)
$ perl scripts/experimental/generate.pl --dev --live
$ ninja

# Python
$ python3 scripts/experimental/generate.py --dev --live
$ ninja`

const makeoverExample = `$ ./scripts/makeover
$ ./scripts/makeover dev live
$ ./scripts/makeover test
$ ./scripts/makeover --list`

const zigExample = `$ zig build
$ zig build -Ddev -Dlive -Dmitshm -Dselect
$ zig build test
$ zig build clean`

const scripts = [
  {
    cmd: 'scripts/install-deps.sh',
    desc: 'Installs the compiler and library packages for Debian, Fedora, Arch, Alpine, openSUSE, or Void. It needs root access.',
  },
  {
    cmd: 'scripts/makeover [target ...]',
    desc: 'Vendored Python 3 build runner for Buildfile. Builds cboomer, runs tests, and supports the same stackable feature targets as Make.',
  },
  {
    cmd: 'scripts/lint.sh',
    desc: 'Runs static analysis. Tries cppcheck first, then clang-tidy. Tells you how to install one if neither is found.',
  },
  {
    cmd: 'scripts/memcheck.sh [asan|valgrind|all]',
    desc: 'Runs tests with AddressSanitizer and UBSan, Valgrind, or both. Sanitized objects stay in build/asan.',
  },
  {
    cmd: 'scripts/release.sh <version>',
    desc: 'Tags a release, replaces the [TODO] placeholder in CHANGELOG.md with the commit hash, pushes, and creates a GitHub release from the changelog section.',
  },
  {
    cmd: 'scripts/shader.sh new <name>',
    desc: 'Creates a new fragment shader from a template, registers it in the Makefile and gen_shaders.sh, and adds a placeholder in the README.',
  },
  {
    cmd: 'scripts/shader.sh remove <name>',
    desc: 'Deletes a shader and reverts the Makefile, gen_shaders.sh, and README changes.',
  },
  {
    cmd: 'scripts/shader.sh ls',
    desc: 'Lists all fragment shaders by name.',
  },
  {
    cmd: 'scripts/gen_shaders.sh <output>',
    desc: 'Converts all .glsl files in src/shaders/ into C string constants in build/shaders.h. Called automatically by the build systems.',
  },
  {
    cmd: 'scripts/build-matrix.sh',
    desc: 'Builds every meaningful combination of dev/live/mitshm/select flags to catch #ifdef breakage. Runs make clean between each build.',
  },
]

export const DX = component$(() => {
  return (
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-8">
        Developer experience
      </h1>

      <div class="space-y-6 text-zinc-400 text-lg mb-12">
        <p>
          The repository keeps its environment, test, shader, and release
          helpers in the scripts directory. Make remains the authoritative
          build system.
        </p>
      </div>

      {/* envforge */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">envforge</h2>
        <p class="text-zinc-400 text-sm mb-4">
          <a
            href="https://github.com/DavidBalishyan/envforge"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            envforge
          </a>{' '}
          is a tool that manages your build environment. The repo has a{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            .envforge.yaml
          </code>{' '}
          that tells it which packages to install, what environment variables to
          set, and what commands to run on setup and teardown.
        </p>
        <p class="text-zinc-400 text-sm mb-4">
          When you run{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            envforge enter cboomer
          </code>
          , it installs the build dependencies, sets CC and CFLAGS, runs make,
          and when you exit the subshell it cleans everything up.
        </p>
        <Terminal title=".envforge.yaml" copyText={envforgeExample}>
          <div class="text-zinc-400 whitespace-pre text-xs">{envforgeExample}</div>
        </Terminal>
      </section>

      {/* Makeover */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Makeover</h2>
        <p class="text-zinc-400 text-sm mb-4">
          <a
            href="https://github.com/davidBalishyan/makeover"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Makeover
          </a>{' '}
          lives in the repository as one executable Python script. It finds the
          root Buildfile on its own. You can run it directly with Python 3.
        </p>
        <Terminal title="terminal" copyText={makeoverExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> ./scripts/makeover{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover dev live{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover test{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover --list
          </div>
        </Terminal>
        <p class="text-zinc-400 text-sm mt-4">
          Set CC, CFLAGS, PREFIX, and DESTDIR through environment variables.
          Keep Buildfile in sync with Make when sources, shaders, flags,
          libraries, or tests change.
        </p>
      </section>

      {/* Zig */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Zig</h2>
        <p class="text-zinc-400 text-sm mb-4">
          build.zig mirrors the Make build, including shader generation, tests,
          cleanup, and the four feature flags.
        </p>
        <Terminal title="terminal" copyText={zigExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> zig build{'\n'}
            <span class="text-green-400">$</span> zig build -Ddev -Dlive -Dmitshm -Dselect{'\n'}
            <span class="text-green-400">$</span> zig build test{'\n'}
            <span class="text-green-400">$</span> zig build clean
          </div>
        </Terminal>
      </section>

      {/* Ninja */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Ninja build (experimental)
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          Ninja runs jobs in parallel by default and tracks headers through .d
          files. It needs a generator because build.ninja has no conditional
          logic for cboomer's feature flags.
        </p>
        <p class="text-zinc-400 text-sm mb-4">
          The Perl and Python 3 generators produce the same file. Use whichever
          interpreter is available.
        </p>
        <Terminal title="terminal" copyText={ninjaExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-zinc-500"># Perl (no extra dependencies)</span>{'\n'}
            <span class="text-green-400">$</span> perl scripts/experimental/generate.pl --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja{'\n\n'}
            <span class="text-zinc-500"># Python</span>{'\n'}
            <span class="text-green-400">$</span> python3 scripts/experimental/generate.py --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja
          </div>
        </Terminal>
        <p class="text-zinc-400 text-sm mt-4 mb-4">
          The generator handles flag interpretation, git hash capture, source
          file listing, and shell quoting. It writes a build.ninja with four
          rules: mkdir, gen_shaders, cc (compile), and link. The cc rule uses{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            -MMD -MF
          </code>{' '}
          to generate .d dependency files so Ninja knows exactly what to rebuild
          when a header changes.
        </p>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden mt-4">
          <div class="flex items-center gap-4 px-5 py-3 border-b border-zinc-800">
            <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap">
              make
            </code>
            <span class="text-sm text-zinc-400">
              Parallel builds need -j$(nproc). Header tracking is limited to the
              Makefile itself.
            </span>
          </div>
          <div class="flex items-center gap-4 px-5 py-3">
            <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap">
              ninja
            </code>
            <span class="text-sm text-zinc-400">
              Parallel by default. Tracks .d files for precise rebuilds. Needs a
              generator script to produce build.ninja.
            </span>
          </div>
        </div>
      </section>

      {/* Scripts */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Scripts
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          All scripts live in{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            scripts/
          </code>{' '}
          and accept{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            help
          </code>{' '}
          as the first argument for usage info.
        </p>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {scripts.map((s, i) => (
            <div
              key={s.cmd}
              class={
                'px-5 py-3' +
                (i < scripts.length - 1 ? ' border-b border-zinc-800' : '')
              }
            >
              <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded">
                {s.cmd}
              </code>
              <p class="text-sm text-zinc-400 mt-1.5">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contributing */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Contributing
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          Read the{' '}
          <a
            href="https://github.com/DavidBalishyan/cboomer/blob/main/CONTRIBUTING.md"
            target="_blank"
            class="text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            contribution guide
          </a>{' '}
          before sending a change. It covers the required build, test, lint,
          and review work.
        </p>
        <p class="text-zinc-400 text-sm">
          The maintainer does not recommend using AI agents on cboomer. Anyone
          who uses one still needs to understand every changed line, verify the
          behavior, and take responsibility for the result.
        </p>
      </section>

      {/* Shader tooling */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Shader tooling
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          The build turns .glsl files into C string constants in{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            build/shaders.h
          </code>. The build runs{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            scripts/gen_shaders.sh
          </code>{' '}
          automatically.
        </p>
        <p class="text-zinc-400 text-sm mb-4">
          scripts/shader.sh creates the GLSL file, updates the Makefile and
          generator, then adds a README placeholder:
        </p>
        <Terminal title="terminal" copyText="scripts/shader.sh new myeffect">
          <div class="text-zinc-400">
            <span class="text-green-400">$</span> scripts/shader.sh new myeffect{'\n'}
            Created src/shaders/frag_myeffect.glsl{'\n'}
            Updated Makefile{'\n'}
            Updated scripts/gen_shaders.sh{'\n'}
            Updated README.md
          </div>
        </Terminal>
        <p class="text-zinc-400 text-sm mt-4">
          The template already declares cursorPos, windowSize, flShadow,
          flRadius, cameraScale, and mirror. Write the effect in the{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            // TODO: implement shader effect
          </code>{' '}
          section. The script does not update ShaderMode, shader_names,
          src/main.c, Buildfile, or build.zig. Add the new shader to those lists
          before building.
        </p>
      </section>
    </div>
  )
})
