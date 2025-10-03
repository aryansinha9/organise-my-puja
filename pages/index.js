import React, { useState, useEffect } from 'react';
import { Puja, Testimonial } from '@/Entities/all';
import HeroSection from '@/components/Home/HeroSection';
import ServicesOverview from '@/components/Home/ServicesOverview';
import PopularPujas from '@/components/Home/PopularPujas';
import TestimonialsSection from '@/components/Home/TestimonialsSection';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import CallToActionBanner from '@/components/Home/CallToActionBanner';

export default function Home() {
  const [popularPujas, setPopularPujas] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const [pujasData, testimonialsData] = await Promise.all([
        Puja.filter({ popular: true }, '-created_date', 4),
        Testimonial.list('-created_date', 6),
      ]);

      setPopularPujas(pujasData);
      setTestimonials(testimonialsData);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesOverview />
      <PopularPujas pujas={popularPujas} isLoading={isLoading} />
      <WhyChooseUs />
      <TestimonialsSection testimonials={testimonials} isLoading={isLoading} />
      <CallToActionBanner />
    </div>
  );
}