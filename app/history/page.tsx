import GlassCard from '@/components/ui/GlassCard';

export default function History() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-white mb-4">History of Pearls</h1>
        <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
          A journey through time, tracing the allure of the world&apos;s oldest gem.
        </p>
      </div>

      <div className="space-y-16">
        <GlassCard className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-serif text-white">Ancient Royalty</h2>
            <p className="text-white/80 font-sans leading-relaxed">
              Long before written history, pearls were discovered by ancient peoples foraging for food along the shores. They immediately became a symbol of wealth and status. In ancient Rome, pearl jewelry was considered the ultimate status symbol, to the extent that Julius Caesar passed a law limiting the wearing of pearls to the ruling classes.
            </p>
          </div>
          <div className="flex-1 h-[300px] w-full relative rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/roman-woman.png" alt="Ancient Royalty" className="object-cover w-full h-full" />
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col md:flex-row-reverse gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-serif text-white">The Diving Era</h2>
            <p className="text-white/80 font-sans leading-relaxed">
              For centuries, the only way to obtain pearls was by divers who risked their lives descending to depths of up to 100 feet on a single breath. The Arabian Gulf was historically the center of the world&apos;s pearl industry, producing natural pearls of unparalleled beauty that adorned royalty across the globe.
            </p>
          </div>
          <div className="flex-1 h-[300px] w-full relative rounded-2xl overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pearl-diving.png" alt="Pearl Diving" className="object-cover w-full h-full" />
          </div>
        </GlassCard>

        <GlassCard className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-serif text-white">Modern Cultivation</h2>
            <p className="text-white/80 font-sans leading-relaxed">
              In the early 20th century, the process of pearl cultivation was perfected in Japan. This revolutionary technique involved carefully introducing an irritant into an oyster, prompting it to secrete nacre. This democratization of pearls transformed them from a gem exclusive to monarchs into a staple of modern elegance.
            </p>
          </div>
          <div className="flex-1 h-[300px] w-full relative rounded-2xl overflow-hidden">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/pearl-farm.png" alt="Pearl Cultivation" className="object-cover w-full h-full" />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
