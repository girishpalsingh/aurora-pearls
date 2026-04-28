import GlassCard from '@/components/ui/GlassCard';
import Image from 'next/image';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-white mb-4">About Us</h1>
        <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
          The visionaries behind Aurora Pearls: redefining modern luxury through ethical sourcing and timeless design.
        </p>
      </div>

      <GlassCard className="mb-16">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-serif text-white mb-4">Meet Our Founders</h2>
          <p className="text-white/80 font-sans leading-relaxed">
            Aurora Pearls was born from a unique collaboration between three distinct visionaries, each bringing their own unparalleled expertise to create a jewelry brand that bridges the gap between deep-ocean heritage and contemporary haute couture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Haley K */}
          <div className="space-y-4">
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-white/10 mb-6 max-w-[200px] mx-auto">
              <img src="/haley.png" alt="Haley K" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif text-white text-center">Haley K</h3>
            <p className="text-sm text-white/60 uppercase tracking-widest font-semibold text-center">Chief Executive Officer</p>
            <p className="text-white/80 font-sans leading-relaxed text-center">
              Growing up fascinated by the ocean and high-end jewelry, Haley envisioned a brand that could connect the pristine beauty of the deep sea to modern elegance. Her leadership focuses on sustainable harvesting practices and ensuring that every pearl meets the absolute highest standard of luster and quality.
            </p>
          </div>

          {/* Victoria Sterling */}
          <div className="space-y-4">
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-white/10 mb-6 max-w-[200px] mx-auto">
              <img src="/victoria.png" alt="Victoria Sterling" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif text-white text-center">Victoria Sterling</h3>
            <p className="text-sm text-white/60 uppercase tracking-widest font-semibold text-center">Head of Design</p>
            <p className="text-white/80 font-sans leading-relaxed text-center">
              With 40 years of experience as an American haute couture fashion designer, Victoria brings a master's eye to Aurora Pearls. She personally designs the intricate settings and arrangements, ensuring that the timeless elegance of pearls is elevated by bold, modern architectural aesthetics.
            </p>
          </div>

          {/* Mateo Rivera */}
          <div className="space-y-4">
            <div className="w-full aspect-square rounded-full overflow-hidden border-4 border-white/10 mb-6 max-w-[200px] mx-auto">
              <img src="/mateo.png" alt="Mateo Rivera" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif text-white text-center">Mateo Rivera</h3>
            <p className="text-sm text-white/60 uppercase tracking-widest font-semibold text-center">Chief Marketing Officer</p>
            <p className="text-white/80 font-sans leading-relaxed text-center">
              Mateo is the dynamic force behind Aurora's global presence. A digital marketing prodigy, he masterfully weaves the story of our ethical sourcing and artisan craftsmanship, connecting our sustainable luxury mission with a new generation of conscious, modern consumers.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
