import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="testimonials" className="py-16 md:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-20">
        <h2 class={`text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible ? 'animate-fade-in-up animate-delay-200' : ''}`}>
            Lo que <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Dicen Nuestros Clientes</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div class={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism p-6 flex flex-col justify-between items-center text-center ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0 translate-y-5"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4 opacity-50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <p class="text-muted-foreground italic mb-6 flex-grow">
                "Devnest Innova transformó nuestra idea en una aplicación increíble. ¡Su profesionalismo y calidad son insuperables!"
              </p>
              <div>
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  A</div>
                <p class="font-semibold text-accent-foreground">Ana Pérez</p>
                <p class="text-sm text-primary">Tech Solutions S.A.S.</p>
              </div>

            </div>
          </div>
          <div>
            <div class={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism p-6 flex flex-col justify-between items-center text-center ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0 translate-y-5"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4 opacity-50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <p class="text-muted-foreground italic mb-6 flex-grow">
                "El equipo de Devnest nos entregó un software a medida que optimizó nuestros procesos internos. ¡Totalmente recomendados!"
              </p>
              <div>
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  C</div>
                <p class="font-semibold text-accent-foreground">Carlos Gutiérrez</p>
                <p class="text-sm text-primary">Emprende Digital Co.</p>
              </div>

            </div>
          </div>
          <div>
            <div class={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism p-6 flex flex-col justify-between items-center text-center ${isVisible ? "animate-fade-in-up animate-delay-700" : "opacity-0 translate-y-5"}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-12 h-12 text-primary mb-4 opacity-50"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
              <p class="text-muted-foreground italic mb-6 flex-grow">
                "Desde el diseño hasta el lanzamiento, Devnest Innova demostró ser un socio tecnológico confiable y creativo."
              </p>
              <div>
                <div class="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-3 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  S</div>
                <p class="font-semibold text-accent-foreground">Sofía Rodríguez</p>
                <p class="text-sm text-primary">Innovate Latam</p>
              </div>

            </div>
          </div>
        
        </div> 
      </div>
    </section>
  );
};

export default Testimonials;