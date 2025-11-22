import { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-pink-950/30 to-black" />

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 text-transparent bg-clip-text mb-4">
            CONTACTO
          </h2>
          <p className="text-pink-300 text-lg">Trabajemos juntos y creemos algo increíble</p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/40 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-pink-500/30 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-gradient-to-br from-purple-800/50 to-pink-800/50 rounded-full border-2 border-pink-400/50 shadow-xl shadow-pink-500/20">
                <Mail size={48} className="text-pink-300" />
              </div>
            </div>

            <h3 className="text-2xl font-bold text-center text-pink-300 mb-2">
              BOOKING & COLABORACIONES
            </h3>
            <p className="text-center text-gray-400 mb-8">
              ¿Quieres que NOVA CREW sea parte de tu evento?
            </p>

            {submitted ? (
              <div className="text-center py-12">
                <Sparkles size={64} className="text-pink-400 mx-auto mb-4 animate-pulse" />
                <p className="text-2xl font-bold text-pink-300 mb-2">
                  ¡Mensaje Enviado!
                </p>
                <p className="text-gray-400">
                  Nos pondremos en contacto contigo pronto
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-pink-300 font-medium mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-purple-950/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/60 focus:ring-2 focus:ring-pink-500/20 transition-all"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-pink-300 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-purple-950/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/60 focus:ring-2 focus:ring-pink-500/20 transition-all"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-pink-300 font-medium mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-purple-950/50 border border-pink-500/30 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-pink-400/60 focus:ring-2 focus:ring-pink-500/20 transition-all resize-none"
                    placeholder="Cuéntanos sobre tu evento o idea..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-pink-500/50 hover:shadow-xl hover:shadow-pink-500/70 hover:scale-105 font-bold text-white text-lg"
                >
                  <Send size={24} />
                  Enviar Mensaje
                </button>
              </form>
            )}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              También puedes escribirnos directamente por nuestras redes sociales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
