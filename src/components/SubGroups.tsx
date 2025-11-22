import { Moon, Sparkles } from 'lucide-react';

export default function SubGroups() {
  return (
    <section id="subgroups" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/30 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text mb-4">
            SUB-GRUPOS
          </h2>
          <p className="text-pink-300 text-lg">Dos universos, una pasión</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="group relative bg-gradient-to-br from-purple-900/60 to-indigo-900/60 rounded-3xl p-8 backdrop-blur-sm border-2 border-purple-500/40 hover:border-purple-400/80 transition-all hover:scale-105 shadow-2xl hover:shadow-purple-500/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-purple-800/40 rounded-full border-2 border-purple-400/60 shadow-xl shadow-purple-500/30">
                  <Moon size={64} className="text-purple-300 group-hover:rotate-12 transition-transform" />
                </div>
              </div>

              <h3 className="text-4xl font-bold text-center mb-4 text-purple-300 group-hover:text-purple-200 transition-colors">
                Nova Crew MOON
              </h3>

              <p className="text-center text-purple-200/80 text-lg mb-6">
                La energía misteriosa de la luna
              </p>

              <div className="bg-purple-950/40 rounded-2xl p-6 border border-purple-400/30">
                <p className="text-center text-purple-200 font-medium mb-4">
                  3 INTEGRANTES
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-purple-800/40 to-indigo-800/40 rounded-xl border border-purple-400/30 hover:border-purple-400/60 transition-all hover:scale-105 flex items-center justify-center"
                    >
                      <Moon size={32} className="text-purple-300/50" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={16} className="text-purple-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-pink-900/60 to-rose-900/60 rounded-3xl p-8 backdrop-blur-sm border-2 border-pink-500/40 hover:border-pink-400/80 transition-all hover:scale-105 shadow-2xl hover:shadow-pink-500/40 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-rose-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl -mr-32 -mt-32" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-pink-800/40 rounded-full border-2 border-pink-400/60 shadow-xl shadow-pink-500/30">
                  <Sparkles size={64} className="text-pink-300 group-hover:rotate-12 transition-transform" />
                </div>
              </div>

              <h3 className="text-4xl font-bold text-center mb-4 text-pink-300 group-hover:text-pink-200 transition-colors">
                Nova Crew STAR
              </h3>

              <p className="text-center text-pink-200/80 text-lg mb-6">
                El brillo estelar que ilumina
              </p>

              <div className="bg-pink-950/40 rounded-2xl p-6 border border-pink-400/30">
                <p className="text-center text-pink-200 font-medium mb-4">
                  3 INTEGRANTES
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="aspect-square bg-gradient-to-br from-pink-800/40 to-rose-800/40 rounded-xl border border-pink-400/30 hover:border-pink-400/60 transition-all hover:scale-105 flex items-center justify-center"
                    >
                      <Sparkles size={32} className="text-pink-300/50" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-center gap-2 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Sparkles key={i} size={16} className="text-pink-400 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
