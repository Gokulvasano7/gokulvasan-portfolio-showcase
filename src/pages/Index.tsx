
import React, { useState } from 'react';
import { FaMapMarkerAlt, FaLanguage, FaUser, FaRuler, FaPalette, FaEye, FaInstagram, FaWhatsapp, FaEnvelope, FaPlay, FaTimes, FaGraduationCap, FaBirthdayCake } from 'react-icons/fa';

const Index = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: 'Gokul Vasan B',
    email: 'gokulvasan777@gmail.com',
    message: ''
  });

  const galleryImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=700&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=550&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=650&fit=crop',
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=480&fit=crop'
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello! I'm ${formData.name}. Email: ${formData.email}. Message: ${formData.message}`;
    const whatsappUrl = `https://wa.me/+919876543210?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openLightbox = (image: string) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 p-1">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="Gokulvasan" 
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
            Gokulvasan
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">Actor & Performer</p>
          <p className="text-lg md:text-xl text-amber-400 mb-8 italic">
            "Bringing characters to life through passion and dedication"
          </p>
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto"
          >
            <FaPlay className="text-sm" />
            🎬 View Gallery
          </button>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">About Me</h2>
            <p className="text-xl text-gray-300">Passionate Actor & Performer with a Creative Vision</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-gray-700 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaBirthdayCake className="text-amber-400 text-xl" />
                    <span className="text-gray-300">Age</span>
                  </div>
                  <p className="text-white font-semibold">22 Years</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaGraduationCap className="text-amber-400 text-xl" />
                    <span className="text-gray-300">Qualification</span>
                  </div>
                  <p className="text-white font-semibold">B.E - ECE</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaMapMarkerAlt className="text-amber-400 text-xl" />
                    <span className="text-gray-300">Native</span>
                  </div>
                  <p className="text-white font-semibold">Palani, Tamil Nadu</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaLanguage className="text-amber-400 text-xl" />
                    <span className="text-gray-300">Languages</span>
                  </div>
                  <p className="text-white font-semibold">Tamil, Telugu</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaRuler className="text-amber-400 text-xl" />
                    <span className="text-gray-300">Height</span>
                  </div>
                  <p className="text-white font-semibold">164.5 cm (5.48 ft)</p>
                </div>
                
                <div className="bg-gray-700 p-6 rounded-lg border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                  <div className="flex items-center gap-3 mb-2">
                    <FaUser className="text-amber-400 text-xl" />
                    <span className="text-gray-300">Skills</span>
                  </div>
                  <p className="text-white font-semibold">Acting</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-gray-700 to-gray-600 p-8 rounded-lg border border-amber-400/20">
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Physical Attributes</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPalette className="text-amber-400" />
                    <span className="text-gray-300">Hair Color:</span>
                    <span className="text-white font-semibold">Black</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEye className="text-amber-400" />
                    <span className="text-gray-300">Eye Color:</span>
                    <span className="text-white font-semibold">Black</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaUser className="text-amber-400" />
                    <span className="text-gray-300">Skin Tone:</span>
                    <span className="text-white font-semibold">Sandal Brown</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Featured Work</h2>
            <p className="text-xl text-gray-300">Notable performances that showcase my range</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chithha Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-black mb-2">Chithha</h3>
                  <p className="text-black/80 text-lg">(2023)</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-amber-500 text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Supporting Role
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Ponni's Lover</h4>
                <p className="text-gray-300 mb-4">A compelling drama exploring emotional depth and human connections.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-amber-400 px-3 py-1 rounded-full text-sm">🎬 Featured in Key Scenes</span>
                  <span className="bg-gray-700 text-amber-400 px-3 py-1 rounded-full text-sm">🎥 Worked with Renowned Director</span>
                </div>
              </div>
            </div>
            
            {/* Kadhal Solla Bayamen Card */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg overflow-hidden border border-amber-400/20 hover:border-amber-400/40 transition-all duration-300 hover:transform hover:scale-105">
              <div className="h-64 bg-gradient-to-br from-red-600 to-pink-700 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-white mb-2">Kadhal Solla Bayamen</h3>
                  <p className="text-white/80 text-lg">(2022)</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Lead Role
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Lead Character</h4>
                <p className="text-gray-300 mb-4">A romantic tale through a dreamer's love journey, showcasing versatility and emotional range.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 text-amber-400 px-3 py-1 rounded-full text-sm">🌟 Lead Performance</span>
                  <span className="bg-gray-700 text-amber-400 px-3 py-1 rounded-full text-sm">🔥 Audience Favorite</span>
                  <span className="bg-gray-700 text-amber-400 px-3 py-1 rounded-full text-sm">🏆 Festival Selection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 px-4 bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Photo Gallery</h2>
            <p className="text-xl text-gray-300">Behind the scenes and professional moments</p>
          </div>
          
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="break-inside-avoid mb-4 cursor-pointer group"
                onClick={() => openLightbox(image)}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border border-amber-400/20 group-hover:border-amber-400/40"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Connect With Me</h2>
          <p className="text-xl text-gray-300 mb-12">Let's create something amazing together</p>
          
          <div className="flex justify-center gap-8">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-pink-500 to-purple-600 p-6 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <FaInstagram className="text-3xl text-white" />
            </a>
            <a 
              href="https://wa.me/+919876543210?text=Hello%20Gokulvasan!%20I%20would%20like%20to%20discuss%20a%20potential%20collaboration." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <FaWhatsapp className="text-3xl text-white" />
            </a>
            <a 
              href="mailto:gokulvasan777@gmail.com" 
              className="bg-gradient-to-br from-red-500 to-red-600 p-6 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <FaEnvelope className="text-3xl text-white" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Contact Me</h2>
            <p className="text-xl text-gray-300">Ready to work together? Let's talk!</p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">Your Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-4 bg-gray-700 border border-amber-400/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">Email</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full p-4 bg-gray-700 border border-amber-400/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">Message</label>
              <textarea 
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full p-4 bg-gray-700 border border-amber-400/20 rounded-lg text-white focus:border-amber-400 focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project..."
                required
              />
            </div>
            
            <button 
              type="submit"
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Send via WhatsApp
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-gray-900 border-t border-amber-400/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">&copy; 2024 Gokulvasan. All rights reserved.</p>
          <p className="text-amber-400 mt-2">Actor & Performer</p>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
          <div className="relative max-w-4xl max-h-full">
            <button 
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-amber-400 transition-colors z-10"
            >
              <FaTimes className="text-2xl" />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
