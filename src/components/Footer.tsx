import { Instagram, Music2, Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-12 overflow-hidden border-t border-pink-500/20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center space-y-8">
          <div className="flex items-center gap-2">
            <Sparkles className="text-pink-400" size={24} />
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text">
              NOVA CREW MYN1VERSE
            </h3>
            <Sparkles className="text-pink-400" size={24} />
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/n0va_crew?igsh=MWZkeTgwbnl0M3Bzdw=="
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-full border border-pink-400/30 hover:border-pink-400/60 transition-all hover:scale-110 shadow-lg hover:shadow-pink-500/40"
              aria-label="Instagram"
            >
              <Instagram size={28} className="text-pink-300" />
            </a>

            <a
              href="https://www.tiktok.com/@nova_crew_myn1ver?_r=1&_t=ZS-91bFfCJs6HR"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 bg-gradient-to-br from-purple-800/40 to-pink-800/40 rounded-full border border-pink-400/30 hover:border-pink-400/60 transition-all hover:scale-110 shadow-lg hover:shadow-purple-500/40"
              aria-label="TikTok"
            >
              <Music2 size={28} className="text-purple-300" />
            </a>
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-400 text-sm">
              Grupo de danza K-Pop • 9 Integrantes • 2 Sub-Unidades
            </p>
            <p className="text-gray-500 text-xs flex items-center justify-center gap-2">
              Hecho con <Heart size={14} className="text-pink-400 fill-pink-400" /> por el equipo de NOVA CREW
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-500 text-xs">
              © 2024 NOVA CREW MYN1VERSE. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
