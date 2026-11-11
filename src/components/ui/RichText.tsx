/** Renders `inline code` spans inside short data strings. */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(`[^`]+`)/g)
  return (
    <>
      {parts.map((part, i) =>
        part.startsWith('`') && part.endsWith('`') ? (
          <code
            key={i}
            className='rounded bg-white/8 px-1 py-0.5 text-[0.9em] text-green-light'
          >
            {part.slice(1, -1)}
          </code>
        ) : (
          part
        )
      )}
    </>
  )
}
