import GlassCard from '@/components/ui/GlassCard';

export default function Journey() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-white mb-4">Our Journey & Sourcing</h1>
        <p className="text-lg text-white/70 font-sans">
          A commitment to transparency, sustainability, and exceptional quality.
        </p>
      </div>

      <div className="space-y-12">
        <GlassCard className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-serif text-white mb-6">The Aurora Story</h2>
            <p className="text-white/80 font-sans leading-relaxed mb-4">
              Aurora Pearls was founded on a simple premise: to bring the breathtaking beauty of the ocean's finest gems to the world without compromising the delicate marine ecosystems that create them.
            </p>
            <p className="text-white/80 font-sans leading-relaxed">
              Our founders traveled from the historic, sunlit shores of the Arabian Gulf to the protected bays of Japan, seeking out multi-generational pearl divers and farmers who share our vision for sustainable luxury. Today, Aurora Pearls stands as a testament to what is possible when modern design meets ethical sourcing.
            </p>
          </div>
          <div className="flex-1 h-[300px] w-full relative rounded-2xl overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/arabian-gulf.png" alt="Arabian Gulf Pearl Diving" className="object-cover w-full h-full" />
          </div>
        </GlassCard>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <GlassCard>
            <h3 className="text-2xl font-serif text-white mb-4">Ethical Sourcing</h3>
            <p className="text-white/80 font-sans leading-relaxed">
              We partner exclusively with certified pearl farms that adhere to strict environmental standards. Healthy oysters require pristine water conditions; thus, our partners are actively involved in ocean conservation and anti-pollution efforts.
            </p>
          </GlassCard>

          <GlassCard>
            <h3 className="text-2xl font-serif text-white mb-4">Direct to You</h3>
            <p className="text-white/80 font-sans leading-relaxed">
              By bypassing traditional intermediaries, we ensure fair compensation for our farming partners while providing our clients with unmatched value and transparency for pearls of the highest grading.
            </p>
          </GlassCard>
        </div>

        <GlassCard className="relative overflow-hidden min-h-[300px] flex items-center justify-center p-0">
          <div className="absolute inset-0 z-0">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ocean-conservation.png" alt="Ocean Conservation" className="object-cover w-full h-full opacity-50" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 text-center p-8">
            <h2 className="text-3xl font-serif text-white mb-4">Protecting Our Oceans</h2>
            <p className="text-white/90 font-sans max-w-xl mx-auto">
              A portion of every purchase goes directly to marine conservation initiatives, ensuring the oceans remain a vibrant source of life and beauty for generations to come.
            </p>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
