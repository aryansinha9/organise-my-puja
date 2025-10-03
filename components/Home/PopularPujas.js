import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, Clock } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function PopularPujas({ pujas, isLoading }) {
  const getImageForPuja = (puja) => {
    const lowerCaseName = puja.name.toLowerCase();

    if (lowerCaseName.includes('mundan')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/4dffffb75_GeneratedImageOctober032025-12_31PM.png';
    }
    if (lowerCaseName.includes('navagraha')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/f72433809_GeneratedImageOctober032025-12_29PM.png';
    }
    if (puja.image_url) {
      return puja.image_url;
    }
    if (lowerCaseName.includes('ganesh') || lowerCaseName.includes('ganesha')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/e68c03a6b_GeneratedImageSeptember262025-5_29PM1.png';
    }
    if (lowerCaseName.includes('lakshmi')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/9da8ed5d4_GeneratedImageSeptember262025-5_36PM.png';
    }
    if (lowerCaseName.includes('diwali')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/c5197aeef_GeneratedImageSeptember262025-5_30PM.png';
    }
    if (lowerCaseName.includes('griha pravesh')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/687bb74dc_GeneratedImageSeptember262025-5_34PM.png';
    }
    if (lowerCaseName.includes('satyanarayan')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/d46812207_GeneratedImageSeptember262025-5_31PM.png';
    }
    if (lowerCaseName.includes('navratri')) {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/c2bc9a024_GeneratedImageSeptember262025-5_33PM.png';
    }
    if (lowerCaseName.includes('business') || puja.category === 'business') {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/0da228685_GeneratedImageSeptember262025-5_34PM.png';
    }
    if (lowerCaseName.includes('healing') || puja.category === 'healing') {
      return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/f3636598b_GeneratedImageSeptember262025-5_35PM.png';
    }
    return null;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4">
        <SectionHeader
          badgeText="Most Requested"
          title="Our Most"
          titleHighlight="Booked Pujas"
          subtitle="Join hundreds of families who trust us with their sacred ceremonies"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {isLoading ? (
            Array(4)
              .fill(0)
              .map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Skeleton className="h-36 w-full" />
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))
          ) : (
            pujas.map((puja) => {
              const pujaImage = getImageForPuja(puja);

              return (
                <Card
                  key={puja.id}
                  className="group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white border-2 border-transparent hover:border-orange-200"
                >
                  <CardHeader className="p-0 relative">
                    <div className="h-48 w-full relative overflow-hidden bg-gray-100">
                      {pujaImage ? (
                        <img
                          src={pujaImage}
                          alt={puja.name}
                          className="w-full h-full object-contain p-4"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-orange-200 to-yellow-200 flex flex-col items-center justify-center text-orange-700 p-4">
                          <img
                            src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/d9ef45e8e_GeneratedImageSeptember262025-3_51PM-Photoroom.png"
                            alt="Default Puja Logo"
                            className="w-24 h-24 opacity-50"
                          />
                        </div>
                      )}

                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                      <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-amber-900 font-bold text-lg bg-amber-100 px-2 py-1 rounded-lg shadow-lg">
                          {puja.price_display || `$${puja.price}`}
                        </span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4">
                    <div className="mb-3">
                      <h3 className="font-serif text-lg font-bold text-orange-900 mb-1 group-hover:text-orange-700 transition-colors">
                        {puja.name}
                      </h3>
                      {puja.sanskrit_name && (
                        <p className="font-serif text-orange-600 text-xs italic mb-2">
                          {puja.sanskrit_name}
                        </p>
                      )}
                      <p className="font-sans text-orange-700 text-sm leading-relaxed line-clamp-2">
                        {puja.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mb-3 text-xs text-orange-600">
                      {puja.duration && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{puja.duration}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        <span>4.9</span>
                      </div>
                    </div>
                    
                    <Link href={`/pujas/${puja.id}`}>
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-2.5">
                        Book Now
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })
          )}
        </div>

        <div className="text-center mt-12">
          <Link href="/Pujas">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white font-semibold px-8 py-4"
            >
              View All Pujas →
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}