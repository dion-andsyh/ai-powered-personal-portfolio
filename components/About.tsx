import React from 'react';

const SectionWrapper: React.FC<{title: string; children: React.ReactNode;}> = ({ title, children }) => (
    <div className="py-16 md:py-24">
        <h2 data-animate className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900 dark:text-white">
            {title}
        </h2>
        {children}
    </div>
);

const About: React.FC = () => {
  return (
    <SectionWrapper title="Tentang Saya">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8 items-center">
        <div data-animate style={{ transitionDelay: '200ms' }} className="md:col-span-1 flex justify-center">
            <img 
              src="https://picsum.photos/seed/aboutme/300/300" 
              alt="Dion Andreansyah sedang bekerja"
              className="rounded-lg shadow-lg w-64 h-64 object-cover"
            />
        </div>
        <div data-animate style={{ transitionDelay: '400ms' }} className="md:col-span-2 space-y-4 text-lg">
            <p>
                Dengan lebih dari 2 tahun pengalaman di pengembangan frontend, saya memiliki passion kuat untuk membangun aplikasi web yang intuitif, responsif, dan memukau secara visual. Perjalanan saya di dunia teknologi didorong oleh rasa ingin tahu dan keinginan menjembatani teknologi kompleks dengan desain yang ramah pengguna.
            </p>
            <p>
                Saya berspesialisasi di ekosistem React, memanfaatkan TypeScript untuk membangun solusi yang kuat dan skalabel. Saya juga antusias dengan potensi AI dan aktif mengintegrasikan teknologi seperti Gemini API untuk pengalaman yang lebih cerdas dan interaktif.
            </p>
            <p>
                Di luar coding, saya senang membimbing developer pemula dan berkontribusi ke komunitas open-source. Saat tidak di depan komputer, saya biasanya menjelajah pegunungan atau mencari kopi terbaik.
            </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;