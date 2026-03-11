import Image from 'next/image'
import OpenModalButton from '../home/OpenModalButton'

const services = [
  {
    id: 'business-strategy',
    title: 'Business Strategy',
    reversed: false,
    bg: 'bg-white',
    image: { src: 'https://placehold.co/600x400/E5E7EB/9CA3AF?text=Add+a+relevant+photo+here', alt: 'Add a relevant photo for this service here' },
    description: [
      'Good strategy is not a thick document that sits on a shelf. It is a clear answer to a hard question: given where we are right now, what is the best use of our time and resources?',
      'We work with you to figure that out. We look at your market, your competition, and your internal strengths, then help you make the focused decisions that actually move things forward.',
    ],
    deliverables: [
      'Competitive landscape and market positioning analysis',
      'Three-year strategic roadmap with prioritised initiatives',
      'Leadership alignment sessions and board-ready presentations',
    ],
  },
  {
    id: 'operational-efficiency',
    title: 'Operational Efficiency',
    reversed: true,
    bg: 'bg-bg-light',
    image: { src: 'https://placehold.co/600x400/D1D5DB/6B7280?text=Add+a+relevant+photo+here', alt: 'Add a relevant photo for this service here' },
    description: [
      'Most businesses do not have a strategy problem. They have an execution problem. Work piles up, handoffs break down, and good ideas get stuck because the system cannot keep up.',
      'We help you find where that is happening and fix it. We work alongside your team to redesign what needs redesigning, without creating more complexity in the process.',
    ],
    deliverables: [
      'End-to-end process mapping and bottleneck identification',
      'Redesigned workflows with clear ownership and metrics',
      'Implementation support and team change management',
    ],
  },
  {
    id: 'growth-advisory',
    title: 'Growth Advisory',
    reversed: false,
    bg: 'bg-white',
    image: { src: 'https://placehold.co/600x400/E5E7EB/9CA3AF?text=Add+a+relevant+photo+here', alt: 'Add a relevant photo for this service here' },
    description: [
      'Growth is easy to want and hard to do well. We have seen businesses scale too fast, too slow, or in the wrong direction. The difference is usually having someone in your corner who has been through it before.',
      'We help you work out the right moves for your stage: whether that is entering a new market, preparing for fundraising, or doubling down on what is already working.',
    ],
    deliverables: [
      'Growth opportunity assessment and prioritisation framework',
      'Go-to-market strategy for new products or markets',
      'Investor-ready narrative and financial modelling support',
    ],
  },
]

export default function ServicesGrid() {
  return (
    <section id="services-detail" className="section-padding">
      <div className="container-site">
        <div className="space-y-0 -mx-4 sm:-mx-6 lg:-mx-8">
          {services.map((service) => (
            <div key={service.id} id={service.id} className={`${service.bg} px-4 sm:px-6 lg:px-8 py-12 lg:py-16`}>
              <div
                className={`max-w-site mx-auto flex flex-col gap-10 lg:gap-16 ${
                  service.reversed ? 'md:flex-row-reverse' : 'md:flex-row'
                } md:items-center`}
              >
                {/* Text content */}
                <div className="md:w-1/2">
                  <h2 className="text-section-heading text-navy mb-5">{service.title}</h2>
                  {service.description.map((para, i) => (
                    <p key={i} className="text-base text-text-secondary leading-relaxed mb-4">
                      {para}
                    </p>
                  ))}
                  <ul className="mt-5 space-y-2.5 mb-7">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-base text-text-primary">
                        <svg
                          width="18"
                          height="18"
                          fill="none"
                          stroke="#3B82F6"
                          strokeWidth="2.5"
                          viewBox="0 0 24 24"
                          className="flex-shrink-0 mt-0.5"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <OpenModalButton className="btn-secondary">Get in Touch</OpenModalButton>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={600}
                    height={400}
                    className="rounded-card shadow-card w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
