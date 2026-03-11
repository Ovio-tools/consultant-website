import OpenModalButton from '../home/OpenModalButton'

export default function CTABand() {
  return (
    <section className="bg-navy py-16 lg:py-20">
      <div className="container-site text-center">
        <h2 className="text-section-heading text-white mb-4">Ready to Get Started?</h2>
        <p className="text-base text-white/70 max-w-md mx-auto mb-8 leading-relaxed">
          Let&apos;s have a conversation about your goals. A discovery call costs nothing and could
          change everything.
        </p>
        <OpenModalButton className="btn-inverted">Book a Consultation</OpenModalButton>
      </div>
    </section>
  )
}
