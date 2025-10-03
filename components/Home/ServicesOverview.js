import React from 'react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function ServicesOverview() {
  const services = [
    {
      title: 'Expert Pandit Ji',
      description: 'Experienced priests with authentic knowledge',
    },
    {
      title: 'Premium Puja Samagri',
      description: 'Highest quality ritual materials and offerings',
    },
    {
      title: 'Complete Setup & Decoration',
      description: 'Beautiful mandap and altar arrangements',
    },
    {
      title: 'Muhurat Guidance',
      description: 'Auspicious timing consultation',
    },
    {
      title: 'Catering & Prasad',
      description: 'Traditional vegetarian meals and blessed food',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="Sacred Rituals,"
          titleHighlight="Simplified"
          subtitle="We handle every aspect of your puja so you can focus on the spiritual experience"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-orange-400 hover:border-yellow-400 hover:scale-105"
            >
              <div className="text-center">
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/7e058f2e7_GeneratedImageSeptember272025-12_44AM-Photoroom.png"
                    alt="Sacred Service Icon"
                    className="h-20 w-20 mx-auto"
                  />
                </div>
                <h3 className="font-serif text-xl font-semibold text-orange-900 mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-orange-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 flex justify-center">
                <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}