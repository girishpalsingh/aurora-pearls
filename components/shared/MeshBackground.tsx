export default function MeshBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none bg-slate-900">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900" />
      
      {/* Animated deep ocean blue blob */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/30 blur-[120px] animate-mesh" />
      
      {/* Animated soft pink/pearl blob */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pink-500/20 blur-[150px] animate-mesh" style={{ animationDelay: '-5s' }} />
      
      {/* Animated pearlescent white blob */}
      <div className="absolute top-[30%] right-[20%] w-[40%] h-[40%] rounded-full bg-white/10 blur-[100px] animate-mesh" style={{ animationDelay: '-10s' }} />
    </div>
  );
}
