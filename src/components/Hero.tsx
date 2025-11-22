import { Instagram, Music2, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-pink-900/10 to-black/50" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center space-y-8">
          <div className="flex justify-center mb-8">
            <Sparkles className="text-pink-400 animate-pulse" size={48} />
          </div>

          <div className="inline-block p-4 bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl backdrop-blur-sm border border-pink-500/30 shadow-2xl shadow-pink-500/20 mb-8 hover:shadow-3xl hover:shadow-pink-500/40 transition-all">
            <img
              src="/NovaCrewLogo.jpeg"
              alt="NOVA CREW MYN1VERSE"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-xl shadow-pink-500/30 hover:scale-105 transition-transform"
            />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text animate-pulse">
            NOVA CREW
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold text-pink-300">
            MYN1VERSE
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Un colectivo de bailarinas unidas por la pasión del K-Pop, creando coreografías únicas y compartiendo el amor por la danza con el mundo.
          </p>

          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <a
              href="https://www.instagram.com/n0va_crew?igsh=MWZkeTgwbnl0M3Bzdw=="
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/70 hover:scale-105"
            >
              <Instagram size={24} className="group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-white">Instagram</span>
            </a>

            <a
              href="https://www.tiktok.com/@nova_crew_myn1ver?_r=1&_t=ZS-91bFfCJs6HR"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-500 hover:to-purple-500 transition-all shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/70 hover:scale-105"
            >
              <Music2 size={24} className="group-hover:rotate-12 transition-transform" />
              <span className="font-bold text-white">TikTok</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto pt-12">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="aspect-square bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-xl border border-pink-400/30 hover:border-pink-400/60 transition-all hover:scale-105 overflow-hidden"
              >
                <div className="w-full h-full flex items-center justify-center text-pink-300/50">
                  <Music2 size={32} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
