import Button from '@/components/ui/Button';
import GlassCard from '@/components/ui/GlassCard';
import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';
import HeroCarousel from '@/components/ui/HeroCarousel';
import Link from 'next/link';

export default function Home() {
  const featuredProducts = products.slice(0, 3); // Just grab a few for the home page

  return (
    <div className="flex flex-col gap-32 pb-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-amber-900/20 to-transparent z-0 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-12 relative z-10 pt-20 md:pt-0">
          {/* Left Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left relative z-20">
            <GlassCard className="!bg-black/20 backdrop-blur-xl border-white/10 p-10 md:p-12 rounded-3xl shadow-2xl w-full">
              <h1 className="text-6xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-lg">
                Timeless Elegance, <br />
                <span className="italic text-amber-200/90">Modern Luster.</span>
              </h1>
              <p className="text-xl text-white/80 font-sans mb-10 max-w-xl font-light drop-shadow">
                Discover our exclusive collection of ethically sourced pearls, masterfully crafted for the modern connoisseur.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Link href="/shop">
                  <Button variant="primary" className="text-lg px-8 py-4">Explore Collection</Button>
                </Link>
                <Link href="/about">
                  <Button variant="glass" className="text-lg px-8 py-4">Our Story</Button>
                </Link>
              </div>
            </GlassCard>
          </div>
          
          {/* Right Carousel */}
          <div className="w-full md:w-1/2 h-[50vh] md:h-[75vh] relative z-10">
            <HeroCarousel />
          </div>
        </div>
      </section>

      {/* Featured Content Blocks */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">The Journey of Perfection</h2>
          <p className="text-xl text-white/70 font-sans font-light">From ocean depths to heirloom pieces.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <GlassCard noPadding className="flex flex-col justify-end min-h-[500px] relative overflow-hidden group rounded-3xl">
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/pearl-farm.png" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="Pearl Farm" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="relative z-10 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-4xl font-serif text-white mb-4">The Art of Cultivation</h2>
              <p className="text-lg text-white/90 font-sans mb-6 font-light">Every pearl in our collection is born from a delicate partnership with nature, taking years to perfect its unique luster and breathtaking beauty.</p>
              <Link href="/journey">
                <Button variant="glass" className="w-max">Discover the Farms</Button>
              </Link>
            </div>
          </GlassCard>
          
          <GlassCard noPadding className="flex flex-col justify-end min-h-[500px] relative overflow-hidden group rounded-3xl">
            <div className="absolute inset-0 z-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/pearl-diving.png" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-1000" alt="Pearl Diving" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
            </div>
            <div className="relative z-10 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <h2 className="text-4xl font-serif text-white mb-4">Deep Sea Origins</h2>
              <p className="text-lg text-white/90 font-sans mb-6 font-light">Honoring the ancient traditions of pearl diving, we ensure sustainable and ethical sourcing directly from the pristine ocean depths.</p>
              <Link href="/about">
                <Button variant="glass" className="w-max">Our Ethics</Button>
              </Link>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Categories / Styles section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Shop by Category</h2>
          <p className="text-xl text-white/70 font-sans font-light">Find the perfect piece for any occasion.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { title: 'Necklaces', img: '/necklace.png' },
            { title: 'Earrings', img: '/earrings.png' },
            { title: 'Bracelets', img: '/akoya-bracelet.png' },
            { title: 'Rings', img: '/ring.png' }
          ].map(category => (
            <div key={category.title} className="group cursor-pointer flex flex-col items-center">
              <div className="relative overflow-hidden rounded-full aspect-square w-full max-w-[200px] mb-6 border-4 border-white/5 group-hover:border-amber-200/50 transition-colors duration-500 shadow-xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={category.img} alt={category.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <h3 className="text-2xl font-serif text-center text-white group-hover:text-amber-200 transition-colors duration-300">{category.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Collections */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4">Curated Selections</h2>
            <p className="text-xl text-white/70 font-sans font-light">Exquisite pieces that define modern sophistication.</p>
          </div>
          <Link href="/shop" className="hidden md:flex">
            <Button variant="glass">View All Jewelry</Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-12 text-center md:hidden">
          <Link href="/shop">
            <Button variant="glass">View All Jewelry</Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
