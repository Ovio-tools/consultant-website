import Image from 'next/image'
import OpenModalButton from './OpenModalButton'

const ctaStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '52px',
  backgroundColor: '#3B82F6',
  color: '#ffffff',
  fontSize: '14px',
  fontWeight: '500',
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  transition: 'background-color 200ms ease',
  cursor: 'pointer',
}

export default function Hero() {
  return (
    <section
      className="relative pt-[144px] pb-12 md:pt-[176px] md:pb-[72px] lg:pt-[208px] lg:pb-24"
      style={{
        backgroundImage: 'url(/hero-bg.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Mobile overlay: uniform */}
      <div
        className="absolute inset-0 md:hidden"
        style={{ background: 'rgba(27, 46, 74, 0.70)' }}
        aria-hidden="true"
      />
      {/* Tablet/Desktop overlay: gradient left → right */}
      <div
        className="absolute inset-0 hidden md:block"
        style={{
          background:
            'linear-gradient(to right, rgba(27, 46, 74, 0.75), rgba(27, 46, 74, 0.35))',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-16">

          {/* Text column */}
          <div className="md:w-[58%]">
            <h1
              className="text-[28px] md:text-[36px] lg:text-[48px] font-semibold leading-[1.2] text-white mb-4"
              style={{ textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)' }}
            >
              Strategic Consulting That Drives Results
            </h1>
            <p
              className="text-base lg:text-[18px] leading-relaxed mb-6 md:mb-8 max-w-xl"
              style={{
                color: 'rgba(255, 255, 255, 0.85)',
                textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
              }}
            >
              We help you get there, cut through the noise, and make progress that lasts.
            </p>

            {/* Mobile: full-width CTA */}
            <div className="md:hidden">
              <OpenModalButton
                className="w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                style={{ ...ctaStyle, display: 'flex' }}
              >
                Get Started
              </OpenModalButton>
            </div>

            {/* Tablet / Desktop: inline CTA */}
            <div className="hidden md:block">
              <OpenModalButton
                className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-navy"
                style={{ ...ctaStyle, minWidth: '200px' }}
              >
                Get Started
              </OpenModalButton>
            </div>
          </div>

          {/* Headshot — tablet and desktop only */}
          <div className="hidden md:flex md:w-[42%] justify-center lg:justify-end">
            <Image
              src="https://placehold.co/600x680/E5E7EB/9CA3AF?text=Your+headshot+goes+here"
              alt="Your professional headshot goes here"
              width={600}
              height={680}
              className="w-full h-auto object-cover"
              style={{
                maxWidth: '280px',
                borderRadius: '12px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
              }}
              priority
            />
          </div>

        </div>
      </div>
    </section>
  )
}
