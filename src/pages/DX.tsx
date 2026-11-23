import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'
import { dictionaries, useLanguage } from '../i18n'

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

const makeoverExample = `$ ./scripts/makeover
$ ./scripts/makeover dev live
$ ./scripts/makeover test
$ ./scripts/makeover --list`

const zigExample = `$ zig build
$ zig build -Ddev -Dlive -Dmitshm -Dselect
$ zig build test
$ zig build clean`

export const DX = component$(() => {
  const lang = useLanguage()
  const t = dictionaries[lang.value]
  const ninjaExample = `# ${t.dx.ninjaCommentPerl}
$ perl scripts/experimental/generate.pl --dev --live
$ ninja

# ${t.dx.ninjaCommentPython}
$ python3 scripts/experimental/generate.py --dev --live
$ ninja`

  return (
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-8">
        {t.dx.title}
      </h1>

      <div class="space-y-6 text-zinc-400 text-lg mb-12">
        <p>{t.dx.intro}</p>
      </div>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">envforge</h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.dx.envforgeIntro}
        />
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.dx.envforgeRun}
        />
        <Terminal title=".envforge.yaml" copyText={envforgeExample}>
          <div class="text-zinc-400 whitespace-pre text-xs">{envforgeExample}</div>
        </Terminal>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Makeover</h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.dx.makeoverIntro}
        />
        <Terminal title={t.common.terminal} copyText={makeoverExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> ./scripts/makeover{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover dev live{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover test{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover --list
          </div>
        </Terminal>
        <p class="text-zinc-400 text-sm mt-4">{t.dx.makeoverNotes}</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">Zig</h2>
        <p class="text-zinc-400 text-sm mb-4">{t.dx.zigText}</p>
        <Terminal title={t.common.terminal} copyText={zigExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> zig build{'\n'}
            <span class="text-green-400">$</span> zig build -Ddev -Dlive -Dmitshm -Dselect{'\n'}
            <span class="text-green-400">$</span> zig build test{'\n'}
            <span class="text-green-400">$</span> zig build clean
          </div>
        </Terminal>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.dx.ninjaTitle}
        </h2>
        <p class="text-zinc-400 text-sm mb-4">{t.dx.ninjaText1}</p>
        <p class="text-zinc-400 text-sm mb-4">{t.dx.ninjaText2}</p>
        <Terminal title={t.common.terminal} copyText={ninjaExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-zinc-500"># {t.dx.ninjaCommentPerl}</span>{'\n'}
            <span class="text-green-400">$</span> perl scripts/experimental/generate.pl --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja{'\n\n'}
            <span class="text-zinc-500"># {t.dx.ninjaCommentPython}</span>{'\n'}
            <span class="text-green-400">$</span> python3 scripts/experimental/generate.py --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja
          </div>
        </Terminal>
        <p
          class="text-zinc-400 text-sm mt-4 mb-4"
          dangerouslySetInnerHTML={t.dx.ninjaText3}
        />
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden mt-4">
          <div class="flex items-center gap-4 px-5 py-3 border-b border-zinc-800">
            <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap">
              make
            </code>
            <span class="text-sm text-zinc-400">{t.dx.ninjaMakeDesc}</span>
          </div>
          <div class="flex items-center gap-4 px-5 py-3">
            <code class="text-sm font-mono text-cyan-400 bg-zinc-950 px-2 py-0.5 rounded whitespace-nowrap">
              ninja
            </code>
            <span class="text-sm text-zinc-400">{t.dx.ninjaNinjaDesc}</span>
          </div>
        </div>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.dx.scriptsTitle}
        </h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.dx.scriptsIntro}
        />
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {t.dx.scripts.map((s, i) => (
            <div
              key={s.cmd}
              class={
                'px-5 py-3' +
                (i < t.dx.scripts.length - 1 ? ' border-b border-zinc-800' : '')
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

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.dx.contributing}
        </h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.dx.contributingText1}
        />
        <p class="text-zinc-400 text-sm">{t.dx.contributingText2}</p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.dx.shaderTooling}
        </h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.dx.shaderText1}
        />
        <p class="text-zinc-400 text-sm mb-4">{t.dx.shaderText2}</p>
        <Terminal title={t.common.terminal} copyText="scripts/shader.sh new myeffect">
          <div class="text-zinc-400">
            <span class="text-green-400">$</span> scripts/shader.sh new myeffect{'\n'}
            {t.dx.shaderCreated}{'\n'}
            {t.dx.shaderUpdatedMakefile}{'\n'}
            {t.dx.shaderUpdatedGenerator}{'\n'}
            {t.dx.shaderUpdatedReadme}
          </div>
        </Terminal>
        <p
          class="text-zinc-400 text-sm mt-4"
          dangerouslySetInnerHTML={t.dx.shaderText3}
        />
      </section>
    </div>
  )
})
