export type ReleaseGroupKey =
  | 'changes'
  | 'fixes'
  | 'configuration'
  | 'testingAndBuild'
  | 'initialRelease'

export interface ReleaseGroupMeta {
  title: ReleaseGroupKey
  count: number
}

export interface ReleaseMeta {
  version: string
  commit: string
  groups: ReleaseGroupMeta[]
}

export const releaseMeta: ReleaseMeta[] = [
  {
    version: 'v1.5.4',
    commit: '4523e91c170ac388674a96b74f4b21a438042362',
    groups: [{ title: 'changes', count: 1 }],
  },
  {
    version: 'v1.5.3',
    commit: '7a5dff29ecb53c5eb8ebe2c85d56e3e6b1fe9c38',
    groups: [{ title: 'changes', count: 2 }],
  },
  {
    version: 'v1.5.2',
    commit: 'd49c4a9bbcd687a830d6b8e340d5a241ee73d4fc',
    groups: [{ title: 'fixes', count: 3 }],
  },
  {
    version: 'v1.5.1',
    commit: 'e365a36de81cb89359451fbca6e136c00213b075',
    groups: [{ title: 'testingAndBuild', count: 9 }],
  },
  {
    version: 'v1.5.0',
    commit: '2e2beff1d3fe16f419fbcc2bb372fd2b11910954',
    groups: [{ title: 'changes', count: 1 }],
  },
  {
    version: 'v1.4.2',
    commit: '3f498b7682a90811fd46987279fa63dd4efff26c',
    groups: [{ title: 'changes', count: 3 }],
  },
  {
    version: 'v1.4.1',
    commit: '8c2720968b69082a3d01d1ca56bc2b0499770c21',
    groups: [{ title: 'changes', count: 4 }],
  },
  {
    version: 'v1.4.0',
    commit: '39f14961a30260109247298ad073219f6688947d',
    groups: [{ title: 'changes', count: 11 }],
  },
  {
    version: 'v1.3.1',
    commit: 'eb7d62cec997f7f65df10e8537d21465a354f369',
    groups: [{ title: 'configuration', count: 9 }],
  },
  {
    version: 'v1.3.0',
    commit: '2f00a4773c741ec7e1bf9a45b90ab9888c386767',
    groups: [
      { title: 'fixes', count: 3 },
      { title: 'changes', count: 4 },
    ],
  },
  {
    version: 'v1.2.1',
    commit: '2deaaccf86d6a9f12dfeff340247bc1fe28bf424',
    groups: [{ title: 'fixes', count: 13 }],
  },
  {
    version: 'v1.2.0',
    commit: '2deaaccf86d6a9f12dfeff340247bc1fe28bf424',
    groups: [{ title: 'changes', count: 3 }],
  },
  {
    version: 'v1.1.0',
    commit: '084b84fc45f76d57353ad1b7cdf954b035bdc18a',
    groups: [{ title: 'changes', count: 4 }],
  },
  {
    version: 'v1.0.0',
    commit: '822a0795fc8e2a80612b631c9d2543442f431c37',
    groups: [{ title: 'initialRelease', count: 5 }],
  },
]
