'use client';

import { useState } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!executeRecaptcha) {
      console.error('Execute recaptcha not available');
      alert('reCAPTCHA not loaded. Please try again.');
      return;
    }

    try {
      const token = await executeRecaptcha('contact_form');
      
      // Here you would send the token along with form data to your backend
      console.log('Form submitted with reCAPTCHA token:', token);
      console.log('Form data:', formData);
      
      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('reCAPTCHA error:', error);
      alert('Could not verify that you are human. Please try again.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-form">
      <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="form-input"
            placeholder="What's this about?"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="form-textarea"
            placeholder="Tell me about your project or opportunity..."
          />
        </div>
        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}