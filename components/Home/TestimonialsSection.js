import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';
import { motion } from 'framer-motion';

export default function TestimonialsSection({ testimonials, isLoading }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!testimonials || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials]);

  const handlePrev = () => {
    if (!testimonials || testimonials.length === 0) return;
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    if (!testimonials || testimonials.length === 0) return;
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          delay: i * 0.1 + 0.5,
        }}
      >
        <Star
          className={`w-4 h-4 ${
            i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      </motion.div>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-amber-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="What Families"
          titleHighlight="Say About Us"
          subtitle="Real experiences from families who trusted us with their sacred ceremonies"
        />

        <div className="relative max-w-6xl mx-auto">
          {isLoading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array(3)
                .fill(0)
                .map((_, index) => (
                  <Card key={index} className="p-6">
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Skeleton className="h-4 w-20" />
                      </div>
                      <Skeleton className="h-20 w-full" />
                      <div className="flex items-center gap-3">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <div className="space-y-1">
                          <Skeleton className="h-4 w-20" />
                          <Skeleton className="h-3 w-16" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          ) : testimonials && testimonials.length > 0 ? (
            <>
              <div className="overflow-hidden relative h-[320px]">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id || index}
                    className="absolute w-full h-full p-2"
                    initial={{
                      x: `${(index - currentIndex) * 100}%`,
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      x: `${(index - currentIndex) * 100}%`,
                      opacity: 1,
                      scale: 1,
                    }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: 'spring', stiffness: 100, damping: 20 }}
                  >
                    <Card className="group h-full w-full hover:shadow-xl transition-all duration-300 bg-white border-l-4 border-orange-400 hover:border-yellow-400">
                      <CardContent className="p-6 h-full flex flex-col justify-between">
                        <div>
                          <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-1">
                              {renderStars(testimonial.rating)}
                            </div>
                            <Quote className="w-8 h-8 text-orange-300 opacity-50" />
                          </div>

                          <p className="font-sans text-orange-800 leading-relaxed mb-6 italic line-clamp-4">
                            "{testimonial.review_text}"
                          </p>
                        </div>

                        <div className="flex items-center gap-3 mt-auto">
                          <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-full flex items-center justify-center text-white font-bold">
                            {testimonial.customer_name.charAt(0)}
                          </div>
                          <div>
                            <p className="font-semibold text-orange-900">
                              {testimonial.customer_name}
                            </p>
                            {testimonial.puja_performed && (
                              <p className="text-sm text-orange-600">
                                {testimonial.puja_performed}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-orange-100 transition z-20"
              >
                <ChevronLeft className="w-6 h-6 text-orange-500" />
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-orange-100 transition z-20"
              >
                <ChevronRight className="w-6 h-6 text-orange-500" />
              </button>

              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      currentIndex === index
                        ? 'bg-orange-500 w-6'
                        : 'bg-orange-200'
                    }`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="text-6xl mb-4">🙏</div>
              <p className="font-sans text-orange-600 text-lg">
                Be the first to share your experience!
              </p>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-orange-700 mb-4">
            Had a great experience? We'd love to hear from you!
          </p>
          <div className="text-4xl flex justify-center gap-1">
            {'⭐⭐⭐⭐⭐'.split('').map((star, i) => (
              <motion.span
                key={i}
                whileHover={{ scale: 1.2, color: '#FFC107' }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {star}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}