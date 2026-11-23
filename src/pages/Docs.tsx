import { component$ } from '@builder.io/qwik'
import { Terminal } from '../components/Terminal'
import { dictionaries, useLanguage } from '../i18n'

const makeoverExample = `$ ./scripts/makeover
$ ./scripts/makeover dev live mitshm select
$ ./scripts/makeover test
$ ./scripts/makeover --list`

const zigExample = `$ zig build
$ zig build -Ddev -Dlive -Dmitshm -Dselect
$ zig build test
$ zig build run
$ zig build clean`

const testExample = `$ make test
$ ./scripts/makeover test
$ zig build test`

export const Docs = component$(() => {
  const lang = useLanguage()
  const t = dictionaries[lang.value]
  const ninjaExample = `$ perl scripts/experimental/generate.pl --dev --live
$ ninja

# ${t.docs.ninjaComment}
$ python3 scripts/experimental/generate.py --dev --live
$ ninja`

  return (
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-12">
        {t.docs.title}
      </h1>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.quickStart}
        </h2>
        <Terminal title={t.common.terminal} copyText="make && ./cboomer">
          <div class="text-zinc-400">
            <span class="text-green-400">$</span> make{'\n'}
            <span class="text-green-400">$</span> ./cboomer
          </div>
        </Terminal>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.commandLineOptions}
        </h2>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {t.docs.commandLine.map((item, i) => (
            <div
              key={item.option}
              class={
                'px-5 py-3 md:flex md:items-start md:gap-4' +
                (i < t.docs.commandLine.length - 1 ? ' border-b border-zinc-800' : '')
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

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.buildVariants}
        </h2>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {t.docs.variants.map((v, i) => (
            <div
              key={v.cmd}
              class={
                'flex items-center gap-4 px-5 py-3' +
                (i < t.docs.variants.length - 1 ? ' border-b border-zinc-800' : '')
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
          {t.docs.flagsCombined}{' '}
          <code class="font-mono text-cyan-400 bg-zinc-800 px-1.5 py-0.5 rounded text-xs">
            make dev live mitshm select
          </code>
        </p>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.makeoverBuild}
        </h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.docs.makeoverIntro}
        />
        <Terminal title={t.common.terminal} copyText={makeoverExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> ./scripts/makeover{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover dev live mitshm select{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover test{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover --list
          </div>
        </Terminal>
        <p
          class="text-zinc-400 text-sm mt-4"
          dangerouslySetInnerHTML={t.docs.makeoverNotes}
        />
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.zigAndNinja}
        </h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.docs.zigText}
        />
        <Terminal title="Zig" copyText={zigExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> zig build{'\n'}
            <span class="text-green-400">$</span> zig build -Ddev -Dlive -Dmitshm -Dselect{'\n'}
            <span class="text-green-400">$</span> zig build test{'\n'}
            <span class="text-green-400">$</span> zig build run{'\n'}
            <span class="text-green-400">$</span> zig build clean
          </div>
        </Terminal>

        <p class="text-zinc-400 text-sm mt-6 mb-4">{t.docs.ninjaText}</p>
        <Terminal title={t.dx.ninjaTitle} copyText={ninjaExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> perl scripts/experimental/generate.pl --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja{'\n\n'}
            <span class="text-zinc-500"># {t.docs.ninjaComment}</span>{'\n'}
            <span class="text-green-400">$</span> python3 scripts/experimental/generate.py --dev --live{'\n'}
            <span class="text-green-400">$</span> ninja
          </div>
        </Terminal>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">{t.docs.testing}</h2>
        <p class="text-zinc-400 text-sm mb-4">{t.docs.testingText}</p>
        <Terminal title={t.common.terminal} copyText={testExample}>
          <div class="text-zinc-400 whitespace-pre">
            <span class="text-green-400">$</span> make test{'\n'}
            <span class="text-green-400">$</span> ./scripts/makeover test{'\n'}
            <span class="text-green-400">$</span> zig build test
          </div>
        </Terminal>
      </section>

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">{t.docs.controls}</h2>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {t.docs.controlsList.map((c, i) => (
            <div
              key={c.key}
              class={
                'flex items-center gap-4 px-5 py-3' +
                (i < t.docs.controlsList.length - 1 ? ' border-b border-zinc-800' : '')
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

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.shaders}
        </h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.docs.shadersIntro}
        />
        <div class="grid md:grid-cols-2 gap-3">
          {t.docs.shadersList.map((s) => (
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

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.configuration}
        </h2>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.docs.configPathText}
        />
        <Terminal title={t.common.terminal} copyText="cboomer --new-config">
          <div class="text-zinc-400">
            <span class="text-green-400">$</span> cboomer --new-config
          </div>
        </Terminal>

        <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
          {t.docs.configSyntax}
        </h3>
        <p
          class="text-zinc-400 text-sm mb-4"
          dangerouslySetInnerHTML={t.docs.configSyntaxText1}
        />
        <Terminal
          title={t.docs.configSyntax}
          copyText={t.docs.configSyntaxExample}
        >
          <div class="text-zinc-400 whitespace-pre text-xs">
            {t.docs.configSyntaxExample}
          </div>
        </Terminal>

        <p
          class="text-zinc-400 text-sm mt-4 mb-4"
          dangerouslySetInnerHTML={t.docs.configSyntaxText2}
        />

        <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
          {t.docs.exampleConfig}
        </h3>
        <Terminal
          title="~/.config/cboomer/config"
          copyText={t.docs.configExample}
        >
          <div class="text-zinc-400 whitespace-pre text-xs">
            {t.docs.configExample}
          </div>
        </Terminal>

        <h3 class="text-lg font-semibold text-zinc-100 mt-8 mb-3">
          {t.docs.allOptions}
        </h3>
        <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
          {t.docs.configParams.map((p, i) => (
            <div
              key={p.key}
              class={
                'flex items-center gap-4 px-5 py-3' +
                (i < t.docs.configParams.length - 1 ? ' border-b border-zinc-800' : '')
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

      <section class="mb-12">
        <h2 class="text-2xl font-semibold text-zinc-100 mb-4">
          {t.docs.editorSupport}
        </h2>
        <p
          class="text-zinc-400 text-sm"
          dangerouslySetInnerHTML={t.docs.editorText}
        />
      </section>
    </div>
  )
})
