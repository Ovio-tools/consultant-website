const steps = [
  {
    number: '1',
    title: 'Discovery Call',
    description: 'We start with a candid conversation about your goals, challenges, and where you want to be.',
  },
  {
    number: '2',
    title: 'Research & Analysis',
    description: 'We dig into your business, your market, and the data to build a clear picture of the landscape.',
  },
  {
    number: '3',
    title: 'Strategy Development',
    description: 'Working closely with your team, we develop a tailored roadmap with clear priorities and actions.',
  },
  {
    number: '4',
    title: 'Implementation Support',
    description: 'We stay engaged through execution: coaching, troubleshooting, and keeping momentum going.',
  },
]

export default function ProcessOverview() {
  return (
    <section className="section-padding bg-bg-light">
      <div className="container-site">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-section-heading text-navy">How We Work</h2>
          <p className="mt-4 text-base text-text-secondary max-w-lg mx-auto leading-relaxed">
            A clear, collaborative process from first conversation to ongoing support.
          </p>
        </div>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:block relative">
          <div className="absolute top-5 left-[calc(12.5%)] right-[calc(12.5%)] h-px bg-border-default" aria-hidden="true" />
          <ol className="grid grid-cols-4 gap-4 relative">
            {steps.map((step) => (
              <li key={step.number} className="flex flex-col items-center text-center px-4">
                <div className="relative z-10 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-sm mb-4 flex-shrink-0">
                  {step.number}
                </div>
                <h3 className="text-base font-semibold text-navy mb-2">{step.title}</h3>
                <p className="text-base text-text-secondary leading-relaxed">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Mobile: vertical stepper */}
        <ol className="md:hidden relative pl-10">
          <div className="absolute left-[19px] top-5 bottom-5 w-px bg-border-default" aria-hidden="true" />
          {steps.map((step, i) => (
            <li key={step.number} className={`relative ${i < steps.length - 1 ? 'pb-8' : ''}`}>
              <div className="absolute -left-10 w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-semibold text-sm flex-shrink-0">
                {step.number}
              </div>
              <div className="pt-1.5">
                <h3 className="text-base font-semibold text-navy mb-1.5">{step.title}</h3>
                <p className="text-base text-text-secondary leading-relaxed">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
