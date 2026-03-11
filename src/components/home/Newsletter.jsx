'use client'

import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) {
      setError('Please enter your email address.')
      return
    }
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }
    setError('')
    setSuccess(true)
  }

  return (
    <section className="section-padding bg-bg-light">
      <div className="container-site">
        <div className="max-w-newsletter mx-auto text-center">
          <h2 className="text-section-heading text-navy mb-4">Stay in the Loop</h2>
          <p className="text-base text-text-secondary mb-8">
            Get our latest insights on strategy, growth, and operations delivered straight to your
            inbox. No spam, ever.
          </p>

          {success ? (
            <div role="status" className="inline-flex items-center gap-3 bg-accent/10 text-accent font-medium px-6 py-3 rounded-btn">
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Thanks for subscribing!
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <div className="flex-1">
                  <label htmlFor="newsletter-email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      if (error) setError('')
                    }}
                    placeholder="Enter your email"
                    aria-describedby={error ? 'newsletter-error' : undefined}
                    aria-invalid={!!error}
                    className={`input-field ${error ? 'input-error' : ''}`}
                  />
                </div>
                <button type="submit" className="btn-primary flex-shrink-0">
                  Subscribe
                </button>
              </div>
              {error && (
                <p id="newsletter-error" role="alert" className="mt-2 text-sm text-error">
                  {error}
                </p>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
