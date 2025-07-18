import { useScrollAnimation } from "../hooks/useScrollAnimation";


const OurServices = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="ourservices" className="py-16 md:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-20" >
        <h2 class={`text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0 translate-y-5"}`}>
            Nuestros <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Servicios</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div class={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? "animate-fade-in-up  animate-delay-400" : "opacity-0 translate-y-5"}`}>
              <div class="flex flex-col space-y-1.5 p-6 items-center text-center">
                <div class="p-3 rounded-full bg-primary/10 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path>
                  </svg>
                </div>
                  <h3 class="font-semibold tracking-tight text-xl gradient-text">Aplicaciones Multiplataforma</h3>
                </div>
                <div class="p-6 pt-0">
                  <p class="text-muted-foreground text-sm text-center">Desarrollamos apps nativas e híbridas para iOS y Android, optimizadas para un rendimiento excepcional y una experiencia de usuario intuitiva.</p>
                </div>
            </div>
          </div>
          <div>
            <div class={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0 translate-y-5"}`}>
              <div class="flex flex-col space-y-1.5 p-6 items-center text-center"><div class="p-3 rounded-full bg-primary/10 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 class="font-semibold tracking-tight text-xl gradient-text">Software a la Medida</h3>
            </div>
            <div class="p-6 pt-0">
              <p class="text-muted-foreground text-sm text-center">Creamos soluciones de software personalizadas que se adaptan perfectamente a las necesidades y procesos de tu empresa, impulsando la eficiencia.</p>
              </div>
            </div>
          </div>
          <div>
            <div class={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism hover:shadow-primary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? "animate-fade-in-up animate-delay-700" : "opacity-0 translate-y-5"}`}>
              <div class="flex flex-col space-y-1.5 p-6 items-center text-center">
                <div class="p-3 rounded-full bg-primary/10 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"></path><path d="M10 19v-3.96 3.15"></path><path d="M7 19h5"></path><rect width="6" height="10" x="16" y="12" rx="2"></rect>
                  </svg>
                </div>
                <h3 class="font-semibold tracking-tight text-xl gradient-text">
                  Desarrollo Web Moderno
                </h3>
              </div>
              <div class="p-6 pt-0">
                <p class="text-muted-foreground text-sm text-center">
                  Diseñamos y desarrollamos sitios web y aplicaciones web atractivas, funcionales y responsive, utilizando las últimas tecnologías.
                </p>
              </div>
            </div>
          </div>
        
        </div> 
      </div>
    </section>
  );
};

export default OurServices;