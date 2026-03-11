'use client'

import { useState } from 'react'

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values) {
  const errors = {}
  if (!values.name.trim() || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }
  if (!values.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!values.message.trim() || values.message.trim().length < 10) {
    errors.message = 'Please enter a message (at least 10 characters).'
  }
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    if (touched[name]) {
      const newErrors = validate({ ...values, [name]: value })
      setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  function handleBlur(e) {
    const { name } = e.target
    setTouched((t) => ({ ...t, [name]: true }))
    const newErrors = validate(values)
    setErrors((prev) => ({ ...prev, [name]: newErrors[name] }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const allTouched = { name: true, email: true, company: true, message: true }
    setTouched(allTouched)
    const newErrors = validate(values)
    setErrors(newErrors)
    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true)
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="text-center py-10 px-6"
      >
        <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
          <svg width="28" height="28" fill="none" stroke="#3B82F6" strokeWidth="2.5" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-text-primary mb-2">Message Received</h3>
        <p className="text-text-secondary">
          Thanks for reaching out. We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="space-y-5">
        {/* Full Name */}
        <div>
          <label htmlFor="cf-name" className="block text-sm font-medium text-text-primary mb-1.5">
            Full Name <span className="text-error" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Jane Smith"
            aria-describedby={errors.name && touched.name ? 'cf-name-error' : undefined}
            aria-invalid={!!(errors.name && touched.name)}
            className={`input-field ${errors.name && touched.name ? 'input-error' : ''}`}
          />
          {errors.name && touched.name && (
            <p id="cf-name-error" role="alert" className="mt-1.5 text-sm text-error">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="cf-email" className="block text-sm font-medium text-text-primary mb-1.5">
            Email Address <span className="text-error" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="jane@company.com"
            aria-describedby={errors.email && touched.email ? 'cf-email-error' : undefined}
            aria-invalid={!!(errors.email && touched.email)}
            className={`input-field ${errors.email && touched.email ? 'input-error' : ''}`}
          />
          {errors.email && touched.email && (
            <p id="cf-email-error" role="alert" className="mt-1.5 text-sm text-error">
              {errors.email}
            </p>
          )}
        </div>

        {/* Company Name (optional) */}
        <div>
          <label htmlFor="cf-company" className="block text-sm font-medium text-text-primary mb-1.5">
            Company Name <span className="text-text-secondary text-xs font-normal">(optional)</span>
          </label>
          <input
            id="cf-company"
            name="company"
            type="text"
            autoComplete="organization"
            value={values.company}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Acme Corp"
            className="input-field"
          />
        </div>

        {/* Message */}
        <div>
          <label htmlFor="cf-message" className="block text-sm font-medium text-text-primary mb-1.5">
            Message <span className="text-error" aria-hidden="true">*</span>
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={8}
            required
            value={values.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tell us about your project or challenge..."
            aria-describedby={errors.message && touched.message ? 'cf-message-error' : undefined}
            aria-invalid={!!(errors.message && touched.message)}
            className={`input-field h-auto py-3 resize-none ${errors.message && touched.message ? 'input-error' : ''}`}
          />
          {errors.message && touched.message && (
            <p id="cf-message-error" role="alert" className="mt-1.5 text-sm text-error">
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </div>
    </form>
  )
}
