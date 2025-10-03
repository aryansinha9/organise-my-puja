import React from 'react';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle } from 'lucide-react';

export default function CallToActionBanner() {
  return (
    <section className="py-16 bg-[#5f4837] relative overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-100 mb-4">
              Thinking of Organizing a{' '}
              <span className="text-yellow-200">Puja?</span>
            </h2>
            <p className="font-sans text-xl text-amber-200 leading-relaxed">
              Let us handle all the arrangements while you focus on seeking
              divine blessings for your family
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-yellow-400 text-stone-800 hover:bg-yellow-300 font-bold px-8 py-4 text-lg diya-glow"
              onClick={() => window.open('tel:0403035358')}
            >
              <Phone className="w-5 h-5 mr-3" />
              Call 0403 035 358
            </Button>

            <Button
              size="lg"
              className="w-full sm:w-auto bg-amber-100 text-stone-800 hover:bg-white hover:text-stone-600 font-bold px-8 py-4 text-lg"
              onClick={() => window.open('https://wa.me/0403035358')}
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              WhatsApp Us
            </Button>
          </div>

          <div className="mt-8 text-amber-200 font-sans">
            <p className="text-sm">
              Available 7 days a week • Immediate response • Free consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}