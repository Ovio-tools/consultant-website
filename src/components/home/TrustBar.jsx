import Image from 'next/image'

const logos = [
  { name: 'Acme Corp', width: 120, height: 40 },
  { name: 'Vantage', width: 110, height: 40 },
  { name: 'Pinnacle', width: 115, height: 40 },
  { name: 'NovaTech', width: 120, height: 40 },
  { name: 'Globex', width: 100, height: 40 },
]

export default function TrustBar() {
  return (
    <section className="bg-bg-light py-12">
      <div className="container-site">
        <p className="text-xs text-text-secondary font-medium uppercase tracking-widest text-center mb-6">
          Trusted By
        </p>

        {/* Desktop: flex row; Mobile: 2-column grid */}
        <div className="hidden sm:flex items-center justify-center gap-8 lg:gap-12 flex-wrap">
          {logos.map((logo) => (
            <Image
              key={logo.name}
              src={`https://placehold.co/${logo.width}x${logo.height}/D1D5DB/9CA3AF?text=${encodeURIComponent(logo.name)}`}
              alt={logo.name}
              width={logo.width}
              height={logo.height}
              className="grayscale opacity-60 hover:opacity-90 transition-opacity duration-200 h-10 w-auto object-contain"
              loading="lazy"
            />
          ))}
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="sm:hidden overflow-x-auto pb-2 -mx-4 px-4">
          <div className="flex items-center gap-6 w-max">
            {logos.map((logo) => (
              <Image
                key={logo.name}
                src={`https://placehold.co/${logo.width}x${logo.height}/D1D5DB/9CA3AF?text=${encodeURIComponent(logo.name)}`}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="grayscale opacity-60 h-10 w-auto object-contain flex-shrink-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
