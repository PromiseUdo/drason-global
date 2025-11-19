'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="bg-[#890c25] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center space-y-8">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
            Any Further Questions?
          </h2>

          {/* Subtext */}
          <p className=" text-blue-100 max-w-3xl leading-relaxed">
            If you have any technical questions that need answering, would like
            to arrange to speak to a sales advisor or book a feasibility study.
          </p>

          {/* CTA Button */}
          <Button className="group inline-flex items-center gap-3 bg-white hover:bg-gray-300 font-semibold transition-all duration-300 text-[#890c25]">
            Contact Us
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
