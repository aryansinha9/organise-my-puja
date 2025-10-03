import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Puja } from '@/Entities/Puja';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Clock,
  Tag,
  CheckCircle,
  Phone,
  MessageCircle,
  Star,
  Sparkles,
  BookOpen,
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';

const getImageForPuja = (puja) => {
  if (!puja || !puja.name) return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/d9ef45e8e_GeneratedImageSeptember262025-3_51PM-Photoroom.png';
  const lowerCaseName = puja.name.toLowerCase();
  if (lowerCaseName.includes('mundan')) {
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/4dffffb75_GeneratedImageOctober032025-12_31PM.png';
  }
  if (lowerCaseName.includes('navagraha')) {
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/f72433809_GeneratedImageOctober032025-12_29PM.png';
  }
  if (puja.image_url) return puja.image_url;
  if (lowerCaseName.includes('ganesh'))
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/e68c03a6b_GeneratedImageSeptember262025-5_29PM1.png';
  if (lowerCaseName.includes('lakshmi'))
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/9da8ed5d4_GeneratedImageSeptember262025-5_36PM.png';
  if (lowerCaseName.includes('diwali'))
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/c5197aeef_GeneratedImageSeptember262025-5_30PM.png';
  if (lowerCaseName.includes('griha pravesh'))
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/687bb74dc_GeneratedImageSeptember262025-5_34PM.png';
  if (lowerCaseName.includes('satyanarayan'))
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/d46812207_GeneratedImageSeptember262025-5_31PM.png';
  if (lowerCaseName.includes('navratri'))
    return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/c2bc9a024_GeneratedImageSeptember262025-5_33PM.png';
  return 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/d9ef45e8e_GeneratedImageSeptember262025-3_51PM-Photoroom.png';
};

const InfoCard = ({ icon: Icon, title, children }) => (
  <Card className="shadow-lg border-l-4 border-orange-400 hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-3 font-serif text-2xl text-orange-900">
        <Icon className="w-8 h-8 text-orange-500" />
        {title}
      </CardTitle>
    </CardHeader>
    <CardContent className="prose prose-orange max-w-none text-orange-800">
      {children}
    </CardContent>
  </Card>
);

export default function PujaDetailsPage() {
  const [puja, setPuja] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { id: pujaId } = router.query;

  useEffect(() => {
    if (pujaId) {
      loadPuja(pujaId);
    }
  }, [pujaId]);

  const loadPuja = async (id) => {
    setIsLoading(true);
    try {
      const data = await Puja.get(id);
      setPuja(data);
    } catch (error) {
      console.error('Error loading puja details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Skeleton className="h-12 w-1/2 mb-4" />
        <Skeleton className="h-6 w-3/4 mb-8" />
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Skeleton className="h-96 w-full rounded-lg" />
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
          <div className="space-y-8">
            <Skeleton className="h-48 w-full rounded-lg" />
            <Skeleton className="h-64 w-full rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (!puja) {
    return (
      <div className="text-center py-20 font-serif text-2xl text-orange-800">
        Puja not found.
      </div>
    );
  }

  const pujaImage = getImageForPuja(puja);
  const inclusions = puja.inclusions
    ? puja.inclusions.filter((item) => !item.toLowerCase().includes('call 0403'))
    : [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-100">
      <section className="relative py-20 bg-gradient-to-br from-orange-200 to-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-orange-900 mb-4">
            {puja.name}
          </h1>
          {puja.sanskrit_name && (
            <p className="font-serif text-2xl text-orange-700 italic mb-6">
              {puja.sanskrit_name}
            </p>
          )}
          <p className="font-sans text-xl text-orange-800 max-w-3xl mx-auto">
            {puja.description}
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          <main className="lg:col-span-2 space-y-12">
            <Card className="overflow-hidden shadow-xl rounded-2xl">
              <div className="bg-gray-100 p-4">
                <img
                  src={pujaImage}
                  alt={puja.name}
                  className="w-full h-auto object-contain max-h-[500px] rounded-lg"
                />
              </div>
            </Card>
            {puja.importance && (
              <InfoCard icon={Star} title="Importance">
                <ReactMarkdown>{puja.importance}</ReactMarkdown>
              </InfoCard>
            )}
            {puja.benefits && (
              <InfoCard icon={Sparkles} title="Benefits">
                <ReactMarkdown>{puja.benefits}</ReactMarkdown>
              </InfoCard>
            )}
            {puja.muhurat_info && (
              <InfoCard icon={BookOpen} title="Muhurat">
                <ReactMarkdown>{puja.muhurat_info}</ReactMarkdown>
              </InfoCard>
            )}
          </main>
          <aside className="space-y-8 sticky top-28 h-fit">
            <Card className="shadow-xl border-t-4 border-orange-500">
              <CardHeader>
                <CardTitle className="font-serif text-3xl text-orange-900">
                  Book This Puja
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-baseline gap-2">
                  <Tag className="w-6 h-6 text-orange-600" />
                  <span className="text-2xl font-bold text-orange-800">
                    {puja.price_display || `$${puja.price}`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-6 h-6 text-orange-600" />
                  <span className="text-lg text-orange-800">
                    {puja.duration}
                  </span>
                </div>
                <div className="space-y-3 pt-4 border-t">
                  <Button
                    size="lg"
                    className="w-full bg-yellow-400 text-stone-800 hover:bg-yellow-300 font-bold px-8 py-3 text-lg diya-glow"
                    onClick={() => window.open('tel:0403035358')}
                  >
                    <Phone className="w-5 h-5 mr-3" />
                    Call to Book
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-orange-400 text-orange-700 hover:bg-orange-100 hover:text-orange-800 font-bold px-8 py-3 text-lg"
                    onClick={() => window.open('https://wa.me/0403035358')}
                  >
                    <MessageCircle className="w-5 h-5 mr-3" />
                    Enquire on WhatsApp
                  </Button>
                </div>
              </CardContent>
            </Card>
            {inclusions && inclusions.length > 0 && (
              <Card className="shadow-lg border-l-4 border-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif text-2xl text-orange-800">
                    What's Included
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {inclusions.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                        <span className="text-orange-900">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}