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

const scripts = [
  {
    cmd: 'scripts/install-deps.sh',
    desc: 'Detects your distro and installs the right packages. Needs root. Supports Debian, Fedora, Arch, Alpine, openSUSE, Void.',
  },
  {
    cmd: 'scripts/lint.sh',
    desc: 'Runs static analysis. Tries cppcheck first, then clang-tidy. Tells you how to install one if neither is found.',
  },
  {
    cmd: 'scripts/memcheck.sh [asan|valgrind|all]',
    desc: 'Rebuilds tests with AddressSanitizer + UBSan, then runs them under valgrind. Objects go to build/asan so they stay separate from normal builds.',
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
    desc: 'Converts all .glsl files in src/shaders/ into C string constants in build/shaders.h. Called automatically by make.',
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
          cboomer has a handful of scripts and tools that make working on the
          codebase easier. Most of them you will not need day to day, but they
          are there when you do.
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

      {/* Ninja */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Ninja build (experimental)
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          Ninja builds faster than make because it parallelizes by default and
          tracks header dependencies through .d files. The catch is that Ninja
          has no conditional logic of its own, so you need a generator script
          to produce build.ninja.
        </p>
        <p class="text-zinc-400 text-sm mb-4">
          Two implementations exist: one in Perl, one in Python 3. They produce
          the same output. Pick whichever you have installed.
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

      {/* Shader tooling */}
      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          Shader tooling
        </h2>
        <p class="text-zinc-400 text-sm mb-4">
          The build converts .glsl files into C string constants in{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            build/shaders.h
          </code>
          . This happens automatically via{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            scripts/gen_shaders.sh
          </code>
          , which the Makefile calls during build.
        </p>
        <p class="text-zinc-400 text-sm mb-4">
          To add a new shader, use the shader script instead of doing it by
          hand:
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
          It creates the shader file from a template that already has all the
          uniforms set up (cursorPos, windowSize, flShadow, flRadius,
          cameraScale, mirror). You just fill in the effect in the{' '}
          <code class="font-mono text-zinc-300 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            // TODO: implement shader effect
          </code>{' '}
          section.
        </p>
      </section>
    </div>
  )
})
