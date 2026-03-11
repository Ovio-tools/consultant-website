'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useContactModal } from './ContactModal'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: null, isModal: true },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [aboutVisible, setAboutVisible] = useState(false)
  const pathname = usePathname()
  const { openModal } = useContactModal()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close drawer on route change
  useEffect(() => {
    setDrawerOpen(false)
  }, [pathname])

  // Close drawer on Escape
  useEffect(() => {
    if (!drawerOpen) return
    function handleKey(e) {
      if (e.key === 'Escape') setDrawerOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    return () => document.removeEventListener('keydown', handleKey)
  }, [drawerOpen])

  // Scroll lock when drawer open on mobile
  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [drawerOpen])

  // Track About section visibility via IntersectionObserver (homepage only)
  useEffect(() => {
    if (pathname !== '/') {
      setAboutVisible(false)
      return
    }
    const el = document.getElementById('about')
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => setAboutVisible(entry.isIntersecting),
      { rootMargin: '-104px 0px -40% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [pathname])

  function isActive(href) {
    if (!href) return false
    if (href === '/#about') return aboutVisible
    if (href === '/') return pathname === '/' && !aboutVisible
    return pathname.startsWith(href.split('#')[0]) && href.split('#')[0] !== '/'
  }

  return (
    <>
      <header
        className={`fixed top-10 inset-x-0 z-40 bg-white border-b border-border-default transition-shadow duration-200 ${
          scrolled ? 'shadow-nav' : ''
        }`}
      >
        <div className="container-site flex items-center justify-between h-16 lg:h-[72px]">
          {/* Logo */}
          <Link
            href="/"
            className="text-navy text-xl font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
          >
            ConsultCo
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
            {navLinks.map((link) =>
              link.isModal ? (
                <button
                  key="contact"
                  onClick={openModal}
                  className="text-[15px] font-medium text-text-primary hover:text-accent transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  Contact
                </button>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-[15px] font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded ${
                    isActive(link.href)
                      ? 'text-accent'
                      : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {link.label}
                  {isActive(link.href) && (
                    <span className="absolute -bottom-[22px] left-0 right-0 h-[2px] bg-accent rounded-full" />
                  )}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-text-primary hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            aria-label={drawerOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={drawerOpen}
            aria-controls="mobile-nav"
            onClick={() => setDrawerOpen((o) => !o)}
          >
            {drawerOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 md:hidden"
          aria-hidden="true"
          onClick={() => setDrawerOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        aria-hidden={!drawerOpen}
        className={`fixed top-10 right-0 bottom-0 z-40 w-72 bg-white shadow-modal flex flex-col md:hidden transform transition-transform duration-200 ease-in-out ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Drawer header with close button */}
        <div className="flex items-center justify-between px-6 h-16 border-b border-border-default flex-shrink-0">
          <span className="text-navy font-semibold">Menu</span>
          <button
            onClick={() => setDrawerOpen(false)}
            aria-label="Close navigation"
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-gray-100 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col px-6 pt-2 gap-1">
          {navLinks.map((link) =>
            link.isModal ? (
              <li key="contact-mobile">
                <button
                  onClick={() => { setDrawerOpen(false); openModal() }}
                  className="w-full text-left text-[15px] font-medium text-text-primary hover:text-accent py-3 min-h-[48px] flex items-center transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            ) : (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`block text-[15px] font-medium py-3 min-h-[48px] flex items-center transition-colors duration-200 ${
                    isActive(link.href) ? 'text-accent' : 'text-text-primary hover:text-accent'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
    </>
  )
}
