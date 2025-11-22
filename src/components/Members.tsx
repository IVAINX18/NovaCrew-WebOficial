import { Crown, Star, Sparkles, Camera, Users } from 'lucide-react';

export default function Members() {
  const members = [
    {
      name: 'Nikki',
      role: 'Líder',
      description: 'Líder, social media manager y bailarina',
      icon: Crown,
    },
    {
      name: 'Salo',
      role: 'Co-líder',
      description: 'Co-líder, producción audiovisual y bailarina',
      icon: Star,
    },
    {
      name: 'Camí',
      role: 'Coreógrafa',
      description: 'Coreógrafa y bailarina',
      icon: Sparkles,
    },
    {
      name: 'Bri',
      role: 'Coreógrafa',
      description: 'Coreógrafa y bailarina',
      icon: Sparkles,
    },
    {
      name: 'Fefi',
      role: 'Social Media',
      description: 'Social media manager y bailarina',
      icon: Camera,
    },
    {
      name: 'Silvi',
      role: 'Bailarina',
      description: 'Bailarina',
      icon: Users,
    },
    {
      name: 'Mafe',
      role: 'Bailarina',
      description: 'Bailarina',
      icon: Users,
    },
    {
      name: 'Stefa',
      role: 'Bailarina',
      description: 'Bailarina',
      icon: Users,
    },
    {
      name: 'Luna',
      role: 'Bailarina',
      description: 'Bailarina',
      icon: Users,
    },
  ];

  return (
    <section id="members" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/50 to-black" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text mb-4">
            INTEGRANTES
          </h2>
          <p className="text-pink-300 text-lg">Conoce a nuestras estrellas</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {members.slice(0, 1).map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-6 backdrop-blur-sm border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-pink-500/30 w-full md:w-1/3 lg:w-1/4"
                >
                <div className="absolute top-4 right-4 text-pink-400/50 group-hover:text-pink-400 transition-colors">
                  <Icon size={24} />
                </div>

                <div className="aspect-square bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl mb-4 flex items-center justify-center border-2 border-pink-400/30 group-hover:border-pink-400/60 transition-all overflow-hidden shadow-lg shadow-pink-500/20">
                  <div className="text-center">
                    <Users size={64} className="text-pink-300/50 mx-auto" />
                    <p className="text-pink-200/50 text-xs mt-2">PHOTO CARD</p>
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-2xl font-bold text-pink-300 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-300 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm">
                    {member.description}
                  </p>
                </div>

                <div className="mt-4 flex justify-center gap-2">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="w-2 h-2 bg-pink-400 rounded-full group-hover:bg-pink-300 transition-colors"
                    />
                  ))}
                </div>
              </div>
            );
          })}
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {members.slice(1).map((member, index) => {
              const Icon = member.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-6 backdrop-blur-sm border border-pink-500/30 hover:border-pink-500/60 transition-all hover:scale-105 shadow-xl hover:shadow-2xl hover:shadow-pink-500/30"
                >
                  <div className="absolute top-4 right-4 text-pink-400/50 group-hover:text-pink-400 transition-colors">
                    <Icon size={24} />
                  </div>

                  <div className="aspect-square bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-2xl mb-4 flex items-center justify-center border-2 border-pink-400/30 group-hover:border-pink-400/60 transition-all overflow-hidden shadow-lg shadow-pink-500/20">
                    <div className="text-center">
                      <Users size={64} className="text-pink-300/50 mx-auto" />
                      <p className="text-pink-200/50 text-xs mt-2">PHOTO CARD</p>
                    </div>
                  </div>

                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-pink-300 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-purple-300 font-medium text-sm mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {member.description}
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center gap-2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-pink-400 rounded-full group-hover:bg-pink-300 transition-colors"
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
