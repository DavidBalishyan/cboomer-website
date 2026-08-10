import { component$ } from '@builder.io/qwik'

interface ReleaseGroup {
  title: string
  items: string[]
}

interface Release {
  version: string
  commit: string
  groups: ReleaseGroup[]
}

const releases: Release[] = [
  {
    version: 'v1.5.4',
    commit: '4523e91c170ac388674a96b74f4b21a438042362',
    groups: [
      {
        title: 'Changes',
        items: [
          'Added the vendored Makeover runner and Buildfile as another way to build cboomer.',
        ],
      },
    ],
  },
  {
    version: 'v1.5.3',
    commit: '7a5dff29ecb53c5eb8ebe2c85d56e3e6b1fe9c38',
    groups: [
      {
        title: 'Changes',
        items: [
          'Added build.zig with the same feature flags as Make. It can build cboomer, run the tests, clean generated files, generate the shader header, and embed the Git commit hash.',
          'Removed a leftover __STDC_VERSION__ debug message from main.c.',
        ],
      },
    ],
  },
  {
    version: 'v1.5.2',
    commit: 'd49c4a9bbcd687a830d6b8e340d5a241ee73d4fc',
    groups: [
      {
        title: 'Fixes',
        items: [
          'Fixed issue #2: find_font no longer corrupts the directory path while scanning for fonts.',
          'Fixed issue #4: reloading the config no longer leaks ppm_save_path.',
          'Fixed issue #3: a reported refresh rate of zero no longer causes division by zero.',
        ],
      },
    ],
  },
  {
    version: 'v1.5.1',
    commit: 'e365a36de81cb89359451fbca6e136c00213b075',
    groups: [
      {
        title: 'Testing and build work',
        items: [
          'Added a dependency-free test harness with 38 tests for config parsing, vector math, camera physics, and PPM and PNG encoding. The tests run without a display.',
          'Test output now uses color when stdout is a terminal and plain text when it is piped.',
          'Added CI jobs for the normal build, tests, the feature build matrix, and memory checks.',
          'Moved shader_names into config.c so tests can link the config module without main.o.',
          'Test objects now rebuild when tests/test.h changes.',
          'The lint script now checks the test sources too.',
          'Added scripts/build-matrix.sh for seven combinations of the DEVELOPER, LIVE, MITSHM, and SELECT build flags.',
          'Added scripts/memcheck.sh for ASan, UBSan, and Valgrind runs. Sanitized objects use build/asan.',
          'Added zlib to the dependency installer and envforge configuration.',
        ],
      },
    ],
  },
  {
    version: 'v1.5.0',
    commit: '2e2beff1d3fe16f419fbcc2bb372fd2b11910954',
    groups: [
      {
        title: 'Changes',
        items: [
          'Added the i key to switch magnification between nearest-neighbor pixels and linear filtering. The OSD shows the active mode.',
        ],
      },
    ],
  },
  {
    version: 'v1.4.2',
    commit: '3f498b7682a90811fd46987279fa63dd4efff26c',
    groups: [
      {
        title: 'Changes',
        items: [
          'The OSD now shows the RGB value and hex code of the captured pixel under the cursor.',
          'Keys 1 through 5 set zoom to 100%, 200%, 400%, 800%, or 1600%. They use the reset animation when smooth_reset is enabled.',
          'Ctrl+[ and Ctrl+] rotate the image through 0, 90, 180, and 270 degrees.',
        ],
      },
    ],
  },
  {
    version: 'v1.4.1',
    commit: '8c2720968b69082a3d01d1ca56bc2b0499770c21',
    groups: [
      {
        title: 'Changes',
        items: [
          'Added experimental Ninja generators in Perl and Python. The generated build tracks headers with .d files and builds in parallel by default.',
          'Added the ls command to scripts/shader.sh.',
          'Added screenshot_format so saved views can use PPM or PNG. PNG output uses zlib.',
          'Added keyboard panning with arrow keys, h/j/k/l, and Ctrl+f/b/n/p.',
        ],
      },
    ],
  },
  {
    version: 'v1.4.0',
    commit: '39f14961a30260109247298ad073219f6688947d',
    groups: [
      {
        title: 'Changes',
        items: [
          'Added an on-screen display for the shader name, zoom percentage, and FPS. Use the osd config option or the o key.',
          'Added smooth_reset so the 0 key can animate the camera back to its starting position.',
          'Added configurable TrueType and OpenType fonts for the OSD, with system font lookup when given a font name.',
          'Moved the OSD shaders into src/shaders and added them to generated shader headers.',
          'Added OpenGL error checks around shader, program, texture, and buffer operations.',
          'Adjusted TrueType text placement to account for font ascent.',
          'Clarified the generated config comments for osd and font.',
          'Limited repeated t key events to one shader change every 200 milliseconds.',
          'Freed the XRandR screen configuration after use.',
          'Windowed mode now saves and restores its position through ~/.config/cboomer/state.',
          'Added the s key to save the rendered view as a timestamped PPM file. screenshot_dir controls the destination.',
        ],
      },
    ],
  },
  {
    version: 'v1.3.1',
    commit: 'eb7d62cec997f7f65df10e8537d21465a354f369',
    groups: [
      {
        title: 'Configuration',
        items: [
          'The config parser now infers strings, characters, integers, floating-point numbers, and booleans from their literal form.',
          'Config files now accept inline comments.',
          'ppm_save_path now expands paths that start with ~.',
          'Boolean values now accept yes/no and on/off as well as true/false and 1/0.',
          'Config warnings now include line numbers and use color on a terminal.',
          'An unquoted ppm_save_path now produces a warning.',
          'Added Vim and Emacs support for cboomer config files.',
          'Added config options for the starting shader, mirror mode, flashlight radius, and scroll direction.',
          'Moved ShaderMode into config.h and exported shader_names for config parsing.',
        ],
      },
    ],
  },
  {
    version: 'v1.3.0',
    commit: '2f00a4773c741ec7e1bf9a45b90ab9888c386767',
    groups: [
      {
        title: 'Fixes',
        items: [
          'Navigation now floors the scale at 0.001 before division.',
          'PPM size arithmetic now uses unsigned long to avoid overflow on large images.',
          'Moved shader header generation into scripts/gen_shaders.sh.',
        ],
      },
      {
        title: 'Changes',
        items: [
          'The ppm_save option now writes a startup screenshot.',
          'ppm_save_path now controls the startup screenshot path and expands $HOME.',
          'Added scripts/install-deps.sh for distribution-specific build dependencies.',
          'Added scripts/release.sh for changelog updates, tags, pushes, and GitHub releases.',
        ],
      },
    ],
  },
  {
    version: 'v1.2.1',
    commit: '2deaaccf86d6a9f12dfeff340247bc1fe28bf424',
    groups: [
      {
        title: 'Fixes',
        items: [
          'Fixed a crash during Ctrl+R shader reloads caused by freeing embedded shader strings.',
          'Fixed corrupted LIVE rendering caused by an incorrect vertex stride.',
          'Handled ftell failures and partial reads while reloading shader files.',
          'Added checks and a normal X11 fallback for each MIT-SHM setup step.',
          'Freed the XVisualInfo returned by glXChooseVisual.',
          'Clamped min_scale to prevent division by zero.',
          'Kept the old screenshot valid when a live refresh fails.',
          'Unknown config keys now produce a warning instead of ending the process.',
          'Interrupted nanosleep calls now resume with the remaining time.',
          'Added checks for XGetWindowAttributes.',
          'SELECT mode now handles failed pointer and keyboard grabs.',
          'Released reloaded shader buffers when a DEVELOPER build exits.',
          'Added checks for truncated config paths.',
        ],
      },
    ],
  },
  {
    version: 'v1.2.0',
    commit: '2deaaccf86d6a9f12dfeff340247bc1fe28bf424',
    groups: [
      {
        title: 'Changes',
        items: [
          'Added seven shaders: VHS Glitch, Distortion, Zoom Blur, Posterize, Pixelate, Sepia, and Emboss. cboomer now has 12 shader modes.',
          'Added a time uniform for animated shaders such as VHS Glitch and Distortion.',
          'The t key now cycles through all 12 shader modes.',
        ],
      },
    ],
  },
  {
    version: 'v1.1.0',
    commit: '084b84fc45f76d57353ad1b7cdf954b035bdc18a',
    groups: [
      {
        title: 'Changes',
        items: [
          'Added the first five shader modes: Normal, Invert, CRT, Grayscale, and Edge.',
          'Moved GLSL files into src/shaders and embedded them in the binary during the build.',
          'Expanded the README with a demo link, shader notes, and build variant commands.',
          'Changed the build output path so cboomer is written to the repository root.',
        ],
      },
    ],
  },
  {
    version: 'v1.0.0',
    commit: '822a0795fc8e2a80612b631c9d2543442f431c37',
    groups: [
      {
        title: 'Initial release',
        items: [
          'Released the C11 rewrite with X11 screenshot capture and OpenGL rendering.',
          'Included pan and zoom inertia, flashlight controls, mirror mode, and live window tracking.',
          'Added the config file at $HOME/.config/cboomer/config.',
          'Added DEVELOPER, LIVE, MITSHM, and SELECT build variants.',
          'Added command-line options for delay, help, config generation, custom config paths, version output, and windowed mode.',
        ],
      },
    ],
  },
]

export const Changelog = component$(() => {
  return (
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4">
        Changelog
      </h1>
      <p class="text-zinc-400 text-lg mb-10">
        cboomer follows{' '}
        <a
          href="https://semver.org/"
          target="_blank"
          class="text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          semantic versioning
        </a>
        . Releases are listed newest first. Each commit link opens the source
        revision recorded in the project changelog.
      </p>

      <div class="space-y-8">
        {releases.map((release) => (
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
                commit {release.commit.slice(0, 7)}
              </a>
            </div>

            <div class="space-y-5">
              {release.groups.map((group) => (
                <section key={group.title}>
                  <h3 class="text-sm font-semibold text-zinc-300 mb-2">
                    {group.title}
                  </h3>
                  <ul class="space-y-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        class="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed"
                      >
                        <span class="text-cyan-500 mt-0.5">&#x2022;</span>
                        <span>{item}</span>
                      </li>
                    ))}
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
