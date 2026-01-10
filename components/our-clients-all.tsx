'use client';

export default function OurClientsAll() {
  const clients = [
    {
      name: 'TechCorp Industries',
      logo: '/dover-logo.webp',
    },
    {
      name: 'Urban Development',
      logo: '/nnpc-logo.png',
    },
    {
      name: 'Energy Solutions',
      logo: '/ejovi-logo.png',
    },
    {
      name: 'Global Logistics',
      logo: '/petro-marine-logo.png',
    },
    {
      name: 'HyperCity',
      logo: '/hypercity-logo.jpg',
    },
    {
      name: 'Market Square',
      logo: '/market-square-logo.png',
    },
    {
      name: 'ENS',
      logo: '/ens-logo.png',
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex w-full flex-col sm:flex-row justify-center items-center mb-12">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            Our Clients
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 mx-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
