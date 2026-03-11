import Link from 'next/link'

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#3B82F6" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Business Strategy',
    description:
      'We help you get clear on where you are, where you want to go, and what the smartest path forward looks like. No buzzwords, just a real plan you can act on.',
    link: '/services/#business-strategy',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#3B82F6" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Operational Efficiency',
    description:
      'If your team is working hard but things still feel slow or tangled, we can help. We find where the friction is and fix it so your business can keep up with your ambition.',
    link: '/services/#operational-efficiency',
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="#3B82F6" strokeWidth="1.75" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    title: 'Growth Advisory',
    description:
      'Whether you are going after a new market, raising investment, or just trying to scale what is already working, we give you an honest outside view and help you move with confidence.',
    link: '/services/#growth-advisory',
  },
]

export default function ServicesPreview() {
  return (
    <section id="services" className="section-padding bg-bg-light">
      <div className="container-site">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-section-heading text-navy">What We Do</h2>
          <p className="mt-4 text-base text-text-secondary max-w-xl mx-auto leading-relaxed">
            Three things we focus on, done properly. No sprawling service list, no vague promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-7 lg:p-8 rounded-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-navy mb-3">{service.title}</h3>
              <p className="text-base text-text-secondary leading-relaxed mb-5">
                {service.description}
              </p>
              <Link
                href={service.link}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-hover transition-colors duration-200"
              >
                Learn more
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
