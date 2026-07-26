import { component$, useSignal } from '@builder.io/qwik'

interface CopyButtonProps {
  text: string
}

export const CopyButton = component$<CopyButtonProps>(({ text }) => {
  const copied = useSignal(false)

  return (
    <button
      onClick$={async () => {
        await navigator.clipboard.writeText(text)
        copied.value = true
        setTimeout(() => {
          copied.value = false
        }, 2000)
      }}
      class="text-zinc-400 hover:text-white transition-colors p-1 rounded"
      aria-label="Copy to clipboard"
    >
      {copied.value ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="text-green-400"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
          <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
        </svg>
      )}
    </button>
  )
})
