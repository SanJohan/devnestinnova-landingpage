import { useScrollAnimation} from "../hooks/useScrollAnimation";
 
const Contact = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <section ref={ref} id="contact" className="py-16 md:py-24 bg-bacgkround ">
      <div className="container mx-auto px-4 md:px-20">
        <div className="max-w-2xl mx-auto">
          <div className={`${isVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Hablemos de <span className="gradient-text">Tu Proyecto</span></h2>
            <p className="text-muted-foreground text-center mb-10">Completa el formulario o contáctanos por nuestras redes. ¡Estamos listos para ayudarte!</p>
          </div>
          
          <form className={`space-y-6 glassmorphism p-8 rounded-xl shadow-2xl ${isVisible ? 'animate-fade-in-up animate-delay-300' : ''}`}>
            <div>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-accent-foreground" for="name">
                Nombre Completo
              </label>
              <input type="text" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 bg-slate-800/50 border-slate-700 focus:ring-primary" id="name" name="name" placeholder="Ej: Juan Pérez" required="" value=""></input>
            </div>

            <div>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-accent-foreground" for="email">
                Correo Electrónico
              </label>
              <input type="email" className="flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 bg-slate-800/50 border-slate-700 focus:ring-primary" id="email" name="email" placeholder="Ej: juan.perez@empresa.com" required="" value=""></input>
            </div>

            <div>
              <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-accent-foreground" for="message">
                Tu Mensaje
              </label>
              <textarea className="flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mt-1 bg-slate-800/50 border-slate-700 focus:ring-primary" id="message" name="message" placeholder="Cuéntanos sobre tu idea o necesidad..." required="" rows="4"></textarea>
            </div>

            <button className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary/90 h-10 px-4 w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground shadow-lg text-base py-3" type="submit">
              Enviar Mensaje
            </button>
          </form>


        </div>
        
      </div>
    </section>
  );
};

export default Contact;