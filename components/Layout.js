import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Phone, MessageCircle, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const router = useRouter();

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Pujas', path: '/Pujas' },
    { name: 'About Us', path: '/About' },
    { name: 'Contact', path: '/Contact' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <style>{`
        /* We are keeping these global styles here for simplicity, as in the original file */
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&display=swap');
        
        :root { --saffron: #E65100; --golden: #FFC107; --bronze: #8D6E63; --maroon: #B71C1C; --warm-white: #FFF8E1; --dark-brown: #4A3728; }
        .font-serif { font-family: 'Playfair Display', serif; }
        .font-sans { font-family: 'Inter', sans-serif; }
        
        @keyframes diya-flicker { 0%, 100% { text-shadow: 0 0 5px var(--golden), 0 0 10px var(--golden), 0 0 15px #ff9800; filter: drop-shadow(0 0 2px var(--golden)); } 50% { text-shadow: 0 0 8px var(--golden), 0 0 15px var(--golden), 0 0 25px #ff9800; filter: drop-shadow(0 0 5px var(--golden)); } }
        .diya-icon-flicker { animation: diya-flicker 3s ease-in-out infinite; }
        .diya-glow { box-shadow: 0 0 10px rgba(255, 193, 7, 0.2); transition: all 0.3s ease; }
        .diya-glow:hover { box-shadow: 0 0 20px rgba(255, 193, 7, 0.5), 0 0 40px rgba(255, 167, 38, 0.3); transform: scale(1.02); }
        .mandala-border { border-image: linear-gradient(45deg, var(--saffron), var(--golden), var(--saffron)) 1; }
        .sacred-gradient { background: linear-gradient(135deg, var(--saffron) 0%, var(--bronze) 100%); }
        .logo-glow { filter: drop-shadow(0 0 10px rgba(255, 193, 7, 0.3)); transition: all 0.3s ease; }
        .logo-glow:hover { filter: drop-shadow(0 0 15px rgba(255, 193, 7, 0.5)); transform: scale(1.05); }
      `}</style>

      <header className="sticky top-0 z-50 bg-[#4A3728] shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center space-x-4">
              <img
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/d9ef45e8e_GeneratedImageSeptember262025-3_51PM-Photoroom.png"
                alt="Organise My Puja Logo"
                className="h-20 w-20 logo-glow"
              />
              <div className="hidden md:block">
                <h1 className="font-serif text-amber-100 text-xl font-bold">
                  Organise My Puja
                </h1>
                <p className="text-amber-200 text-xs">
                  Sacred Services at Your Doorstep
                </p>
              </div>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className={`font-sans text-sm font-medium transition-all duration-300 hover:text-yellow-300 ${
                    router.pathname === item.path
                      ? 'text-yellow-300 border-b-2 border-yellow-300 pb-1'
                      : 'text-amber-100'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                className="bg-transparent border-amber-200 text-amber-200 hover:bg-amber-200 hover:text-stone-800"
                onClick={() => window.open('tel:0403035358')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Us
              </Button>
              <Button
                size="sm"
                className="bg-yellow-400 text-stone-800 hover:bg-yellow-300 diya-glow"
                onClick={() => window.open('https://wa.me/0403035358')}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-amber-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-amber-800">
              <nav className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className={`font-sans text-sm font-medium px-4 py-2 rounded-lg transition-colors ${
                      router.pathname === item.path
                        ? 'bg-amber-700 text-amber-100'
                        : 'text-amber-100 hover:bg-amber-800'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col space-y-2 px-4 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="bg-transparent border-amber-200 text-amber-200"
                    onClick={() => window.open('tel:0403035358')}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    0403 035 358
                  </Button>
                  <Button
                    size="sm"
                    className="bg-yellow-400 text-stone-800 hover:bg-yellow-300"
                    onClick={() => window.open('https://wa.me/0403035358')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-[#4A3728] text-amber-100">
        <div className="container mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68d6277441b52d9d15d56c78/d9ef45e8e_GeneratedImageSeptember262025-3_51PM-Photoroom.png"
                  alt="Organise My Puja Logo"
                  className="h-20 w-20 logo-glow"
                />
                <h3 className="font-serif text-xl font-bold text-amber-100">
                  Organise My Puja
                </h3>
              </div>
              <p className="text-amber-200 text-sm leading-relaxed">
                Sacred tradition, simplified with modern convenience — at your
                doorstep.
              </p>
            </div>
            <div>
              <h4 className="font-sans text-amber-100 font-semibold mb-4">
                Quick Links
              </h4>
              <nav className="flex flex-col space-y-2">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.path}
                    className="text-amber-200 hover:text-yellow-300 text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <h4 className="font-sans text-amber-100 font-semibold mb-4">
                Contact Us
              </h4>
              <div className="space-y-2 text-amber-200 text-sm">
                <p>0403 035 358</p>
                <p>WhatsApp Available</p>
                <p>info@organisemypuja.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-800 mt-8 pt-6 text-center">
            <p className="text-amber-300 text-sm">
              © 2024 Organise My Puja. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}