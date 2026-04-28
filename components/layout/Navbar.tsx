import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif tracking-widest text-white">
          AURORA<span className="font-sans font-light tracking-normal opacity-80 text-lg ml-2">PEARLS</span>
        </Link>
        <div className="hidden md:flex space-x-8 text-sm font-sans tracking-wide text-white/90">
          <Link href="/" className="hover:text-white transition-colors">HOME</Link>
          <Link href="/shop" className="hover:text-white transition-colors">SHOP</Link>
          <Link href="/history" className="hover:text-white transition-colors">HISTORY</Link>
          <Link href="/journey" className="hover:text-white transition-colors">OUR JOURNEY</Link>
          <Link href="/special" className="hover:text-white transition-colors">SPECIAL</Link>
        </div>
        <div className="flex items-center space-x-4">
          {/* Cart Icon Placeholder */}
          <button className="text-white/90 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
