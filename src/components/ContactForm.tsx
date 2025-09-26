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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setIsSubmitting(true);
      
      // Only execute reCAPTCHA if it's available (production environment)
      const recaptchaToken = executeRecaptcha 
        ? await executeRecaptcha('contact_form')
        : 'development';
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      alert('Thank you for your message! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Failed to send message. Please try again later.';
      alert(errorMessage);
    } finally {
      setIsSubmitting(false);
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
      <h3 className="text-2xl font-bold mb-6" style={{color: 'var(--foreground)'}}>Send me a message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2" style={{color: 'var(--foreground)'}}>Name</label>
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
          <label htmlFor="email" className="block text-sm font-medium mb-2" style={{color: 'var(--foreground)'}}>Email</label>
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
          <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{color: 'var(--foreground)'}}>Subject</label>
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
          <label htmlFor="message" className="block text-sm font-medium mb-2" style={{color: 'var(--foreground)'}}>Message</label>
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
        <button
          type="submit"
          className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
        </button>
      </form>
    </div>
  );
}