export const fr = {
  common: {
    github: 'GitHub',
    codeberg: 'Codeberg',
    viewOnGitHub: 'Voir sur GitHub',
    viewCodebergMirror: 'Voir le miroir Codeberg',
    copyToClipboard: 'Copier dans le presse-papiers',
    toggleMenu: 'Afficher le menu',
    terminal: 'terminal',
    commit: 'commit',
    language: 'Langue',
  },
  nav: {
    home: 'Accueil',
    docs: 'Documentation',
    changelog: 'Journal',
    dx: 'Développement',
    about: 'À propos',
    download: 'Télécharger',
  },
  home: {
    description:
      'Un visionneur de captures d’écran en plein écran pour Linux, avec déplacement, zoom, effets de lampe torche et suivi de fenêtre en direct. Construit avec C11, X11 et OpenGL.',
    buildFromSource: 'Compiler depuis les sources',
    watchDemo: 'Voir la démo',
    help: {
      tagline: 'visionneur de captures d’écran en plein écran',
      usage: 'Utilisation :',
      options: 'Options :',
      delay: 'retarder l’exécution de <seconds> secondes',
      help: 'afficher cette aide et quitter',
      newConfig: 'générer une configuration par défaut à [path]',
      config: 'utiliser la configuration à <path>',
      version: 'afficher la version et quitter',
      windowed: 'mode fenêtré au lieu du plein écran',
    },
  },
  about: {
    title: 'À propos de cboomer',
    p1: 'cboomer est un visionneur de captures d’écran en plein écran pour Linux. Il est né d’une réécriture en C11 du projet <a href="https://github.com/tsoding/boomer" target="_blank" class="i18n-link">boomer</a> de Tsoding, écrit en Nim. L’implémentation actuelle utilise C11, X11 et OpenGL.',
    p2: 'cboomer capture l’écran ou une fenêtre sélectionnée, puis affiche l’image dans une vue OpenGL en plein écran ou fenêtrée. Les versions live actualisent la capture à chaque image, avec MIT-SHM pour accélérer les mises à jour. Les vues enregistrées incluent le shader actif et peuvent utiliser PPM ou PNG.',
    features: [
      {
        title: '12 effets de shader',
        description:
          'Appuyez sur t pour parcourir les effets GLSL intégrés. Une version développeur permet de recharger les fichiers de shader avec Ctrl+R.',
      },
      {
        title: 'Commandes de navigation',
        description:
          'Déplacez l’image avec la souris ou le clavier, zoomez de 100 % à 1600 %, faites pivoter la vue et changez le filtrage des textures.',
      },
      {
        title: 'Configuration et sortie',
        description:
          'La configuration typée contrôle le comportement au démarrage. L’OSD affiche les détails de l’image et la touche s enregistre la vue rendue en PPM ou PNG.',
      },
    ],
  },
  download: {
    title: 'Obtenir cboomer',
    subtitle: 'Compilez depuis les sources sur Linux.',
    option1Title: 'Option 1 : script install-deps',
    option1Text:
      'Le script détecte votre distribution et installe le compilateur ainsi que les paquets de développement X11, OpenGL et zlib. Les droits root sont nécessaires.',
    option2Title: 'Option 2 : envforge (recommandé)',
    option2Text: '<a href="https://github.com/DavidBalishyan/envforge" target="_blank" class="i18n-link">envforge</a> lit le fichier .envforge.yaml du dépôt. Il installe les mêmes paquets, définit CC et CFLAGS, lance make et nettoie tout à la sortie du sous-shell.',
    makeoverTitle: 'Système de compilation facultatif : Makeover',
    makeoverText:
      'Après l’installation des dépendances, vous pouvez utiliser le script Makeover fourni et son Buildfile à la place de GNU Make. Python 3 suffit.',
    requirementsTitle: 'Prérequis',
    requirements: [
      'Linux (X11)',
      'OpenGL (libGL)',
      'Bibliothèques X11 (libX11, libXrandr, libXext)',
      'zlib',
      'GCC ou Clang (C11)',
      'GNU Make, Zig ou Python 3 pour le système Makeover fourni',
    ],
  },
  docs: {
    title: 'Documentation',
    quickStart: 'Démarrage rapide',
    commandLineOptions: 'Options de la ligne de commande',
    buildVariants: 'Variantes de compilation',
    flagsCombined: 'Les options peuvent être combinées :',
    makeoverBuild: 'Compilation avec Makeover',
    makeoverIntro: 'Le dépôt contient une copie de <a href="https://github.com/davidBalishyan/makeover" target="_blank" class="i18n-link">Makeover</a> et un Buildfile qui reproduit les cibles de GNU Make. Python 3 suffit et aucune installation séparée n’est nécessaire.',
    makeoverNotes: 'Les cibles de fonctionnalités peuvent être combinées. Définissez les remplacements via l’environnement, par exemple <code class="i18n-code">CC=clang ./scripts/makeover</code>. Exécutez <code class="i18n-code">./scripts/makeover clean</code> avant de changer de combinaison de fonctionnalités ou d’options du compilateur.',
    zigAndNinja: 'Zig et Ninja',
    zigText: 'build.zig prend en charge les mêmes quatre options de fonctionnalités que Make. Passez chaque option avec <code class="i18n-code">-D</code>.',
    ninjaText: 'La compilation expérimentale avec Ninja commence par le générateur Perl ou Python. Les deux générateurs acceptent dev, live, mitshm et select.',
    ninjaComment: 'Le générateur Python produit le même fichier de compilation',
    testing: 'Tests',
    testingText: 'La suite de tests contient 38 vérifications de l’analyse de configuration, des mathématiques vectorielles, du comportement de la caméra et de la sortie PPM et PNG. Elle n’ouvre aucun affichage X.',
    controls: 'Commandes',
    shaders: 'Effets de shader',
    shadersIntro: 'Appuyez sur <code class="i18n-code">t</code> pour les parcourir. Les shaders animés reçoivent une variable de temps et évoluent au fil du temps.',
    configuration: 'Configuration',
    configPathText: 'Le fichier de configuration se trouve à <code class="i18n-code">$HOME/.config/cboomer/config</code>. Générez-en un par défaut :',
    configSyntax: 'Syntaxe de la configuration',
    configSyntaxText1: 'Écrivez chaque paramètre sous la forme <code class="i18n-code">key = value</code>. L’analyseur déduit le type de la valeur elle-même.',
    configSyntaxText2: 'Les lignes commençant par <code class="i18n-code">#</code> sont des commentaires. Les commentaires en fin de ligne après <code class="i18n-code">#</code> fonctionnent aussi. Les valeurs booléennes acceptent <code class="i18n-code">true</code>/<code class="i18n-code">false</code>, <code class="i18n-code">1</code>/<code class="i18n-code">0</code>, <code class="i18n-code">yes</code>/<code class="i18n-code">no</code> et <code class="i18n-code">on</code>/<code class="i18n-code">off</code>. Les chemins contenant <code class="i18n-code">~</code> ou <code class="i18n-code">$HOME</code> sont développés vers votre répertoire personnel.',
    exampleConfig: 'Exemple de configuration',
    allOptions: 'Toutes les options',
    editorSupport: 'Prise en charge des éditeurs',
    editorText: 'Le répertoire editors contient des fichiers de coloration syntaxique de la configuration pour Vim, Neovim et Emacs. Ils reconnaissent les paramètres cboomer, les chaînes, les nombres, les booléens et les commentaires. Voir les <a href="https://github.com/DavidBalishyan/cboomer/tree/main/editors" target="_blank" class="i18n-link">notes de configuration des éditeurs</a> pour les commandes d’installation.',
    commandLine: [
      { option: '-d, --delay <seconds>', desc: 'Attendre avant de capturer l’écran.' },
      { option: '-h, --help', desc: 'Afficher l’aide et quitter.' },
      { option: '--new-config [path]', desc: 'Écrire une configuration par défaut, éventuellement à un chemin personnalisé.' },
      { option: '-c, --config <path>', desc: 'Charger un fichier de configuration depuis un chemin personnalisé.' },
      { option: '-V, --version', desc: 'Afficher le commit Git intégré et quitter.' },
      { option: '-w, --windowed', desc: 'Ouvrir une fenêtre normale et mémoriser sa position.' },
    ],
    variants: [
      { cmd: 'make', desc: 'Compiler cboomer avec ses shaders intégrés.' },
      { cmd: 'make dev', desc: 'Autoriser Ctrl+R à recharger les shaders depuis le disque.' },
      { cmd: 'make live', desc: 'Actualiser la capture à chaque image.' },
      { cmd: 'make mitshm', desc: 'Utiliser MIT-SHM pour des captures plus rapides. À combiner avec live.' },
      { cmd: 'make select', desc: 'Cliquez sur une fenêtre pour la suivre au lieu de l’écran entier.' },
    ],
    controlsList: [
      { key: 'Left drag', desc: 'Déplacer l’image' },
      { key: 'Scroll', desc: 'Zoomer ou dézoomer' },
      { key: '= / -', desc: 'Zoomer / dézoomer' },
      { key: '0', desc: 'Réinitialiser position, échelle, vitesse et miroir' },
      { key: '1 2 3 4 5', desc: 'Régler le zoom sur 100 %, 200 %, 400 %, 800 % ou 1600 %' },
      { key: 'arrows / h j k l', desc: 'Déplacer l’image' },
      { key: 'Ctrl+f/b/n/p', desc: 'Déplacer l’image par petits pas (style Emacs)' },
      { key: 'i', desc: 'Basculer entre filtrage des textures au plus proche et linéaire' },
      { key: 'o', desc: 'Afficher ou masquer l’OSD avec shader, zoom, FPS, couleur et filtre' },
      { key: 'q / Esc', desc: 'Quitter' },
      { key: 'r', desc: 'Recharger le fichier de configuration' },
      { key: 'm', desc: 'Refléter l’image horizontalement' },
      { key: 'f', desc: 'Activer ou désactiver la lampe torche' },
      { key: 't', desc: 'Parcourir les 12 shaders' },
      { key: 's', desc: 'Enregistrer la vue rendue, avec les shaders, en PPM ou PNG' },
      { key: 'Ctrl+scroll / +/-', desc: 'Ajuster le rayon quand la lampe torche est active' },
      { key: 'Ctrl+[ / Ctrl+]', desc: 'Pivoter de 90 degrés dans le sens antihoraire ou horaire' },
      { key: 'Ctrl+r', desc: 'Recharger les shaders depuis le disque (version dev uniquement)' },
    ],
    shadersList: [
      { name: 'Normal', desc: 'Rendu par défaut avec lampe torche et miroir' },
      { name: 'Invert', desc: 'Négatif photographique' },
      { name: 'CRT', desc: 'Aberration chromatique, lignes de balayage, vignettage' },
      { name: 'Grayscale', desc: 'Désaturation pondérée par la luminance' },
      { name: 'Edge', desc: 'Détection de contours de Sobel' },
      { name: 'VHS Glitch', desc: 'Décalage de blocs animé, décalage des canaux, bruit' },
      { name: 'Distortion', desc: 'Ondulation sinusoïdale + distorsion en tonneau' },
      { name: 'Zoom Blur', desc: 'Flou de mouvement radial depuis le curseur' },
      { name: 'Posterize', desc: 'Quantification des couleurs sur 4 niveaux' },
      { name: 'Pixelate', desc: 'Rééchantillonnage grossier sur une grille' },
      { name: 'Sepia', desc: 'Tonte sépia de chambre noire ancienne' },
      { name: 'Emboss', desc: 'Effet de relief 3D' },
    ],
    configParams: [
      { key: 'min_scale', def: '0.01', desc: 'Niveau de zoom minimal' },
      { key: 'scroll_speed', def: '1.5', desc: 'Vitesse de zoom par cran de molette' },
      { key: 'drag_friction', def: '6.0', desc: 'Vitesse de décroissance de l’inertie de déplacement' },
      { key: 'scale_friction', def: '4.0', desc: 'Vitesse de décroissance de l’inertie de zoom' },
      { key: 'default_shader', def: '"Normal"', desc: 'Shader au démarrage' },
      { key: 'mirror', def: 'false', desc: 'Démarrer avec le miroir activé' },
      { key: 'flashlight_radius', def: '200.0', desc: 'Rayon initial de la lampe torche en pixels' },
      { key: 'scroll_invert', def: 'false', desc: 'Inverser le sens du zoom par molette' },
      { key: 'osd', def: 'false', desc: 'Afficher l’OSD au démarrage (bascule avec la touche o)' },
      { key: 'smooth_reset', def: 'true', desc: 'Revenir animé à l’origine avec la touche 0' },
      { key: 'font', def: '(auto-detect)', desc: 'Chemin ou nom système de la police de l’OSD' },
      { key: 'screenshot_dir', def: '~/Pictures/Screenshots', desc: 'Emplacement d’enregistrement des vues par s' },
      { key: 'screenshot_format', def: '"ppm"', desc: 'ppm ou png pour les enregistrements de la touche s' },
      { key: 'ppm_save', def: 'false', desc: 'Enregistrer un PPM au démarrage' },
      { key: 'ppm_save_path', def: '$HOME/.config/cboomer/screenshot.ppm', desc: 'Chemin de l’enregistrement PPM au démarrage' },
    ],
    configSyntaxExample: `# Le type d'une valeur dépend de sa notation :
scroll_speed = 1.5        # double
min_scale = 0.01          # double
drag_friction = 6.0       # double
osd = true                # bool
default_shader = "Normal" # string
screenshot_dir = "~/Pictures" # chemin de type chaîne (~ devient $HOME)
flashlight_radius = 200  # int ou double`,
    configExample: `# ~/.config/cboomer/config
# Les lignes commençant par # sont des commentaires. Les commentaires en fin de ligne fonctionnent aussi.

# Zoom et déplacement
scroll_speed = 1.5
drag_friction = 6.0
scale_friction = 4.0
min_scale = 0.01

# Shader et affichage
default_shader = "Normal"
mirror = false
osd = false
smooth_reset = true

# Lampe torche
flashlight_radius = 200.0

# Comportement de la molette
scroll_invert = false

# Enregistrement des captures
screenshot_dir = "~/Pictures/Screenshots"
screenshot_format = "png"
ppm_save = false
ppm_save_path = "$HOME/.config/cboomer/screenshot.ppm"

# Police de l'OSD (détection automatique si vide)
font = "DejaVuSans"

# Valeurs booléennes : true/false, 1/0, yes/no, on/off
# Les chaînes doivent être entre guillemets : "Normal"
# Les chemins avec ~ ou $HOME sont développés automatiquement`,
  },
  dx: {
    title: 'Expérience développeur',
    intro: 'Le dépôt conserve ses outils d’environnement, de test, de shader et de version dans le répertoire scripts. Make reste le système de compilation de référence.',
    envforgeIntro: '<a href="https://github.com/DavidBalishyan/envforge" target="_blank" class="i18n-link">envforge</a> est un outil qui gère votre environnement de compilation. Le dépôt contient un fichier <code class="i18n-code">.envforge.yaml</code> qui indique les paquets à installer, les variables d’environnement à définir et les commandes à exécuter à l’entrée et à la sortie.',
    envforgeRun: 'Quand vous exécutez <code class="i18n-code">envforge enter cboomer</code>, il installe les dépendances de compilation, définit CC et CFLAGS, lance make et nettoie tout à la sortie du sous-shell.',
    makeoverIntro: '<a href="https://github.com/davidBalishyan/makeover" target="_blank" class="i18n-link">Makeover</a> se trouve dans le dépôt sous la forme d’un unique script Python exécutable. Il trouve seul le Buildfile racine. Vous pouvez le lancer directement avec Python 3.',
    makeoverNotes: 'Définissez CC, CFLAGS, PREFIX et DESTDIR via les variables d’environnement. Gardez le Buildfile synchronisé avec Make quand les sources, les shaders, les options, les bibliothèques ou les tests changent.',
    zigText: 'build.zig reproduit la compilation Make, y compris la génération des shaders, les tests, le nettoyage et les quatre options de fonctionnalités.',
    ninjaTitle: 'Compilation Ninja (expérimentale)',
    ninjaText1: 'Ninja exécute les tâches en parallèle par défaut et suit les en-têtes via des fichiers .d. Il lui faut un générateur car build.ninja ne contient pas de logique conditionnelle pour les options de cboomer.',
    ninjaText2: 'Les générateurs Perl et Python 3 produisent le même fichier. Utilisez celui dont l’interpréteur est disponible.',
    ninjaCommentPerl: 'Perl (aucune dépendance supplémentaire)',
    ninjaCommentPython: 'Python',
    ninjaText3: 'Le générateur gère l’interprétation des options, la récupération du hash Git, la liste des fichiers source et le quoting shell. Il écrit un build.ninja avec quatre règles : mkdir, gen_shaders, cc (compilation) et link. La règle cc utilise <code class="i18n-code">-MMD -MF</code> pour générer des fichiers de dépendance .d afin que Ninja sache exactement quoi reconstruire quand un en-tête change.',
    ninjaMakeDesc: 'Les compilations parallèles nécessitent -j$(nproc). Le suivi des en-têtes se limite au Makefile lui-même.',
    ninjaNinjaDesc: 'Parallèle par défaut. Suit les fichiers .d pour des reconstructions précises. Nécessite un script générateur pour produire build.ninja.',
    scriptsTitle: 'Scripts',
    scriptsIntro: 'Tous les scripts se trouvent dans <code class="i18n-code">scripts/</code> et acceptent <code class="i18n-code">help</code> comme premier argument pour obtenir de l’aide.',
    scripts: [
      {
        cmd: 'scripts/install-deps.sh',
        desc: 'Installe le compilateur et les paquets de bibliothèques pour Debian, Fedora, Arch, Alpine, openSUSE ou Void. Les droits root sont nécessaires.',
      },
      {
        cmd: 'scripts/makeover [target ...]',
        desc: 'Système de compilation Python 3 fourni pour Buildfile. Compile cboomer, lance les tests et prend en charge les mêmes cibles de fonctionnalités cumulables que Make.',
      },
      {
        cmd: 'scripts/lint.sh',
        desc: 'Lance l’analyse statique. Essaie d’abord cppcheck, puis clang-tidy. Indique comment en installer un si aucun n’est trouvé.',
      },
      {
        cmd: 'scripts/memcheck.sh [asan|valgrind|all]',
        desc: 'Lance les tests avec AddressSanitizer et UBSan, Valgrind, ou les deux. Les objets instrumentés restent dans build/asan.',
      },
      {
        cmd: 'scripts/release.sh <version>',
        desc: 'Crée le tag d’une version, remplace l’espacement réservé [TODO] dans CHANGELOG.md par le hash du commit, pousse les changements et crée une release GitHub à partir de la section du journal.',
      },
      {
        cmd: 'scripts/shader.sh new <name>',
        desc: 'Crée un nouveau fragment shader à partir d’un modèle, l’enregistre dans le Makefile et gen_shaders.sh, et ajoute un espacement réservé dans le README.',
      },
      {
        cmd: 'scripts/shader.sh remove <name>',
        desc: 'Supprime un shader et annule les modifications du Makefile, de gen_shaders.sh et du README.',
      },
      {
        cmd: 'scripts/shader.sh ls',
        desc: 'Liste tous les fragment shaders par nom.',
      },
      {
        cmd: 'scripts/gen_shaders.sh <output>',
        desc: 'Convertit tous les fichiers .glsl de src/shaders/ en constantes de chaîne C dans build/shaders.h. Appelé automatiquement par les systèmes de compilation.',
      },
      {
        cmd: 'scripts/build-matrix.sh',
        desc: 'Compile chaque combinaison utile des options dev/live/mitshm/select pour détecter les ruptures #ifdef. Lance make clean entre chaque compilation.',
      },
    ],
    contributing: 'Contribuer',
    contributingText1: 'Lisez le <a href="https://github.com/DavidBalishyan/cboomer/blob/main/CONTRIBUTING.md" target="_blank" class="i18n-link">guide de contribution</a> avant d’envoyer une modification. Il couvre la compilation, les tests, l’analyse statique et la revue requis.',
    contributingText2: 'Le mainteneur ne recommande pas d’utiliser des agents IA sur cboomer. Quiconque en utilise un doit tout de même comprendre chaque ligne modifiée, vérifier le comportement et assumer la responsabilité du résultat.',
    shaderTooling: 'Outils pour les shaders',
    shaderText1: 'La compilation transforme les fichiers .glsl en constantes de chaîne C dans <code class="i18n-code">build/shaders.h</code>. Le script <code class="i18n-code">scripts/gen_shaders.sh</code> est lancé automatiquement.',
    shaderText2: 'scripts/shader.sh crée le fichier GLSL, met à jour le Makefile et le générateur, puis ajoute un espacement réservé dans le README :',
    shaderCreated: 'Création de src/shaders/frag_myeffect.glsl',
    shaderUpdatedMakefile: 'Makefile mis à jour',
    shaderUpdatedGenerator: 'scripts/gen_shaders.sh mis à jour',
    shaderUpdatedReadme: 'README.md mis à jour',
    shaderText3: 'Le modèle déclare déjà cursorPos, windowSize, flShadow, flRadius, cameraScale et mirror. Écrivez l’effet dans la section <code class="i18n-code">// TODO: implement shader effect</code>. Le script ne met pas à jour ShaderMode, shader_names, src/main.c, Buildfile ni build.zig. Ajoutez le nouveau shader à ces listes avant de compiler.',
  },
  changelog: {
    title: 'Journal des modifications',
    intro: 'cboomer suit le <a href="https://semver.org/" target="_blank" class="i18n-link">versionnage sémantique</a>. Les versions sont listées de la plus récente à la plus ancienne. Chaque lien de commit ouvre la révision source enregistrée dans le journal du projet.',
    groupTitles: {
      changes: 'Modifications',
      fixes: 'Corrections',
      configuration: 'Configuration',
      testingAndBuild: 'Tests et compilation',
      initialRelease: 'Première version',
    },
    releases: {
      'v1.5.4': [
        ['Ajout du système Makeover fourni et du Buildfile comme autre façon de compiler cboomer.'],
      ],
      'v1.5.3': [
        [
          'Ajout de build.zig avec les mêmes options de fonctionnalités que Make. Il peut compiler cboomer, lancer les tests, nettoyer les fichiers générés, générer l’en-tête des shaders et intégrer le hash du commit Git.',
          'Suppression d’un message de débogage __STDC_VERSION__ resté dans main.c.',
        ],
      ],
      'v1.5.2': [
        [
          'Correction du problème n° 2 : find_font ne corrompt plus le chemin du répertoire pendant la recherche de polices.',
          'Correction du problème n° 4 : le rechargement de la configuration ne fuit plus ppm_save_path.',
          'Correction du problème n° 3 : une fréquence de rafraîchissement nulle ne provoque plus de division par zéro.',
        ],
      ],
      'v1.5.1': [
        [
          'Ajout d’un harnais de tests sans dépendances avec 38 tests pour l’analyse de la configuration, les mathématiques vectorielles, la physique de la caméra et l’encodage PPM et PNG. Les tests s’exécutent sans affichage.',
          'La sortie des tests utilise désormais la couleur quand stdout est un terminal et du texte brut lorsqu’il est redirigé.',
          'Ajout de tâches CI pour la compilation normale, les tests, la matrice des fonctionnalités et les contrôles mémoire.',
          'Déplacement de shader_names dans config.c afin que les tests puissent lier le module de configuration sans main.o.',
          'Les objets de test sont maintenant reconstruits quand tests/test.h change.',
          'Le script de lint vérifie désormais aussi les sources des tests.',
          'Ajout de scripts/build-matrix.sh pour sept combinaisons des options de compilation DEVELOPER, LIVE, MITSHM et SELECT.',
          'Ajout de scripts/memcheck.sh pour les exécutions ASan, UBSan et Valgrind. Les objets instrumentés utilisent build/asan.',
          'Ajout de zlib à l’installateur de dépendances et à la configuration envforge.',
        ],
      ],
      'v1.5.0': [
        [
          'Ajout de la touche i pour basculer le zoom entre les pixels au plus proche et le filtrage linéaire. L’OSD affiche le mode actif.',
        ],
      ],
      'v1.4.2': [
        [
          'L’OSD affiche désormais la valeur RVB et le code hexadécimal du pixel capturé sous le curseur.',
          'Les touches 1 à 5 règlent le zoom sur 100 %, 200 %, 400 %, 800 % ou 1600 %. Elles utilisent l’animation de réinitialisation quand smooth_reset est activé.',
          'Ctrl+[ et Ctrl+] font pivoter l’image de 0, 90, 180 et 270 degrés.',
        ],
      ],
      'v1.4.1': [
        [
          'Ajout de générateurs Ninja expérimentaux en Perl et Python. La compilation générée suit les en-têtes avec des fichiers .d et se fait en parallèle par défaut.',
          'Ajout de la commande ls à scripts/shader.sh.',
          'Ajout de screenshot_format afin que les vues enregistrées puissent utiliser PPM ou PNG. La sortie PNG utilise zlib.',
          'Ajout du déplacement au clavier avec les flèches, h/j/k/l et Ctrl+f/b/n/p.',
        ],
      ],
      'v1.4.0': [
        [
          'Ajout d’un affichage à l’écran avec le nom du shader, le pourcentage de zoom et les FPS. Utilisez l’option de configuration osd ou la touche o.',
          'Ajout de smooth_reset pour que la touche 0 ramène la caméra à sa position de départ avec une animation.',
          'Ajout de polices TrueType et OpenType configurables pour l’OSD, avec recherche d’une police système à partir de son nom.',
          'Déplacement des shaders de l’OSD dans src/shaders et ajout aux en-têtes de shaders générés.',
          'Ajout de vérifications d’erreurs OpenGL autour des opérations sur les shaders, programmes, textures et buffers.',
          'Ajustement du placement du texte TrueType pour tenir compte de l’ascension de la police.',
          'Clarification des commentaires de la configuration générée pour osd et font.',
          'Limitation des événements répétés de la touche t à un changement de shader toutes les 200 millisecondes.',
          'Libération de la configuration d’écran XRandR après utilisation.',
          'Le mode fenêtré enregistre et restaure désormais sa position via ~/.config/cboomer/state.',
          'Ajout de la touche s pour enregistrer la vue rendue dans un fichier PPM horodaté. screenshot_dir contrôle la destination.',
        ],
      ],
      'v1.3.1': [
        [
          'L’analyseur de configuration déduit désormais les chaînes, les caractères, les entiers, les nombres à virgule flottante et les booléens de leur notation littérale.',
          'Les fichiers de configuration acceptent désormais les commentaires en fin de ligne.',
          'ppm_save_path développe désormais les chemins commençant par ~.',
          'Les valeurs booléennes acceptent désormais yes/no et on/off en plus de true/false et 1/0.',
          'Les avertissements de configuration incluent désormais les numéros de ligne et utilisent la couleur dans un terminal.',
          'Un ppm_save_path sans guillemets produit désormais un avertissement.',
          'Ajout de la prise en charge des fichiers de configuration cboomer dans Vim et Emacs.',
          'Ajout d’options de configuration pour le shader initial, le mode miroir, le rayon de la lampe torche et le sens de défilement.',
          'Déplacement de ShaderMode dans config.h et export de shader_names pour l’analyse de la configuration.',
        ],
      ],
      'v1.3.0': [
        [
          'La navigation plafonne désormais l’échelle à 0.001 avant la division.',
          'Les calculs de taille PPM utilisent désormais unsigned long pour éviter un débordement sur les grandes images.',
          'Déplacement de la génération de l’en-tête des shaders dans scripts/gen_shaders.sh.',
        ],
        [
          'L’option ppm_save écrit désormais une capture au démarrage.',
          'ppm_save_path contrôle désormais le chemin de la capture au démarrage et développe $HOME.',
          'Ajout de scripts/install-deps.sh pour les dépendances de compilation propres à chaque distribution.',
          'Ajout de scripts/release.sh pour les mises à jour du journal, les tags, les push et les releases GitHub.',
        ],
      ],
      'v1.2.1': [
        [
          'Correction d’un plantage lors des rechargements de shaders par Ctrl+R causé par la libération de chaînes de shaders intégrées.',
          'Correction d’un rendu LIVE corrompu causé par un pas de sommet incorrect.',
          'Gestion des échecs de ftell et des lectures partielles lors du rechargement des fichiers de shader.',
          'Ajout de vérifications et d’un repli X11 normal pour chaque étape de configuration MIT-SHM.',
          'Libération du XVisualInfo renvoyé par glXChooseVisual.',
          'Bornage de min_scale pour empêcher la division par zéro.',
          'L’ancienne capture reste valide lorsqu’un rafraîchissement live échoue.',
          'Les clés de configuration inconnues produisent désormais un avertissement au lieu de terminer le processus.',
          'Les appels nanosleep interrompus reprennent désormais avec le temps restant.',
          'Ajout de vérifications pour XGetWindowAttributes.',
          'Le mode SELECT gère désormais les échecs de capture du pointeur et du clavier.',
          'Les buffers de shaders rechargés sont libérés à la sortie d’une compilation DEVELOPER.',
          'Ajout de vérifications pour les chemins de configuration tronqués.',
        ],
      ],
      'v1.2.0': [
        [
          'Ajout de sept shaders : VHS Glitch, Distortion, Zoom Blur, Posterize, Pixelate, Sepia et Emboss. cboomer compte désormais 12 modes de shader.',
          'Ajout d’une variable de temps pour les shaders animés comme VHS Glitch et Distortion.',
          'La touche t parcourt désormais les 12 modes de shader.',
        ],
      ],
      'v1.1.0': [
        [
          'Ajout des cinq premiers modes de shader : Normal, Invert, CRT, Grayscale et Edge.',
          'Déplacement des fichiers GLSL dans src/shaders et intégration au binaire pendant la compilation.',
          'Extension du README avec un lien de démo, des notes sur les shaders et les commandes des variantes de compilation.',
          'Modification du chemin de sortie de compilation : cboomer est désormais écrit à la racine du dépôt.',
        ],
      ],
      'v1.0.0': [
        [
          'Publication de la réécriture en C11 avec capture d’écran X11 et rendu OpenGL.',
          'Inclusion de l’inertie de déplacement et de zoom, des commandes de lampe torche, du mode miroir et du suivi de fenêtre en direct.',
          'Ajout du fichier de configuration à $HOME/.config/cboomer/config.',
          'Ajout des variantes de compilation DEVELOPER, LIVE, MITSHM et SELECT.',
          'Ajout des options de ligne de commande pour le délai, l’aide, la génération de configuration, les chemins de configuration personnalisés, l’affichage de la version et le mode fenêtré.',
        ],
      ],
    },
  },
}
