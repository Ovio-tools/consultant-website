import ServicesHero from '@/components/services/ServicesHero'
import ServicesGrid from '@/components/services/ServicesGrid'
import ProcessOverview from '@/components/services/ProcessOverview'
import CTABand from '@/components/services/CTABand'

export const metadata = {
  title: 'Services',
  description:
    'Explore ConsultCo\'s consulting services: Business Strategy, Operational Efficiency, and Growth Advisory. See how we work and book a consultation.',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessOverview />
      <CTABand />
    </>
  )
}
