import GlassCard from '@/components/ui/GlassCard';

export default function Special() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-white mb-4">What Makes Pearls Special</h1>
        <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
          Understanding the unique characteristics that define a pearl&apos;s value and beauty.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <GlassCard>
          <h3 className="text-2xl font-serif text-white mb-4">Luster</h3>
          <p className="text-white/80 font-sans leading-relaxed">
            Luster is the most important factor in a pearl&apos;s beauty. It refers to the sharpness and intensity of reflections on the pearl&apos;s surface. A high-luster pearl has a bright, mirror-like reflection, while a dull pearl appears chalky. This is determined by the thickness and quality of the nacre layers.
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-2xl font-serif text-white mb-4">Surface Quality</h3>
          <p className="text-white/80 font-sans leading-relaxed">
            Because pearls are grown by living organisms, truly flawless pearls are exceptionally rare. Surface quality refers to the number, size, and visibility of imperfections (like bumps or spots). The cleaner the surface, the higher the value of the pearl.
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-2xl font-serif text-white mb-4">Shape</h3>
          <p className="text-white/80 font-sans leading-relaxed">
            Perfectly round pearls are the rarest and most valuable. However, other shapes like teardrop, oval, button, and baroque (irregular) have their own unique appeal and are highly sought after by designers for their organic, distinct character.
          </p>
        </GlassCard>

        <GlassCard>
          <h3 className="text-2xl font-serif text-white mb-4">Grading Systems (AAA)</h3>
          <p className="text-white/80 font-sans leading-relaxed">
            We use the widely accepted A-AAA grading system. Our collections feature strictly AA+ and AAA grade pearls. An AAA pearl is virtually flawless (95%+ clean surface) with incredibly high luster. We never compromise on these standards.
          </p>
        </GlassCard>
      </div>

      <GlassCard className="text-center p-12 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
           {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://image.pollinations.ai/prompt/macro%20shot%20of%20pearl%20iridescence%20colors?width=1200&height=400&nologo=true" alt="Iridescence" className="object-cover w-full h-full" />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-serif text-white mb-6">The Only Organic Gemstone</h2>
          <p className="text-white/90 font-sans text-lg max-w-2xl mx-auto leading-relaxed">
            Unlike diamonds, rubies, or emeralds, which must be mined, cut, and polished to reveal their beauty, a pearl is born complete. It is the only gemstone created by a living creature, requiring no human intervention to enhance its natural perfection. This intrinsic connection to nature is what makes every single pearl entirely unique.
          </p>
        </div>
      </GlassCard>
    </div>
  );
}
