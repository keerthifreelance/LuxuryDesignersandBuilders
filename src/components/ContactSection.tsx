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

    // Simulate validation and API request delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#0A0A0A] text-[#F5F5F5] border-t border-white/10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
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
                    PHONE INQUIRIES
                  </span>
                  <a
                    href={`tel:${BRAND_INFO.phoneRaw}`}
                    className="font-serif text-2xl font-medium text-white hover:text-white/80 transition-colors interactive-el"
                  >
                    {BRAND_INFO.phoneDisplay}
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
                  <p className="text-sm font-semibold text-white">
                    {BRAND_INFO.rating} • {BRAND_INFO.reviewsCount}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7 bg-[#121212] p-8 sm:p-12 border border-white/10 shadow-2xl relative">
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
                  className="w-full py-4 bg-white text-black text-xs font-bold tracking-[0.2em] uppercase hover:bg-white/90 transition-all duration-300 shadow-xl mt-4 interactive-el"
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
