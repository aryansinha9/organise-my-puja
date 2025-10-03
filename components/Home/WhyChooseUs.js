import React from 'react';
import { Shield, Heart, Clock, Award } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Authentic Traditions',
      description:
        'We follow age-old vedic practices with complete authenticity and respect for sacred traditions.',
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description:
        'Every puja is customized to your specific needs and performed with devotion and attention to detail.',
    },
    {
      icon: Clock,
      title: 'Punctual Service',
      description:
        'We arrive on time and complete all rituals within the agreed timeframe, respecting your schedule.',
    },
    {
      icon: Award,
      title: 'Expert Pandits',
      description:
        'Our experienced priests have decades of knowledge and perform rituals with proper mantras and procedures.',
    },
  ];

  return (
    <section className="py-20 bg-[#4A3728] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-amber-100 mb-4">
            Why Families{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
              Trust Us
            </span>
          </h2>
          <p className="font-sans text-xl text-amber-200 max-w-3xl mx-auto leading-relaxed">
            "We take care of the rituals, so you can focus on the blessings."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center diya-glow group-hover:shadow-2xl transition-all duration-300">
                  <reason.icon className="w-10 h-10 text-stone-800" />
                </div>
              </div>

              <h3 className="font-serif text-xl font-bold text-amber-100 mb-4 group-hover:text-yellow-200 transition-colors">
                {reason.title}
              </h3>

              <p className="font-sans text-amber-200 leading-relaxed">
                {reason.description}
              </p>

              <div className="mt-6 flex justify-center">
                <div className="w-8 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-400 group-hover:w-12 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}