export const de = {
  common: {
    github: 'GitHub',
    codeberg: 'Codeberg',
    viewOnGitHub: 'Auf GitHub ansehen',
    viewCodebergMirror: 'Codeberg-Spiegel ansehen',
    copyToClipboard: 'In die Zwischenablage kopieren',
    toggleMenu: 'Menü umschalten',
    terminal: 'Terminal',
    commit: 'Commit',
    language: 'Sprache',
  },
  nav: {
    home: 'Start',
    docs: 'Doku',
    changelog: 'Änderungen',
    dx: 'DX',
    about: 'Über',
    download: 'Download',
  },
  home: {
    description:
      'Ein Vollbild-Screenshot-Viewer für Linux mit Verschieben und Zoomen, Taschenlampeneffekten und Live-Verfolgung von Fenstern. Entwickelt mit C11, X11 und OpenGL.',
    buildFromSource: 'Aus Quellcode bauen',
    watchDemo: 'Demo ansehen',
    help: {
      tagline: 'Vollbild-Screenshot-Viewer',
      usage: 'Verwendung:',
      options: 'Optionen:',
      delay: 'Ausführung um <seconds> Sekunden verzögern',
      help: 'diese Hilfe anzeigen und beenden',
      newConfig: 'Standardkonfiguration unter [path] erzeugen',
      config: 'Konfiguration unter <path> verwenden',
      version: 'Version anzeigen und beenden',
      windowed: 'Fenstermodus statt Vollbild',
    },
  },
  about: {
    title: 'Über cboomer',
    p1: 'cboomer ist ein Vollbild-Screenshot-Viewer für Linux. Er begann als C11-Neuschreibung von Tsodings <a href="https://github.com/tsoding/boomer" target="_blank" class="i18n-link">boomer</a>, der in Nim geschrieben war. Die aktuelle Implementierung ist in C11 geschrieben und verwendet X11 mit OpenGL.',
    p2: 'cboomer erfasst den Bildschirm oder ein ausgewähltes Fenster und zeichnet das Bild dann in einer Vollbild- oder Fensteransicht mit OpenGL. Live-Builds aktualisieren die Aufnahme bei jedem Frame; für schnellere Aktualisierungen ist MIT-SHM verfügbar. Gespeicherte Ansichten enthalten den aktiven Shader; als Format stehen PPM und PNG zur Verfügung.',
    features: [
      {
        title: '12 Shader-Effekte',
        description:
          'Drücke t, um durch die integrierten GLSL-Effekte zu blättern. Ein Entwicklungs-Build kann Shader-Dateien mit Ctrl+R neu laden.',
      },
      {
        title: 'Navigationssteuerung',
        description:
          'Verschiebe das Bild mit Maus oder Tastatur, zoome von 100 % bis 1600 %, drehe die Ansicht und wechsle bei Bedarf die Texturfilterung.',
      },
      {
        title: 'Konfiguration und Ausgabe',
        description:
          'Die typisierte Konfiguration steuert das Startverhalten. Das OSD zeigt Bilddetails, und die Taste s speichert die gerenderte Ansicht als PPM oder PNG.',
      },
    ],
  },
  download: {
    title: 'cboomer herunterladen',
    subtitle: 'Aus Quellcode auf Linux bauen.',
    option1Title: 'Option 1: Skript install-deps',
    option1Text:
      'Das Skript erkennt deine Distribution und installiert den Compiler sowie die Entwicklungspakete für X11, OpenGL und zlib. Dafür sind Root-Rechte erforderlich.',
    option2Title: 'Option 2: envforge (empfohlen)',
    option2Text: '<a href="https://github.com/DavidBalishyan/envforge" target="_blank" class="i18n-link">envforge</a> liest die .envforge.yaml im Repository. Es installiert dieselben Pakete, setzt CC und CFLAGS, führt make aus und räumt beim Verlassen der Subshell alles wieder auf.',
    makeoverTitle: 'Optionaler Build-Runner: Makeover',
    makeoverText:
      'Nach der Installation der Abhängigkeiten kannst du das mitgelieferte Makeover-Skript und seine Buildfile statt GNU Make verwenden. Du brauchst nur Python 3.',
    requirementsTitle: 'Voraussetzungen',
    requirements: [
      'Linux (X11)',
      'OpenGL (libGL)',
      'X11-Bibliotheken (libX11, libXrandr, libXext)',
      'zlib',
      'GCC oder Clang (C11)',
      'GNU Make, Zig oder Python 3 für den mitgelieferten Makeover-Runner',
    ],
  },
  docs: {
    title: 'Dokumentation',
    quickStart: 'Schnellstart',
    commandLineOptions: 'Kommandozeilenoptionen',
    buildVariants: 'Build-Varianten',
    flagsCombined: 'Flags können kombiniert werden:',
    makeoverBuild: 'Makeover-Build',
    makeoverIntro: 'Das Repository enthält eine mitgelieferte Kopie von <a href="https://github.com/davidBalishyan/makeover" target="_blank" class="i18n-link">Makeover</a> und eine Buildfile, die die GNU-Make-Ziele abbildet. Es genügt Python 3; eine separate Installation ist nicht nötig.',
    makeoverNotes: 'Feature-Ziele lassen sich kombinieren. Überschreibungen gibst du über die Umgebung an, zum Beispiel <code class="i18n-code">CC=clang ./scripts/makeover</code>. Führe <code class="i18n-code">./scripts/makeover clean</code> aus, bevor du zu anderen Kombinationen von Features oder Compiler-Flags wechselst.',
    zigAndNinja: 'Zig und Ninja',
    zigText: 'build.zig unterstützt dieselben vier Feature-Flags wie Make. Übergib jedes Flag mit <code class="i18n-code">-D</code>.',
    ninjaText: 'Der experimentelle Ninja-Build beginnt mit dem Perl- oder dem Python-Generator. Beide Generatoren akzeptieren dev, live, mitshm und select.',
    ninjaComment: 'Der Python-Generator erzeugt dieselbe Build-Datei',
    testing: 'Tests',
    testingText: 'Die Testsuite enthält 38 Prüfungen für den Konfigurationsparser, die Vektormathematik, das Kameraverhalten sowie die PPM- und PNG-Ausgabe. Sie öffnet kein X-Display.',
    controls: 'Steuerung',
    shaders: 'Shader-Effekte',
    shadersIntro: 'Drücke <code class="i18n-code">t</code>, um zwischen ihnen zu wechseln. Animierte Shader erhalten eine Zeit-Uniform und ändern sich daher mit der Zeit.',
    configuration: 'Konfiguration',
    configPathText: 'Die Konfigurationsdatei liegt unter <code class="i18n-code">$HOME/.config/cboomer/config</code>. So erzeugst du eine Standarddatei:',
    configSyntax: 'Konfigurationssyntax',
    configSyntaxText1: 'Schreibe jede Einstellung als <code class="i18n-code">key = value</code>. Der Parser leitet den Typ aus dem Wert selbst ab.',
    configSyntaxText2: 'Zeilen, die mit <code class="i18n-code">#</code> beginnen, sind Kommentare. Inline-Kommentare nach <code class="i18n-code">#</code> funktionieren ebenfalls. Boolesche Werte akzeptieren <code class="i18n-code">true</code>/<code class="i18n-code">false</code>, <code class="i18n-code">1</code>/<code class="i18n-code">0</code>, <code class="i18n-code">yes</code>/<code class="i18n-code">no</code> und <code class="i18n-code">on</code>/<code class="i18n-code">off</code>. Pfade mit <code class="i18n-code">~</code> oder <code class="i18n-code">$HOME</code> werden auf dein Home-Verzeichnis erweitert.',
    exampleConfig: 'Beispielkonfiguration',
    allOptions: 'Alle Optionen',
    editorSupport: 'Editor-Unterstützung',
    editorText: 'Das Verzeichnis editors enthält Syntaxdateien für Vim, Neovim und Emacs. Sie erkennen cboomer-Einstellungen, Zeichenketten, Zahlen, Booleans und Kommentare. Installationsbefehle findest du in den <a href="https://github.com/DavidBalishyan/cboomer/tree/main/editors" target="_blank" class="i18n-link">Hinweisen zur Editor-Einrichtung</a>.',
    commandLine: [
      { option: '-d, --delay <seconds>', desc: 'Warte vor der Bildschirmaufnahme.' },
      { option: '-h, --help', desc: 'Zeige die Hilfe an und beende das Programm.' },
      { option: '--new-config [path]', desc: 'Schreibe eine Standardkonfiguration, optional an einem eigenen Pfad.' },
      { option: '-c, --config <path>', desc: 'Lade eine Konfigurationsdatei von einem eigenen Pfad.' },
      { option: '-V, --version', desc: 'Zeige den eingebetteten Git-Commit an und beende das Programm.' },
      { option: '-w, --windowed', desc: 'Öffne ein normales Fenster und merke dir seine Position.' },
    ],
    variants: [
      { cmd: 'make', desc: 'Baue cboomer mit eingebetteten Shadern.' },
      { cmd: 'make dev', desc: 'Erlaube Ctrl+R zum Neuladen von Shadern von der Festplatte.' },
      { cmd: 'make live', desc: 'Aktualisiert die Aufnahme bei jedem Frame.' },
      { cmd: 'make mitshm', desc: 'Nutze MIT-SHM für schnellere Aufnahmen. Kombiniere es mit live.' },
      { cmd: 'make select', desc: 'Klicke auf ein Fenster, um dieses statt des ganzen Bildschirms zu verfolgen.' },
    ],
    controlsList: [
      { key: 'Mit linker Maustaste ziehen', desc: 'Bild verschieben' },
      { key: 'Scrollen', desc: 'Hinein- oder herauszoomen' },
      { key: '= / -', desc: 'Hinein- / herauszoomen' },
      { key: '0', desc: 'Position, Skalierung, Geschwindigkeit und Spiegelung zurücksetzen' },
      { key: '1 2 3 4 5', desc: 'Zoom auf 100 %, 200 %, 400 %, 800 % oder 1600 % setzen' },
      { key: 'Pfeiltasten / h j k l', desc: 'Bild verschieben' },
      { key: 'Ctrl+f/b/n/p', desc: 'Bild in kleinen Schritten verschieben (Emacs-Stil)' },
      { key: 'i', desc: 'Zwischen Next-Neighbor- und linearer Texturfilterung wechseln' },
      { key: 'o', desc: 'OSD mit Shader, Zoom, FPS, Farbe und Filter anzeigen oder ausblenden' },
      { key: 'q / Esc', desc: 'Beenden' },
      { key: 'r', desc: 'Konfigurationsdatei neu laden' },
      { key: 'm', desc: 'Bild horizontal spiegeln' },
      { key: 'f', desc: 'Taschenlampe ein- oder ausschalten' },
      { key: 't', desc: 'Durch alle 12 Shader blättern' },
      { key: 's', desc: 'Gerenderte Ansicht mit Shadern als PPM oder PNG speichern' },
      { key: 'Ctrl+Scrollen / +/-', desc: 'Radius anpassen, während die Taschenlampe an ist' },
      { key: 'Ctrl+[ / Ctrl+]', desc: 'Um 90 Grad gegen den Uhrzeigersinn oder im Uhrzeigersinn drehen' },
      { key: 'Ctrl+r', desc: 'Shader von der Festplatte neu laden (nur Entwicklungs-Build)' },
    ],
    shadersList: [
      { name: 'Normal', desc: 'Standarddarstellung mit Taschenlampe und Spiegelung' },
      { name: 'Invert', desc: 'Fotografisches Negativ' },
      { name: 'CRT', desc: 'Chromatische Aberration, Scanlines, Vignette' },
      { name: 'Grayscale', desc: 'Helligkeitsgewichtete Entsättigung' },
      { name: 'Edge', desc: 'Sobel-Kantenerkennung' },
      { name: 'VHS Glitch', desc: 'Animierte Blockverschiebung, Kanalversatz, Rauschen' },
      { name: 'Distortion', desc: 'Sinusförmige Wellen + Tonnenverzerrung' },
      { name: 'Zoom Blur', desc: 'Radiale Bewegungsunschärfe vom Cursor aus' },
      { name: 'Posterize', desc: 'Farbquantisierung mit 4 Stufen' },
      { name: 'Pixelate', desc: 'Grobes Herunterrechnen auf ein Raster' },
      { name: 'Sepia', desc: 'Sepiaton wie in einer alten Dunkelkammer' },
      { name: 'Emboss', desc: '3D-Reliefeffekt' },
    ],
    configParams: [
      { key: 'min_scale', def: '0.01', desc: 'Minimaler Zoomfaktor' },
      { key: 'scroll_speed', def: '1.5', desc: 'Zoomgeschwindigkeit pro Scroll-Schritt' },
      { key: 'drag_friction', def: '6.0', desc: 'Wie schnell die Bewegungsträgheit nachlässt' },
      { key: 'scale_friction', def: '4.0', desc: 'Wie schnell die Zoomträgheit nachlässt' },
      { key: 'default_shader', def: '"Normal"', desc: 'Shader beim Start' },
      { key: 'mirror', def: 'false', desc: 'Mit aktivierter Spiegelung starten' },
      { key: 'flashlight_radius', def: '200.0', desc: 'Anfangsradius der Taschenlampe in Pixeln' },
      { key: 'scroll_invert', def: 'false', desc: 'Scroll-Richtung für den Zoom umkehren' },
      { key: 'osd', def: 'false', desc: 'OSD beim Start anzeigen (mit o umschaltbar)' },
      { key: 'smooth_reset', def: 'true', desc: 'Bei Taste 0 animiert zum Ursprung zurückkehren' },
      { key: 'font', def: '(auto-detect)', desc: 'Pfad oder Systemname der OSD-Schrift' },
      { key: 'screenshot_dir', def: '~/Pictures/Screenshots', desc: 'Ort, an dem s Ansichten speichert' },
      { key: 'screenshot_format', def: '"ppm"', desc: 'ppm oder png für Speichern mit s' },
      { key: 'ppm_save', def: 'false', desc: 'Beim Start ein PPM speichern' },
      { key: 'ppm_save_path', def: '$HOME/.config/cboomer/screenshot.ppm', desc: 'Pfad für das PPM beim Start' },
    ],
    configSyntaxExample: `# Der Typ eines Werts ergibt sich aus seiner Schreibweise:
scroll_speed = 1.5        # double
min_scale = 0.01          # double
drag_friction = 6.0       # double
osd = true                # bool
default_shader = "Normal" # string
screenshot_dir = "~/Pictures" # Zeichenketten-Pfad (~ wird zu $HOME erweitert)
flashlight_radius = 200  # int oder double`,
    configExample: `# ~/.config/cboomer/config
# Zeilen, die mit # beginnen, sind Kommentare. Inline-Kommentare mit # gehen auch.

# Zoom und Verschieben
scroll_speed = 1.5
drag_friction = 6.0
scale_friction = 4.0
min_scale = 0.01

# Shader und Darstellung
default_shader = "Normal"
mirror = false
osd = false
smooth_reset = true

# Taschenlampe
flashlight_radius = 200.0

# Scroll-Verhalten
scroll_invert = false

# Screenshots speichern
screenshot_dir = "~/Pictures/Screenshots"
screenshot_format = "png"
ppm_save = false
ppm_save_path = "$HOME/.config/cboomer/screenshot.ppm"

# OSD-Schrift (leer = automatisch erkennen)
font = "DejaVuSans"

# Boolesche Werte: true/false, 1/0, yes/no, on/off
# Zeichenketten müssen in Anführungszeichen stehen: "Normal"
# Pfade mit ~ oder $HOME werden automatisch erweitert`,
  },
  dx: {
    title: 'Entwicklererfahrung',
    intro: 'Das Repository hält Helfer für Umgebung, Tests, Shader und Releases im Verzeichnis scripts. Make bleibt das maßgebliche Build-System.',
    envforgeIntro: '<a href="https://github.com/DavidBalishyan/envforge" target="_blank" class="i18n-link">envforge</a> ist ein Werkzeug zur Verwaltung deiner Build-Umgebung. Im Repository liegt eine <code class="i18n-code">.envforge.yaml</code>, die angibt, welche Pakete installiert, welche Umgebungsvariablen gesetzt und welche Befehle beim Einrichten und Aufräumen ausgeführt werden.',
    envforgeRun: 'Wenn du <code class="i18n-code">envforge enter cboomer</code> ausführst, installiert es die Build-Abhängigkeiten, setzt CC und CFLAGS, führt make aus und räumt beim Verlassen der Subshell alles wieder auf.',
    makeoverIntro: '<a href="https://github.com/davidBalishyan/makeover" target="_blank" class="i18n-link">Makeover</a> liegt im Repository als ein ausführbares Python-Skript. Es findet die Buildfile im Wurzelverzeichnis selbstständig. Du kannst es direkt mit Python 3 ausführen.',
    makeoverNotes: 'Setze CC, CFLAGS, PREFIX und DESTDIR über Umgebungsvariablen. Halte die Buildfile mit Make synchron, wenn sich Quellcode, Shader, Flags, Bibliotheken oder Tests ändern.',
    zigText: 'build.zig bildet den Make-Build nach, einschließlich Shader-Erzeugung, Tests, Aufräumen und der vier Feature-Flags.',
    ninjaTitle: 'Ninja-Build (experimentell)',
    ninjaText1: 'Ninja führt Aufträge standardmäßig parallel aus und verfolgt Header über .d-Dateien. Es braucht einen Generator, weil build.ninja keine bedingte Logik für cboomers Feature-Flags hat.',
    ninjaText2: 'Die Perl- und die Python-3-Generatoren erzeugen dieselbe Datei. Verwende den Interpreter, der verfügbar ist.',
    ninjaCommentPerl: 'Perl (keine weiteren Abhängigkeiten)',
    ninjaCommentPython: 'Python',
    ninjaText3: 'Der Generator übernimmt die Auswertung der Flags, das Auslesen des Git-Hashes, die Liste der Quelldateien und das Quotieren für die Shell. Er schreibt eine build.ninja mit vier Regeln: mkdir, gen_shaders, cc (kompilieren) und link. Die cc-Regel verwendet <code class="i18n-code">-MMD -MF</code>, um .d-Abhängigkeitsdateien zu erzeugen, damit Ninja genau weiß, was bei einer Header-Änderung neu gebaut werden muss.',
    ninjaMakeDesc: 'Parallele Builds benötigen -j$(nproc). Die Header-Verfolgung beschränkt sich auf die Makefile selbst.',
    ninjaNinjaDesc: 'Standardmäßig parallel. Verfolgt .d-Dateien für präzise Neubauten. Benötigt ein Generator-Skript für build.ninja.',
    scriptsTitle: 'Skripte',
    scriptsIntro: 'Alle Skripte liegen in <code class="i18n-code">scripts/</code> und akzeptieren <code class="i18n-code">help</code> als erstes Argument, um die Verwendung anzuzeigen.',
    scripts: [
      {
        cmd: 'scripts/install-deps.sh',
        desc: 'Installiert den Compiler und die Bibliothekspakete für Debian, Fedora, Arch, Alpine, openSUSE oder Void. Dafür sind Root-Rechte erforderlich.',
      },
      {
        cmd: 'scripts/makeover [target ...]',
        desc: 'Mitgelieferter Python-3-Build-Runner für die Buildfile. Baut cboomer, führt Tests aus und unterstützt dieselben kombinierbaren Feature-Ziele wie Make.',
      },
      {
        cmd: 'scripts/lint.sh',
        desc: 'Führt statische Analyse aus. Probiert zuerst cppcheck, dann clang-tidy. Zeigt dir, wie du eines der beiden installierst, falls keines gefunden wird.',
      },
      {
        cmd: 'scripts/memcheck.sh [asan|valgrind|all]',
        desc: 'Führt Tests mit AddressSanitizer und UBSan, mit Valgrind oder mit beidem aus. Sanitierte Objekte bleiben in build/asan.',
      },
      {
        cmd: 'scripts/release.sh <version>',
        desc: 'Erzeugt ein Release-Tag, ersetzt den Platzhalter [TODO] in CHANGELOG.md durch den Commit-Hash, lädt die Änderungen hoch und erstellt aus dem Änderungsabschnitt ein GitHub-Release.',
      },
      {
        cmd: 'scripts/shader.sh new <name>',
        desc: 'Erzeugt einen neuen Fragment-Shader aus einer Vorlage, registriert ihn in Makefile und gen_shaders.sh und fügt einen Platzhalter in die README ein.',
      },
      {
        cmd: 'scripts/shader.sh remove <name>',
        desc: 'Löscht einen Shader und macht die Änderungen an Makefile, gen_shaders.sh und README rückgängig.',
      },
      {
        cmd: 'scripts/shader.sh ls',
        desc: 'Listet alle Fragment-Shader nach Namen auf.',
      },
      {
        cmd: 'scripts/gen_shaders.sh <output>',
        desc: 'Wandelt alle .glsl-Dateien in src/shaders/ in C-Zeichenkettenkonstanten in build/shaders.h um. Wird von den Build-Systemen automatisch aufgerufen.',
      },
      {
        cmd: 'scripts/build-matrix.sh',
        desc: 'Baut jede sinnvolle Kombination der Flags dev/live/mitshm/select, um Fehler in #ifdef-Blöcken zu finden. Führt zwischen den Builds jeweils make clean aus.',
      },
    ],
    contributing: 'Mitwirken',
    contributingText1: 'Lies den <a href="https://github.com/DavidBalishyan/cboomer/blob/main/CONTRIBUTING.md" target="_blank" class="i18n-link">Beitragsleitfaden</a>, bevor du eine Änderung einreichst. Er beschreibt den erforderlichen Build, die Tests, das Linting und die Code-Review.',
    contributingText2: 'Der Maintainer empfiehlt den Einsatz von KI-Agenten bei cboomer nicht. Wer einen verwendet, muss trotzdem jede geänderte Zeile verstehen, das Verhalten prüfen und die Verantwortung für das Ergebnis übernehmen.',
    shaderTooling: 'Shader-Werkzeuge',
    shaderText1: 'Der Build wandelt .glsl-Dateien in C-Zeichenkettenkonstanten in <code class="i18n-code">build/shaders.h</code> um. Dabei wird <code class="i18n-code">scripts/gen_shaders.sh</code> automatisch ausgeführt.',
    shaderText2: 'scripts/shader.sh erzeugt die GLSL-Datei, aktualisiert Makefile und Generator und fügt dann einen README-Platzhalter hinzu:',
    shaderCreated: 'Erstellt: src/shaders/frag_myeffect.glsl',
    shaderUpdatedMakefile: 'Aktualisiert: Makefile',
    shaderUpdatedGenerator: 'Aktualisiert: scripts/gen_shaders.sh',
    shaderUpdatedReadme: 'Aktualisiert: README.md',
    shaderText3: 'Die Vorlage deklariert cursorPos, windowSize, flShadow, flRadius, cameraScale und mirror bereits. Schreibe den Effekt in den Abschnitt <code class="i18n-code">// TODO: implement shader effect</code>. Das Skript aktualisiert weder ShaderMode, shader_names, src/main.c, Buildfile noch build.zig. Füge den neuen Shader diesen Listen hinzu, bevor du baust.',
  },
  changelog: {
    title: 'Änderungsprotokoll',
    intro: 'cboomer folgt der <a href="https://semver.org/" target="_blank" class="i18n-link">semantischen Versionierung</a>. Releases sind von neu nach alt sortiert. Jeder Commit-Link öffnet die im Projekt-Changelog erfasste Quellversion.',
    groupTitles: {
      changes: 'Änderungen',
      fixes: 'Fehlerbehebungen',
      configuration: 'Konfiguration',
      testingAndBuild: 'Tests und Build',
      initialRelease: 'Erstes Release',
    },
    releases: {
      'v1.5.4': [
        ['Den mitgelieferten Makeover-Runner und die Buildfile als weitere Möglichkeit, cboomer zu bauen, hinzugefügt.'],
      ],
      'v1.5.3': [
        [
          'build.zig mit denselben Feature-Flags wie Make hinzugefügt. Es kann cboomer bauen, die Tests ausführen, erzeugte Dateien aufräumen, den Shader-Header erzeugen und den Git-Commit-Hash einbetten.',
          'Die übrig gebliebene __STDC_VERSION__-Debug-Meldung aus main.c entfernt.',
        ],
      ],
      'v1.5.2': [
        [
          'Problem #2 behoben: find_font beschädigt den Verzeichnispfad beim Durchsuchen nach Schriften nicht mehr.',
          'Problem #4 behoben: Beim Neuladen der Konfiguration entsteht kein Speicherleck bei ppm_save_path mehr.',
          'Problem #3 behoben: Eine gemeldete Aktualisierungsrate von 0 führt nicht mehr zu einer Division durch 0.',
        ],
      ],
      'v1.5.1': [
        [
          'Abhängigkeitsfreies Testgerüst mit 38 Tests für den Konfigurationsparser, die Vektormathematik, die Kameraphysik sowie die PPM- und PNG-Kodierung hinzugefügt. Die Tests laufen ohne Display.',
          'Die Testausgabe nutzt jetzt Farben, wenn stdout ein Terminal ist, und einfachen Text, wenn sie umgeleitet wird.',
          'CI-Jobs für den normalen Build, die Tests, die Feature-Build-Matrix und Speicherprüfungen hinzugefügt.',
          'shader_names nach config.c verschoben, damit die Tests das Konfigurationsmodul ohne main.o linken können.',
          'Testobjekte werden jetzt neu gebaut, wenn sich tests/test.h ändert.',
          'Das Lint-Skript prüft jetzt auch die Testquellen.',
          'scripts/build-matrix.sh für sieben Kombinationen der Build-Flags DEVELOPER, LIVE, MITSHM und SELECT hinzugefügt.',
          'scripts/memcheck.sh für ASan-, UBSan- und Valgrind-Läufe hinzugefügt. Sanitierte Objekte liegen in build/asan.',
          'zlib zum Abhängigkeitsinstaller und zur envforge-Konfiguration hinzugefügt.',
        ],
      ],
      'v1.5.0': [
        [
          'Taste i hinzugefügt, um die Vergrößerung zwischen Next-Neighbor- und linearer Filterung umzuschalten. Das OSD zeigt den aktiven Modus.',
        ],
      ],
      'v1.4.2': [
        [
          'Das OSD zeigt jetzt den RGB-Wert und den Hex-Code des erfassten Pixels unter dem Cursor.',
          'Die Tasten 1 bis 5 setzen den Zoom auf 100 %, 200 %, 400 %, 800 % oder 1600 %. Ist smooth_reset aktiviert, wird die Rücksetz-Animation verwendet.',
          'Ctrl+[ und Ctrl+] drehen das Bild durch 0, 90, 180 und 270 Grad.',
        ],
      ],
      'v1.4.1': [
        [
          'Experimentelle Ninja-Generatoren in Perl und Python hinzugefügt. Der erzeugte Build verfolgt Header über .d-Dateien und baut standardmäßig parallel.',
          'Befehl ls zu scripts/shader.sh hinzugefügt.',
          'screenshot_format hinzugefügt, damit gespeicherte Ansichten PPM oder PNG nutzen können. Die PNG-Ausgabe verwendet zlib.',
          'Verschieben mit Pfeiltasten, h/j/k/l und Ctrl+f/b/n/p hinzugefügt.',
        ],
      ],
      'v1.4.0': [
        [
          'Ein OSD für den Shader-Namen, den Zoom-Prozentwert und die FPS hinzugefügt. Nutze die Konfigurationsoption osd oder die Taste o.',
          'smooth_reset hinzugefügt, damit die Taste 0 die Kamera animiert in die Ausgangsposition zurückführt.',
          'Konfigurierbare TrueType- und OpenType-Schriften für das OSD hinzugefügt, mit Systemschrift-Suche bei Angabe eines Schriftnamens.',
          'OSD-Shader nach src/shaders verschoben und in die erzeugten Shader-Header aufgenommen.',
          'OpenGL-Fehlerprüfungen rund um Shader-, Programm-, Textur- und Pufferoperationen hinzugefügt.',
          'TrueType-Textplatzierung angepasst, um die Schrift-Oberlänge (Ascent) zu berücksichtigen.',
          'Erzeugte Konfigurationskommentare für osd und font präzisiert.',
          'Wiederholte Tastendrücke von t auf eine Shader-Änderung alle 200 Millisekunden begrenzt.',
          'XRandR-Bildschirmkonfiguration nach der Verwendung freigegeben.',
          'Der Fenstermodus speichert und stellt seine Position jetzt über ~/.config/cboomer/state wieder her.',
          'Taste s hinzugefügt, um die gerenderte Ansicht als PPM-Datei mit Zeitstempel zu speichern. screenshot_dir bestimmt das Ziel.',
        ],
      ],
      'v1.3.1': [
        [
          'Der Konfigurationsparser leitet Zeichenketten, Zeichen, Ganzzahlen, Gleitkommazahlen und Booleans jetzt aus ihrer schriftlichen Form ab.',
          'Konfigurationsdateien akzeptieren jetzt Inline-Kommentare.',
          'ppm_save_path erweitert jetzt Pfade, die mit ~ beginnen.',
          'Boolesche Werte akzeptieren jetzt neben true/false und 1/0 auch yes/no und on/off.',
          'Konfigurationswarnungen enthalten jetzt Zeilennummern und nutzen auf einem Terminal Farben.',
          'Ein nicht in Anführungszeichen gesetztes ppm_save_path erzeugt jetzt eine Warnung.',
          'Vim- und Emacs-Unterstützung für cboomer-Konfigurationsdateien hinzugefügt.',
          'Konfigurationsoptionen für den Start-Shader, den Spiegelmodus, den Taschenlampenradius und die Scroll-Richtung hinzugefügt.',
          'ShaderMode nach config.h verschoben und shader_names für die Konfigurationsauswertung exportiert.',
        ],
      ],
      'v1.3.0': [
        [
          'Die Navigation begrenzt den Skalierungsfaktor jetzt vor der Division auf mindestens 0,001.',
          'Die PPM-Größenberechnung verwendet jetzt unsigned long, um Überläufe bei großen Bildern zu vermeiden.',
          'Shader-Header-Erzeugung nach scripts/gen_shaders.sh verschoben.',
        ],
        [
          'Die Option ppm_save schreibt jetzt beim Start einen Screenshot.',
          'ppm_save_path bestimmt jetzt den Pfad des Start-Screenshots und erweitert $HOME.',
          'scripts/install-deps.sh für distributionsspezifische Build-Abhängigkeiten hinzugefügt.',
          'scripts/release.sh für Changelog-Aktualisierungen, Tags, Pushes und GitHub-Releases hinzugefügt.',
        ],
      ],
      'v1.2.1': [
        [
          'Absturz beim Neuladen von Shadern mit Ctrl+R behoben, der durch das Freigeben eingebetteter Shader-Zeichenketten verursacht wurde.',
          'Beschädigte LIVE-Darstellung durch einen falschen Vertex-Stride behoben.',
          'Fehlschläge von ftell und unvollständige Lesevorgänge beim Neuladen von Shader-Dateien abgefangen.',
          'Prüfungen und ein normaler X11-Fallback für jeden Schritt der MIT-SHM-Einrichtung hinzugefügt.',
          'Die von glXChooseVisual zurückgegebene XVisualInfo freigegeben.',
          'min_scale begrenzt, um eine Division durch null zu verhindern.',
          'Der alte Screenshot bleibt gültig, wenn eine Live-Aktualisierung fehlschlägt.',
          'Unbekannte Konfigurationsschlüssel erzeugen jetzt eine Warnung, statt den Prozess zu beenden.',
          'Unterbrochene nanosleep-Aufrufe werden mit der Restzeit fortgesetzt.',
          'Prüfungen für XGetWindowAttributes hinzugefügt.',
          'Der SELECT-Modus behandelt jetzt fehlgeschlagene Pointer- und Tastatur-Grabs.',
          'Neu geladene Shader-Puffer beim Beenden eines DEVELOPER-Builds freigegeben.',
          'Prüfungen für abgeschnittene Konfigurationspfade hinzugefügt.',
        ],
      ],
      'v1.2.0': [
        [
          'Sieben Shader hinzugefügt: VHS Glitch, Distortion, Zoom Blur, Posterize, Pixelate, Sepia und Emboss. cboomer hat jetzt 12 Shader-Modi.',
          'Zeit-Uniform für animierte Shader wie VHS Glitch und Distortion hinzugefügt.',
          'Die Taste t blättert jetzt durch alle 12 Shader-Modi.',
        ],
      ],
      'v1.1.0': [
        [
          'Die ersten fünf Shader-Modi hinzugefügt: Normal, Invert, CRT, Grayscale und Edge.',
          'GLSL-Dateien nach src/shaders verschoben und beim Build in die Binärdatei eingebettet.',
          'README um Demo-Link, Shader-Hinweise und Befehle für Build-Varianten erweitert.',
          'Build-Ausgabepfad geändert, sodass cboomer jetzt im Repository-Wurzelverzeichnis geschrieben wird.',
        ],
      ],
      'v1.0.0': [
        [
          'Die C11-Neuschreibung mit X11-Bildschirmaufnahme und OpenGL-Darstellung veröffentlicht.',
          'Enthalten: Trägheit beim Verschieben und Zoomen, Taschenlampensteuerung, Spiegelmodus und Live-Verfolgung von Fenstern.',
          'Konfigurationsdatei unter $HOME/.config/cboomer/config hinzugefügt.',
          'Build-Varianten DEVELOPER, LIVE, MITSHM und SELECT hinzugefügt.',
          'Kommandozeilenoptionen für Verzögerung, Hilfe, Konfigurationserzeugung, eigene Konfigurationspfade, Versionsausgabe und Fenstermodus hinzugefügt.',
        ],
      ],
    } as Record<string, string[][]>,
  },
}
