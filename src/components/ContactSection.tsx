import React, { useState } from 'react';
import { BRAND_INFO } from '../data/content';
import { ConsultationFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    projectType: '',
    propertyType: 'Residential',
    budget: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ConsultationFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof ConsultationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid phone number.';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);

    // Build pre-formatted WhatsApp message containing all typed form data
    const messageLines = [
      `Hello Luxury Designers & Builders,`,
      ``,
      `I would like to request a consultation:`,
      `• Full Name: ${formData.fullName}`,
      `• Phone Number: ${formData.phone}`,
      formData.email ? `• Email Address: ${formData.email}` : null,
      formData.location ? `• Location: ${formData.location}` : null,
      formData.projectType ? `• Service Needed: ${formData.projectType}` : null,
      formData.budget ? `• Budget Range: ${formData.budget}` : null,
      formData.message ? `• Project Details: ${formData.message}` : null
    ].filter(line => line !== null).join('\n');

    const whatsappUrl = `https://wa.me/919600470328?text=${encodeURIComponent(messageLines)}`;
    
    // Open WhatsApp directly with typed consultation data
    window.open(whatsappUrl, '_blank');

    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Business Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-bold tracking-[0.2em] text-[#C5A059] uppercase block mb-2">
                START A CONVERSATION
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-light leading-tight text-white">
                LET'S BUILD YOUR DREAM SPACE.
              </h2>
            </div>

            <p className="text-base text-white/60 leading-relaxed font-light">
              From the first idea to the final detail, let's create a space designed around you. Contact our principal design team in Aruppukkottai for a personalized site consultation.
            </p>

            <div className="space-y-6 pt-4 border-t border-white/10">
              {/* Phone Direct */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-2xl text-[#C5A059] mt-1">call</span>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">
                    PHONE & WHATSAPP
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phoneRaw}`}
                    className="text-lg font-mono font-bold text-white hover:text-[#C5A059] transition-colors"
                  >
                    +91 {BRAND_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-2xl text-[#C5A059] mt-1">location_on</span>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">
                    OFFICE ADDRESS
                  </span>
                  <p className="text-sm font-light text-white/90 leading-snug">
                    {BRAND_INFO.address}
                  </p>
                  <a
                    href={BRAND_INFO.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-bold tracking-widest text-[#C5A059] uppercase mt-2 hover:underline interactive-el"
                  >
                    <span>GET DIRECTIONS</span>
                    <span className="material-symbols-outlined text-sm ml-1">open_in_new</span>
                  </a>
                </div>
              </div>

              {/* Business Stats */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-2xl text-[#C5A059] mt-1">stars</span>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block">
                    GOOGLE RATING
                  </span>
                  <p className="text-sm font-semibold text-[#C5A059]">
                    {BRAND_INFO.rating} • {BRAND_INFO.reviewsCount}
                  </p>
                </div>
              </div>

              {/* Social Connect Links */}
              <div className="flex items-start space-x-4">
                <span className="material-symbols-outlined text-2xl text-[#C5A059] mt-1">share</span>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-white/50 block mb-2">
                    CONNECT ON SOCIAL MEDIA
                  </span>
                  <div className="flex items-center space-x-3">
                    <a
                      href={BRAND_INFO.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#C5A059]/40 text-xs font-bold tracking-wider text-[#C5A059] uppercase hover:bg-[#C5A059]/15 transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                      <span>FACEBOOK</span>
                    </a>
                    <a
                      href={BRAND_INFO.instagramUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1.5 px-3 py-1.5 border border-[#C5A059]/40 text-xs font-bold tracking-wider text-[#C5A059] uppercase hover:bg-[#C5A059]/15 transition-all"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>INSTAGRAM</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="pt-4">
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#C5A059] block mb-2">
                  OFFICE LOCATION MAP
                </span>
                <div className="relative w-full h-56 sm:h-64 border border-[#C5A059]/30 overflow-hidden shadow-2xl group">
                  <iframe
                    src={BRAND_INFO.mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="strict-origin-when-cross-origin"
                    title="Luxury Designers and Builders Google Map"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#121212] p-8 sm:p-12 border border-white/10 shadow-2xl relative h-fit self-start">
            {submitted ? (
              <div className="py-16 text-center space-y-6 animate-fade-in">
                <div className="w-16 h-16 bg-[#C5A059]/20 text-[#C5A059] rounded-full flex items-center justify-center mx-auto border border-[#C5A059]/40">
                  <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h3 className="font-serif text-3xl font-medium text-white">THANK YOU FOR REACHING OUT!</h3>
                <p className="text-sm text-white/70 max-w-md mx-auto font-light">
                  We have received your project inquiry. A representative from <strong className="text-white">Luxury Designers & Builders</strong> will contact you shortly at {formData.phone}.
                </p>
                <button
                  onClick={() => {
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      location: '',
                      projectType: '',
                      propertyType: 'Residential',
                      budget: '',
                      message: ''
                    });
                    setErrors({});
                    setSubmitted(false);
                  }}
                  className="px-6 py-3 bg-white text-black text-xs font-bold tracking-widest uppercase hover:bg-white/90 transition-colors"
                >
                  SUBMIT ANOTHER INQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <h3 className="font-serif text-2xl font-medium mb-6 pb-2 border-b border-white/10 text-white">
                  REQUEST CONSULTATION
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block mb-1">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your Name"
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 text-sm outline-none transition-colors text-white placeholder-white/30"
                    />
                    {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block mb-1">
                      PHONE NUMBER *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="96004 70328"
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 text-sm outline-none transition-colors text-white placeholder-white/30"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Email */}
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block mb-1">
                      EMAIL ADDRESS
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 text-sm outline-none transition-colors text-white placeholder-white/30"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>

                  {/* Location */}
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block mb-1">
                      PROPERTY LOCATION
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Aruppukkottai, Madurai"
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 text-sm outline-none transition-colors text-white placeholder-white/30"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Project Type */}
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block mb-1">
                      PROJECT TYPE *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 text-sm outline-none transition-colors cursor-pointer text-white [&>option]:bg-[#121212] [&>option]:text-white"
                    >
                      <option value="" disabled className="text-white/40">Select Service Needed</option>
                      <option value="Interior Design">Interior Design</option>
                      <option value="Architectural Design">Architectural Design</option>
                      <option value="2D Floor Planning">2D Floor Planning</option>
                      <option value="3D Visualization">3D Visualization</option>
                      <option value="Design & Build">Design & Build (Turnkey)</option>
                      <option value="Renovation">Renovation</option>
                      <option value="Exterior Design">Exterior Design</option>
                      <option value="Ceiling Works">Ceiling Works</option>
                      <option value="Modular Kitchen">Modular Kitchen</option>
                      <option value="Bedroom Wardrobes">Bedroom Wardrobes</option>
                      <option value="Commercial Space">Commercial Space</option>
                    </select>
                    {errors.projectType && <p className="text-xs text-red-400 mt-1">{errors.projectType}</p>}
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block mb-1">
                      APPROXIMATE BUDGET
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 text-sm outline-none transition-colors cursor-pointer text-white [&>option]:bg-[#121212] [&>option]:text-white"
                    >
                      <option value="" className="text-white/40">Select Budget Range</option>
                      <option value="Below ₹10 Lakhs">Below ₹10 Lakhs</option>
                      <option value="₹10 Lakhs - ₹25 Lakhs">₹10 Lakhs - ₹25 Lakhs</option>
                      <option value="₹25 Lakhs - ₹50 Lakhs">₹25 Lakhs - ₹50 Lakhs</option>
                      <option value="₹50 Lakhs - ₹1 Crore">₹50 Lakhs - ₹1 Crore</option>
                      <option value="Above ₹1 Crore">Above ₹1 Crore</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/50 block mb-1">
                    PROJECT DETAILS / MESSAGE
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your vision, plot dimensions, or requirements..."
                    className="w-full bg-transparent border-b border-white/20 focus:border-white py-2.5 text-sm outline-none transition-colors resize-none text-white placeholder-white/30"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#DFBA67] via-[#C5A059] to-[#997328] text-black text-xs font-bold tracking-[0.2em] uppercase hover:shadow-[0_0_30px_rgba(197,160,89,0.5)] hover:scale-[1.01] transition-all duration-300 shadow-xl mt-4 interactive-el"
                >
                  {isSubmitting ? 'PROCESSING INQUIRY...' : 'REQUEST CONSULTATION'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
