'use client';

import { useState } from 'react';
import { PaperAirplaneIcon } from '@heroicons/react/24/outline';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message should be at least 10 characters';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 3000);
      }, 1500);
    }
  };

  return (
    <section className="px-6 sm:px-12 md:px-24 lg:px-32 py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-56 -right-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#FF0050] to-[#00F2EA] rounded-full filter blur-3xl opacity-25 animate-pulse" />
      <div className="absolute -bottom-56 -left-56 w-[30rem] h-[30rem] bg-gradient-to-br from-[#00F2EA] to-[#FF0050] rounded-full filter blur-3xl opacity-25 animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <h2 className="text-5xl md:text-7xl font-extrabold uppercase tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-[#00F2EA] to-[#FF0050]">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mt-4 max-w-3xl mx-auto">
            Ready to create something amazing together? Send me a message, and I’ll respond within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="flex flex-col justify-center">
            <div className="text-2xl md:text-3xl font-semibold text-gray-100 mb-8">
              Let’s build something extraordinary. Reach out to discuss your project ideas or explore collaboration opportunities.
            </div>
            <div className="space-y-4">
              <div className="text-lg font-semibold text-white">Email Me Directly</div>
              <a
                href="mailto:tunjiheritage@gmail.com"
                className="text-xl text-[#00F2EA] hover:text-[#FF0050] transition-colors duration-300 underline underline-offset-4"
              >
                tunjiheritage@gmail.com
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`w-full px-5 py-4 bg-gray-900/80 text-gray-100 border border-gray-800/50 focus:border-[#00F2EA] rounded-lg focus:outline-none placeholder-gray-500 transition-all duration-300 ${errors.name ? 'border-red-500' : ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className={`w-full px-5 py-4 bg-gray-900/80 text-gray-100 border border-gray-800/50 focus:border-[#00F2EA] rounded-lg focus:outline-none placeholder-gray-500 transition-all duration-300 ${errors.email ? 'border-red-500' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
            </div>

            <div>
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                className={`w-full px-5 py-4 bg-gray-900/80 text-gray-100 border border-gray-800/50 focus:border-[#00F2EA] rounded-lg focus:outline-none placeholder-gray-500 transition-all duration-300 ${errors.message ? 'border-red-500' : ''}`}
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && <p className="text-red-500 text-sm mt-2">{errors.message}</p>}
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white px-10 py-4 rounded-lg font-semibold uppercase tracking-wider hover:from-[#00F2EA] hover:to-[#FF0050] transition-all duration-300 shadow-lg shadow-[#FF0050]/40 hover:shadow-[#00F2EA]/40 flex items-center gap-3 disabled:opacity-60"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <span>Send Message</span>
                    <PaperAirplaneIcon className="h-6 w-6" />
                  </>
                )}
              </button>
            </div>

            {submitSuccess && (
              <div className="bg-gray-900/90 text-gray-100 p-5 rounded-lg border border-[#00F2EA]/50 shadow-md">
                Message sent successfully! I’ll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;