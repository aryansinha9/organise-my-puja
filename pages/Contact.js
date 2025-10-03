import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Phone, MessageCircle, Mail, Clock, MapPin } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    puja_type: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hi! I'm interested in booking a puja service.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nPuja Type: ${formData.puja_type}\n\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/0403035358?text=${encodedMessage}`, '_blank');
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak directly with our team',
      action: '0403 035 358',
      link: 'tel:0403035358',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Quick responses via chat',
      action: 'Message Us',
      link: 'https://wa.me/0403035358',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'Send us detailed inquiries',
      action: 'info@divinedoorstep.com',
      link: 'mailto:info@divinedoorstep.com',
      color: 'from-orange-500 to-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      {/* Hero Section */}
      <section className="py-20 bg-[#4A3728] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-amber-200 font-medium mb-6 text-sm">
              Get In Touch
            </p>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-amber-100 mb-6 leading-tight">
              Let's Plan Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300">
                Sacred Ceremony
              </span>
            </h1>
            <p className="font-sans text-xl text-amber-200 leading-relaxed">
              We're here to help you organize the perfect puja experience for
              your family
            </p>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-xl border-2 border-orange-100">
                <CardHeader className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-t-lg">
                  <CardTitle className="font-serif text-2xl flex items-center gap-3">
                    Request a Consultation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label
                          htmlFor="name"
                          className="font-semibold text-orange-900"
                        >
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange('name', e.target.value)
                          }
                          className="border-orange-200 focus:border-orange-400 mt-2"
                          required
                        />
                      </div>
                      <div>
                        <Label
                          htmlFor="phone"
                          className="font-semibold text-orange-900"
                        >
                          Phone Number *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange('phone', e.target.value)
                          }
                          className="border-orange-200 focus:border-orange-400 mt-2"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="email"
                        className="font-semibold text-orange-900"
                      >
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange('email', e.target.value)
                        }
                        className="border-orange-200 focus:border-orange-400 mt-2"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="puja_type"
                        className="font-semibold text-orange-900"
                      >
                        Type of Puja *
                      </Label>
                      <Input
                        id="puja_type"
                        value={formData.puja_type}
                        onChange={(e) =>
                          handleInputChange('puja_type', e.target.value)
                        }
                        placeholder="e.g., Ganesh Puja, Diwali Puja, Housewarming..."
                        className="border-orange-200 focus:border-orange-400 mt-2"
                        required
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="message"
                        className="font-semibold text-orange-900"
                      >
                        Additional Details
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) =>
                          handleInputChange('message', e.target.value)
                        }
                        placeholder="Tell us about your requirements, preferred date, number of guests, etc."
                        className="border-orange-200 focus:border-orange-400 mt-2 h-32"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-semibold py-3 text-lg diya-glow"
                    >
                      <MessageCircle className="w-5 h-5 mr-3" />
                      Send via WhatsApp
                    </Button>
                  </form>

                  <div className="mt-6 p-4 bg-orange-50 rounded-lg">
                    <p className="text-sm text-orange-700 text-center">
                      Your information is secure and will only be used to contact
                      you about your puja requirements
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Methods & Info */}
            <div className="space-y-8">
              <div>
                <SectionHeader title="Get in" titleHighlight="Touch" />
                <div className="space-y-4 -mt-10">
                  {contactMethods.map((method, index) => (
                    <Card
                      key={index}
                      className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                      onClick={() => window.open(method.link, '_blank')}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}
                          >
                            <method.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-orange-900 group-hover:text-orange-700 transition-colors">
                              {method.title}
                            </h3>
                            <p className="text-orange-600 text-sm">
                              {method.description}
                            </p>
                          </div>
                          <div className="text-orange-700 font-medium">
                            {method.action}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-2 border-orange-100">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-yellow-100">
                  <CardTitle className="font-serif text-xl text-orange-900 flex items-center gap-3">
                    <Clock className="w-6 h-6" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-3 text-orange-800">
                    <div className="flex justify-between">
                      <span className="font-medium">Monday - Friday</span>
                      <span>9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Saturday - Sunday</span>
                      <span>8:00 AM - 9:00 PM</span>
                    </div>
                    <div className="border-t pt-3 mt-4">
                      <p className="text-sm text-orange-600 font-medium">
                        Available for emergency pujas and special occasions
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="border-2 border-orange-100">
                <CardHeader className="bg-gradient-to-r from-orange-100 to-yellow-100">
                  <CardTitle className="font-serif text-xl text-orange-900 flex items-center gap-3">
                    <MapPin className="w-6 h-6" />
                    Service Areas
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-orange-800 space-y-2">
                    <p className="font-medium">We proudly serve:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Sydney Metropolitan Area</li>
                      <li>• Western Suburbs</li>
                      <li>• Eastern Suburbs</li>
                      <li>• Northern Beaches</li>
                      <li>• South Western Sydney</li>
                    </ul>
                    <div className="border-t pt-3 mt-4">
                      <p className="text-sm text-orange-600">
                        Travel charges may apply for areas outside 30km radius
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}