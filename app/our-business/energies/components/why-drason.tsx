'use client';

import Image from 'next/image';

const whyDrasonPoints = [
  {
    title: 'Safety First',
    description:
      'Zero lost-time incidents in 5+ years. IRATA & OSHA certified teams.',
  },
  {
    title: 'Expert Team',
    description:
      '200+ certified technicians with 15+ years average experience.',
  },
  {
    title: 'Rapid Response',
    description: '24/7 emergency services. On-site within 4 hours, 98% uptime.',
  },
  {
    title: 'Cost Efficiency',
    description:
      'Fixed-price contracts save clients 20–30% vs. traditional methods.',
  },
  {
    title: 'Sustainable Practices',
    description:
      'Eco-friendly coatings & waste reduction. ISO 14001 certified.',
  },
  {
    title: 'Proven Track Record',
    description: 'Served 50+ Fortune 500 clients. 95% repeat business rate.',
  },
];

export function WhyDrasonEnergies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Hero Image */}
          <div className="relative h-96 lg:h-[600px]  overflow-hidden shadow-2xl">
            <Image
              src="/why-drason.webp"
              alt="Drason Energies team delivering precision industrial maintenance"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Why Drason Energies?
              </h2>
              <p className=" text-gray-600 leading-relaxed">
                Partner with the industrial services leader delivering unmatched
                safety, expertise, and innovation.
              </p>
            </div>

            {/* Clean Bullet List */}
            <ul className="space-y-5">
              {whyDrasonPoints.map((point, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 ">
                      {point.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{point.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
