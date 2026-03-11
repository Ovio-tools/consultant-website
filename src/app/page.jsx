import Hero from '@/components/home/Hero'
import ServicesPreview from '@/components/home/ServicesPreview'
import AboutPreview from '@/components/home/AboutPreview'
import Newsletter from '@/components/home/Newsletter'

export const metadata = {
  title: 'Strategic Business Consulting | ConsultCo',
  description:
    'ConsultCo partners with growing businesses to sharpen strategy, streamline operations, and unlock their next stage of growth. Book a free discovery call today.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <AboutPreview />
      <Newsletter />
    </>
  )
}
