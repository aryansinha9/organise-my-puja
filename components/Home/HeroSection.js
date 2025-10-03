import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, Star } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="relative flex items-start justify-center overflow-hidden pt-20"
      style={{
        height: '150vh',
        backgroundImage: `url('/background.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <style>{`
          @keyframes shootingStar1 { 0% { top: -2px; left: -100px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: -2px; left: 100%; opacity: 0; } }
          @keyframes shootingStar2 { 0% { top: -100px; right: -2px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; right: -2px; opacity: 0; } }
          @keyframes shootingStar3 { 0% { bottom: -2px; right: -100px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { bottom: -2px; left: 100%; opacity: 0; } }
          @keyframes shootingStar4 { 0% { bottom: -100px; left: -2px; opacity: 0; } 10% { opacity: 1; } 90% { opacity: 1; } 100% { top: 100%; left: -2px; opacity: 0; } }
          .shooting-star-1 { position: absolute; width: 100px; height: 2px; background: linear-gradient(90deg, transparent, #FFD700, #FFA500, transparent); animation: shootingStar1 8s linear infinite; filter: blur(1px); box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700; }
          .shooting-star-2 { position: absolute; width: 2px; height: 100px; background: linear-gradient(180deg, transparent, #FFD700, #FFA500, transparent); animation: shootingStar2 10s linear infinite 2s; filter: blur(1px); box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700; }
          .shooting-star-3 { position: absolute; width: 100px; height: 2px; background: linear-gradient(-90deg, transparent, #FFD700, #FFA500, transparent); animation: shootingStar3 9s linear infinite 4s; filter: blur(1px); box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700; }
          .shooting-star-4 { position: absolute; width: 2px; height: 100px; background: linear-gradient(-180deg, transparent, #FFD700, #FFA500, transparent); animation: shootingStar4 11s linear infinite 6s; filter: blur(1px); box-shadow: 0 0 10px #FFD700, 0 0 20px #FFD700, 0 0 30px #FFD700; }
      `}</style>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="shooting-star-1"></div>
        <div className="shooting-star-2"></div>
        <div className="shooting-star-3"></div>
        <div className="shooting-star-4"></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 via-40% to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <p className="text-amber-200 font-medium mb-6 text-sm">
              Sacred Tradition, Modern Convenience
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              <span className="text-white drop-shadow-lg">
                Convenience at Your
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-orange-300 drop-shadow-2xl">
                Doorstep
              </span>
            </h1>
            <p className="font-sans text-xl md:text-2xl text-amber-100 mb-4 leading-relaxed drop-shadow-md">
              A One-Stop Solution for All Puja Needs
            </p>
            <p className="font-sans text-lg text-amber-200 mb-8 drop-shadow-sm">
              Professional Pandits • Premium Samagri • Complete Setup •
              Authentic Rituals
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/Pujas">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-yellow-400 to-orange-400 text-orange-900 hover:from-yellow-300 hover:to-orange-300 font-semibold px-8 py-4 text-lg diya-glow shadow-xl"
              >
                Book a Puja
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto border-2 border-amber-300 text-amber-100 bg-black/20 hover:bg-amber-300 hover:text-orange-900 font-semibold px-8 py-4 text-lg backdrop-blur-sm"
              onClick={() => window.open('tel:0403035358')}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-amber-200">
            <div className="flex items-center gap-3">
              <div className="flex text-yellow-400 drop-shadow-md">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="font-medium text-amber-100">4.9/5 Rating</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-amber-400"></div>
            <div className="font-medium text-amber-100">500+ Happy Families</div>
            <div className="hidden sm:block w-px h-6 bg-amber-400"></div>
            <div className="font-medium text-amber-100">100% Authentic</div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-16 inset-x-0 mx-auto w-full max-w-3xl z-10 pointer-events-none"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
      >
        <img
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/c23113dc6_GeneratedImageSeptember262025-4_45PM-Photoroom.png"
          alt="Ganesh and Lakshmi Deities"
          className="w-full h-auto"
        />
      </motion.div>
    </section>
  );
}