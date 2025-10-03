import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, Award, Users, Heart, Clock } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Devotion & Authenticity',
      description:
        'We perform every ritual with genuine devotion and maintain the authentic traditions passed down through generations.',
    },
    {
      icon: Users,
      title: 'Family First',
      description:
        'Understanding that each family is unique, we customize our services to match your specific needs and traditions.',
    },
    {
      icon: Clock,
      title: 'Reliability & Punctuality',
      description:
        'We respect your time and ensure all ceremonies begin and end as scheduled, maintaining the sacred muhurat.',
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description:
        'From the quality of our samagri to the expertise of our pandits, we maintain the highest standards in everything we do.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-[#4A3728] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-amber-200 font-medium mb-6 text-sm">
              Our Sacred Journey
            </p>

            <h1 className="font-serif text-4xl md:text-6xl font-bold text-amber-100 mb-6 leading-tight">
              Bringing Sacred{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                Traditions
              </span>{' '}
              to Your Home
            </h1>

            <p className="font-sans text-xl text-amber-200 leading-relaxed mb-8">
              For over a decade, we have been blessed to serve hundreds of
              families, making their sacred ceremonies memorable and spiritually
              fulfilling.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  500+
                </div>
                <div className="text-amber-200">Happy Families</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  10+
                </div>
                <div className="text-amber-200">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">
                  50+
                </div>
                <div className="text-amber-200">Types of Pujas</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Story Content */}
              <div>
                <SectionHeader title="Our" titleHighlight="Story" />

                <div className="space-y-6 font-sans text-orange-800 leading-relaxed -mt-10">
                  <p>
                    Divine Doorstep was born from a simple vision: to make
                    sacred Hindu traditions accessible to every family,
                    regardless of their knowledge of complex rituals or
                    availability of authentic materials.
                  </p>
                  <p>
                    Founded by a family of devoted practitioners, we noticed how
                    many families wanted to perform traditional pujas but
                    struggled with the logistics - finding qualified pandits,
                    sourcing authentic samagri, understanding proper procedures,
                    and managing the setup and cleanup.
                  </p>
                  <p>
                    We decided to create a service that would handle all these
                    aspects, allowing families to focus on what truly matters:
                    connecting with the divine and seeking blessings for their
                    loved ones.
                  </p>
                  <p>
                    Today, we're proud to have served over 500 families across
                    the region, bringing the sacred beauty of Hindu traditions
                    directly to their homes with complete authenticity and
                    reverence.
                  </p>
                </div>
              </div>

              {/* Visual Element */}
              <div className="relative group overflow-hidden rounded-3xl shadow-xl">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/63f5118af_GeneratedImageSeptember272025-1_05AM.png"
                  alt="Sacred Puja Ceremony"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gradient-to-br from-orange-100 to-yellow-50">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Our"
            titleHighlight="Values"
            subtitle="The principles that guide every ceremony we perform"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white border-l-4 border-orange-400 hover:border-yellow-400"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-full flex items-center justify-center diya-glow group-hover:shadow-2xl transition-all duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-orange-900 mb-4 group-hover:text-orange-700 transition-colors">
                    {value.title}
                  </h3>
                  <p className="font-sans text-orange-700 leading-relaxed text-sm">
                    {value.description}
                  </p>
                  <div className="mt-6 flex justify-center">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-orange-400 to-yellow-400 group-hover:w-12 transition-all duration-300"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#5f4837]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-amber-100 mb-4">
            Ready to Experience{' '}
            <span className="text-yellow-200">Divine Convenience?</span>
          </h2>
          <p className="font-sans text-xl text-amber-200 mb-8 max-w-2xl mx-auto">
            Let us take care of all the arrangements while you focus on the
            spiritual experience
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>
    </div>
  );
}