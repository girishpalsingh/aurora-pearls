export default function Footer() {
  return (
    <footer className="mt-24 glass border-x-0 border-b-0 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-white/80 font-sans text-sm">
        <div className="col-span-1 md:col-span-2">
          <h2 className="text-2xl font-serif text-white mb-4">AURORA PEARLS</h2>
          <p className="max-w-sm">Timeless elegance, modern luster. Ethically sourced and masterfully crafted pearl jewelry for the modern connoisseur.</p>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/shop" className="hover:text-white transition-colors">Shop All</a></li>
            <li><a href="/history" className="hover:text-white transition-colors">History of Pearls</a></li>
            <li><a href="/journey" className="hover:text-white transition-colors">Our Journey</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white mb-4">Customer Care</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pearl Care Guide</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-xs">
        &copy; {new Date().getFullYear()} Aurora Pearls. All rights reserved.
      </div>
    </footer>
  );
}
