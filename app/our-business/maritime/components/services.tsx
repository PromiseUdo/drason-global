'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function StackingCards() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);
  const [cardStates, setCardStates] = useState(Array(8).fill(0));
  const cards = [
    {
      title: 'Target Provision Supply',
      color: 'bg-blue-500',
      description:
        'We offer a wide range of fresh, high-quality provisions, including food, beverages, and other essential supplies 01 to cater to the needs of crew members and passengers.',
      image: '/supplies.jpeg',
    },
    {
      title: 'Bonded Stores',
      color: '#f26518',
      description:
        'Our bonded stores feature a diverse selection of dutyfree products, ensuring vessels have access to various items without the burden of customs duties.',
      image: '/cargo.webp',
    },
    {
      title: 'Deck & Engine Stores',
      color: 'bg-pink-500',
      description:
        'We provide deck and engine stores, including tools, spare parts, lubricants, and chemicals sourced from reputable manufacturers to maintain vessel functionality and performance.',
      image: '/tools.webp',
    },
    {
      title: 'Cabin Supplies',
      color: 'bg-red-500',
      description:
        'From linens to toiletries, we supply everything needed to ensure comfort and hygiene in cabins 04 and crew quarters',
      image: '/supplies2.jpeg',
    },
    {
      title: 'Safety Equipment',
      color: 'bg-orange-500',
      description:
        'We offer a comprehensive range of safety equipment and gear, including life jackets, fire extinguishers, and medical supplies, to uphold safety standards onboard.',
      image: '/safety.webp',
    },

    {
      title: 'Technical Support',
      color: 'bg-green-500',
      description:
        'Our team of experienced professionals provides technical support and assistance to vessels, ensuring prompt resolution of any operational challenges.',
      image: '/technical_support.webp',
    },
    {
      title: 'Marine Insurance',
      color: 'bg-teal-500',
      description:
        'We partner with reputable insurance providers to offer tailored marine insurance solutions, providing comprehensive coverage for cargo, vessels, and related liabilities.',
      image: '/insurance.webp',
    },
    {
      title: 'Consulting and Training',
      color: 'bg-indigo-500',
      description:
        'Our marine experts offer consulting services to help clients optimize vessel performance, comply with regulations, and improve safety standards. We also provide comprehensive training programs for crew members and shore personnel.',
      image: '/businessman.webp',
    },
    {
      title: 'Vessel Maintenance & Repair',
      color: '#f26518',
      description:
        'Our team of experienced marine technicians offers a wide range of maintenance and repair services, including engine overhauls, hull cleaning, painting, electrical system upgrades, and more.',
      image: '/vessel_maintenance.webp',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerTop = container.offsetTop;
      const containerHeight = container.offsetHeight;
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      const stickyTrigger = containerTop - 80;
      const stackingEnd = containerTop + containerHeight - windowHeight;

      // Handle sticky
      if (scrollY >= stickyTrigger && scrollY <= stackingEnd) {
        setIsSticky(true);

        const progress =
          (scrollY - stickyTrigger) / (stackingEnd - stickyTrigger);
        const cardProgress = progress * 8;

        const newStates = cards.slice(1).map((_, i) => {
          const cardStart = i;
          const cardEnd = i + 1;
          if (cardProgress < cardStart) return 0;
          if (cardProgress >= cardEnd) return 1;
          return (cardProgress - cardStart) / (cardEnd - cardStart);
        });

        setCardStates(newStates);
      } else if (scrollY > stackingEnd) {
        setIsSticky(false);
        setCardStates(Array(8).fill(1));
      } else {
        setIsSticky(false);
        setCardStates(Array(8).fill(0));
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CardComponent = ({
    card,
    index,
  }: {
    card: (typeof cards)[0];
    index: number;
  }) => (
    <div
      className="rounded-none shadow-md bg-white overflow-hidden"
      style={{
        width: '900px',
        height: '400px',
      }}
    >
      <div className="flex" style={{ width: '900px', height: '400px' }}>
        <div
          className={`${card.color} p-8 flex flex-col justify-center text-white`}
          style={{
            width: '450px',
            height: '400px',
            backgroundColor: card.color,
          }}
        >
          <h2 className="text-4xl font-bold mb-4 line-clamp-2">{card.title}</h2>
          <p className=" leading-relaxed opacity-95 ">{card.description}</p>
          {/* <div className="mt-6 text-sm opacity-75">
            {index + 1} / {cards.length}
          </div> */}
        </div>
        <div style={{ width: '450px', height: '400px' }}>
          <img
            src={card.image}
            alt={card.title}
            className="object-cover"
            style={{ width: '450px', height: '400px' }}
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white">
      <div
        ref={containerRef}
        className="relative"
        style={{
          height: `${cards.length * 90}vh`,
          paddingTop: '80px',
        }}
      >
        <div className="flex w-full  flex-col sm:flex-row justify-center items-center mb-6">
          <h2 className="text-3xl text-center md:text-4xl font-bold text-gray-900 font-heading mb-4 sm:mb-0">
            Our Services
          </h2>
        </div>

        <div className={`sticky top-24 left-0 right-0 flex justify-center`}>
          {/* First card */}
          <div className={isSticky ? 'absolute' : ''} style={{ zIndex: 1 }}>
            <CardComponent card={cards[0]} index={0} />
          </div>

          {/* Remaining stacked cards */}
          {cards.slice(1).map((card, i) => {
            const progress = cardStates[i];
            const scale = 0.95 + progress * 0.05;
            const translateY = (1 - progress) * 120;
            const stackOffset = progress >= 1 ? (i + 1) * 8 : 0;

            return (
              <div
                key={i}
                className="absolute rounded-none shadow-md bg-white transition-all duration-100 ease-out overflow-hidden"
                style={{
                  width: '900px',
                  height: '400px',
                  transform: `translateY(calc(${translateY}vh + ${stackOffset}px)) scale(${scale})`,
                  transition: 'transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)',
                  opacity: progress > 0 ? 1 : 0,
                  zIndex: i + 2,
                }}
              >
                <div
                  className="flex"
                  style={{ width: '900px', height: '400px' }}
                >
                  <div
                    className={`${card.color} p-8 flex flex-col justify-center text-white`}
                    style={{
                      width: '450px',
                      height: '400px',
                      backgroundColor: card.color,
                    }}
                  >
                    <h2 className="text-4xl font-bold mb-4 line-clamp-2">
                      {card.title}
                    </h2>
                    <p className=" leading-relaxed opacity-95">
                      {card.description}
                    </p>
                    {/* <div className="mt-6 text-sm opacity-75">
                      {i + 2} / {cards.length}
                    </div> */}
                  </div>
                  <div style={{ width: '450px', height: '400px' }}>
                    <img
                      src={card.image}
                      alt={card.title}
                      className="object-cover"
                      style={{ width: '450px', height: '400px' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
