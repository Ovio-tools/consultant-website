import Image from 'next/image'
import Link from 'next/link'

export default function AboutPreview() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-site">
        <div className="flex flex-col md:flex-row md:items-center gap-10 lg:gap-16">
          {/* Image */}
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/600x400/D1D5DB/6B7280?text=Add+a+team+photo+here"
              alt="Add a photo of your team or office here"
              width={600}
              height={400}
              className="rounded-card shadow-card w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text */}
          <div className="md:w-1/2">
            <p className="text-xs font-semibold text-accent uppercase tracking-widest mb-3">
              About Us
            </p>
            <h2 className="text-section-heading text-navy mb-5">
              Built on Experience. Driven by Results.
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              ConsultCo started from a simple belief: good advice should be honest, practical, and
              actually useful. We work closely with you, not at a distance, so we understand your
              business before we say anything about it.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              Our team has worked across strategy, operations, and growth at companies of all sizes.
              We bring that experience to you without the overhead of a big firm.
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-8">
              We are straightforward with our clients. If something is not working, we say so.
              If there is a better way, we will find it together.
            </p>
            <Link href="/services/" className="btn-secondary">
              Meet the Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
