import { useScrollAnimation } from "../hooks/useScrollAnimation";

const Methodology = () => {

  const {ref, isVisible} = useScrollAnimation(0.2);

  return (
    <section ref={ref} id="methodology" className="py-16 md:py-24 bg-bacgkround ">
      <div className="container mx-auto px-4 md:px-20">
        <h2 class={`text-3xl md:text-4xl font-bold text-center mb-12 ${isVisible ? "animate-fade-in-up animate-delay-200" : "opacity-0 translate-y-5"}`}>
            Nuestra <span class="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Metodología </span>
            de trabajo 
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism group hover:shadow-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center ${isVisible ? "animate-fade-in-up animate-delay-400" : "opacity-0 translate-y-5"}`}>
              <div className="flex flex-col space-y-1.5 p-6 items-center">
                <div className="p-3 rounded-full bg-secondary/10 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path>
                  </svg>
                </div>
                <h3 class="font-semibold tracking-tight text-lg gradient-text">Descubrimiento y Planificación</h3>
              </div>
              <div class="p-6 pt-0">
              <p class="text-sm text-muted-foreground">
                Entendemos tus necesidades, definimos objetivos claros y trazamos una hoja de ruta detallada para el proyecto.
              </p>
            </div>
            </div>
          </div>
          <div>
            <div className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism group hover:shadow-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center ${isVisible ? "animate-fade-in-up animate-delay-500" : "opacity-0 translate-y-5"}`}>
              <div className="flex flex-col space-y-1.5 p-6 items-center">
                <div className="p-3 rounded-full bg-secondary/10 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"></path>
                  </svg>
                </div>
                <h3 class="font-semibold tracking-tight text-lg gradient-text">Diseño UX/UI Centrado en el Usuario</h3>
              </div>
              <div class="p-6 pt-0">
              <p class="text-sm text-muted-foreground">
                Creamos interfaces intuitivas y atractivas, enfocadas en ofrecer la mejor experiencia a tus usuarios finales.
              </p>
            </div>
            </div>
          </div>
          <div>
            <div className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism group hover:shadow-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center ${isVisible ? "animate-fade-in-up animate-delay-700" : "opacity-0 translate-y-5"}`}>
              <div className="flex flex-col space-y-1.5 p-6 items-center">
                <div className="p-3 rounded-full bg-secondary/10 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle>
                  </svg>
                </div>
                <h3 class="font-semibold tracking-tight text-lg gradient-text">Desarrollo Ágil y Pruebas</h3>
              </div>
              <div class="p-6 pt-0">
              <p class="text-sm text-muted-foreground">
                Implementamos metodologías ágiles para un desarrollo flexible, con ciclos de pruebas continuas para asegurar la calidad.
              </p>
            </div>
            </div>
          </div>
          <div>
            <div className={`rounded-lg border bg-card text-card-foreground shadow-sm h-full glassmorphism group hover:shadow-secondary/30 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center ${isVisible ? "animate-fade-in-up animate-delay-800" : "opacity-0 translate-y-5"}`}>
              <div className="flex flex-col space-y-1.5 p-6 items-center">
                <div className="p-3 rounded-full bg-secondary/10 mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-10 h-10 text-primary"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <h3 class="font-semibold tracking-tight text-lg gradient-text">Despliegue y Soporte</h3>
              </div>
              <div class="p-6 pt-0">
              <p class="text-sm text-muted-foreground">
                Lanzamos tu solución al mercado y ofrecemos soporte continuo para garantizar su óptimo funcionamiento y evolución.
              </p>
            </div>
            </div>
          </div>
        </div>
        <p class="text-center mt-12 text-muted-foreground">
          Un proceso transparente y colaborativo para garantizar el éxito de tu proyecto.
        </p>
      </div>
    </section>
  );
};

export default Methodology;