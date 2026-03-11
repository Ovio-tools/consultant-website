'use client'

import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react'
import ContactForm from './ContactForm'

const ContactModalContext = createContext(null)

export function useContactModal() {
  const ctx = useContext(ContactModalContext)
  if (!ctx) throw new Error('useContactModal must be used inside ContactModalProvider')
  return ctx
}

export function ContactModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const triggerRef = useRef(null)

  const openModal = useCallback(() => {
    triggerRef.current = typeof document !== 'undefined' ? document.activeElement : null
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)
    requestAnimationFrame(() => {
      triggerRef.current?.focus()
    })
  }, [])

  return (
    <ContactModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeModal} />
    </ContactModalContext.Provider>
  )
}

function ContactModal({ isOpen, onClose }) {
  const panelRef = useRef(null)

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Escape key
  useEffect(() => {
    if (!isOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [isOpen, onClose])

  // Focus first input on open
  useEffect(() => {
    if (isOpen) {
      const firstInput = panelRef.current?.querySelector('input, textarea, button')
      firstInput?.focus()
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="relative w-full max-w-modal bg-white rounded-card shadow-modal max-h-[90vh] overflow-y-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-border-default">
          <div>
            <h2 id="modal-title" className="text-xl font-semibold text-text-primary">
              Get in Touch
            </h2>
            <p className="text-sm text-text-secondary mt-0.5">
              We typically respond within 24 hours.
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="ml-4 p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
