import React, { useState } from 'react';

const SectionWrapper: React.FC<{title: string; children: React.ReactNode;}> = ({ title, children }) => (
    <div className="py-16 md:py-24">
        <h2 data-animate className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {title}
        </h2>
        {children}
    </div>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to a backend service
    setSubmitted(true);
  };

  if (submitted) {
    return (
        <SectionWrapper title="Hubungi Saya">
            <div data-animate className="text-center max-w-md mx-auto p-8 bg-white dark:bg-slate-900 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-sky-500 dark:text-sky-400 mb-4">Terima kasih!</h3>
                <p>Pesan Anda telah terkirim. Saya akan membalas secepatnya.</p>
            </div>
        </SectionWrapper>
    );
  }

  return (
    <SectionWrapper title="Hubungi Saya">
      <div className="max-w-2xl mx-auto text-center">
        <p data-animate style={{ transitionDelay: '200ms' }} className="text-lg mb-8">
            Punya proyek atau sekadar ingin menyapa? Jangan ragu untuk menghubungi. Saat ini saya tersedia untuk pekerjaan freelance.
        </p>
        <div data-animate style={{ transitionDelay: '400ms' }} className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg border border-slate-200 dark:border-slate-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nama Anda"
                required
                className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-transform duration-300 focus:scale-105"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Anda"
                required
                className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-transform duration-300 focus:scale-105"
              />
            </div>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Pesan Anda"
              rows={5}
              required
              className="w-full px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-md focus:outline-none focus:ring-2 focus:ring-sky-500 transition-transform duration-300 focus:scale-105"
            />
            <button
              type="submit"
              className="w-full bg-sky-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-sky-600 hover:shadow-lg hover:shadow-sky-500/40"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;