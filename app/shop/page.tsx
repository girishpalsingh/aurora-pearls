import { products } from '@/lib/data';
import ProductCard from '@/components/ui/ProductCard';

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-serif text-white mb-4">Our Collection</h1>
        <p className="text-lg text-white/70 font-sans max-w-2xl mx-auto">
          Explore our complete range of meticulously selected pearl jewelry, from classic Akoya strands to modern Tahitian designs.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
