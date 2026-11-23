export const en = {
  common: {
    github: 'GitHub',
    codeberg: 'Codeberg',
    viewOnGitHub: 'View on GitHub',
    viewCodebergMirror: 'View the Codeberg mirror',
    copyToClipboard: 'Copy to clipboard',
    toggleMenu: 'Toggle menu',
    terminal: 'terminal',
    commit: 'commit',
    language: 'Language',
  },
  nav: {
    home: 'Home',
    docs: 'Docs',
    changelog: 'Changelog',
    dx: 'DX',
    about: 'About',
    download: 'Download',
  },
  home: {
    description:
      'A fullscreen screenshot viewer for Linux with pan, zoom, flashlight effects, and live window tracking. Built with C11, X11, and OpenGL.',
    buildFromSource: 'Build from source',
    watchDemo: 'Watch the demo',
    help: {
      tagline: 'fullscreen screenshot viewer',
      usage: 'Usage:',
      options: 'Options:',
      delay: 'delay execution by <seconds>',
      help: 'show this help and exit',
      newConfig: 'generate a default config at [path]',
      config: 'use config at <path>',
      version: 'show version and exit',
      windowed: 'windowed mode instead of fullscreen',
    },
  },
  about: {
    title: 'About cboomer',
    p1: 'cboomer is a fullscreen screenshot viewer for Linux. It started as a C11 rewrite of Tsoding\'s <a href="https://github.com/tsoding/boomer" target="_blank" class="i18n-link">boomer</a>, which was written in Nim. The current implementation is C11 and uses X11 with OpenGL.',
    p2: 'cboomer captures the screen or a selected window, then draws the image in a fullscreen or windowed OpenGL view. Live builds refresh the capture every frame, with MIT-SHM available for faster updates. Saved views include the active shader and can use PPM or PNG.',
    features: [
      {
        title: '12 shader effects',
        description:
          'Press t to move through the built-in GLSL effects. A developer build can reload shader files with Ctrl+R.',
      },
      {
        title: 'Navigation controls',
        description:
          'Pan with the mouse or keyboard, zoom from 100% to 1600%, rotate the view, and switch texture filtering as needed.',
      },
      {
        title: 'Config and output',
        description:
          'The typed config controls startup behavior. The OSD shows image details, and the s key writes the rendered view as PPM or PNG.',
      },
    ],
  },
  download: {
    title: 'Get cboomer',
    subtitle: 'Build from source on Linux.',
    option1Title: 'Option 1: install-deps script',
    option1Text:
      'The script detects your distribution and installs the compiler, X11, OpenGL, and zlib development packages. It needs root access.',
    option2Title: 'Option 2: envforge (recommended)',
    option2Text: '<a href="https://github.com/DavidBalishyan/envforge" target="_blank" class="i18n-link">envforge</a> reads the .envforge.yaml in the repo. It installs the same packages, sets CC and CFLAGS, runs make, and cleans up when you exit the subshell.',
    makeoverTitle: 'Optional build runner: Makeover',
    makeoverText:
      'After installing the dependencies, you can use the vendored Makeover script and its Buildfile instead of GNU Make. You only need Python 3.',
    requirementsTitle: 'Requirements',
    requirements: [
      'Linux (X11)',
      'OpenGL (libGL)',
      'X11 libraries (libX11, libXrandr, libXext)',
      'zlib',
      'GCC or Clang (C11)',
      'GNU Make, Zig, or Python 3 for the vendored Makeover runner',
    ],
  },
  docs: {
    title: 'Documentation',
    quickStart: 'Quick start',
    commandLineOptions: 'Command-line options',
    buildVariants: 'Build variants',
    flagsCombined: 'Flags can be combined:',
    makeoverBuild: 'Makeover build',
    makeoverIntro: 'The repository includes a vendored copy of <a href="https://github.com/davidBalishyan/makeover" target="_blank" class="i18n-link">Makeover</a> and a Buildfile that mirrors the GNU Make targets. It only needs Python 3 and does not require a separate installation.',
    makeoverNotes: 'Feature targets can be combined. Set overrides through the environment, such as <code class="i18n-code">CC=clang ./scripts/makeover</code>. Run <code class="i18n-code">./scripts/makeover clean</code> before switching unrelated feature or compiler-flag combinations.',
    zigAndNinja: 'Zig and Ninja',
    zigText: 'build.zig supports the same four feature flags as Make. Pass each flag with <code class="i18n-code">-D</code>.',
    ninjaText: 'The experimental Ninja path starts with either the Perl or Python generator. Both generators accept dev, live, mitshm, and select.',
    ninjaComment: 'The Python generator produces the same build file',
    testing: 'Testing',
    testingText: 'The test suite has 38 checks for config parsing, vector math, camera behavior, and PPM and PNG output. It does not open an X display.',
    controls: 'Controls',
    shaders: 'Shader effects',
    shadersIntro: 'Press <code class="i18n-code">t</code> to cycle through them. Animated shaders get a time uniform so they change over time.',
    configuration: 'Configuration',
    configPathText: 'The config file lives at <code class="i18n-code">$HOME/.config/cboomer/config</code>. Generate a default one:',
    configSyntax: 'Config syntax',
    configSyntaxText1: 'Write each setting as <code class="i18n-code">key = value</code>. The parser gets the type from the value itself.',
    configSyntaxText2: 'Lines starting with <code class="i18n-code">#</code> are comments. Inline comments after <code class="i18n-code">#</code> also work. Boolean values accept <code class="i18n-code">true</code>/<code class="i18n-code">false</code>, <code class="i18n-code">1</code>/<code class="i18n-code">0</code>, <code class="i18n-code">yes</code>/<code class="i18n-code">no</code>, and <code class="i18n-code">on</code>/<code class="i18n-code">off</code>. Paths with <code class="i18n-code">~</code> or <code class="i18n-code">$HOME</code> expand to your home directory.',
    exampleConfig: 'Example config',
    allOptions: 'All options',
    editorSupport: 'Editor support',
    editorText: 'The editors directory contains config syntax files for Vim, Neovim, and Emacs. They recognize cboomer settings, strings, numbers, booleans, and comments. See the <a href="https://github.com/DavidBalishyan/cboomer/tree/main/editors" target="_blank" class="i18n-link">editor setup notes</a> for installation commands.',
    commandLine: [
      { option: '-d, --delay <seconds>', desc: 'Wait before capturing the screen.' },
      { option: '-h, --help', desc: 'Print the help text and exit.' },
      { option: '--new-config [path]', desc: 'Write a default config, optionally at a custom path.' },
      { option: '-c, --config <path>', desc: 'Load a config file from a custom path.' },
      { option: '-V, --version', desc: 'Print the embedded Git commit and exit.' },
      { option: '-w, --windowed', desc: 'Open a normal window and remember its position.' },
    ],
    variants: [
      { cmd: 'make', desc: 'Build cboomer with its shaders embedded.' },
      { cmd: 'make dev', desc: 'Allow Ctrl+R to reload shaders from disk.' },
      { cmd: 'make live', desc: 'Refreshes the screenshot every frame.' },
      { cmd: 'make mitshm', desc: 'Use MIT-SHM for faster captures. Pair it with live.' },
      { cmd: 'make select', desc: 'Click a window to track it instead of the full screen.' },
    ],
    controlsList: [
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
    ],
    shadersList: [
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
    ],
    configParams: [
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
    ],
    configSyntaxExample: `# Values are typed by how you write them:
scroll_speed = 1.5        # double
min_scale = 0.01          # double
drag_friction = 6.0       # double
osd = true                # bool
default_shader = "Normal" # string
screenshot_dir = "~/Pictures" # string path (~ expands to $HOME)
flashlight_radius = 200  # int or double`,
    configExample: `# ~/.config/cboomer/config
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
# Paths with ~ or $HOME expand automatically`,
  },
  dx: {
    title: 'Developer experience',
    intro: 'The repository keeps its environment, test, shader, and release helpers in the scripts directory. Make remains the authoritative build system.',
    envforgeIntro: '<a href="https://github.com/DavidBalishyan/envforge" target="_blank" class="i18n-link">envforge</a> is a tool that manages your build environment. The repo has a <code class="i18n-code">.envforge.yaml</code> that tells it which packages to install, what environment variables to set, and what commands to run on setup and teardown.',
    envforgeRun: 'When you run <code class="i18n-code">envforge enter cboomer</code>, it installs the build dependencies, sets CC and CFLAGS, runs make, and when you exit the subshell it cleans everything up.',
    makeoverIntro: '<a href="https://github.com/davidBalishyan/makeover" target="_blank" class="i18n-link">Makeover</a> lives in the repository as one executable Python script. It finds the root Buildfile on its own. You can run it directly with Python 3.',
    makeoverNotes: 'Set CC, CFLAGS, PREFIX, and DESTDIR through environment variables. Keep Buildfile in sync with Make when sources, shaders, flags, libraries, or tests change.',
    zigText: 'build.zig mirrors the Make build, including shader generation, tests, cleanup, and the four feature flags.',
    ninjaTitle: 'Ninja build (experimental)',
    ninjaText1: 'Ninja runs jobs in parallel by default and tracks headers through .d files. It needs a generator because build.ninja has no conditional logic for cboomer\'s feature flags.',
    ninjaText2: 'The Perl and Python 3 generators produce the same file. Use whichever interpreter is available.',
    ninjaCommentPerl: 'Perl (no extra dependencies)',
    ninjaCommentPython: 'Python',
    ninjaText3: 'The generator handles flag interpretation, git hash capture, source file listing, and shell quoting. It writes a build.ninja with four rules: mkdir, gen_shaders, cc (compile), and link. The cc rule uses <code class="i18n-code">-MMD -MF</code> to generate .d dependency files so Ninja knows exactly what to rebuild when a header changes.',
    ninjaMakeDesc: 'Parallel builds need -j$(nproc). Header tracking is limited to the Makefile itself.',
    ninjaNinjaDesc: 'Parallel by default. Tracks .d files for precise rebuilds. Needs a generator script to produce build.ninja.',
    scriptsTitle: 'Scripts',
    scriptsIntro: 'All scripts live in <code class="i18n-code">scripts/</code> and accept <code class="i18n-code">help</code> as the first argument for usage info.',
    scripts: [
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
    ],
    contributing: 'Contributing',
    contributingText1: 'Read the <a href="https://github.com/DavidBalishyan/cboomer/blob/main/CONTRIBUTING.md" target="_blank" class="i18n-link">contribution guide</a> before sending a change. It covers the required build, test, lint, and review work.',
    contributingText2: 'The maintainer does not recommend using AI agents on cboomer. Anyone who uses one still needs to understand every changed line, verify the behavior, and take responsibility for the result.',
    shaderTooling: 'Shader tooling',
    shaderText1: 'The build turns .glsl files into C string constants in <code class="i18n-code">build/shaders.h</code>. The build runs <code class="i18n-code">scripts/gen_shaders.sh</code> automatically.',
    shaderText2: 'scripts/shader.sh creates the GLSL file, updates the Makefile and generator, then adds a README placeholder:',
    shaderCreated: 'Created src/shaders/frag_myeffect.glsl',
    shaderUpdatedMakefile: 'Updated Makefile',
    shaderUpdatedGenerator: 'Updated scripts/gen_shaders.sh',
    shaderUpdatedReadme: 'Updated README.md',
    shaderText3: 'The template already declares cursorPos, windowSize, flShadow, flRadius, cameraScale, and mirror. Write the effect in the <code class="i18n-code">// TODO: implement shader effect</code> section. The script does not update ShaderMode, shader_names, src/main.c, Buildfile, or build.zig. Add the new shader to those lists before building.',
  },
  changelog: {
    title: 'Changelog',
    intro: 'cboomer follows <a href="https://semver.org/" target="_blank" class="i18n-link">semantic versioning</a>. Releases are listed newest first. Each commit link opens the source revision recorded in the project changelog.',
    groupTitles: {
      changes: 'Changes',
      fixes: 'Fixes',
      configuration: 'Configuration',
      testingAndBuild: 'Testing and build work',
      initialRelease: 'Initial release',
    },
    releases: {
      'v1.5.4': [
        ['Added the vendored Makeover runner and Buildfile as another way to build cboomer.'],
      ],
      'v1.5.3': [
        [
          'Added build.zig with the same feature flags as Make. It can build cboomer, run the tests, clean generated files, generate the shader header, and embed the Git commit hash.',
          'Removed a leftover __STDC_VERSION__ debug message from main.c.',
        ],
      ],
      'v1.5.2': [
        [
          'Fixed issue #2: find_font no longer corrupts the directory path while scanning for fonts.',
          'Fixed issue #4: reloading the config no longer leaks ppm_save_path.',
          'Fixed issue #3: a reported refresh rate of zero no longer causes division by zero.',
        ],
      ],
      'v1.5.1': [
        [
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
      ],
      'v1.5.0': [
        [
          'Added the i key to switch magnification between nearest-neighbor pixels and linear filtering. The OSD shows the active mode.',
        ],
      ],
      'v1.4.2': [
        [
          'The OSD now shows the RGB value and hex code of the captured pixel under the cursor.',
          'Keys 1 through 5 set zoom to 100%, 200%, 400%, 800%, or 1600%. They use the reset animation when smooth_reset is enabled.',
          'Ctrl+[ and Ctrl+] rotate the image through 0, 90, 180, and 270 degrees.',
        ],
      ],
      'v1.4.1': [
        [
          'Added experimental Ninja generators in Perl and Python. The generated build tracks headers with .d files and builds in parallel by default.',
          'Added the ls command to scripts/shader.sh.',
          'Added screenshot_format so saved views can use PPM or PNG. PNG output uses zlib.',
          'Added keyboard panning with arrow keys, h/j/k/l, and Ctrl+f/b/n/p.',
        ],
      ],
      'v1.4.0': [
        [
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
      ],
      'v1.3.1': [
        [
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
      ],
      'v1.3.0': [
        [
          'Navigation now floors the scale at 0.001 before division.',
          'PPM size arithmetic now uses unsigned long to avoid overflow on large images.',
          'Moved shader header generation into scripts/gen_shaders.sh.',
        ],
        [
          'The ppm_save option now writes a startup screenshot.',
          'ppm_save_path now controls the startup screenshot path and expands $HOME.',
          'Added scripts/install-deps.sh for distribution-specific build dependencies.',
          'Added scripts/release.sh for changelog updates, tags, pushes, and GitHub releases.',
        ],
      ],
      'v1.2.1': [
        [
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
      ],
      'v1.2.0': [
        [
          'Added seven shaders: VHS Glitch, Distortion, Zoom Blur, Posterize, Pixelate, Sepia, and Emboss. cboomer now has 12 shader modes.',
          'Added a time uniform for animated shaders such as VHS Glitch and Distortion.',
          'The t key now cycles through all 12 shader modes.',
        ],
      ],
      'v1.1.0': [
        [
          'Added the first five shader modes: Normal, Invert, CRT, Grayscale, and Edge.',
          'Moved GLSL files into src/shaders and embedded them in the binary during the build.',
          'Expanded the README with a demo link, shader notes, and build variant commands.',
          'Changed the build output path so cboomer is written to the repository root.',
        ],
      ],
      'v1.0.0': [
        [
          'Released the C11 rewrite with X11 screenshot capture and OpenGL rendering.',
          'Included pan and zoom inertia, flashlight controls, mirror mode, and live window tracking.',
          'Added the config file at $HOME/.config/cboomer/config.',
          'Added DEVELOPER, LIVE, MITSHM, and SELECT build variants.',
          'Added command-line options for delay, help, config generation, custom config paths, version output, and windowed mode.',
        ],
      ],
    } as Record<string, string[][]>,
  },
}

export type Translation = typeof en
