import React from 'react';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { CurtainReveal } from './components/CurtainReveal';
import { Testimonials } from './components/Testimonials';
import { BUSINESS_INFO, SERVICES } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-luxury-white text-luxury-black font-sans">
      <CurtainReveal />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-luxury-white/90 backdrop-blur-md border-b border-luxury-grey/50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <a href="#" className="text-xl font-serif tracking-ultra-wide font-semibold text-luxury-black">
            VSS WEDDINGS AND EVENTS
          </a>
          <div className="hidden md:flex space-x-12 text-[10px] font-semibold uppercase tracking-ultra-wide text-luxury-black/60">
            <a href="#about" className="hover:text-luxury-gold transition-colors">About</a>
            <a href="#testimonials" className="hover:text-luxury-gold transition-colors">Testimonials</a>
            <a href="#contact" className="hover:text-luxury-gold transition-colors">Contact</a>
          </div>
          <a href="#contact" className="text-[10px] font-bold tracking-ultra-wide bg-luxury-black text-white px-6 py-2 hover:bg-luxury-gold transition-all duration-300">
            INQUIRE
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/ddrmjmjv9/image/upload/v1768469880/Candid_varmala_ceremony_shot_x2fy3r.jpg"
            alt="Indian Wedding Luxury"
            className="w-full h-full object-cover grayscale opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-white/40 to-luxury-white"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl fade-in">
          <span className="text-luxury-gold text-xs uppercase tracking-ultra-wide mb-8 block font-medium">Est. Chhatarpur, Delhi</span>
          <h1 className="text-6xl md:text-9xl font-serif leading-tight mb-8">
            Curated <br />
            <span className="italic">Celebrations</span>
          </h1>
          <p className="text-sm md:text-base font-light tracking-widest text-luxury-black/60 max-w-lg mx-auto leading-loose uppercase">
            Providing Bespoke Wedding Management For The Discerning Couple.
          </p>
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-8 bg-luxury-gold/50"></div>
              <span className="text-[10px] uppercase tracking-ultra-wide text-luxury-black/50">Excellence Guaranteed</span>
              <div className="h-[1px] w-8 bg-luxury-gold/50"></div>
            </div>
            <a
              href="#about"
              className="inline-block px-12 py-4 border border-luxury-black/20 hover:border-luxury-gold hover:text-luxury-gold transition-all text-[10px] tracking-ultra-wide uppercase font-bold"
            >
              The Experience
            </a>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-32 px-6 bg-luxury-grey/30 scroll-mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2 overflow-hidden bg-luxury-white p-4 shadow-sm">
            <img
              src="https://res.cloudinary.com/ddrmjmjv9/image/upload/v1768469878/Bride_Wore_A_Unique_Manish_Malhotra_Lehenga_For_Anand_Karaj_Dons_A_Sabyasachi_Lehenga_For_Vivaah_icuxvx.jpg?q=80&w=1000&auto=format&fit=crop"
              alt="Luxury Wedding Ceremony"
              className="w-full h-[700px] object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
          <div className="w-full md:w-1/2 space-y-10">
            <span className="text-luxury-gold text-xs uppercase tracking-ultra-wide font-medium">Our Philosophy</span>
            <h2 className="text-5xl md:text-7xl font-serif italic text-luxury-black">Refined Grandeur</h2>
            <div className="w-20 h-[1px] bg-luxury-gold"></div>
            <p className="text-lg text-luxury-black/70 leading-relaxed font-light">
              VSS Weddings and Events is more than a planning service; it is a design studio dedicated to the art of luxury Indian weddings. Based in Chhatarpur, we transform traditional rituals into sophisticated, contemporary masterpieces.
            </p>
            <p className="text-base text-luxury-black/60 leading-relaxed font-light">
              Our approach is defined by intentionality and restraint. We believe that true luxury lies in the details that whisper rather than shout, creating atmospheres that are as intimate as they are grand.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-8">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="space-y-4 border-l border-luxury-gold/30 pl-6">
                  <h3 className="text-sm font-bold tracking-ultra-wide uppercase">{service.title}</h3>
                  <p className="text-xs text-luxury-black/50 leading-relaxed tracking-wide font-light">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 bg-luxury-black text-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="max-w-lg space-y-8">
              <h2 className="text-5xl font-serif italic">Contact Our Atelier</h2>
              <p className="text-sm font-light leading-loose text-white/50 tracking-wider">
                For inquiries regarding availability and our full-service planning suite, please reach out to our team. We look forward to realizing your vision.
              </p>
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-4 group">
                  <Phone className="w-4 h-4 text-luxury-gold" />
                  <span className="text-xs tracking-ultra-wide font-light hover:text-luxury-gold transition-colors">{BUSINESS_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-4 h-4 text-luxury-gold" />
                  <span className="text-xs tracking-ultra-wide font-light hover:text-luxury-gold transition-colors">{BUSINESS_INFO.email}</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-4 h-4 text-luxury-gold" />
                  <span className="text-xs tracking-widest font-light opacity-50">{BUSINESS_INFO.address}</span>
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/3 space-y-8">
              <div className="h-[1px] bg-white/10 w-full"></div>
              <div className="flex flex-col gap-6">
                <h3 className="text-[10px] font-bold uppercase tracking-ultra-wide text-luxury-gold">Follow Our Journey</h3>
                <div className="flex gap-8">
                  <a href="#" className="hover:text-luxury-gold transition-colors"><Instagram className="w-5 h-5" /></a>
                  <a href="#" className="hover:text-luxury-gold transition-colors"><Facebook className="w-5 h-5" /></a>
                </div>
              </div>
            </div>
          </div>

          <footer className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <span className="text-[10px] tracking-ultra-wide uppercase font-bold text-luxury-gold">{BUSINESS_INFO.name}</span>
            <p className="text-[10px] text-white/30 uppercase tracking-[0.4em]">
              &copy; {new Date().getFullYear()} • Bespoke Wedding Management • New Delhi
            </p>
          </footer>
        </div>
      </section>
    </div>
  );
};

export default App;