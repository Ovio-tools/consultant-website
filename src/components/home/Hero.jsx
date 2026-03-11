import Image from 'next/image'
import Link from 'next/link'
import OpenModalButton from './OpenModalButton'

export default function Hero() {
  return (
    <section className="bg-white pt-[144px] pb-12 lg:pt-[208px] lg:pb-24">
      {/*
        Avoiding container-site here because custom @layer utilities override
        JIT-generated px-* classes. Writing max-width + padding explicitly instead.
      */}
      <div className="max-w-site mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center gap-12 lg:gap-16">

          {/* Text column */}
          <div className="md:w-[58%]">
            <h1 className="text-[28px] md:text-[32px] lg:text-[48px] font-semibold leading-[1.2] text-text-primary mb-4">
              Strategic Consulting That Drives Results
            </h1>
            <p className="text-base text-text-secondary leading-relaxed mb-6 max-w-xl">
              We help you get there, cut through the noise, and make progress that lasts.
            </p>

            {/* Mobile: single full-width CTA at 52px */}
            <div className="md:hidden">
              <OpenModalButton className="flex w-full items-center justify-center bg-accent text-white text-sm font-medium uppercase tracking-wider rounded-btn transition-all duration-200 ease-in-out hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2" style={{ height: '52px' }}>
                Get Started
              </OpenModalButton>
            </div>

            {/* Tablet / Desktop: two CTAs side by side */}
            <div className="hidden md:flex flex-wrap gap-3">
              <OpenModalButton className="btn-primary">Get Started</OpenModalButton>
              <Link href="/services/#services-detail" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>

          {/* Image column — hidden on mobile, visible md+ */}
          <div className="hidden md:flex md:w-[42%] justify-center lg:justify-end">
            <div className="relative w-full max-w-sm lg:max-w-none">
              <Image
                src="https://placehold.co/600x680/E5E7EB/9CA3AF?text=Your+headshot+goes+here"
                alt="Your professional headshot goes here"
                width={600}
                height={680}
                className="rounded-card shadow-card-hover w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
