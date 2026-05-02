'use client'

import { useEffect } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'

interface DrawerProps {
  open: boolean
  onClose: () => void
  title: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'md' | 'lg'
}

export default function Drawer({ open, onClose, title, description, children, footer, size = 'md' }: DrawerProps) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Backdrop */}
      <div
        className={clsx(
          'fixed inset-0 bg-black/20 z-40 transition-opacity duration-300',
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={onClose}
      />

      {/* Drawer panel */}
      <div
        className={clsx(
          'fixed top-0 right-0 h-full bg-white z-50 flex flex-col shadow-xl border-l border-gray-200 transition-transform duration-300 ease-out',
          size === 'lg' ? 'w-[640px]' : 'w-[520px]',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-start justify-between px-6 py-5 border-b border-gray-200 flex-shrink-0">
          <div>
            <h2 className="text-base font-semibold text-gray-900">{title}</h2>
            {description && (
              <p className="text-sm text-gray-500 mt-0.5">{description}</p>
            )}
          </div>
          <button
            onClick={onClose}
            className="ml-4 p-1.5 hover:bg-gray-100 rounded-md transition-colors flex-shrink-0 mt-0.5"
          >
            <X size={17} className="text-gray-500" />
          </button>
        </div>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto min-h-0">
          {children}
        </div>

        {/* Footer — always visible */}
        {footer && (
          <div className="flex-shrink-0 px-6 py-4 border-t border-gray-100 bg-white">
            {footer}
          </div>
        )}
      </div>
    </>
  )
}
