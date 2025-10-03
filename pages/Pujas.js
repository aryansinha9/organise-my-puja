import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Puja } from '@/Entities/all';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Search, Filter, Star, Clock } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function Pujas() {
  const [pujas, setPujas] = useState([]);
  const [filteredPujas, setFilteredPujas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

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

  useEffect(() => {
    loadPujas();
  }, []);

  const filterPujas = React.useCallback(() => {
    let filtered = [...pujas];
    if (searchTerm) {
      filtered = filtered.filter(
        (puja) =>
          puja.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          puja.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (categoryFilter !== 'all') {
      filtered = filtered.filter((puja) => puja.category === categoryFilter);
    }
    if (priceFilter !== 'all') {
      if (priceFilter === 'low') {
        filtered = filtered.filter((puja) => puja.price < 100);
      } else if (priceFilter === 'medium') {
        filtered = filtered.filter(
          (puja) => puja.price >= 100 && puja.price < 300
        );
      } else if (priceFilter === 'high') {
        filtered = filtered.filter((puja) => puja.price >= 300);
      }
    }
    setFilteredPujas(filtered);
  }, [pujas, searchTerm, categoryFilter, priceFilter]);

  useEffect(() => {
    filterPujas();
  }, [filterPujas]);

  const loadPujas = async () => {
    try {
      const data = await Puja.list('-created_date');
      setPujas(data);
    } catch (error) {
      console.error('Error loading pujas:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50 py-12">
      <div className="container mx-auto px-4">
        <SectionHeader
          badgeText="Sacred Ceremonies"
          title="Our"
          titleHighlight="Puja Services"
          subtitle="Choose from our collection of authentic vedic rituals performed by experienced pandits"
        />

        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border-2 border-orange-100">
          <div className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 w-5 h-5" />
              <Input
                placeholder="Search pujas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-orange-200 focus:border-orange-400"
              />
            </div>

            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="border-orange-200 focus:border-orange-400">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="festival">Festival</SelectItem>
                <SelectItem value="personal">Personal</SelectItem>
                <SelectItem value="business">Business</SelectItem>
                <SelectItem value="healing">Healing</SelectItem>
                <SelectItem value="protection">Protection</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger className="border-orange-200 focus:border-orange-400">
                <SelectValue placeholder="All Prices" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $100</SelectItem>
                <SelectItem value="medium">$100 - $300</SelectItem>
                <SelectItem value="high">$300+</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center justify-center md:justify-start text-orange-700 font-medium">
              <Filter className="w-5 h-5 mr-2" />
              {filteredPujas.length} Pujas Found
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {isLoading ? (
            Array(8)
              .fill(0)
              .map((_, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="p-0">
                    <Skeleton className="h-32 w-full" />
                  </CardHeader>
                  <CardContent className="p-6 space-y-3">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-2/3" />
                    <Skeleton className="h-10 w-full" />
                  </CardContent>
                </Card>
              ))
          ) : filteredPujas.length > 0 ? (
            filteredPujas.map((puja) => {
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
                        <span className="text-amber-900 font-bold text-lg bg-amber-100 px-3 py-1 rounded-lg shadow-lg">
                          {puja.price_display || `$${puja.price}`}
                        </span>
                      </div>
                      {puja.popular && (
                        <div className="absolute top-2 left-2">
                          <span className="text-white font-bold px-3 py-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg text-xs">
                            Popular
                          </span>
                        </div>
                      )}
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
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-2.5 diya-glow">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })
          ) : (
            <div className="col-span-full text-center py-20">
              <Filter className="mx-auto w-16 h-16 text-orange-500 mb-6" />
              <h3 className="font-serif text-2xl text-orange-900 mb-4">
                No Pujas Found
              </h3>
              <p className="font-sans text-orange-700 mb-6">
                Try adjusting your search criteria or browse all our services
              </p>
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setCategoryFilter('all');
                  setPriceFilter('all');
                }}
                className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white"
              >
                Show All Pujas
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}