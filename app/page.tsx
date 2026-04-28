import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Just grab a few for the home page

  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src="https://image.pollinations.ai/prompt/elegant%20diverse%20model%20wearing%20pearl%20jewelry%20ocean%20background%20fashion%20editorial?width=1920&height=1080&nologo=true" 
            alt="Timeless Elegance" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/40 to-slate-900" />
        </div>
        
        <GlassCard className="relative z-10 max-w-3xl mx-auto text-center !bg-black/20 backdrop-blur-xl border-white/10 p-12">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight">
            Timeless Elegance, <br />
            <span className="italic text-white/90">Modern Luster.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 font-sans mb-10 max-w-xl mx-auto font-light">
            Discover our exclusive collection of ethically sourced pearls, masterfully crafted for the modern connoisseur.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary">Explore Collection</Button>
            <Button variant="glass">Our Story</Button>
          </div>
        </GlassCard>
      </section>

      {/* Featured Content Blocks */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <GlassCard className="flex flex-col justify-center min-h-[400px] relative overflow-hidden group">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://image.pollinations.ai/prompt/close%20up%20south%20sea%20pearl%20macro%20texture?width=800&height=800&nologo=true" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Pearl texture" />
          </div>
          <div className="relative z-10 p-8">
            <h2 className="text-3xl font-serif text-white mb-4">The Art of Cultivation</h2>
            <p className="text-white/80 font-sans mb-6">Every pearl in our collection is born from a delicate partnership with nature, taking years to perfect its unique luster.</p>
            <Button variant="secondary" className="w-max">Learn More</Button>
          </div>
        </GlassCard>
        
        <GlassCard className="flex flex-col justify-center min-h-[400px] relative overflow-hidden group">
          <div className="absolute inset-0 z-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://image.pollinations.ai/prompt/artisan%20jewelry%20maker%20working%20with%20pearls?width=800&height=800&nologo=true" className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" alt="Artisan working" />
          </div>
          <div className="relative z-10 p-8">
            <h2 className="text-3xl font-serif text-white mb-4">Masterful Craftsmanship</h2>
            <p className="text-white/80 font-sans mb-6">Our artisans set each pearl with precision, creating heirloom pieces that bridge generations.</p>
            <Button variant="secondary" className="w-max">View Craft</Button>
          </div>
        </GlassCard>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-white mb-4">Featured Collections</h2>
          <p className="text-white/70 font-sans">Curated pieces that define modern sophistication.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="glass">View All Jewelry</Button>
        </div>
      </section>
    </div>
  );
}
