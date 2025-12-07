// src/components/ContactForm.js
export default function ContactForm() {
  return (
    <section id="contacto" className="py-20 bg-gray-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-teal-700 text-center mb-10 font-sans">
          Contáctanos
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-white rounded-2xl shadow-2xl overflow-hidden">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN (Verde azulado) */}
          <div className="bg-teal-700 p-10 text-white flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 font-sans">Estamos aquí para ti</h3>
            <p className="mb-8 text-lg opacity-90 leading-relaxed">
              Dar el primer paso es lo más difícil. Déjanos acompañarte en este proceso de restauración. Tu historia importa.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-xl">📞</div>
                <span className="font-semibold">+57 300 123 4567</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-xl">📧</div>
                <span className="font-semibold">contacto@fundazoe.org</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center text-xl">📍</div>
                <span className="font-semibold">Sede Principal, Colombia</span>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: EL FORMULARIO (Blanco) */}
          <div className="p-10">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-gray-50"
                  placeholder="Escribe tu nombre aquí"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono o Email</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-gray-50"
                  placeholder="Para poder contactarte"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">¿Cómo podemos ayudarte?</label>
                <textarea 
                  rows="4"
                  className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all bg-gray-50"
                  placeholder="Cuéntanos un poco sobre tu situación..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-lg transition-all shadow-lg transform hover:-translate-y-1"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}