import { Image, Video, Camera } from 'lucide-react';

export default function Gallery() {
  return (
    <section id="gallery" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/30 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text mb-4">
            GALERÍA
          </h2>
          <p className="text-pink-300 text-lg">Momentos que brillan como estrellas</p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-pink-300 mb-6 flex items-center justify-center gap-3">
            <Image size={28} />
            FOTOS
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="group aspect-square bg-gradient-to-br from-purple-800/30 to-pink-800/30 rounded-2xl border border-pink-400/30 hover:border-pink-400/60 transition-all hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-pink-500/30 cursor-pointer"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-pink-300/50 group-hover:text-pink-300 transition-colors">
                  <Camera size={48} />
                  <p className="text-xs mt-2">PHOTO {i + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-purple-300 mb-6 flex items-center justify-center gap-3">
            <Video size={28} />
            VIDEOS
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="group aspect-video bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-2xl border border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-105 overflow-hidden shadow-lg hover:shadow-xl hover:shadow-purple-500/30 cursor-pointer"
              >
                <div className="w-full h-full flex flex-col items-center justify-center text-purple-300/50 group-hover:text-purple-300 transition-colors">
                  <Video size={56} />
                  <p className="text-sm mt-3 font-medium">PERFORMANCE {i + 1}</p>
                  <p className="text-xs text-pink-300/50 mt-1">Click to play</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
