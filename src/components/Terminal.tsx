import { component$, Slot } from '@builder.io/qwik'
import { CopyButton } from './CopyButton'

interface TerminalProps {
  title?: string
  copyText?: string
}

export const Terminal = component$<TerminalProps>(({ title, copyText }) => {
  return (
    <div class="rounded-lg border border-zinc-800 bg-zinc-900 overflow-hidden">
      <div class="flex items-center justify-between px-4 py-2.5 border-b border-zinc-800">
        <div class="flex items-center gap-2">
          <div class="w-3 h-3 rounded-full bg-red-500/60" />
          <div class="w-3 h-3 rounded-full bg-yellow-500/60" />
          <div class="w-3 h-3 rounded-full bg-green-500/60" />
        </div>
        {title && (
          <span class="text-xs text-zinc-500 font-mono">{title}</span>
        )}
        <div />
      </div>
      <div class="p-4 font-mono text-sm relative group">
        <Slot />
        {copyText && (
          <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <CopyButton text={copyText} />
          </div>
        )}
      </div>
    </div>
  )
})
