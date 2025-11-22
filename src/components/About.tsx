import { Heart, Sparkles, Star, Music } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Nuestra Historia',
      description: 'Nacimos de la pasión compartida por el K-Pop y la danza, uniendo corazones que laten al ritmo de la música.',
    },
    {
      icon: Sparkles,
      title: 'Concepto',
      description: 'Fusionamos la estética del K-Pop con nuestra identidad única, creando un universo donde cada performance es una obra de arte.',
    },
    {
      icon: Star,
      title: 'Estilo',
      description: 'Sincronización perfecta, energía explosiva y una conexión que trasciende el escenario. Así es NOVA CREW.',
    },
    {
      icon: Music,
      title: 'Inspiración',
      description: 'Inspiradas por los grandes del K-Pop, especialmente BTS, llevamos su legado a través de coreografías que cuentan historias.',
    },
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/40 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text mb-4">
            SOBRE NOSOTRAS
          </h2>
          <p className="text-pink-300 text-lg">El universo detrás de NOVA CREW MYN1VERSE</p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-pink-500/30 shadow-2xl">
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed text-center mb-6">
              NOVA CREW MYN1VERSE es más que un grupo de danza. Somos una familia unida por el amor al K-Pop y la danza.
              Cada una de nosotras aporta su luz única, creando un universo donde la sincronización, la pasión y la creatividad
              se fusionan en cada performance.
            </p>
            <p className="text-pink-300 text-lg md:text-xl leading-relaxed text-center">
              Divididas en dos sub-unidades, MOON y STAR, representamos diferentes facetas de un mismo sueño:
              llevar el K-Pop a todos los corazones y crear momentos inolvidables en cada escenario.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-3xl p-8 backdrop-blur-sm border border-pink-500/20 hover:border-pink-500/50 transition-all hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-pink-500/20"
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl border border-pink-400/30 group-hover:border-pink-400/60 transition-all flex-shrink-0">
                    <Icon size={32} className="text-pink-300" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-pink-300 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-purple-900/60 to-pink-900/60 rounded-full px-8 py-4 border border-pink-400/40 shadow-lg shadow-pink-500/20">
            <p className="text-pink-300 font-medium text-lg">
              9 Integrantes • 2 Sub-Grupos • 1 Sueño Compartido
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
