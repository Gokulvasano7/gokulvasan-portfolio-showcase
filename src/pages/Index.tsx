import React, { useState } from 'react';
import { FaMapMarkerAlt, FaLanguage, FaUser, FaRuler, FaPalette, FaEye, FaInstagram, FaWhatsapp, FaEnvelope, FaPlay, FaTimes, FaGraduationCap, FaBirthdayCake, FaFilm, FaVideo } from 'react-icons/fa';
import { Clapperboard } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from '../components/ThemeToggle';

const Index = () => {
  const { isDarkMode } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: 'Gokul Vasan B',
    email: 'gokulvasan777@gmail.com',
    message: ''
  });

  const galleryImages = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=350&fit=crop',
    'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=450&fit=crop',
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=380&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=420&fit=crop',
    'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=300&h=360&fit=crop'
  ];

  // Theme-based classes
  const bgPrimary = isDarkMode ? 'bg-gray-900' : 'bg-gray-100';
  const bgSecondary = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const bgTertiary = isDarkMode ? 'bg-gray-700' : 'bg-gray-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-300' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-amber-400/20' : 'border-amber-600/30';
  const borderHover = isDarkMode ? 'hover:border-amber-400/40' : 'hover:border-amber-600/50';

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
    <div className={`min-h-screen transition-colors duration-500 ${bgPrimary} ${textPrimary}`}>
      <ThemeToggle />
      
      {/* Hero Section with Dual Background Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Floating Cinema Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <FaFilm className="absolute top-20 left-10 text-amber-400/30 text-4xl animate-bounce" style={{ animationDelay: '0s' }} />
          <FaVideo className="absolute top-40 right-20 text-amber-400/30 text-3xl animate-bounce" style={{ animationDelay: '1s' }} />
          <Clapperboard className="absolute bottom-40 left-20 text-amber-400/30 w-12 h-12 animate-bounce" style={{ animationDelay: '2s' }} />
          <FaPlay className="absolute bottom-20 right-10 text-amber-400/30 text-3xl animate-bounce" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Dual Background Images */}
        <div className="absolute inset-0 flex">
          <div 
            className="w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=1200&fit=crop')`
            }}
          ></div>
          <div 
            className="w-1/2 h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=1200&fit=crop')`
            }}
          ></div>
        </div>
        
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${isDarkMode 
          ? 'bg-gradient-to-br from-black/80 via-gray-900/70 to-amber-900/50' 
          : 'bg-gradient-to-br from-white/80 via-gray-200/70 to-amber-100/50'
        }`}></div>
        
        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent animate-pulse">
            Gokulvasan
          </h1>
          <p className={`text-2xl md:text-3xl mb-4 ${textSecondary} animate-fade-in`} style={{ animationDelay: '0.5s' }}>
            Actor & Performer
          </p>
          <p className="text-xl md:text-2xl text-amber-400 mb-8 italic animate-fade-in" style={{ animationDelay: '1s' }}>
            "Bringing characters to life through passion and dedication"
          </p>
          <button 
            onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-110 flex items-center gap-2 mx-auto animate-fade-in shadow-lg hover:shadow-2xl"
            style={{ animationDelay: '1.5s' }}
          >
            <FaPlay className="text-sm animate-pulse" />
            🎬 View Gallery
          </button>
        </div>
      </section>

      {/* About Me Section with Enhanced Animations */}
      <section className={`py-20 px-4 ${bgSecondary} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-amber-400 animate-fade-in">
              About Me
            </h2>
            <p className={`text-xl ${textSecondary} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
              Passionate Actor & Performer with a Creative Vision
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: FaBirthdayCake, label: 'Age', value: '22 Years', delay: '0s' },
                  { icon: FaGraduationCap, label: 'Qualification', value: 'B.E - ECE', delay: '0.1s' },
                  { icon: FaMapMarkerAlt, label: 'Native', value: 'Palani, Tamil Nadu', delay: '0.2s' },
                  { icon: FaLanguage, label: 'Languages', value: 'Tamil, Telugu', delay: '0.3s' },
                  { icon: FaRuler, label: 'Height', value: '164.5 cm (5.48 ft)', delay: '0.4s' },
                  { icon: FaUser, label: 'Skills', value: 'Acting', delay: '0.5s' }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className={`${bgTertiary} p-6 rounded-lg border ${borderColor} ${borderHover} transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in`}
                    style={{ animationDelay: item.delay }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="text-amber-400 text-xl animate-pulse" />
                      <span className={textSecondary}>{item.label}</span>
                    </div>
                    <p className={`${textPrimary} font-semibold`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div className={`bg-gradient-to-br ${isDarkMode ? 'from-gray-700 to-gray-600' : 'from-gray-200 to-gray-300'} p-8 rounded-lg border ${borderColor} animate-fade-in transform hover:scale-105 transition-all duration-300`} style={{ animationDelay: '0.6s' }}>
                <h3 className="text-2xl font-bold text-amber-400 mb-4">Physical Attributes</h3>
                <div className="space-y-4">
                  {[
                    { icon: FaPalette, label: 'Hair Color', value: 'Black' },
                    { icon: FaEye, label: 'Eye Color', value: 'Black' },
                    { icon: FaUser, label: 'Skin Tone', value: 'Sandal Brown' }
                  ].map((attr, index) => (
                    <div key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                      <attr.icon className="text-amber-400 animate-pulse" />
                      <span className={textSecondary}>{attr.label}:</span>
                      <span className={`${textPrimary} font-semibold`}>{attr.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className={`py-20 px-4 ${bgPrimary} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Featured Work</h2>
            <p className={`text-xl ${textSecondary}`}>Notable performances that showcase my range</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Chithha Card */}
            <div className={`bg-gradient-to-br ${isDarkMode ? 'from-gray-800 to-gray-700' : 'from-gray-200 to-gray-100'} rounded-lg overflow-hidden border ${borderColor} ${borderHover} transition-all duration-300 hover:transform hover:scale-105 animate-fade-in`}>
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
                <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>Ponni's Lover</h4>
                <p className={`${textSecondary} mb-4`}>A compelling drama exploring emotional depth and human connections.</p>
                <div className="flex flex-wrap gap-2">
                  <span className={`${bgTertiary} text-amber-400 px-3 py-1 rounded-full text-sm`}>🎬 Featured in Key Scenes</span>
                  <span className={`${bgTertiary} text-amber-400 px-3 py-1 rounded-full text-sm`}>🎥 Worked with Renowned Director</span>
                </div>
              </div>
            </div>
            
            {/* Kadhal Solla Bayamen Card */}
            <div className={`bg-gradient-to-br ${isDarkMode ? 'from-gray-800 to-gray-700' : 'from-gray-200 to-gray-100'} rounded-lg overflow-hidden border ${borderColor} ${borderHover} transition-all duration-300 hover:transform hover:scale-105 animate-fade-in`} style={{ animationDelay: '0.3s' }}>
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
                <h4 className={`text-xl font-bold ${textPrimary} mb-2`}>Lead Character</h4>
                <p className={`${textSecondary} mb-4`}>A romantic tale through a dreamer's love journey, showcasing versatility and emotional range.</p>
                <div className="flex flex-wrap gap-2">
                  <span className={`${bgTertiary} text-amber-400 px-3 py-1 rounded-full text-sm`}>🌟 Lead Performance</span>
                  <span className={`${bgTertiary} text-amber-400 px-3 py-1 rounded-full text-sm`}>🔥 Audience Favorite</span>
                  <span className={`${bgTertiary} text-amber-400 px-3 py-1 rounded-full text-sm`}>🏆 Festival Selection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section with Improved Mobile Layout */}
      <section id="gallery" className={`py-20 px-4 ${bgSecondary} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Photo Gallery</h2>
            <p className={`text-xl ${textSecondary}`}>Behind the scenes and professional moments</p>
          </div>
          
          {/* Responsive Grid - 2 columns on mobile, 3 on larger screens */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index}
                className="cursor-pointer group animate-fade-in"
                onClick={() => openLightbox(image)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className={`w-full h-auto rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 border ${borderColor} group-hover:border-amber-400/40`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Me Section with Rectangular Buttons */}
      <section className={`py-20 px-4 ${bgPrimary} transition-colors duration-500`}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Connect With Me</h2>
          <p className={`text-xl ${textSecondary} mb-12`}>Let's create something amazing together</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-white font-semibold animate-fade-in"
            >
              <FaInstagram className="text-2xl" />
              <span>Follow on Instagram</span>
            </a>
            <a 
              href="https://wa.me/+919876543210?text=Hello%20Gokulvasan!%20I%20would%20like%20to%20discuss%20a%20potential%20collaboration." 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-white font-semibold animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              <FaWhatsapp className="text-2xl" />
              <span>WhatsApp Me</span>
            </a>
            <a 
              href="mailto:gokulvasan777@gmail.com" 
              className="bg-gradient-to-r from-red-500 to-red-600 px-8 py-4 rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 text-white font-semibold animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <FaEnvelope className="text-2xl" />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className={`py-20 px-4 ${bgSecondary} transition-colors duration-500`}>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-amber-400">Contact Me</h2>
            <p className={`text-xl ${textSecondary}`}>Ready to work together? Let's talk!</p>
          </div>
          
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={`block ${textSecondary} font-semibold mb-2`}>Your Name</label>
              <input 
                type="text" 
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full p-4 ${bgTertiary} border ${borderColor} rounded-lg ${textPrimary} focus:border-amber-400 focus:outline-none transition-colors`}
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className={`block ${textSecondary} font-semibold mb-2`}>Email</label>
              <input 
                type="email" 
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full p-4 ${bgTertiary} border ${borderColor} rounded-lg ${textPrimary} focus:border-amber-400 focus:outline-none transition-colors`}
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className={`block ${textSecondary} font-semibold mb-2`}>Message</label>
              <textarea 
                id="message"
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full p-4 ${bgTertiary} border ${borderColor} rounded-lg ${textPrimary} focus:border-amber-400 focus:outline-none transition-colors resize-none`}
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
      <footer className={`py-8 px-4 ${bgPrimary} border-t ${borderColor} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={textSecondary}>&copy; 2024 Gokulvasan. All rights reserved.</p>
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
