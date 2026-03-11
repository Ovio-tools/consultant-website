import Image from 'next/image'
import Link from 'next/link'
import OpenModalButton from './OpenModalButton'

export default function Hero() {
  return (
    <section className="section-padding bg-white pt-[calc(3rem+104px)] lg:pt-[calc(6rem+112px)]">
      <div className="container-site">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Text column (60%) */}
          <div className="lg:w-[58%]">
            <h1 className="text-hero text-navy mb-5">
              Strategic Consulting That Moves Your Business Forward
            </h1>
            <p className="text-base text-text-secondary leading-relaxed mb-8 max-w-xl">
              You already know what you want to build. We help you figure out how to get there,
              cut through the noise, and make progress that actually lasts.
            </p>
            <div className="flex flex-wrap gap-3">
              <OpenModalButton className="btn-primary">Get Started</OpenModalButton>
              <Link href="/services/#services-detail" className="btn-secondary">
                Our Services
              </Link>
            </div>
          </div>

          {/* Image column (40%) */}
          <div className="lg:w-[42%] flex justify-center lg:justify-end">
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
