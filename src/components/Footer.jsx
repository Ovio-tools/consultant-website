import Link from 'next/link'

const footerLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Services', href: '/services/' },
  { label: 'Contact', href: '/#contact' },
]

const contactInfo = {
  email: 'hello@consultco.com',
  phone: '+1 (555) 000-0000',
  location: 'New York, NY',
}

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-footer-text">
      <div className="container-site py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Column 1: Company info */}
          <div>
            <span className="text-white text-xl font-semibold tracking-tight">ConsultCo</span>
            <p className="mt-3 text-sm leading-relaxed text-footer-text/80">
              Partnering with ambitious businesses to sharpen strategy, streamline operations, and
              unlock sustainable growth.
            </p>
          </div>

          {/* Column 2: Quick links */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-footer-text/80 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact info */}
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm text-footer-text/80">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone.replace(/\D/g, '')}`}
                  className="hover:text-white transition-colors duration-200"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li>{contactInfo.location}</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-footer-text/60">
            &copy; {new Date().getFullYear()} ConsultCo. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-footer-text/60 hover:text-white transition-colors duration-200"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* Twitter/X */}
            <a
              href="#"
              aria-label="Twitter / X"
              className="text-footer-text/60 hover:text-white transition-colors duration-200"
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
