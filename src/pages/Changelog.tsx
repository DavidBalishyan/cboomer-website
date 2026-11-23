import { component$ } from '@builder.io/qwik'
import { dictionaries, useLanguage } from '../i18n'
import { releaseMeta } from '../i18n/releases'

export const Changelog = component$(() => {
  const lang = useLanguage()
  const t = dictionaries[lang.value]

  return (
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
        {t.changelog.title}
      </h1>
      <p
        class="text-zinc-400 text-lg mb-10"
        dangerouslySetInnerHTML={t.changelog.intro}
      />

      <div class="space-y-8">
        {releaseMeta.map((release) => (
          <article
            key={release.version}
            id={release.version}
            class="rounded-lg border border-zinc-800 bg-zinc-900 p-5 md:p-6 scroll-mt-28"
          >
            <div class="flex flex-wrap items-baseline justify-between gap-3 mb-5">
              <h2 class="text-2xl font-semibold text-zinc-100">
                {release.version}
              </h2>
              <a
                href={`https://github.com/DavidBalishyan/cboomer/commit/${release.commit}`}
                target="_blank"
                class="font-mono text-xs text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {t.common.commit} {release.commit.slice(0, 7)}
              </a>
            </div>

            <div class="space-y-5">
              {release.groups.map((group, groupIndex) => (
                <section key={group.title}>
                  <h3 class="text-sm font-semibold text-zinc-300 mb-2">
                    {t.changelog.groupTitles[group.title]}
                  </h3>
                  <ul class="space-y-2">
                    {(t.changelog.releases[release.version][groupIndex] ?? []).map(
                      (item) => (
                        <li
                          key={item}
                          class="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                        >
                          <span class="text-cyan-500 mt-0.5">&#x2022;</span>
                          <span>{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
})
