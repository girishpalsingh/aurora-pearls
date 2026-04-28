import { PearlProduct } from '@/lib/types';
import GlassCard from './GlassCard';
import Button from './Button';
import Image from 'next/image';

interface ProductCardProps {
  product: PearlProduct;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <GlassCard noPadding className="flex flex-col group h-full">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={product.image_url} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs text-white/60 font-sans uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <h3 className="text-xl font-serif text-white mb-2 leading-snug">
          {product.name}
        </h3>
        {product.description && (
          <p className="text-white/70 text-sm font-sans mb-4 line-clamp-2">
            {product.description}
          </p>
        )}
        <div className="mt-auto flex items-center justify-between">
          <span className="text-lg font-sans text-white">
            ${product.price.toLocaleString()}
          </span>
          <Button variant="glass" className="py-2 px-4 text-xs">
            Add to Cart
          </Button>
        </div>
      </div>
    </GlassCard>
  );
}
