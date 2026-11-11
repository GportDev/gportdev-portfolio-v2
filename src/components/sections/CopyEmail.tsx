'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { EASE_OUT } from '@/lib/ease'

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)

  useEffect(() => () => clearTimeout(timer.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return (
    <button
      type='button'
      onClick={copy}
      className='press inline-flex items-center gap-3 rounded-xl bg-green px-5 py-3 font-semibold text-ink shadow-glow hover:bg-green-light'
    >
      <span className='relative grid size-4 place-items-center'>
        <AnimatePresence mode='popLayout' initial={false}>
          <motion.span
            key={copied ? 'check' : 'copy'}
            initial={{ opacity: 0, scale: 0.6, filter: 'blur(2px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.6, filter: 'blur(2px)' }}
            transition={{ type: 'spring', duration: 0.3, bounce: 0 }}
            className='absolute'
          >
            {copied ? (
              <Check className='size-4' strokeWidth={2.5} />
            ) : (
              <Copy className='size-4' />
            )}
          </motion.span>
        </AnimatePresence>
      </span>
      <span aria-live='polite' className='relative inline-grid'>
        <AnimatePresence mode='popLayout' initial={false}>
          <motion.span
            key={copied ? 'copied' : 'email'}
            initial={{ opacity: 0, filter: 'blur(2px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, filter: 'blur(2px)' }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            {copied ? 'Copied to clipboard' : email}
          </motion.span>
        </AnimatePresence>
      </span>
    </button>
  )
}
